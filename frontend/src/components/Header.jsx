import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleClickOutside = (e) => {
        if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
            className="sticky top-0 z-50 bg-white border-b shadow-lg"
            style={{ minHeight: "64px" }} // Optional styling to prevent collapse
        >
            <div className="flex justify-between items-center px-5 md:px-6 py-4">
                <h1 className="font-bold text-2xl text-gray-800">PR Management System</h1>

                {/* Mobile menu */}
                <div className="relative md:hidden" ref={dropDownRef}>
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 focus:outline-none text-3xl"
                    >
                        <IoMenu />
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                            <div className="py-2">
                                {/* Reordered menu items */}
                                <a href="#"
                                    className="block text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                                    Dashboard
                                </a>
                                <a href="#" className="block text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                                    PR View
                                </a>
                                <a href="#" className="block text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                                    Analytics
                                </a>
                                <a href="#" className="block text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                                    Settings
                                </a>
                            </div>
                        </div>
                    )}
                </div>
                {/* Desktop menu */}
                <div className="hidden md:flex space-x-6">
                    {/* Reordered menu items */}
                    <a href="#" className="text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                        Dashboard
                    </a>
                    <a href="#" className="text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                        PR View
                    </a>
                    <a href="#" className="text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                        Analytics
                    </a>
                    <a href="#" className="text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                        Settings
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
