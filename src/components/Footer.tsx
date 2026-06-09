import { motion } from 'framer-motion';

const socialLinks = [
  {
    href: 'https://github.com/Jair-vet',
    icon: 'fa-brands fa-github',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/jairaceves/',
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:jairaceves56@gmail.com',
    icon: 'fa-solid fa-envelope',
    label: 'Email',
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#1a1c1d] text-white py-8 mt-16 border-t border-[#1CB698]/20">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-2xl font-semibold text-[#1CB698] uppercase"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Carlos Jair Aceves García
        </motion.h2>

        <p className="text-gray-400 text-sm mt-2">
          Full Stack Developer — Building scalable and modern web applications.
        </p>

        <div className="flex justify-center space-x-6 mt-5">
          {socialLinks.map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#1CB698] text-2xl"
              whileHover={{ scale: 1.3, color: '#52F7CB' }}
              transition={{ type: 'spring', stiffness: 400, damping: 12 }}
            >
              <i className={icon} />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-600 text-xs mt-5">
          © {new Date().getFullYear()} Jair Aceves. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
