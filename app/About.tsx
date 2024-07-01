import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full lg:h-svh py-16'>
        <div className=' max-w-[1440px] m-auto p-6 grid md:grid-cols-3 gap-3'>
             <div className='col-span-2'>
                    <p className='uppercase text-2xl font-semibold text-[#709dff] tracking-widest'>About</p>
                    <p className='text-4xl py-4 font-bold'>Who I am?</p>
                    <p className=' text-gray-400'>Hi, my name is Abdullah. I've done Chemical Engineering. I always had a knack for technology and computers. I remember while i was living in my dorms my roomamates were all Computer Science Majors. it enstilled a love for Computer science in my heart.After four years of working in the Chemical industry in 2020 i came across CS50 Harvard's Introduction to Computer Science course which reignited my enthusiasm for programming. I started learning HTML, CSS and then moved to JavaScript. Fascinated by the love of making a website from scratch i was drawn to programming like a bug to light.</p>
            </div>
            <div className='rounded-xl shadow-xl shadow-gray-400 p-6 w-svw md:w-full'>
                    <img className='rounded-lg hover:scale-105 ease-in duration-300' src='/assets/Resume.png' alt='./'/>
            </div>
            
        </div>
    </div>
  )
}

export default About