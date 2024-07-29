'use client'
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from "next/link";
import Container from "./Container";

const Header = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'About' },
        { id: 3, text: 'Skills' },
        { id: 4, text: 'Services' },
        { id: 5, text: 'Portfolio' },
        { id: 6, text: 'Contact' },
    ];
    return (
        <Container>
            <div className=' flex justify-between items-center h-24 mx-auto '>
                {/* Logo */}
                <h1 className='w-full text-xl font-bold'>Mehetaj.</h1>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4  rounded-xl m-2 cursor-pointer duration-300 hover:text-gray-600'
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full  bg-gray-200 ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <h1 className='w-full text-3xl font-bold m-4'>Mehetaj.</h1>

                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600'
                        >
                            {item.text}
                            
                        </li>
                    ))}
                </ul>
            </div>

        </Container>
    );
};

export default Header;