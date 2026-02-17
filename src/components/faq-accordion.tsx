'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function FAQAccordion({ items }: { items: readonly { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="rounded-xl border border-border p-4">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between text-left font-medium"
              aria-expanded={isOpen}
            >
              {item.question}
              <span>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen ? (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="pt-3 text-sm text-muted-foreground"
              >
                {item.answer}
              </motion.p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
