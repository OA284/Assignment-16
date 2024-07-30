import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-[#2c3e50] mt-[-6.5rem] fixed w-full z-50">
            <div className="mx-auto px-2 sm:px-6 lg:px-28">
                <div className="relative flex h-[6.5rem] items-center justify-center">
                    <div className="absolute inset-y-0` right-5 flex items-center lg:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    
                    <div className="flex flex-1 items-center lg:justify-between lg:items-center sm:items-stretch sm:justify-start">
                        <div className="flex text-[33px] font-bold  items-center text-white">
                            <Link to="/"> <h1>START FRAMEWORK</h1> </Link>
                        </div>
                        
                        <div className="navbutton11 hidden pe-10 ml-6">
                            <div className="flex space-x-4 text-white gap-x-4 text-md font-bold items-center">
                                <ul className='flex flex-row gap-x-10 text-white'>
                                    <li>
                                        <NavLink to="/About" className="text-white">About</NavLink>
                                    </li>
                                    
                                    <li>
                                        <NavLink to="/Portfolio">Portfolio</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/Contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <ul className='text-white ms-4 font-extrabold'>
                        <li className='mb-10'>
                            <NavLink to="/About" className="text-white">ABOUT</NavLink>
                        </li>

                        <li className='mb-10'>
                            <NavLink to="/Portfolio">PORTFOLIO</NavLink>
                        </li>

                        <li className='mb-10'>
                            <NavLink to="/Contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
