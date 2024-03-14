import React from 'react';
import Play from "../assets/Button.svg";
import hero from "../assets/hero.svg";

const Hero = () => {
    return (
        <div>
            <section className="bg-white px-auto mx-6 w-5/6">
                <div className="grid max-w-screen-xl px-2 pt-8 pb-2 mx-auto lg:gap-8 xl:gap-36 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto tracking-wide place-self-center lg:col-span-7">
                        <h1 className="max-w-[45rem] mb-8 text-6xl font-bold font-poppins  leading-snug ">
                            Experience the Power
                            of Audiobooks in Your  Language
                        </h1>
                        <p className="max-w-xl mb-8 font-light font-poppins  text-[#2E3E5C] lg:mb-14 md:text-lg lg:text-xl">
                            At Kathavachak, we believe in the power of accessibility. Our mission is to break down language barriers and make knowledge accessible to all, regardless of linguistic background or visual ability.
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 font-poppins sm:space-x-8">
                            <button
                                className="inline-flex items-center justify-center w-40 px-5 py-1 text-xl font-poppins font-medium text-center text-white bg-[#5E41B3] border border-transparent rounded-md hover:bg-purple-700 focus:ring-4 focus:ring-purple-500"
                            >
                                Try Now
                            </button>
                            <button
                                className="inline-flex items-center justify-center w-[19rem] px-8 py-2 text-md  font-medium text-left text-[#2E3E5C] bg-[#fff] "
                            >
                                <img src={Play} alt="Play Button" className="w-18 h-18 mr-8" />
                                Watch our introduction video
                            </button>
                        </div>
                    </div>
                    <div className="hidden h-[35rem] lg:mt-0 lg:col-span-5 lg:flex">
                        <img
                            src={hero}
                            alt="hero image"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
