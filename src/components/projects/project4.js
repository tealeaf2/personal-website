import React from 'react';
import project4 from '../../images/project4.jpg';

export default function Project4() {
  return (
    <div className="group relative block h-64 sm:h-80 lg:h-96">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-4 pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <img src={project4} alt="Project4" className="max-w-[70%] h-auto" />
          <h2 className="mt-4 text-xl font-medium sm:text-2xl">Prediction of Plume Radiance</h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">Prediction of Plume Radiance</h3>
          <p className="mt-4 text-sm sm:text-base">
            Applying models and variations of normalization to accurately predict simulations of plumes.
          </p>
          <p className="mt-8 font-bold">ML/AI | Neural Networks | Tensorflow</p>
        </div>
      </div>
    </div>
  );
}