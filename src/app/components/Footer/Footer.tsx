'use client';

import React, { FC } from "react";
import Image from "next/image";
// import logo from "../../../../public/images/logo.png";

const Footer: FC = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-5">
                {/* Top Section */}
                <div className="flex flex-col items-center space-y-4">
                    {/* Logo */}
                    <div>
                        <Image src={"/"} alt="Logo" width={70} height={70} priority />
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <ul className="flex flex-wrap items-center justify-center space-x-6 text-md font-medium mb-2">
                            {["Who we are", "What we do", "Services", "Gallery", "Press", "Contact us"].map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="hover:text-gray-400">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 mb-2">
                    <p className="text-gray-600">© 2024 Abreshevents. All rights reserved.</p>
                    <ul className="flex space-x-4 mt-4 md:mt-0">
                        {["Terms", "Privacy", "Cookies", "Refund"].map((policy, idx) => (
                            <li key={idx}>
                                <a href="#" className="hover:text-gray-200">
                                    {policy}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
