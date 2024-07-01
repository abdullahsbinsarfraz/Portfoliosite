"use client"
import Link from 'next/link'
import React from 'react'
import { AiFillCloseCircle, AiOutlineClose, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BsPersonCheckFill } from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-svh py-16 scroll-smooth'>
      <div className='max-w-[1024px] m-auto p-4'>
        <div className='flex flex-col justify-center items-center text-center mt-52'>
          <p className=' text-gray-400 py-4 tracking-widest'>TRANSFORMING THOUGHTS INTO FRONT-END REALITIES!</p>
          <h1 >
            Hi, I'm <span className='text-[#709dff]'>Abdullah</span>.
          </h1>
          <h1>A Front End web Developer.</h1>
          <p className=' text-gray-400 py-4'>Front End Web Developer with a strong understanding of HTML, CSS, and JavaScript, coupled with hands-on experience in Next.js for building Responsive and efficient web sites.</p>
        </div>
        <div>
          <div className='flex justify-center gap-1 md:gap-2 items-center'>
            <Link href='https://github.com/abdullahsbinsarfraz' target='_blank' >
              <div className='relative rounded-full group triangle shadow-lg shadow-gray-400 p-3 md:p-5 hover:scale-110 duration-300 '>
                      <AiOutlineGithub size={25}/>
                      <div className='absolute opacity-0 group-hover:opacity-100 bottom-[-28px] right-[8px] pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Github</div>
              </div>
            </Link>
            
            <Link href='https://www.linkedin.com/in/abdullah-sarfraz-a1b23989/' target='_blank' >
              <div className='relative group rounded-full shadow-lg shadow-gray-400 p-3 md:p-5 hover:scale-110 duration-300 '>
                      <AiOutlineLinkedin size={25}/>
                      <div className='absolute opacity-0 group-hover:opacity-100 bottom-[-28px] right-[8px] pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Linkidin</div>
              </div>
            </Link>
            
            <Link href='./' target='_blank' >
              <div className='relative group rounded-full shadow-lg shadow-gray-400 p-3 md:p-5 hover:scale-110 duration-300 '>
                      <AiOutlineMail size={25}/>
                      <div className='absolute opacity-0 group-hover:opacity-100 bottom-[-28px] right-[8px] pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Email</div>
              </div>
            </Link>

            <Link href='#contact' >
              <div className='relative group rounded-full shadow-lg shadow-gray-400 p-3 md:p-5 hover:scale-110 duration-300 '>
                      <BsPersonCheckFill size={25}/>
                      <div className='absolute opacity-0 group-hover:opacity-100 bottom-[-28px] right-[8px] pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Contact</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main