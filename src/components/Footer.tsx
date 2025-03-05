export const Footer = () => {
    return (
      <footer className="relative bg-[#1e2326] text-white py-6 mt-16">
        {/* Fondo Blur */}
        <div className="absolute inset-0 backdrop-blur-md bg-opacity-10"></div>
  
        {/* Contenido */}
        <div className="relative container mx-auto text-center px-6">
          <h2 className="text-2xl font-semibold text-[#1CB698] uppercase">Carlos Jair Aceves García</h2>
          <p className="text-gray-300 text-sm mt-2">
            Full Stack Developer | Passionate about building scalable and modern web applications.
          </p>
  
          {/* Redes Sociales */}
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/jairaceves56"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1CB698] hover:text-[#52F7CBFF] transition duration-300 text-2xl"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jairaceves/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1CB698] hover:text-[#52F7CBFF] transition duration-300 text-2xl"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="mailto:jairaceves56@gmail.com"
              className="text-[#1CB698] hover:text-[#52F7CBFF] transition duration-300 text-2xl"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
  
          {/* Copyright */}
          <p className="text-gray-400 text-xs mt-4">
            © {new Date().getFullYear()} Jair Aceves. All rights reserved.
          </p>
        </div>
      </footer>
    );
};
  