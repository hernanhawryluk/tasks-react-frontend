import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="sm:flex h-[42px] sm:h-[52px] w-full bg-neutral-900 border-t-[2px] border-neutral-700 items-center justify-center sm:justify-between px-4 sm:px-8 z-[1] absolute bottom-0 text-xs 2xl:px-[15%]">
      <span className="hidden sm:block">
        Hernan Hawryluk - All rights reserved © 2023
      </span>
      <div className="flex h-full items-center justify-between sm:justify-normal sm:gap-8 z-[1]">
        <a
          href="https://www.linkedin.com/in/hernan-hawryluk/"
          className="flex gap-2 items-center"
        >
          <FaLinkedin size={20} color="#0e76a8" />
          LinkedIn
        </a>
        <a
          href="https://www.github.com/hernanhawryluk/"
          className="flex gap-2 items-center"
        >
          <FaGithub size={20} />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Footer;
