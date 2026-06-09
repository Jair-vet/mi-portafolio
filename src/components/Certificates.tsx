import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/certificates';
import type { Certificate } from '../types';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } },
};

interface PreviewState {
  cert: Certificate;
  x: number;
  y: number;
}

export const Certificates = () => {
  const [preview, setPreview] = useState<PreviewState | null>(null);

  const handleMouseEnter = (cert: Certificate, e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPreview({ cert, x: rect.left + rect.width / 2, y: rect.top });
  };

  const handleMouseLeave = () => setPreview(null);

  return (
    <div className="bg-[#1e2326] py-10">
      <motion.h2
        className="text-white text-4xl font-bold uppercase text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certificates
      </motion.h2>

      <div className="px-8 md:px-24">
        <motion.div
          className="shadow-xl p-3 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.name}
              className="relative group"
              variants={itemVariants}
              onMouseEnter={(e) => handleMouseEnter(cert, e)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <img
                  src={cert.img}
                  alt={cert.name}
                  className="w-[90px] cursor-pointer"
                  loading="lazy"
                />
              </motion.a>
              <p className="text-center text-xs text-gray-400 mt-1">{cert.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating preview portal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed z-50 pointer-events-none"
            style={{
              left: preview.x,
              top: preview.y - 10,
              transform: 'translate(-50%, -100%)',
            }}
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.15 }}
          >
            <div className="bg-[#0d0f10] border border-[#1CB698]/30 p-2 rounded-lg shadow-2xl w-44 text-center">
              <p className="text-sm text-[#1CB698] font-semibold mb-1">{preview.cert.name}</p>
              <img
                src={preview.cert.preview}
                alt={`${preview.cert.name} preview`}
                className="w-full h-auto rounded-md"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
