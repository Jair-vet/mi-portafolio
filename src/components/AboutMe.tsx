import { useState } from "react";
import { SkillModal } from "../components/SkillModal";


export const AboutMe = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
      <>
        {/* SECCIÓN SOBRE MÍ */}
        <section id="sobremi" className="bg-[#1e2326]  py-20 px-6">
            <div className="max-w-5xl mx-auto text-white mt-2">
                <h2 className="text-center text-5xl font-bold text-white uppercase mb-10">
                About Me
                </h2>
                
                <div className="md:flex md:items-center gap-10">
                    {/* Imagen */}
                    <div className="flex justify-center">
                        <img
                        className="border-4 border-dashed border-[#1CB698] rounded-full w-48 md:w-[500px] md:h-[200px]"
                        src="https://res.cloudinary.com/dytlbyofu/image/upload/v1741046461/CV/IMG_5220_vyqrrr.jpg"
                        alt="Jair Aceves"
                        />
                    </div>
        
                    {/* Descripción */}
                    <div className="mt-6 md:mt-0 ">
                        <p className="text-lg">
                        <span className="text-2xl font-bold text-[#1CB698]">
                            Hi, I'm Jair Aceves.{" "}
                        </span>
                        I am a web developer with extensive experience in building modern and scalable applications using the newest technologies and tools from the web ecosystem. My focus is on building efficient, maintainable and well-structured solutions, applying best practices and design patterns to ensure quality and performance.
                        </p>
                        <p className="text-lg mt-4">
                        I have a strong ability to learn and adapt to new technologies,
                        ensuring that my projects are efficient, well-structured, and
                        optimized.
                        </p>
                    </div>
                </div>
            </div>
            {/* Datos personales */}
            <div className="flex justify-center items-center gap-4">
                <div className="mt-2 shadow-xl  p-5 rounded-lg bg-[#1e2326] w-full max-w-lg">
                    <h3 className="text-white text-2xl font-bold uppercase mb-4">Personal Info</h3>
                    <ul className="space-y-3">
                        <li className="text-white flex items-center">
                            <strong className="text-[#1CB698] font-semibold w-32">Birthday</strong>
                            <span>23.06.2000</span>
                        </li>
                        <li className="text-white flex items-center">
                            <strong className="text-[#1CB698] font-semibold w-32">Phone</strong>
                            <span>MX: (+52) 3121555316</span>
                        </li>
                        <li className="text-white flex items-center">
                            <strong className="text-[#1CB698] font-semibold w-32">Email</strong>
                            <span>jairaceves56@gmail.com</span>
                        </li>
                        <li className="text-white flex items-center">
                            <strong className="text-[#1CB698] font-semibold w-32">Website</strong>
                            <span>www.example.com</span>
                        </li>
                        <li className="text-white flex items-center">
                            <strong className="text-[#1CB698] font-semibold w-32">Address</strong>
                            <span>Guadalajara Jalisco, México</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    {/* Botón para abrir el modal */}
                    <div className="flex justify-center mt-10">
                        <button
                            className="bg-[#1CB698] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#159876] transition duration-300 hover:cursor-pointer pulse-shadow"
                            onClick={() => setIsModalOpen(true)}
                        >
                            About Skills
                        </button>
                    </div>
                    <SkillModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                    {/* Botón Descargar CV */}
                    <div className="flex justify-center mt-10">
                        <a
                            className="bg-[#1CB698] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#159876] transition duration-300"
                            href="https://res.cloudinary.com/dytlbyofu/image/upload/v1715033576/CV/Cv-sp_yxpn9z.pdf"
                            target="_blank"
                        >
                            Download CV <i className="fa-solid fa-download ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  };
  