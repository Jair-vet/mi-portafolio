import { useState } from 'react';
import { motion } from 'framer-motion';
import { SkillModal } from './SkillModal';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const personalInfo = [
  { label: 'Birthday', value: '23.06.2000' },
  { label: 'Phone', value: 'MX: (+52) 3121555316' },
  { label: 'Email', value: 'jairaceves56@gmail.com' },
  { label: 'Website', value: 'www.example.com' },
  { label: 'Address', value: 'Guadalajara Jalisco, México' },
];

export const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="sobremi" className="bg-[#1e2326] py-20 px-6">
        <div className="max-w-5xl mx-auto text-white mt-2">
          <motion.h2
            className="text-center text-5xl font-bold text-white uppercase mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="md:flex md:items-center gap-10">
            {/* Photo */}
            <motion.div
              className="flex justify-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <img
                className="border-4 border-dashed border-[#1CB698] rounded-full w-48 md:w-[500px] md:h-[200px] object-cover"
                src="https://res.cloudinary.com/dytlbyofu/image/upload/v1741046461/CV/IMG_5220_vyqrrr.jpg"
                alt="Jair Aceves"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              className="mt-6 md:mt-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <p className="text-lg">
                <span className="text-2xl font-bold text-[#1CB698]">Hi, I'm Jair Aceves. </span>
                I am a web developer with extensive experience in building modern and scalable
                applications using the newest technologies and tools from the web ecosystem. My
                focus is on building efficient, maintainable and well-structured solutions, applying
                best practices and design patterns to ensure quality and performance.
              </p>
              <p className="text-lg mt-4">
                I have a strong ability to learn and adapt to new technologies, ensuring that my
                projects are efficient, well-structured, and optimized.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Personal info + buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
          <motion.div
            className="shadow-xl p-5 rounded-lg bg-[#252b2f] w-full max-w-lg border border-[#1CB698]/20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-2xl font-bold uppercase mb-4">Personal Info</h3>
            <ul className="space-y-3">
              {personalInfo.map(({ label, value }) => (
                <li key={label} className="text-white flex items-center">
                  <strong className="text-[#1CB698] font-semibold w-32">{label}</strong>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={4}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-[#1CB698] text-white px-6 py-3 rounded-md text-lg font-semibold pulse-shadow cursor-pointer"
              whileHover={{ scale: 1.05, backgroundColor: '#159876' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsModalOpen(true)}
            >
              About Skills
            </motion.button>

            <motion.a
              className="bg-[#1CB698] text-white px-6 py-3 rounded-md text-lg font-semibold text-center cursor-pointer"
              href="https://res.cloudinary.com/dytlbyofu/image/upload/v1715033576/CV/Cv-sp_yxpn9z.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: '#159876' }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV <i className="fa-solid fa-download ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <SkillModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
