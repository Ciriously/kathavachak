import React from 'react';
import Play from "../assets/Button.svg";
import hero from "../assets/hero.svg";

const Hero = () => {
    return (
        <div>
            <section className="bg-white px-6 lg:px-0">
                <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-36 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="lg:col-span-5 lg:pr-8">
                        <h1 className="text-4xl lg:text-6xl font-bold font-poppins leading-snug mb-8 lg:max-w-[45rem]">
                            Experience the Power
                            of Audiobooks in Your  Language
                        </h1>
                        <p className="text-base lg:text-lg font-light font-poppins text-[#2E3E5C] mb-8 lg:max-w-xl">
                            At Kathavachak, we believe in the power of accessibility. Our mission is to break down language barriers and make knowledge accessible to all, regardless of linguistic background or visual ability.
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-8">
                            <button
                                className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2 text-lg font-medium text-white bg-[#5E41B3] border border-transparent rounded-2xl hover:bg-purple-700 focus:ring-4 focus:ring-purple-500"
                            >
                                Try Now
                            </button>
                            <button
                                className="inline-flex items-center font-poppins justify-center w-full sm:w-[18rem] text-left px-5 py-2 text-lg font-medium text-[#2E3E5C] bg-[#fff]  rounded-md focus:ring-4 focus:ring-[#5E41B3] focus:border-[#5E41B3]"
                            >
                                <img src={Play} alt="Play Button" className="w-20 h-18 mr-6" />
                                <span>Watch our introduction video</span>
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <img
                            src={hero}
                            alt="hero image"
                            className="w-full h-auto lg:h-[35rem]"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
