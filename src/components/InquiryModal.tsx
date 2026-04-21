import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";
import { X } from "lucide-react";

type InquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string | undefined) || "";

type InquiryFormState = {
  full_name: string;
  phone_number: string;
  business_name: string;
  project_type: string;
};

const defaultFormState: InquiryFormState = {
  full_name: "",
  phone_number: "",
  business_name: "",
  project_type: "Luxury Business Website",
};

export function InquiryModal({ open, onClose }: InquiryModalProps) {
  const [form, setForm] = useState<InquiryFormState>(defaultFormState);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const setField = (key: keyof InquiryFormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    const timestamp = new Date().toISOString();

    try {
      const response = await fetch(`${API_BASE_URL}/api/lead/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          timestamp,
        }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        const message =
          data && typeof data.message === "string"
            ? data.message
            : "Unable to submit inquiry right now. Please try again.";
        setFeedback(message);
        return;
      }

      setFeedback("Proposal request received. We will contact you within 24 hours.");
      setForm(defaultFormState);
    } catch {
      setFeedback("Unable to submit inquiry right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-end justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-md sm:items-center sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.99 }}
            transition={{ duration: 0.32 }}
            onClick={(event) => event.stopPropagation()}
            className="glass relative my-4 w-full max-w-xl overflow-y-auto rounded-3xl border border-accent/20 p-5 shadow-elegant [max-height:calc(100dvh-1.5rem)] sm:my-0 sm:p-9 sm:[max-height:calc(100dvh-2rem)]"
          >
            <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-40 w-40 rounded-full bg-accent/20 blur-3xl sm:h-48 sm:w-48" />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full border border-border bg-white/5 p-2 text-muted-foreground transition hover:text-foreground sm:right-4 sm:top-4"
              aria-label="Close inquiry form"
            >
              <X size={16} />
            </button>

            <p className="text-xs uppercase tracking-[0.24em] text-accent">Premium Inquiry</p>
            <h3 className="mt-3 pr-8 font-display text-2xl font-semibold sm:pr-0 sm:text-4xl">
              Request a Custom Proposal
            </h3>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground">
              Share the essentials and we will craft a tailored scope, timeline, and premium
              execution plan for your brand.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5 sm:mt-7 sm:space-y-4">
              <ModalField
                label="Full Name"
                value={form.full_name}
                onChange={(value) => setField("full_name", value)}
                placeholder="Your full name"
              />
              <ModalField
                label="Phone Number"
                value={form.phone_number}
                onChange={(value) => setField("phone_number", value)}
                placeholder="+91 99999 99999"
                type="tel"
              />
              <ModalField
                label="Business Name"
                value={form.business_name}
                onChange={(value) => setField("business_name", value)}
                placeholder="Your business name"
              />
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Project Type
                </span>
                <select
                  value={form.project_type}
                  onChange={(event) => setField("project_type", event.target.value)}
                  className="glow-ring w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-base text-foreground focus:border-accent/50 focus:outline-none sm:text-sm"
                >
                  <option>Luxury Business Website</option>
                  <option>Conversion-Focused Landing Page</option>
                  <option>E-Commerce Website</option>
                  <option>Premium UI/UX Redesign</option>
                  <option>Custom Development Engagement</option>
                </select>
              </label>

              {feedback && (
                <p className="rounded-xl border border-accent/25 bg-accent/8 px-4 py-3 text-xs text-accent">
                  {feedback}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="min-h-12 w-full rounded-xl bg-primary-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending Proposal Request..." : "Get Proposal"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      <input
        type={type}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="glow-ring w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-accent/50 focus:outline-none sm:text-sm"
      />
    </label>
  );
}
