import { useState, useEffect } from "react";

const certificateData = [
  {
    name: "GitHub",
    img: "https://res.cloudinary.com/dytlbyofu/image/upload/v1703806089/Medalla/git-github_ag7nyx.svg",
    preview: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472139/Certificates/Git-Hub.Certificate_ofxi7d.jpg",
    pdf: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472139/Certificates/Git-Hub.Certificate_ofxi7d.pdf",
  },
  {
    name: "JavaScript",
    img: "https://res.cloudinary.com/dytlbyofu/image/upload/v1703806089/Medalla/javascript_jzy5wj.svg",
    preview: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472139/Certificates/JavaScript-certificate_ww8ttj.jpg",
    pdf: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472139/Certificates/JavaScript-certificate_ww8ttj.pdf",
  },
  {
    name: "Node.js",
    img: "https://res.cloudinary.com/dytlbyofu/image/upload/v1703806091/Medalla/node-cero-experto_aisefo.svg",
    preview: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472139/Certificates/Node.js_Certificate_pnwjjg.jpg",
    pdf: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472139/Certificates/Node.js_Certificate_pnwjjg.pdf",
  },
  {
    name: "TypeScript",
    img: "https://res.cloudinary.com/dytlbyofu/image/upload/v1703806093/Medalla/typescript_fopriv.svg",
    preview: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472142/Certificates/Typescript_Certificate_agd5a2.jpg",
    pdf: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472142/Certificates/Typescript_Certificate_agd5a2.pdf",
  },
  {
    name: "VueJs",
    img: "https://res.cloudinary.com/dytlbyofu/image/upload/v1703806095/Medalla/vuejs_apqtmz.svg",
    preview: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671473913/Certificates/VueJs_r1sgjs.jpg",
    pdf: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671473913/Certificates/VueJs_r1sgjs.pdf",
  },
  {
    name: "PWA",
    img: "https://res.cloudinary.com/dytlbyofu/image/upload/v1703806092/Medalla/pwa_ljqugb.svg",
    preview: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472140/Certificates/PWA-Certificate_bnrlzj.jpg",
    pdf: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472140/Certificates/PWA-Certificate_bnrlzj.jpg",
  },
  {
    name: "VISUAL STUDIO",
    img: "https://res.cloudinary.com/dytlbyofu/image/upload/v1703806232/Medalla/vscode_ypifph.svg",
    preview: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472141/Certificates/Visual_Studio_Code_Certificate_jrlmnl.jpg",
    pdf: "https://res.cloudinary.com/dytlbyofu/image/upload/v1671472141/Certificates/Visual_Studio_Code_Certificate_jrlmnl.pdf",
  },
  {
    name: "TAILWINDCSS",
    img: "https://res.cloudinary.com/dytlbyofu/image/upload/v1672177463/skills-tools/Tailwindcss_xgnxgg.png",
    preview: "https://res.cloudinary.com/dytlbyofu/image/upload/v1672159344/Certificates/TailwindCss_o3fze3.jpg",
    pdf: "https://res.cloudinary.com/dytlbyofu/image/upload/v1672159344/Certificates/TailwindCss_o3fze3.pdf",
  },
  {
    name: "NEXTJS",
    img: "https://res.cloudinary.com/dytlbyofu/image/upload/v1698447263/skills-tools/nextjs_hibjpc.svg",
    preview: "https://res.cloudinary.com/dytlbyofu/image/upload/v1687227735/Certificates/Next_umiyph.jpg",
    pdf: "https://res.cloudinary.com/dytlbyofu/image/upload/v1687227735/Certificates/Next_umiyph.pdf",
  },
  {
    name: "REACTJS",
    img: "https://res.cloudinary.com/dytlbyofu/image/upload/v1698447440/skills-tools/react_unkzqc.svg",
    preview: "https://res.cloudinary.com/dytlbyofu/image/upload/v1672859768/Certificates/react_eoec9q.jpg",
    pdf: "https://res.cloudinary.com/dytlbyofu/image/upload/v1672859768/Certificates/react_eoec9q.pdf",
  },
  {
    name: "VUE",
    img: "https://res.cloudinary.com/dytlbyofu/image/upload/v1703806094/Medalla/vue-ts_ajgsrj.svg",
    preview: "https://res.cloudinary.com/dytlbyofu/image/upload/v1703795963/Certificates/vue-JS-pinia_fqvgop.jpg",
    pdf: "https://res.cloudinary.com/dytlbyofu/image/upload/v1703795963/Certificates/vue-JS-pinia_fqvgop.pdf",
  },
];

export const Certificates = () => {
    const [certificates, setCertificates] = useState<typeof certificateData>([]);
    const [hoveredCertificate, setHoveredCertificate] = useState<string | null>(null);
    const [showPreview, setShowPreview] = useState(false);
    let timeoutId: NodeJS.Timeout;
  
    useEffect(() => {
  
      // ⚠️ Limpia el localStorage en cada recarga para actualizar los datos
      localStorage.removeItem("certificates");
      localStorage.setItem("certificates", JSON.stringify(certificateData));
  
      const storedData = JSON.parse(localStorage.getItem("certificates") || "[]");
      setCertificates(storedData);
  
      // Precargar imágenes para mejorar rendimiento
      storedData.forEach((cert) => {
        const img = new Image();
        img.src = cert.img;
        const preview = new Image();
        preview.src = cert.preview;
      });
    }, []);

    const handleMouseEnter = (certName: string) => {
        clearTimeout(timeoutId); // Evita que desaparezca inmediatamente si entra y sale rápido
        setHoveredCertificate(certName);
        setShowPreview(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
          setShowPreview(false);
          setHoveredCertificate(null);
        }, 300); // 🔥 Agrega un pequeño delay para evitar el parpadeo
      };
  
    return (
      <div  className="bg-[#1e2326]">
        <div className=" text-white text-center">
          <h2 className="text-4xl font-bold uppercase mb-10">Certificates</h2>
        </div>
  
        <div className="px-24 ">
          <div className="shadow-xl p-3 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center mx-auto overflow-visible">

            {certificates.map((cert, index) => (
                <div 
                    key={index} 
                    className="relative group" 
                    onMouseEnter={() => handleMouseEnter(cert.name)}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Imagen del Certificado */}
                    <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
                    <img
                        src={cert.img}
                        alt={cert.name}
                        className="w-[90px] cursor-pointer transition-transform duration-300 hover:scale-110"
                    />
                    </a>

                    {/* Modal de Vista Previa */}
                    {showPreview && hoveredCertificate === cert.name && (
                    <div 
                        className="absolute -top-28 left-1/2 transform -translate-x-1/2 bg-black p-2 rounded-md shadow-lg z-10 w-40 text-center transition-all duration-300"
                        onMouseEnter={() => clearTimeout(timeoutId)} // Previene que se cierre al entrar
                        onMouseLeave={handleMouseLeave} // Se cierra solo cuando se sale completamente
                    >
                        <p className="text-sm text-white font-semibold mb-1">{cert.name}</p>
                        <img
                        src={cert.preview}
                        alt={`${cert.name} Preview`}
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                    )}
                </div>
                ))}
          </div>
        </div>
      </div>
    );
};