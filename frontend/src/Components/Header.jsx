import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef(null);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (e) => {
        if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Event listener to click outside
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="border-b sticky top-0 shadow-lg p-5 md:p-6 bg-white">
            <div className="flex justify-between items-center flex-wrap">
                <h1 className="font-bold text-2xl text-gray-800">PR Management System</h1>
                {/* Menu icon only visible on small screens */}
                <div className="relative md:hidden" ref={dropDownRef}>
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none text-3xl">
                        <IoMenu />
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                            <div className="py-2">
                                <a href="#" className="block text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">Dashboard</a>
                                <a href="#" className="block text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">PR View</a>
                                <a href="#" className="block text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">Analytics</a>
                                <a href="#" className="block text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">Settings</a>
                            </div>
                        </div>
                    )}
                </div>
                {/* Links visible on medium and large screens */}
                <div className="hidden md:flex space-x-6"> {/* Flex container for links */}
                    <a href="#" className="text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">PR View</a>
                    <a href="#" className="text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">Dashboard</a>
                    <a href="#" className="text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">Analytics</a>
                    <a href="#" className="text-base font-bold text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">Settings</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
