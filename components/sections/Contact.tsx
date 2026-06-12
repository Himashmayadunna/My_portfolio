"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, Copy, Check, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrorMsg(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMsg("An unexpected network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Contact Me"
          subtitle="Let's connect! Get in touch for internship roles, freelance projects or collaborations"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-start">
          {/* Left Side: Info Details */}
          <div className="md:col-span-5 space-y-6">
            <GlassCard hoverEffect={true} className="p-6 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Reach Out Directly
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Have an internship opportunity or want to discuss a project? Let&apos;s talk. You can copy my credentials or write a message.
              </p>

              {/* Coordinates List */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7C3AED]/10 text-[#A855F7]">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Email</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(CONTACT.email, "email")}
                    className="text-neutral-500 hover:text-neutral-300 transition-colors p-1"
                    aria-label="Copy email"
                  >
                    {copiedText === "email" ? (
                      <Check className="h-4.5 w-4.5 text-green-400 animate-scale" />
                    ) : (
                      <Copy className="h-4.5 w-4.5" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3B82F6]/10 text-[#3B82F6]">
                      <Phone className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Phone</p>
                      <a href={`tel:${CONTACT.phone}`} className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors">
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(CONTACT.phone, "phone")}
                    className="text-neutral-500 hover:text-neutral-300 transition-colors p-1"
                    aria-label="Copy phone"
                  >
                    {copiedText === "phone" ? (
                      <Check className="h-4.5 w-4.5 text-green-400" />
                    ) : (
                      <Copy className="h-4.5 w-4.5" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 pb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Location</p>
                    <p className="text-sm font-semibold text-neutral-200">
                      {CONTACT.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Toast */}
              {copiedText && (
                <div className="text-center text-xs font-semibold text-green-400 bg-green-500/5 border border-green-500/20 py-2 rounded-lg animate-fade-in uppercase tracking-wider font-mono">
                  Copied {copiedText} successfully!
                </div>
              )}
            </GlassCard>
          </div>

          {/* Right Side: Form */}
          <div className="md:col-span-7">
            <GlassCard hoverEffect={false} className="p-6">
              <h3 className="text-xl font-bold text-white tracking-wide mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:border-[#7C3AED] focus:bg-white/[0.04] focus:outline-none focus:ring-1 focus:ring-[#7C3AED] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:border-[#3B82F6] focus:bg-white/[0.04] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="How can I help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:border-[#7C3AED] focus:bg-white/[0.04] focus:outline-none focus:ring-1 focus:ring-[#7C3AED] transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me more about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:border-[#3B82F6] focus:bg-white/[0.04] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-all resize-none"
                  />
                </div>

                {/* Action submit button */}
                <div className="pt-2 flex flex-col items-start gap-4 select-none w-full">
                  {errorMsg && (
                    <div className="text-xs font-semibold text-red-400 bg-red-500/5 border border-red-500/20 px-4 py-2.5 rounded-lg w-full">
                      Error: {errorMsg}
                    </div>
                  )}

                  {isSuccess ? (
                    <div className="text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-full uppercase tracking-wider animate-bounce">
                      Message Sent Successfully!
                    </div>
                  ) : (
                    <Button
                      type="submit"
                      variant="primary"
                      magnetic={true}
                      disabled={isSubmitting}
                      className="px-8 py-3 text-xs uppercase tracking-wider font-bold"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
