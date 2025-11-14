import { useState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import GithubCalendar from "react-github-calendar";

const useOnScreen = (ref: any, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        }
      },
      {
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const githubTheme = {
    light: [
      '#f0f0f0',
      '#dbe6f2',
      '#aac6e3',
      '#779ecb',
      '#507dab'
    ],
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const githubRef = useRef(null);
  const contactRef = useRef(null);

  const isAboutVisible = useOnScreen(aboutRef, "-100px");
  const isSkillsVisible = useOnScreen(skillsRef, "-100px");
  const isGithubVisible = useOnScreen(githubRef, "-100px");
  const isContactVisible = useOnScreen(contactRef, "-100px");

  return (
    <div className="max-w-7xl mx-auto p-2 space-y-16">

      {/* 1. HERO / HEADER SECTION */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 h-screen">
        {/* Left Side: Title and Links */}
        <div className="md:w-3/5 space-y-4">
          <h1 className={`
            text-4xl md:text-6xl font-bold
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            relative inline-block
            after:absolute after:bottom-2 md:after:bottom-3 after:left-0 after:h-4 md:after:h-6 after:w-full after:bg-[#779ecb] after:bg-opacity-20
            after:origin-left after:transition-transform after:duration-1500 after:ease-out after:delay-300
            ${isVisible ? 'after:scale-x-100' : 'after:scale-x-0'}
          `}>
            <span className="relative z-10">hi, i'm khang.</span>
          </h1>
          <p className={`
            text-2xl md:text-3xl font-medium text-[#779ecb]
            transition-all duration-800 ease-out delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            software engineer & web developer
          </p>
          <p className={`
            text-md text-gray-600 max-w-xl
            transition-all duration-800 ease-out delay-400
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            Searching for simple solutions to complex problems through code.
            Previous AWS MediaTailor intern.
          </p>

          {/* Social Links - Updated */}
          <div className={`
            flex gap-8 pt-2 font-semibold 
            transition-all duration-1000 ease-out delay-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            <a
              href="https://www.linkedin.com/in/khang-le-323a501bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:scale-105 transition-all duration-400 ease-out inline-block"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/tealeaf2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:scale-105 transition-all duration-400 ease-out inline-block"
            >
              Github
            </a>
            <a
              href="https://drive.google.com/file/d/1yaX-izi9x0ug2bG2yEna2vTKaURzWuIY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:scale-105 transition-all duration-400 ease-out inline-block"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center">
          <img
            src="/images/profile.jpg"
            alt="Khang Le Profile"
            className={`
            w-100 h-150 object-cover shadow-md
            transition-all duration-1000 ease-out delay-500
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
          `}
          />
        </div>
      </section>

      {/* 2. ABOUT ME SECTION - ANIMATED */}
      <section 
        id="about" 
        ref={aboutRef} 
        className={`
          space-y-4 transition-all duration-700 ease-out
          ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        <h2 className="text-3xl font-bold border-b-2 border-[#779ecb] pb-2 inline-block">
          about me
        </h2>
        
        {/* 2. Updated this section for style */}
        <div className="text-md text-gray-700 space-y-6 max-w-4xl leading-relaxed">
          <p>
            I go by Khang (pronounced k-aang) and am a senior at the <strong className="font-semibold text-gray-900">University of Notre Dame</strong> pursuing a B.S. in Computer Science and Applied Statistics. 
            My experience spans distributed systems and web development, built through multiple internships and personal projects.
            Specifically, my work has included:
          </p>
          
          {/* 3. Replaced the <ul> with a styled list */}
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-[#779ecb] shrink-0 mt-1" />
              <span>
                Optimizing ad insertion and caching systems with <strong className="font-semibold text-gray-800">Kotlin, Redis, and AWS</strong> services to improve streaming performance at scale.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-[#779ecb] shrink-0 mt-1" />
              <span>
                Developing responsive web applications with <strong className="font-semibold text-gray-800">React, Django, and Vue</strong>, improving performance and scalability for research and student platforms for the South Bend.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-[#779ecb] shrink-0 mt-1" />
              <span>
                Leading full-stack teams in local communities to design open-source educational software, combining UI/UX principles with backend reliability.
              </span>
            </li>
          </ul>
          
          <p>
            Previously, I interned at <strong className="font-semibold text-gray-900">AWS MediaTailor</strong>, where I built and tested an architecture to match ad content to video streams in real-time, improving playback compatbility and quality.
          </p>
        </div>
      </section>

      {/* 3. SKILLS / TECHNOLOGIES SECTION - ANIMATED */}
      <section
        id="skills"
        ref={skillsRef}
        className={`
          space-y-4 transition-all duration-1000 ease-out
          ${isSkillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        <h2 className="text-3xl font-bold border-b-2 border-[#779ecb] pb-2 inline-block">
          my tech stack
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">JavaScript</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">TypeScript</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">React</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">Vue</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">Django</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">Node.js</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">Python</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">C</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">Kotlin</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">PostgreSQL</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">Docker</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">PyTorch</span>
          <span className="text-[#779ecb] px-4 py-1 rounded-full font-medium">AWS</span>
        </div>
      </section>

      <section
        id="github"
        ref={githubRef}
        className={`
          space-y-4 transition-all duration-1000 ease-out
          ${isGithubVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        <h2 className="text-3xl font-bold border-b-2 border-[#779ecb] pb-2 inline-block">
          github
        </h2>
        <div className="">
          <GithubCalendar
            username={"tealeaf2"}
            year="last"
            theme={githubTheme}
            colorScheme="light"
            labels={{
              totalCount: '{{count}} contributions in the last half year',
            }}
          />
        </div>
      </section>

      {/* 4. CONTACT SECTION - ANIMATED */}
      <section
        id="contact"
        ref={contactRef}
        className={`
          text-center bg-gray-50 p-8 rounded
          transition-all duration-1000 ease-out
          ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        <h2 className="text-3xl font-bold">contact</h2>
        <p className="text-md text-gray-500 my-4 max-w-lg mx-auto">
          if you just want to say hi, my inbox is always open!
        </p>
        <a
          href="mailto:kle2@nd.edu"
          className="inline-flex items-center gap-2 bg-[#779ecb] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-400 transition-colors"
        >
          hello!
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-2 text-sm">
        © 2025 Khang Le. All rights reserved.
      </footer>

    </div>
  );
}