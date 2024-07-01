import Link from 'next/link'
import React from 'react'
import { AiFillCloseCircle, AiOutlineClose, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BsPersonCheckFill } from 'react-icons/bs'
import { HiChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className=' w-full h-svh py-16 mb-20 scroll-smooth'>
        <div className='max-w-[1440px] m-auto p-4'>
            <p className='text-4xl py-4 font-bold'>Get in touch</p>
            <div className='grid md:grid-cols-5 gap-6'>
                {/*Left side of Contact page containing Image and socila media icons */}
                <div className='col-span-2 rounded-xl shadow-xl shadow-gray-400 p-6'>
                    <img className='rounded-xl hover:scale-105 ease-in duration-300 py-6' src='/assets/contact.jpg'></img>
                    <h2>Abdullah Sarfraz</h2>
                    <h3>Front End Developer</h3>
                    <p>
                    I am available for freelance or full-time positions. Contact me and let's talk.
                    </p>
                    <p className='text-xl m-2 text-[#709dff]'>Let's Connect</p>
                    <div className='flex gap-2 md:gap-2'>
                        <Link href='https://github.com/abdullahsbinsarfraz' target='_blank' >
                            <div className='relative group rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 hover:scale-110 duration-300 cursor-pointer'>
                                    <AiOutlineGithub size={20} />
                                    <div className='absolute opacity-0 group-hover:opacity-100 -bottom-7 right-0 pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Github</div>
                            </div>
                        </Link>
                         
                        <Link href='https://www.linkedin.com/in/abdullah-sarfraz-a1b23989/' target='_blank' >
                            <div className='relative group rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 hover:scale-110 duration-300 '>
                                    <AiOutlineLinkedin size={20} />
                                    <div className='absolute opacity-0 group-hover:opacity-100 -bottom-7 right-0 pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Linkedin</div>
                            </div>
                        </Link>

                        <Link href='./' target='_blank' >
                            <div className='relative group rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 hover:scale-110 duration-300 '>
                                    <AiOutlineMail size={20} />
                                    <div className='absolute opacity-0 group-hover:opacity-100 -bottom-7 right-0 pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Email</div>
                            </div>
                        </Link>

                        <Link href='./' target='_blank' >
                            <div className='relative group rounded-full shadow-lg shadow-gray-400 p-4 md:p-5 hover:scale-110 duration-300 '>
                                    <BsPersonCheckFill size={20}/>
                                    <div className='absolute opacity-0 group-hover:opacity-100 -bottom-7 right-0 pointer-events-none bg-black/25 p-1 rounded-sm text-xs text-white'>Contact</div>
                            </div>
                        </Link>
                    </div>
                </div>
                {/*Right side of Contact page containing Contact Form */}
                <div className=' col-span-2 md:col-span-3 rounded-xl shadow-xl shadow-gray-400 p-6'>
                    <form action='https://getform.io/f/3509e674-7077-4587-a15f-3c5a32ace5d9' method='POST' encType='multipart/form-data' className='grid grid-cols-2 gap-2'>
                        <div className=' w-full flex flex-col'>
                            <label  className='uppercase font-semibold'>Name</label>
                            <input className='p-4 border-gray-400 border-2 rounded-md' type='text' name='name'/>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label className='uppercase font-semibold'>Phone Number</label>
                            <input  className='p-4 border-gray-400 border-2 rounded-md' type='text' name='Phone'/>
                        </div>
                        <div className='grid col-span-2 w-full'>
                            <label className='uppercase font-semibold'>Email</label>
                            <input  className='p-4 border-gray-400 border-2 rounded-md' type='email' name='email'/>
                        </div>
                        <div className='grid col-span-2 w-full'>
                            <label className='uppercase font-semibold'>Subject</label>
                            <input  className='p-4 border-gray-400 border-2 rounded-md' type='text' name='subject'/>
                        </div>
                        <div className='grid w-full col-span-2'>
                            <label className='uppercase font-semibold'>Message</label>
                            <textarea  className='p-4 border-gray-400 border-2 rounded-md' rows={15} name='message'/>
                        </div>
                        <button className='grid col-span-2 w-full py-3 mt-2 font-semibold'>Send Message</button>
                    </form>
                    
                </div>
            </div>
            {/*Back to Home Button */}
            <div className='flex justify-center py-4 mt-8'>
                <Link href='./' >
                    <div className='p-4 rounded-full shadow-xl shadow-gray-400 animate-bounce hover:scale-110 ease-in duration-300 cursor-pointer'>
                        <HiChevronDoubleUp size={30} color='#5651e5'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact