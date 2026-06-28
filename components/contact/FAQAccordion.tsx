"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/data/faqs";

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[24px] border border-gold/12 bg-white/60 px-5 shadow-[0_12px_26px_rgba(74,36,24,0.06)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-terracotta"
        aria-expanded={open}
        aria-controls={`faq-${faq.id}`}
      >
        <span className="pr-4 text-base font-semibold text-masala">{faq.question}</span>
        {open ? (
          <ChevronUp size={18} className="shrink-0 text-gold" aria-hidden="true" />
        ) : (
          <ChevronDown size={18} className="shrink-0 text-gold" aria-hidden="true" />
        )}
      </button>
      {open && (
        <div
          id={`faq-${faq.id}`}
          className="border-t border-gold/10 pb-5 pt-4 text-sm leading-7 text-masala/65"
        >
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export function FAQAccordion() {
  return (
    <div role="list" aria-label="Frequently asked questions" className="space-y-4">
      {faqs.map((faq) => (
        <FAQItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
}
