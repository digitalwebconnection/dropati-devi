import React, { useEffect, useState } from "react";
import { ArrowUpRight, X, Check, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/common";
import { submitInterestEnquiry } from "@/services";
import { useBodyScrollLock, useKeydown } from "@/hooks";

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
    botcheck: false,
  });

  useBodyScrollLock(isOpen);
  useKeydown("Escape", onClose, isOpen);

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
        botcheck: false,
      });
    }
  }, [isOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName || !trimmedEmail) {
      setError("Please provide your name and a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await submitInterestEnquiry({
        ...formData,
        name: trimmedName,
        email: trimmedEmail,
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        err.message ||
          "Network error. Please try again or reach out directly to dropatidevifoundation1945@gmail.com."
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
                <div className="w-14 h-14 rounded-full bg-[#FFD900]/20 text-[#01236A] flex items-center justify-center mb-4 shadow-sm border border-[#FFD900]">
                  <Check size={26} strokeWidth={2.5} />
                </div>
                <h2
                  id="interest-title"
                  className="font-serif text-2xl sm:text-3xl font-normal text-[#01236A] mb-2"
                >
                  Thank you for reaching out
                  {formData.name ? `, ${formData.name}` : ""}.
                </h2>
                <p className="text-sm text-muted leading-relaxed max-w-md mb-2">
                  Your enquiry has been received and delivered directly to our team at{" "}
                  <strong className="text-[#01236A]">
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
                  className="inline-flex items-center justify-center gap-3 bg-[#01236A] hover:bg-[#001747] text-[#FFD900] font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm shadow-md hover:shadow-xl border border-[#FFD900]/40 transition-all duration-300 cursor-pointer"
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
                  className="font-serif text-2xl sm:text-3xl font-normal text-[#01236A] tracking-tight mt-2 mb-1.5"
                >
                  Tell us what you're{" "}
                  <i className="text-[#01236A] italic font-serif underline decoration-[#FFD900] decoration-2">
                    looking for.
                  </i>
                </h2>
                <p className="text-xs sm:text-[13px] text-muted leading-relaxed mb-4">
                  Tell us a little about what you are looking for. Our team will review
                  your enquiry and respond when possible.
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
                  {/* Anti-bot honeypot field (hidden from assistive tech & genuine human users) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    checked={formData.botcheck || false}
                    onChange={(e) =>
                      setFormData({ ...formData, botcheck: e.target.checked })
                    }
                  />

                  {/* Row 1: Name and Email side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <label className="block text-[#01236A] text-[11px] font-bold tracking-wider uppercase">
                      Your name <span className="text-[#01236A]">*</span>
                      <input
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-1 w-full px-3 py-2.5 border border-line rounded-sm bg-white text-[#01236A] text-sm outline-none focus:border-[#01236A] focus:ring-1 focus:ring-[#01236A] transition-colors normal-case font-normal"
                        data-testid="interest-name-input"
                      />
                    </label>

                    <label className="block text-[#01236A] text-[11px] font-bold tracking-wider uppercase">
                      Email address <span className="text-[#01236A]">*</span>
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-1 w-full px-3 py-2.5 border border-line rounded-sm bg-white text-[#01236A] text-sm outline-none focus:border-[#01236A] focus:ring-1 focus:ring-[#01236A] transition-colors normal-case font-normal"
                        data-testid="interest-email-input"
                      />
                    </label>
                  </div>

                  {/* Row 2: Phone and Interest Type side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <label className="block text-[#01236A] text-[11px] font-bold tracking-wider uppercase">
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
                        className="mt-1 w-full px-3 py-2.5 border border-line rounded-sm bg-white text-[#01236A] text-sm outline-none focus:border-[#01236A] focus:ring-1 focus:ring-[#01236A] transition-colors normal-case font-normal"
                        data-testid="interest-phone-input"
                      />
                    </label>

                    <label className="block text-[#01236A] text-[11px] font-bold tracking-wider uppercase">
                      What brings you here?
                      <select
                        value={formData.interestType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            interestType: e.target.value,
                          })
                        }
                        className="mt-1 w-full px-3 py-2.5 border border-line rounded-sm bg-white text-[#01236A] text-sm outline-none focus:border-[#01236A] focus:ring-1 focus:ring-[#01236A] transition-colors normal-case font-normal cursor-pointer"
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
                  <label className="block text-[#01236A] text-[11px] font-bold tracking-wider uppercase">
                    Tell us a little more
                    <textarea
                      rows="2"
                      placeholder="Your message or enquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-1 w-full px-3 py-2 border border-line rounded-sm bg-white text-[#01236A] text-sm outline-none focus:border-[#01236A] focus:ring-1 focus:ring-[#01236A] transition-colors normal-case font-normal resize-none min-h-[58px]"
                      data-testid="interest-message-input"
                    />
                  </label>

                  {/* Submit Button with Loading State */}
                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                    disabled={isSubmitting}
                    className="mt-2 w-full py-3.5 bg-[#01236A] hover:bg-[#001747] disabled:opacity-75 disabled:cursor-not-allowed text-[#FFD900] font-sans font-bold text-xs uppercase tracking-wider rounded-sm shadow-md hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer border border-[#FFD900]/40"
                    type="submit"
                    data-testid="interest-submit-button"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin text-[#FFD900]" />
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
