import React from 'react';
import { Link } from 'react-scroll';
import footer from "../assets/footer.svg";
import Google from '../assets/google.svg';
import Apple from '../assets/apple.svg';


const Footer = () => {
    return (
        <div id="contact-us">
            <div className="mt-8 bg-[#2E3E5C] pt-9">
                <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
                    <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
                        <div className="md:w-[316px] flex items-center">
                            <img
                                src={footer}
                                alt="Kathavachak Logo"
                                className="h-18 mr-4"
                            />
                            <h1 className="text-white font-medium font-poppins text-3xl">kathavachak</h1>
                        </div>
                        <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
                            <div className="mt-6 flex flex-col gap-8 sm:mt-0">
                                <p className="font-poppins text-[18px] font-bold">Download the app</p>
                                <div className="flex gap-4 sm:flex-col">
                                    <a target="_blank" href="#">
                                        <img
                                            alt="Google Play Store"
                                            loading="lazy"
                                            width={168}
                                            height={50}
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
                                            width={168}
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
                    <hr className="mt-[30px] text-white" />
                    <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
                        <p className="text-[10px] font-poppins font-normal text-white md:text-[12px]">
                            © civiccraft 2023 - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
