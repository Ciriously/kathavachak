import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import footer from "../assets/footer.svg";
import Google from '../assets/google.svg';
import Apple from '../assets/apple.svg';

const Footer = () => {
    return (
        <div id="contact-us" className='bg-[#2E3E5C] pt-9 w-full min-h-full h-full relative'>
            <div className="w-full flex flex-col items-center md:flex-row md:justify-between">
                {/* Logo and company name */}
                <div className="flex px-10 sm:px-20 md:px-40 mb-8 md:mb-0">
                    <img
                        src={footer}
                        alt="Kathavachak Logo"
                        className="h-18 mr-4"
                    />
                    <h1 className="text-white flex items-center justify-center font-medium font-poppins text-3xl">kathavachak</h1>
                </div>
                {/* Social media icons */}
                <div className="absolute top-8 md:static left-0 md:left-auto right-4 md:right-8 flex flex-row items-end mt-24 gap-6 ml-14 md:mt-0 md:mr-24">
                    <div className="rounded-full bg-[#5E41B3] p-4 mb-2">
                        <a href="#" className="text-white block"><FaFacebook size={24} /></a>
                    </div>
                    <div className="rounded-full bg-[#5E41B3] p-4 mb-2">
                        <a href="#" className="text-white block"><FaTwitter size={24} /></a>
                    </div>
                    <div className="rounded-full bg-[#5E41B3] p-4 mb-2">
                        <a href="#" className="text-white block"><FaInstagram size={24} /></a>
                    </div>
                    <div className="rounded-full bg-[#5E41B3] p-4 mb-2">
                        <a href="#" className="text-white block"><FaGithub size={24} /></a>
                    </div>
                </div>
            </div>
            {/* Company information */}
            <div className='w-full flex flex-col md:flex-row'>
                <div className='ml-10 sm:ml-20 md:ml-40 mt-12 py-8 w-4/5 border-t border-gray-400'>
                    <h1 className='text-white font-bold text-2xl py-5'>Company</h1>
                    <div className='flex flex-row mt-6 sm:mt-4 space-x-10 md:space-x-24'>
                        <p className="text-[10px] font-poppins font-regular text-white md:text-[15px]">About Us</p>
                        <p className="text-[10px] font-poppins font-regular text-white md:text-[15px]">Try Now</p>
                        <p className="text-[10px] font-poppins font-regular text-white md:text-[15px]">Terms of use</p>
                        <p className="text-[10px] font-poppins font-regular text-white md:text-[15px]">Privacy Policy</p>
                        <p className="text-[10px] font-poppins font-regular text-white md:text-[15px]">Contact us</p>
                    </div>
                    <p className='flex justify-center py-3 sm:py-[3rem] ml-22 font-poppins text-white text-xs mt-4  sm:text-base'>© civiccraft 2023 - All Rights Reserved</p>
                </div>
                {/* Download app section */}
                <div className='hidden md:block w-[30rem] mt-[2rem]'>
                    <div className="mt-10 flex w-full flex-col justify-end mx-[-12rem] text-white sm:flex-row md:mt-0">
                        <div className="mt-[8rem] flex absolute bottom-[-10] flex-col gap-14 sm:mt-0">
                            <p className="font-poppins text-3xl font-extrabold">Download the app</p>
                            <div className="flex gap-12 ml-8 sm:flex-col">
                                <a target="_blank" href="#">
                                    <img
                                        alt="Google Play Store"
                                        loading="lazy"
                                        width={200}
                                        height={60}
                                        decoding="async"
                                        data-nimg={1}
                                        style={{ color: "transparent" }}
                                        src={Google}
                                    />
                                </a>
                                <a target="_blank" href="#">
                                    <img
                                        alt="Apple App Store"
                                        loading="lazy"
                                        width={200}
                                        height={50}
                                        decoding="async"
                                        data-nimg={1}
                                        style={{ color: "transparent" }}
                                        src={Apple}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
