import React, { useEffect, useRef, useState } from "react";
import Header from "./components/header";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      // if (entry.isIntersecting) {
      //   setIsVisible(true);
      //   scrollObserver.unobserve(entry.target);
      // }
      // else {
      //   setIsVisible(false);
      // }
      setIsVisible(entry.isIntersecting)
    }, {threshold: 0.5 });

    const currentRef = ref.current; // Capture the current value

    if (currentRef) {
      scrollObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        scrollObserver.unobserve(currentRef);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000 
    ${isVisible ? "animate-slidein opacity-0 [--slidein-delay:50ms]" : "animate-slideout [--slideout-delay:50ms]"
  }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const App = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);


  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'about':
        section1Ref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'journey':
        section2Ref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        section3Ref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        section4Ref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="mx-auto flex">
      <div className="flex-grow flex flex-col">
        <Header scrollToSection={scrollToSection} />
        <RevealOnScroll>
          <Section1 ref={section1Ref}/>
        </RevealOnScroll>
        <div className="py-10"/>
        <RevealOnScroll>
          <Section2 ref={section2Ref}/>
        </RevealOnScroll>
        <div className="py-10"/>
        <div className="mx-auto container">
          <RevealOnScroll>
            <Section3 ref={section3Ref}/>
          </RevealOnScroll>
        </div>
        <div className="py-10"/>
        <RevealOnScroll>
          <Section4 ref={section4Ref}/>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default App;


