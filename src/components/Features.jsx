import React from 'react';
import audio from '../assets/cards/audio.svg';
import book from '../assets/cards/book.svg';
import download from '../assets/cards/download.svg';
import Pen from '../assets/cards/Pen.svg';
import scan from '../assets/cards/scan.svg';

const Card = ({ title, subtitle, image }) => {
    return (
        <div className="transform rounded-xl h-44 w-full sm:w-44 sm:h-[18rem] py-4 px-4 sm:w-[20rem] bg-[#865DFF] font-poppins shadow-xl transition duration-300 hover:scale-105">
            <div className="flex flex-col  md:text-xl sm:text-sm h-full justify-center items-center">
                <h2 className="font-bold mb-4 text-white text-center">{title}</h2>
                <p className="text-white text-center">{subtitle}</p>
                <img src={image} alt={title} className="mt-auto w-12 h-12 sm:w-20 sm:h-20" />
            </div>
        </div>
    );
};

const Features = () => {
    const data1 = [
        { title: "Multilingual Audiobooks", subtitle: "40+ languages supported, with a strong focus on Hindi and other Indian Languages", image: scan },
        { title: "Book Summaries", subtitle: "Explore concise summaries of popular books across various genres", image: book },
        { title: "Downloadable Content", subtitle: "Download audiobooks and summaries for offline listening", image: download },
    ];

    const data2 = [
        { title: "Personal Notes", subtitle: "Take notes and annotations while listening to audiobooks", image: Pen },
        { title: "Audio Content Creation", subtitle: "Create your own audiobooks and share them with others", image: audio },
    ];

    return (
        <div className="py-4 px-2 sm:px-8 lg:px-16 xl:px-24">
            <h1 className="text-4xl text-[#170F49] text-center mb-8 font-poppins font-bold">Featured Highlights</h1>
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap justify-center w-full lg:gap-16">
                    {data1.map((card, index) => (
                        <div key={index} className="w-full sm:w-1/3 lg:w-1/4 px-4  py-4">
                            <Card
                                title={card.title}
                                subtitle={card.subtitle}
                                image={card.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-4">
                <div className="flex flex-wrap gap-4 justify-center w-full lg:gap-16">
                    {data2.map((card, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
                            <Card
                                title={card.title}
                                subtitle={card.subtitle}
                                image={card.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
