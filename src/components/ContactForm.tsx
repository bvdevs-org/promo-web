import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormData } from "../interfaces/ContactFormData";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    business: "",
    budget: "",
    message: "",
  });

  const [hpField, setHpField] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        hp_field: hpField,
      };

      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        business: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending form:", error);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reusable Tailwind classes for inputs
  const inputStyles =
    "w-full px-4 py-3 bg-gray-100 rounded-lg outline-none transition-all placeholder:text-gray-400";
  const labelStyles = "block mb-1.5 text-normal";

  return (
    <div className="max-w-2xl mx-auto mt-12 lg:my-12">
      <div style={{ display: "none" }} aria-hidden="true">
        <input
          type="text"
          name="hp_field"
          value={hpField}
          onChange={(e) => setHpField(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className={labelStyles}>{t("form.labels.firstName")}</label>
            <input
              type="text"
              name="firstName"
              placeholder={t("form.placeholders.firstName")}
              required
              value={formData.firstName}
              onChange={handleChange}
              className={inputStyles}
            />
          </div>
          <div>
            <label className={labelStyles}>{t("form.labels.lastName")}</label>
            <input
              type="text"
              name="lastName"
              placeholder={t("form.placeholders.lastName")}
              required
              value={formData.lastName}
              onChange={handleChange}
              className={inputStyles}
            />
          </div>
        </div>

        <div>
          <label className={labelStyles}>{t("form.labels.email")}</label>
          <input
            type="email"
            name="email"
            placeholder={t("form.placeholders.email")}
            required
            value={formData.email}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        <div>
          <label className={labelStyles}>{t("form.labels.business")}</label>
          <input
            type="text"
            name="business"
            placeholder={t("form.placeholders.business")}
            required
            value={formData.business}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        <div>
          <label className={labelStyles}>{t("form.labels.budget")}</label>
          <div className="relative">
            <select
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              className={`${inputStyles} appearance-none cursor-pointer pr-10`}
            >
              <option value="" disabled>
                {t("form.placeholders.budget")}
              </option>
              <option value="1k-5k">{t("form.budgets.range1")}</option>
              <option value="5k-15k">{t("form.budgets.range2")}</option>
              <option value="15k-50k">{t("form.budgets.range3")}</option>
              <option value="50k+">{t("form.budgets.range4")}</option>
            </select>
            {/* Custom Arrow Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-black">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className={labelStyles}>{t("form.labels.message")}</label>
          <textarea
            name="message"
            placeholder={t("form.placeholders.message")}
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`${inputStyles} resize-none`}
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            data-header="dark"
            type="submit"
            className="w-full bg-black text-white font-bold py-3 rounded-lg transition-all active:scale-[0.98] cursor-pointer"
          >
            {t("form.submit")}
          </button>
        </div>
      </form>
    </div>
  );
};
