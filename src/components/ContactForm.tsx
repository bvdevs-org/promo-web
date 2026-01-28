import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormData } from "../interfaces/ContactFormData";

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    business: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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
    <div className="max-w-2xl mx-auto my-12">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row: First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelStyles}>First Name*</label>
            <input
              type="text"
              name="firstName"
              placeholder="e.g. John"
              required
              value={formData.firstName}
              onChange={handleChange}
              className={inputStyles}
            />
          </div>
          <div>
            <label className={labelStyles}>Last Name*</label>
            <input
              type="text"
              name="lastName"
              placeholder="e.g. Connor"
              required
              value={formData.lastName}
              onChange={handleChange}
              className={inputStyles}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className={labelStyles}>Email Address*</label>
          <input
            type="email"
            name="email"
            placeholder="connor@company.com"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        {/* Business */}
        <div>
          <label className={labelStyles}>Business*</label>
          <input
            type="text"
            name="business"
            placeholder="e.g. Studio Cactus"
            required
            value={formData.business}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        {/* Combo Box (Budget) */}
        <div>
          <label className={labelStyles}>Budget Range*</label>
          <div className="relative">
            <select
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              // Removed bg-transparent so it uses the bg-gray-100 from inputStyles
              className={`${inputStyles} appearance-none cursor-pointer pr-10`}
            >
              <option value="" disabled>
                Select your budget range...
              </option>
              <option value="1k-5k">$1,000 - $5,000</option>
              <option value="5k-15k">$5,000 - $15,000</option>
              <option value="15k-50k">$15,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>

            {/* Custom Arrow Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
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

        {/* Message */}
        <div>
          <label className={labelStyles}>Message*</label>
          <textarea
            name="message"
            placeholder="Tell us about your project requirements and goals..."
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`${inputStyles} resize-none`}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-3 rounded-lg transition-all active:scale-[0.98] cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
