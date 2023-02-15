import Head from "next/head";
import Image from "next/image";
import { Overpass, Space_Grotesk } from "@next/font/google";

import Social from "./Social";

import {
  CodeBracketSquareIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

import HeroImage from "../../public/Me.svg";
import TransitionWave from "../../public/TransitionWave.svg";
import Laptop from "../../public/Laptop.svg";
import Sinbad from "../../public/Sinbad.svg";
import Sinbadude from "../../public/Sinbadude.svg";
import Conversions from "../../public/Conversions.svg";
import Letter from "../../public/Letter.svg";

import Illustrator from "../../public/Illustrator.svg";
import Instagram from "../../public/Instagram.svg";
import LinkedIn from "../../public/LinkedIn.svg";
import ArtStation from "../../public/ArtStation.svg";
import GitHub from "../../public/GitHub.svg";
import HeMan from "../../public/Heman.svg";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const socials: { name: string; icon: React.FC; link: string }[] = [
  {
    name: "GitHub",
    icon: GitHub,
    link: "https://github.com/YuunsGit",
  },
  {
    name: "ArtStation",
    icon: ArtStation,
    link: "https://www.artstation.com/yuuns",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/yemrekpnk/",
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/yekepenek/",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Yunus Emre Kepenek</title>
        <meta
          name="description"
          content="Yunus Emre Kepenek portfolio website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Yuuns Tech" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yuuns.tech/" />
        <meta property="og:image" content="https://www.yuuns.tech/Me.png" />
        <meta
          property="og:description"
          content="Yunus Emre's portfolio website"
        />
        <meta name="theme-color" content="#7B9C8A" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <header
        className={`${overpass.variable} mx-auto my-4 flex h-16 w-4/5 select-none flex-col items-center justify-center font-sans sm:h-32 lg:my-0 lg:h-24 lg:flex-row lg:justify-between`}
      >
        <div className="mx-auto flex h-full items-center justify-start gap-x-2 text-3xl font-extrabold text-primary-400 lg:ml-0">
          <CodeBracketSquareIcon className="h-10 w-10" />
          <h1>yuuns.tech</h1>
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
      </header>
      <main className={`${overpass.variable} font-sans`}>
        <div className="my-12 mx-auto flex w-4/5 flex-col items-center justify-center gap-x-20 sm:my-20 md:my-32 lg:flex-row">
          <div className="mb-10 w-2/3 space-y-6 sm:w-80 lg:mb-0 xl:w-96">
            <figure className="group relative">
              <Image
                src={HeroImage}
                alt="Picture of the author"
                className="z-10 select-none"
                priority
              />
              <div className="absolute -top-7 right-0 left-0 z-0 mx-auto hidden h-20 text-center text-primary-400 opacity-0 duration-200 md:block md:group-hover:-translate-y-1 md:group-hover:opacity-100 ">
                Made with{" "}
                <Image
                  src={Illustrator}
                  alt="Adobe Illustrator logo"
                  className="mr-0 inline h-5 w-5"
                />
              </div>
            </figure>
            <div className="z-10 flex select-none justify-center gap-x-4">
              {socials.map(({ name, icon, link }) => (
                <Social name={name} icon={icon} link={link} key={name} />
              ))}
            </div>
          </div>
          <article className="text-center lg:text-left">
            <h1>
              <span className="text-4xl font-bold text-ternary-400 sm:text-6xl lg:text-7xl">
                Hi, I&apos;m
              </span>
              <br />
              <span className="relative text-4xl font-black text-primary-400 sm:text-6xl lg:text-7xl">
                Yunus Emre
              </span>
            </h1>
            <br />
            <h2>
              <span className="text-lg font-semibold text-ternary-400 sm:text-2xl lg:text-3xl">
                Full Stack Engineer
              </span>
              <br />
              <span className="text-lg font-semibold text-ternary-400 sm:text-2xl lg:text-3xl">
                Designer
              </span>
            </h2>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/Resume.pdf"
              className="mx-auto mt-6 inline-block rounded border border-opacity-50 bg-primary-100 px-4 py-2 text-base sm:hidden"
            >
              Resume
            </a>
          </article>
        </div>
        <Image
          src={TransitionWave}
          alt="Wave image at the top"
          className="min-w-full select-none"
        />
        <div className="space-y-32 bg-primary-300 py-24 md:space-y-56 md:py-40">
          <div>
            <h1
              id="about"
              className="mx-auto mb-10 w-10/12 text-center text-4xl font-bold text-secondary sm:mb-20 sm:text-6xl"
            >
              About Me
            </h1>
            <div className="mx-auto flex w-9/12 flex-col-reverse items-center justify-center gap-y-12 text-center text-secondary md:w-7/12 md:text-left lg:flex-row lg:gap-y-0 lg:space-x-10">
              <article className="space-y-3 sm:text-lg lg:w-1/2">
                <p>
                  I am a software engineering student with a specialization in
                  web development. I am passionate about creating intuitive and
                  visually appealing websites that are both functional and
                  user-friendly.
                </p>
                <p>
                  Here are a few technologies I&apos;ve been working with
                  recently:
                </p>
                <ul className="mx-auto grid w-full grid-cols-2 md:mx-0 md:w-3/4">
                  <li className="before:mr-2 before:content-['▸']">
                    JavaScript
                  </li>
                  <li className="before:mr-2 before:content-['▸']">
                    TypeScript
                  </li>
                  <li className="before:mr-2 before:content-['▸']">Tailwind</li>
                  <li className="before:mr-2 before:content-['▸']">React</li>
                  <li className="before:mr-2 before:content-['▸']">Node.js</li>
                  <li className="before:mr-2 before:content-['▸']">Astro</li>
                </ul>
              </article>
              <figure className="group relative">
                <Image
                  src={Laptop}
                  alt="A picture of a laptop near a cup of coffee"
                />
                <div className="absolute -top-7 right-0 left-0 z-0 mx-auto hidden h-20 text-center text-secondary opacity-0 duration-200 md:block md:group-hover:-translate-y-1 md:group-hover:opacity-100">
                  Made with{" "}
                  <Image
                    src={Illustrator}
                    alt="Adobe Illustrator logo"
                    className="mr-0 inline h-5 w-5"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div>
            <h1
              id="projects"
              className="mx-auto mb-10 w-10/12 text-center text-4xl font-bold text-secondary md:mb-20 md:text-6xl"
            >
              Some Things I&apos;ve Built
            </h1>
            <div className="z-10 mx-auto flex w-10/12 flex-col space-y-5 lg:w-7/12">
              <a
                href="https://www.sinbaddigibox.com"
                target="_blank"
                rel="noreferrer"
                className="group relative"
              >
                <Image
                  src={Sinbadude}
                  alt="Mascot of Sinbad DigiBox"
                  className="absolute -left-44 -top-32 hidden h-4/5 -rotate-12 lg:block"
                />
                <div className="relative z-10 flex flex-col-reverse justify-between gap-y-8 gap-x-0 rounded-3xl bg-sky-50 p-12 text-center duration-200 hover:bg-sky-100 md:flex-row md:gap-x-20 md:gap-y-0 md:text-left">
                  <article>
                    <h1 className="text-2xl font-extrabold">Sinbad DigiBox</h1>
                    <h2 className="text-xl font-semibold">Lead & Web Mentor</h2>
                    <br />
                    <p>
                      Voluntary establishment by Ankara Science University
                      students to maintain a community of various software
                      engineering fields.
                    </p>
                    <p className="mt-3 before:mr-2 before:content-['▸']">
                      Developed the open-source website using <b>React</b>.
                    </p>
                    <p className="mt-3 block underline md:hidden">
                      Click here to visit.
                    </p>
                  </article>
                  <Image
                    src={Sinbad}
                    alt="Sinbad DigiBox logo"
                    className="h-auto w-full md:w-1/3"
                  />
                </div>
                <ArrowRightCircleIcon className="absolute right-0 top-0 bottom-0 z-0 my-auto hidden h-14 text-sky-100 duration-200 group-hover:translate-x-16 md:block" />
              </a>
              <a
                href="https://conversions.yuuns.tech/"
                target="_blank"
                rel="noreferrer"
                className="group relative"
              >
                <div className="relative z-10 flex flex-col-reverse justify-between gap-y-8 gap-x-0 rounded-3xl bg-stone-800 p-12 text-center text-secondary duration-200 hover:bg-stone-900 md:flex-row md:gap-x-20 md:gap-y-0 md:text-left">
                  <article>
                    <h1 className="text-2xl font-extrabold">Conversions</h1>
                    <h2 className="text-xl font-semibold">Author</h2>
                    <br />
                    <p>
                      Multipurpose PDF editing web app that can split, rotate,
                      stamp, and convert PDF files.
                    </p>
                    <p className="mt-3 before:mr-2 before:content-['▸']">
                      Developed the open-source website using <b>React</b>.
                    </p>
                    <p className="mt-3 block underline md:hidden">
                      Click here to visit.
                    </p>
                  </article>
                  <Image
                    src={Conversions}
                    alt="Conversions logo"
                    className="h-auto w-full md:w-1/3"
                  />
                </div>
                <ArrowRightCircleIcon className="absolute right-0 top-0 bottom-0 z-0 my-auto hidden h-14 text-stone-900 duration-200 group-hover:translate-x-16 md:block" />
              </a>
              <a
                href="https://github.com/YuunsGit/legionary"
                target="_blank"
                rel="noreferrer"
                className="group relative"
              >
                <div className="relative z-10 flex flex-col-reverse justify-between gap-x-0 gap-y-8 rounded-3xl bg-stone-100 p-12 text-center text-ternary-500 duration-200 hover:bg-stone-200 md:flex-row  md:gap-x-20 md:gap-y-0 md:text-left">
                  <article>
                    <h1 className="text-2xl font-extrabold">Legionary</h1>
                    <h2 className="text-xl font-semibold">Author</h2>
                    <br />
                    <p>
                      Discord bot that is capable of various operations such as
                      spell-checking, reactions, essential commands and little
                      games.
                    </p>
                    <p className="mt-3 before:mr-2 before:content-['▸']">
                      Developed the open-source bot using <b>Node.js</b>.
                    </p>
                    <p className="mt-3 block underline md:hidden">
                      Click here to visit.
                    </p>
                  </article>
                  <Image
                    src={HeMan}
                    alt="Legionary logo"
                    className="my-auto w-full rounded-2xl md:w-1/3"
                  />
                </div>
                <ArrowRightCircleIcon className="absolute right-0 top-0 bottom-0 z-0 my-auto hidden h-14 text-stone-200 duration-200 group-hover:translate-x-16 md:block" />
              </a>
            </div>
          </div>
          <div>
            <h1
              id="contact"
              className="mx-auto mb-10 w-10/12 text-center text-4xl font-bold text-secondary md:mb-20 md:text-6xl"
            >
              Get In Touch
            </h1>
            <div className="mx-auto flex w-7/12 flex-col-reverse items-center justify-center gap-y-12 gap-x-20 text-secondary md:flex-row">
              <figure className="group relative">
                <Image
                  src={Letter}
                  alt="A picture of a laptop near a cup of coffee"
                />
                <div className="absolute -top-7 right-0 left-0 z-0 mx-auto hidden h-20 text-center text-secondary opacity-0 duration-200 md:block md:group-hover:-translate-y-1 md:group-hover:opacity-100">
                  Made with{" "}
                  <Image
                    src={Illustrator}
                    alt="Adobe Illustrator logo"
                    className="mr-0 inline h-5 w-5"
                  />
                </div>
              </figure>
              <article className="w-full space-y-6 text-center text-base md:w-1/2 md:text-left md:text-lg">
                <p>
                  I&apos;m always looking for new opportunities and my inbox is
                  always open. Whether you have a question or just want to say
                  hi, I&apos;ll try my best to get back to you!
                </p>
                <a
                  href="mailto:yekepenek2002@hotmail.com"
                  className="inline-block space-x-2 rounded-lg bg-primary-400 px-6 py-4 duration-200 hover:bg-primary-500"
                >
                  <FaceSmileIcon className="inline w-7" />
                  <span>Say Hello</span>
                </a>
              </article>
            </div>
          </div>
        </div>
      </main>
      <footer
        className={`${grotesk.variable} bg-primary-300 py-6 text-center font-sans`}
      >
        <a
          href="https://github.com/YuunsGit/yuuns-tech"
          rel="noreferrer"
          target="_blank"
          className="relative text-sm text-secondary duration-100 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-secondary after:duration-150 after:content-[''] hover:after:scale-x-100 sm:text-base"
        >
          <code>Designed & Built by Yunus Emre Kepenek</code>
        </a>
      </footer>
    </>
  );
}
