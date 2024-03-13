import React from 'react';
import img from "../assets/why.svg";

const Why = () => {
    return (
        <div>
            <section className="py-8 z-10 font-serif">
                <div className="flex flex-col md:flex-row items-start max-w-7xl px-6 py-8 mx-auto">
                    <div className="w-full md:w-1/2 py-36">
                        <h1 className="text-purple-900 font-poppins text-4xl md:text-5xl font-semibold leading-none tracking-tighter mb-40">
                            Why Kathavachak?
                        </h1>

                        <ul className="list-disc font-poppins text-lg text-[#2E3E5C] leading-[3rem] w-5/6 mb-6">
                            <li>Experience the Convenience: Convert any digital or physical text into an audiobook with just a few clicks.</li>
                            <li>Empowerment Through Language: Explore a world of knowledge in your native language and enhance your learning experience.</li>
                            <li>Accessibility Redefined: Say goodbye to language barriers and visual limitations with our inclusive platform.</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 py-20">
                        <img
                            src={img}
                            className="ml-40  max-w-full h-[40rem]"
                            alt="Why Kathavachak"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Why;
