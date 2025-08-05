const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="w-8 h-8"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          alt="TypeScript Logo"
          className="w-8 h-8"
        />
        <span className="font-semibold">
          React-TS-Babel-Webpack from scratch
        </span>
      </div>
      <nav className="flex space-x-4">
        <a
          href="https://github.com/stewiemayer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github Logo"
            className="w-6 h-6 filter invert"
          />
        </a>
        <a
          href="https://linkedin.com/in/antonioamayastc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn Logo"
            className="w-6 h-6"
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;
