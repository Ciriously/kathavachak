import React from 'react';
import Image from '../assets/mock.svg';

const Works = () => {
  return (
    <div id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold font-poppins text-[#1E1F4B] text-center mb-8">How It Works?</h1>
        <img src={Image} alt="How It Works" className="mx-auto h-full w-full " />
      </div>

    </div>
  );
};

export default Works;
