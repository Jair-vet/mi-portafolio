import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Certificate } from '../../types';

interface CertificateBadgeProps {
  cert: Certificate;
}

export const CertificateBadge: React.FC<CertificateBadgeProps> = ({ cert }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPos({ x: rect.left + rect.width / 2, y: rect.top });
    setShowPreview(true);
  };

  return (
    <>
      <motion.div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowPreview(false)}
        whileHover={{ scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
          <img src={cert.img} alt={cert.name} className="w-[88px] cursor-pointer" loading="lazy" draggable={false} />
        </a>
        <p className="text-center text-[10px] mt-1" style={{ color: 'var(--text-secondary)' }}>
          {cert.name}
        </p>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {showPreview && (
            <motion.div
              className="pointer-events-none"
              style={{
                position: 'fixed',
                left: pos.x,
                top: pos.y - 8,
                transform: 'translate(-50%, -100%)',
                zIndex: 99999,
              }}
              initial={{ opacity: 0, scale: 0.85, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 8 }}
              transition={{ duration: 0.15 }}
            >
              <div
                className="p-2 rounded-xl shadow-2xl w-44 text-center border border-[var(--border)]"
                style={{ background: 'var(--bg-card)' }}
              >
                <p className="text-xs font-semibold mb-1" style={{ color: 'var(--accent)' }}>
                  {cert.name}
                </p>
                <img
                  src={cert.preview}
                  alt={`${cert.name} preview`}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
