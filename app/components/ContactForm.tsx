"use client";

import { useState, FormEvent, ChangeEvent } from "react";

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Phone validation regex (accepts formats like +1 123-456-7890, (123) 456-7890, 123.456.7890)
const PHONE_REGEX = /^(\+\d{1,3}\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

type FormData = {
  email: string;
  phone: string;
};

type FormErrors = {
  email?: string;
  phone?: string;
};

type ApiResponse = {
  status: "success" | "error";
  message: string;
  errors?: Record<string, string>;
};

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
  });

  // Error state
  const [errors, setErrors] = useState<FormErrors>({});

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<ApiResponse | null>(null);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    // Clear previous submission result
    if (submitResult) {
      setSubmitResult(null);
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate email (required)
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Validate phone (optional)
    if (formData.phone && !PHONE_REGEX.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/v1/demo/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();
      setSubmitResult(result);

      // If there are server-side validation errors, update the errors state
      if (result.status === "error" && result.errors) {
        setErrors(result.errors);
      }

      // Clear form on success
      if (result.status === "success") {
        setFormData({ email: "", phone: "" });
      }
    } catch (error) {
      setSubmitResult({
        status: "error",
        message: "Failed to submit form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Close button */}
      <button className="absolute top-6 right-6 text-black hover:text-gray-700">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="w-full p-4">
        <h2 className="text-[2.5rem] text-[#433118] leading-tight mb-6">
          Get free sample report & white paper
        </h2>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Email field */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 text-gray-700 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="E-mail Address"
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 pl-6">{errors.email}</p>
            )}
          </div>

          {/* Phone field */}
          <div>
            <div className="flex items-center w-full bg-white rounded-full border border-gray-300">
              <div className="flex items-center pl-6 pr-2">
                <div className="flex items-center gap-1">
                  <div className="w-5 h-3.5 relative overflow-hidden rounded-sm border border-gray-200">
                    <div
                      className="absolute inset-0 bg-blue-600"
                      style={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    ></div>
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-2/5 h-2/5 bg-blue-800 flex items-center justify-center">
                        <div className="text-white text-[4px]">★★★★★</div>
                      </div>
                      <div className="absolute top-0 left-0 right-0 h-[7px] flex">
                        <div className="h-full w-full bg-transparent"></div>
                      </div>
                      <div className="absolute top-[7px] left-0 right-0 h-[3px] bg-white"></div>
                      <div className="absolute top-[10px] left-0 right-0 h-[3px] bg-red-600"></div>
                      <div className="absolute top-[13px] left-0 right-0 h-[3px] bg-white"></div>
                      <div className="absolute top-[16px] left-0 right-0 h-[3px] bg-red-600"></div>
                      <div className="absolute top-[19px] left-0 right-0 h-[3px] bg-white"></div>
                      <div className="absolute top-[22px] left-0 right-0 h-[3px] bg-red-600"></div>
                    </div>
                  </div>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-600"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium mx-1">+1</span>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-2 py-4 text-gray-700 bg-transparent border-0 focus:outline-none focus:ring-0"
                placeholder="Phone Number (Optional)"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 pl-6">{errors.phone}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-[#976625] hover:bg-[#7d5420] text-white font-medium text-lg rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:opacity-70"
          >
            Send me PDF
          </button>

          <p className="mt-1 text-sm text-[#433118]">
            By activating your offer, you consent to receive communications from
            Generation Lab. You can unsubscribe anytime.
          </p>
        </form>
      </div>
    </>
  );
}
