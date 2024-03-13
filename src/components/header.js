import React from 'react';
import useProgress from './useProgress';

export default function Header({ scrollToSection }) {
  const completion = useProgress();

  // Calculate the width of the progress bar based on completion
  const progressBarStyle = {
    transform: `translateX(${completion - 100}%)`,
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl py-2 bg-white">
      {/* Progress Bar */}
      <span
        id="progress-bar"
        style={progressBarStyle}
        className="absolute bottom-0 w-full transition-transform duration-150 h-1 bg-[#d2545e]"
      />

      {/* Navbar Content */}
      <div className="flex items-center justify-between px-4">
        {/* Logo or Branding */}
        <div className="text-xl font-bold text-black cursor-pointer" onClick={() => scrollToSection('home')}>
          Khang Le
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <div className="text-black cursor-pointer" onClick={() => scrollToSection('about')}>
            About
          </div>
          <div className="text-black cursor-pointer" onClick={() => scrollToSection('journey')}>
            Journey
          </div>
          <div className="text-black cursor-pointer" onClick={() => scrollToSection('projects')}>
            Projects
          </div>
          <div className="text-black cursor-pointer" onClick={() => scrollToSection('contact')}>
            Contact
          </div>
        </div>
      </div>
    </nav>
  );
}
