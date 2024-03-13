import React from 'react';

const Links = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/khang-le-323a501bb/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity"
      >
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/f6f3e7/linkedin.png"
          alt="linkedin"
        />
      </a>

      <a
        href="https://github.com/tealeaf2"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity"
      >
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/f6f3e7/github.png"
          alt="github"
        />
      </a>

      <a
        href="https://drive.google.com/file/d/1H8Ho2eHNoNm4v-Ov2aVJ8LzVc4o_fBH0/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity"
      >
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/f6f3e7/resume.png"
          alt="resume"
        />
      </a>
    </div>
  );
};

export default Links;