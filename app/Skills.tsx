import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full h-svh py-16 scroll-smooth'>
        <div className='max-w-[1440px] m-auto p-4'>
            <p className='uppercase text-2xl font-semibold text-[#709dff] tracking-widest'>Skills</p>
            <p className='text-4xl py-4 font-bold'>What I can do?</p>
            <div className='grid sm:grid-cols-2 gap-6 p-4 mt-5'>
                <div className='flex justify-between items-center rounded-xl shadow-xl shadow-gray-400 p-4 hover:scale-105 duration-300'>
                    <img src='/assets/Skills/html.png' width={64} height={64} className=''></img>
                    <h3 className='tracking-widest font-semibold'>HTML</h3>
                </div>
                <div className='flex justify-between items-center rounded-xl shadow-xl shadow-gray-400 p-4 hover:scale-105 duration-300'>
                    <img src='/assets/Skills/css.png' width={64} height={64} className=''></img>
                    <h3 className='tracking-widest font-semibold'>CSS</h3>
                </div>
                <div className='flex justify-between items-center rounded-xl shadow-xl shadow-gray-400 p-4 hover:scale-105 duration-300'>
                    <img src='/assets/Skills/tailwind.png' width={64} height={64} className=''></img>
                    <h3 className='tracking-widest font-semibold'>Tailwind</h3>
                </div>
                <div className='flex justify-between items-center rounded-xl shadow-xl shadow-gray-400 p-4 hover:scale-105 duration-300'>
                    <img src='/assets/Skills/javascript.png' width={64} height={64} className=''></img>
                    <h3 className='tracking-widest font-semibold'>JavaScript</h3>
                </div>
                <div className='flex justify-between items-center rounded-xl shadow-xl shadow-gray-400 p-4 hover:scale-105 duration-300'>
                    <img src='/assets/Skills/react.png' width={64} height={64} className=''></img>
                    <h3 className='tracking-widest font-semibold'>React</h3>
                </div>
                <div className='flex justify-between items-center rounded-xl shadow-xl shadow-gray-400 p-4 hover:scale-105 duration-300'>
                    <img src='/assets/Skills/nextjs.png' width={64} height={64} className=''></img>
                    <h3 className='tracking-widest font-semibold'>Next.js</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills