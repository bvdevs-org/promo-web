package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/smtp"
	"os"
)

type ContactFormRequest struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Business  string `json:"business"`
	Budget    string `json:"budget"`
	Message   string `json:"message"`
	HpField   string `json:"hp_field"` // Honeypot
}

func Handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var data ContactFormRequest
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	if data.HpField != "" {
		json.NewEncoder(w).Encode(map[string]string{"status": "success", "message": "Email sent"})
		return
	}

	smtpHost := os.Getenv("SMTP_HOST")
	smtpPort := os.Getenv("SMTP_PORT")
	senderEmail := os.Getenv("SMTP_USER")
	senderPassword := os.Getenv("SMTP_PASSWORD")
	recipientEmail := os.Getenv("RECIPIENT_EMAIL")

	subject := fmt.Sprintf("Nová poptávka: %s %s", data.FirstName, data.LastName)
	body := fmt.Sprintf("Jméno: %s %s\nEmail: %s\nFirma: %s\nRozpočet: %s\n\nZpráva:\n%s",
		data.FirstName, data.LastName, data.Email, data.Business, data.Budget, data.Message)

	msg := []byte("To: " + recipientEmail + "\r\n" +
		"Subject: " + subject + "\r\n" +
		"Reply-To: " + data.Email + "\r\n" +
		"\r\n" +
		body + "\r\n")

	auth := smtp.PlainAuth("", senderEmail, senderPassword, smtpHost)

	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, senderEmail, []string{recipientEmail}, msg)
	if err != nil {
		fmt.Printf("SMTP Error: %v\n", err)
		http.Error(w, "Failed to send email", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "success"})
}