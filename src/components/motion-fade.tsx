'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function MotionFade({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}
