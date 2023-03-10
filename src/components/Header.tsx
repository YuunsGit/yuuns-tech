import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";

const Header = ({ font }: { font: string }) => {
  return (
    <header className={`${font} font-sans`}>
      <nav className="mx-auto my-4 flex h-16 w-4/5 select-none flex-col items-center justify-center sm:h-32 lg:my-0 lg:h-24 lg:flex-row lg:justify-between">
        <div className="mx-auto flex h-full items-center justify-start gap-x-2 text-3xl font-extrabold text-primary-400 lg:ml-0">
          <CodeBracketSquareIcon className="h-10 w-10" />
          <span data-nosnippet>yuuns.tech</span>
        </div>
        <ul className="mx-auto hidden h-full items-center justify-center gap-x-20 font-semibold text-primary-300 sm:flex lg:mr-0">
          <li className="relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:w-0 before:overflow-hidden before:whitespace-nowrap before:text-primary-500 before:duration-200 before:content-['About_me'] hover:before:w-full">
            <a href="#about">About me</a>
          </li>
          <li className="relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:w-0 before:overflow-hidden before:whitespace-nowrap before:text-primary-500 before:duration-200 before:content-['Projects'] hover:before:w-full">
            <a href="#projects">Projects</a>
          </li>
          <li className="relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:w-0 before:overflow-hidden before:whitespace-nowrap before:text-primary-500 before:duration-200 before:content-['Contact'] hover:before:w-full">
            <a href="#contact">Contact</a>
          </li>
          <li className="relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:w-0 before:overflow-hidden before:whitespace-nowrap before:text-primary-500 before:duration-200 before:content-['Resume'] hover:before:w-full">
            <a rel="noopener noreferrer" target="_blank" href="/Resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
