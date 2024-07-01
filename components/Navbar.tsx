"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillCloseCircle, AiOutlineClose, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BsPersonCheckFill } from 'react-icons/bs'
import About from '@/app/About'
import { off } from 'process'


const Navbar = () => {
    const [nav, setnav] = useState(false)
    const handleNav = () => {
        setnav(!nav)
    }
  return (
    <div className='fixed w-full h-20 bg-white z-[100] shadow-xl shadow-gray-400'>
        <div className='flex justify-between items-center w-full h-full p-2'>
            <Image className='hover:scale-110 ease-in duration-300 cursor-pointer' src='/assets/logob.png' alt='' width={64} height={64}></Image>
            <div className='hidden:md'>
                <ul className='hidden md:flex gap-4 font-semibold px-4'>
                    <Link href='#home' >
                        <li className='uppercase p-2 rounded-md hover:rounded-xl hover:scale-110 hover:-translate-y-1 ease-in duration-200'>Home</li>
                    </Link>
                    <Link href='#about' >
                        <li className='uppercase p-2 rounded-md hover:rounded-xl  hover:scale-110 hover:-translate-y-1  ease-in duration-200'>About</li>
                    </Link>
                    <Link href='#skills' >
                        <li className='uppercase p-2 rounded-md hover:rounded-xl  hover:scale-110 hover:-translate-y-1 ease-in duration-200'>Skills</li>
                    </Link>
                    <Link href='#projects' >
                        <li className='uppercase p-2 rounded-md hover:rounded-xl  hover:scale-110 hover:-translate-y-1 ease-in duration-200'>Projects</li>
                    </Link>
                    <Link href='#contact' >
                        <li className='uppercase p-2 rounded-md hover:rounded-xl  hover:scale-110 hover:-translate-y-1 ease-in duration-200'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>

        <div className={nav ? 'fixed w-[90%] md:w-[40%] h-full top-0 left-0 bg-white ease-in duration-700': "fixed w-[90%] md:w-[40%] h-full top-0 left-[-110%] bg-white ease-in duration-700"}>
            <div className='p-4 flex justify-between items-center'>
                <Image src='/assets/logob.png' alt='' width={64} height={64}></Image>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-2 hover:scale-110 ease-in duration-300'><AiOutlineClose size={25}/></div>
            </div>
            <div className='flex flex-col '>
                <ul className='font-semibold p-6 ml-4'>
                    <Link href='./' >
                        <li className='uppercase py-3 hover:scale-105 ease-in duration-200'>Home</li>
                    </Link>
                    <Link href='#about' >
                        <li className='uppercase py-3 hover:scale-105 ease-in duration-200'>About</li>
                    </Link>
                    <Link href='#skills' >
                        <li className='uppercase py-3 hover:scale-105 ease-in duration-200'>Skills</li>
                    </Link>
                    <Link href='#projects' >
                        <li className='uppercase py-3 hover:scale-105 ease-in duration-200'>Projects</li>
                    </Link>
                    <Link href='#contact' >
                        <li className='uppercase py-3 hover:scale-105 ease-in duration-200'>Contact</li>
                    </Link>
                    <p className='uppercase text-blue-400 text-xl mt-6'>let's Connect</p>
                </ul>
                
            </div>
            <div className='flex justify-center items-center w-auto gap-3 md:gap-3'> 
                <Link href='https://github.com/abdullahsbinsarfraz' target='_blank' >
                    <div className='relative group p-5 md:p-5 rounded-full shadow-lg shadow-gray-400 hover:scale-110 '>
                        <AiOutlineGithub size={20}/>
                        <div className='absolute opacity-0 group-hover:opacity-100 -bottom-7 right-0 pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Github</div>
                    </div>
                </Link>

                <Link href='https://www.linkedin.com/in/abdullah-sarfraz-a1b23989/' target='_blank' >
                    <div className=' relative group p-5 md:p-5 rounded-full shadow-lg shadow-gray-400 hover:scale-110 '>
                        <AiOutlineLinkedin size={20}/>
                        <div className='absolute opacity-0 group-hover:opacity-100 -bottom-7 right-0 pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Linkedin</div>
                    </div>
                </Link>
                
                <Link href='./' target='_blank' >
                    <div className='relative group p-5 md:p-5 rounded-full shadow-lg shadow-gray-400 hover:scale-110 '>
                        <AiOutlineMail size={20}/>
                        <div className='absolute opacity-0 group-hover:opacity-100 -bottom-7 right-0 pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Email</div>
                    </div>
                </Link>
                
                <Link href='#contact'  >
                    <div className='relative group p-5 md:p-5 rounded-full shadow-lg shadow-gray-400 hover:scale-110 '>
                        <BsPersonCheckFill size={20}/>
                        <div className='absolute opacity-0 group-hover:opacity-100 -bottom-7 right-0 pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Contact</div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar