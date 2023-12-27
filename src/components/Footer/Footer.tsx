import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex h-[7vh] w-full bg-neutral-900 border-t-[2px] border-neutral-700 items-center justify-between px-8 z-[1] absolute bottom-0">
      <span>Hernan Hawryluk - All rights reserved © 2023</span>
      <div className="flex gap-8 z-[1]">
        <a
          href="https://www.linkedin.com/in/hernan-hawryluk/"
          className="flex gap-2 items-center"
        >
          <FaLinkedin size={20} color="#0e76a8" />
          LinkedIn
        </a>
        <a
          href="https://www.github.com/hernan-hawryluk/"
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
