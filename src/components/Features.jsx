import React from 'react';
import audio from '../assets/cards/audio.svg';
import book from '../assets/cards/book.svg';
import download from '../assets/cards/download.svg';
import Pen from '../assets/cards/Pen.svg';
import scan from '../assets/cards/scan.svg';

const Card = ({ title, subtitle, image }) => {
    return (

        <div className="transform rounded-xl h-44 w-44 sm:h-[18rem] py-4 px-4 sm:w-[20rem] bg-[#865DFF] font-poppins shadow-xl transition duration-300 hover:scale-105">
            <div className="flex flex-col h-full justify-center items-center">
                <h2 className="font-bold mb-8 text-white">{title}</h2>
                <p className="text-white text-center">{subtitle}</p>
                <img src={image} alt={title} className="mt-auto w-16 h-16 sm:w-24 sm:h-24" />
            </div>
        </div>
    );
};

const Features = () => {
    const data = [
        { title: "Multilingual Audiobooks", subtitle: "40+ languages supported, with a strong focus on Hindi and other Indian Languages", image: scan },
        { title: "Book Summaries", subtitle: "Explore concise summaries of popular books across various genres", image: book },
        { title: "Downloadable Content", subtitle: "Download audiobooks and summaries for offline listening", image: download },
        { title: "Personal Notes", subtitle: "Take notes and annotations while listening to audiobooks", image: Pen },
        { title: "Audio Content Creation", subtitle: "Create your own audiobooks and share them with others", image: audio },
    ];

    return (
        <div className=" flex-wrap justify-center gap-8 py-4 px-[20rem]">
            <h1 className="text-4xl text-[#170F49] text-center mb-20 font-poppins font-bold">Featured Highlights</h1>
            <div className="flex flex-wrap justify-center">
                {data.map((card, index) => (
                    <div key={index} className={`w-full sm:w-1/2 lg:w-1/3 p-4`}>
                        <Card
                            title={card.title}
                            subtitle={card.subtitle}
                            image={card.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
