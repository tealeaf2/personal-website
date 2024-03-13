import React from 'react';
import project3 from '../../images/project3.jpg';

export default function Project3() {
  return (
    <div className="group relative block h-64 sm:h-80 lg:h-96">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-4 pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <img src={project3} alt="Project3" className="max-w-[90%] h-auto" />
          <h2 className="mt-4 text-xl font-medium sm:text-2xl">Alora Finance</h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">Alora Finance</h3>
          <p className="mt-4 text-sm sm:text-base">
            A financial education website to educate students on personal finance through interactive lessons and games.
            Lead a team of 10 college students to deploy the website through ReactJS, Redux, Django, and PostgreSQL.
          </p>
          <p className="mt-8 font-bold">Full-Stack | Start-Up | UI/UX</p>
        </div>
      </div>
    </div>
  );
}