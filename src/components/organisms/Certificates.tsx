import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../atoms/SectionTitle';
import { CertificateBadge } from '../molecules/CertificateBadge';
import { certificates } from '../../data/certificates';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export const Certificates: React.FC = () => (
  <section id="certificates" className="py-16 px-6" style={{ background: 'var(--bg-primary)' }}>
    <div className="max-w-5xl mx-auto">
      <SectionTitle title="Certificates" subtitle="Credentials & certifications" />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificates.map((cert) => (
          <CertificateBadge key={cert.name} cert={cert} />
        ))}
      </motion.div>
    </div>
  </section>
);
