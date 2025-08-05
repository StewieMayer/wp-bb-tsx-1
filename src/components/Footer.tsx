const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {new Date().getFullYear()} Antonio Amaya. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Construida con React, TypeScript, Babel & Webpack
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a
              href="mailto:stewiemayer@hotmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              stewiemayer@hotmail.com
            </a>
            <div className="flex space-x-4">
              <a
                href="https://github.com/stewiemayer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label="GitHub"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="w-5 h-5 filter invert"
                />
              </a>
              <a
                href="https://linkedin.com/in/antonioamayastc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
