import React, { useEffect, useState } from "react";
import { ArrowUpRight, X, Check, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Eyebrow from "../common/Eyebrow";
import { WEB3FORMS_ACCESS_KEY } from "../../constants/siteData";

export function InterestModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestType: "I'm looking for support",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setIsSubmitting(false);
      setError(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interestType: "I'm looking for support",
        message: "",
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Interest Enquiry: ${formData.interestType} - ${formData.name}`,
          from_name: "Dropati Devi Foundation Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          interest_type: formData.interestType,
          message: formData.message || "No additional message provided.",
          botcheck: "",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(
          result.message || "Failed to submit enquiry. Please try again.",
        );
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setError(
        "Network error. Please try again or reach out directly to dropatidevifoundation1945@gmail.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="interest-title"
          data-testid="interest-modal"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-bone text-ink p-6 sm:p-8 rounded-lg border border-line shadow-2xl max-w-2xl w-full relative my-auto max-h-[92vh] overflow-y-auto"
          >
            <button
              className="absolute top-4 right-4 p-2 text-muted hover:text-ink hover:rotate-90 transition-all duration-300 rounded-full hover:bg-sand cursor-pointer"
              onClick={onClose}
              aria-label="Close form"
              data-testid="close-interest-modal"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center py-6 flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
                  <Check size={26} strokeWidth={2.5} />
                </div>
                <h2
                  id="interest-title"
                  className="font-serif text-2xl sm:text-3xl font-normal text-ink mb-2"
                >
                  Thank you for reaching out
                  {formData.name ? `, ${formData.name}` : ""}.
                </h2>
                <p className="text-sm text-muted leading-relaxed max-w-md mb-2">
                  Your enquiry has been received and delivered directly to our
                  team at{" "}
                  <strong className="text-ink">
                    dropatidevifoundation1945@gmail.com
                  </strong>
                  .
                </p>
                <p className="text-xs text-muted/80 leading-relaxed max-w-md mb-6">
                  We will review your message and get in touch with you shortly.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 bg-terracotta hover:bg-terracotta-dark text-white font-sans font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={onClose}
                  data-testid="close-success-button"
                >
                  Close
                </motion.button>
              </motion.div>
            ) : (
              <>
                <Eyebrow text="Start a conversation" />
                <h2
                  id="interest-title"
                  className="font-serif text-2xl sm:text-3xl font-normal text-ink tracking-tight mt-2 mb-1.5"
                >
                  Tell us what you're{" "}
                  <i className="text-terracotta italic font-serif">
                    looking for.
                  </i>
                </h2>
                <p className="text-xs sm:text-[13px] text-muted leading-relaxed mb-4">
                  Tell us a little about what you are looking for. Our team will
                  review your enquiry and respond when possible.
                </p>

                {error && (
                  <div className="flex items-center gap-2.5 p-3 mb-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
                    <AlertCircle size={16} className="shrink-0 text-red-600" />
                    <span>{error}</span>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  data-testid="interest-form"
                  className="space-y-3.5"
                >
                  {/* Row 1: Name and Email side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <label className="block text-ink text-[11px] font-semibold tracking-wider uppercase">
                      Your name <span className="text-terracotta">*</span>
                      <input
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-1 w-full px-3 py-2.5 border border-line rounded-sm bg-white text-ink text-sm outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors normal-case font-normal"
                        data-testid="interest-name-input"
                      />
                    </label>

                    <label className="block text-ink text-[11px] font-semibold tracking-wider uppercase">
                      Email address <span className="text-terracotta">*</span>
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-1 w-full px-3 py-2.5 border border-line rounded-sm bg-white text-ink text-sm outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors normal-case font-normal"
                        data-testid="interest-email-input"
                      />
                    </label>
                  </div>

                  {/* Row 2: Phone and Interest Type side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <label className="block text-ink text-[11px] font-semibold tracking-wider uppercase">
                      Phone number{" "}
                      <span className="text-muted/60 font-normal lowercase">
                        (optional)
                      </span>
                      <input
                        type="tel"
                        placeholder="+91 95373 92180"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-1 w-full px-3 py-2.5 border border-line rounded-sm bg-white text-ink text-sm outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors normal-case font-normal"
                        data-testid="interest-phone-input"
                      />
                    </label>

                    <label className="block text-ink text-[11px] font-semibold tracking-wider uppercase">
                      What brings you here?
                      <select
                        value={formData.interestType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            interestType: e.target.value,
                          })
                        }
                        className="mt-1 w-full px-3 py-2.5 border border-line rounded-sm bg-white text-ink text-sm outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors normal-case font-normal cursor-pointer"
                        data-testid="interest-type-select"
                      >
                        <option>I'm looking for support</option>
                        <option>I'd like to volunteer</option>
                        <option>I'm interested in partnering</option>
                        <option>I'd like to support the mission</option>
                        <option>General enquiry</option>
                      </select>
                    </label>
                  </div>

                  {/* Row 3: Message */}
                  <label className="block text-ink text-[11px] font-semibold tracking-wider uppercase">
                    Tell us a little more
                    <textarea
                      rows="2"
                      placeholder="Your message or enquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-1 w-full px-3 py-2 border border-line rounded-sm bg-white text-ink text-sm outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors normal-case font-normal resize-none min-h-[58px]"
                      data-testid="interest-message-input"
                    />
                  </label>

                  {/* Submit Button with Loading State */}
                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                    disabled={isSubmitting}
                    className="mt-2 w-full py-3.5 bg-terracotta hover:bg-terracotta-dark disabled:opacity-75 disabled:cursor-not-allowed text-white font-sans font-semibold text-xs uppercase tracking-wider rounded-sm shadow-md hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
                    type="submit"
                    data-testid="interest-submit-button"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending your interest...</span>
                      </>
                    ) : (
                      <>
                        <span>Send your interest</span>
                        <ArrowUpRight size={16} />
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InterestModal;
