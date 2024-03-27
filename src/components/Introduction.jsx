import React from 'react';
import backgroundImage from '../assets/KATHAVACHAK KATH.svg';

const Introduction = () => {
    return (
        <div className="flex flex-col items-center justify-center " style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom' }}>
            <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-4xl font-bold font-poppins text-black mb-14">Introducing KathaVachak</h1>
                <div className="max-w-6xl text-lg font-poppins text-[#2E3E5C]"> {/* Adjusted max-w-lg */}
                    <p>
                        Kathavachak is a groundbreaking platform that revolutionizes the way umare interact with written content by seamlessly converting it into high-quality audiobooks. Our mission is simple yet powerful: to make knowledge accessible to all, regardless of linguistic background or visual ability.
                    </p>
                    <p className="mt-4">
                        At Kathavachak, we harness the latest advancements in technology, including Optical Character Recognition (OCR) and Text-to-Speech (TTS) engines, to transform any digital or physical text into an immersive auditory experience. Whether you are a student, a book enthusiast, or someone with visual impairments, Kathavachak empowers you to access and engage with a wealth of knowledge in your preferred language and format.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
