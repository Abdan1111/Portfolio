"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";


// const handleLink1 = () => {
//   window.open(data.url, '_blank');     
// }

const Herosection = () =>  {
  // const router = useRouter()
  return (
    <section>
       <div className='grid grid-cols-1 sm:grid-cols-12 '>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
             <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-slate-500 to-amber-700">Hello, I'am {""}  </span>
              <br />
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Abdulquadri',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a programmer',
        1000,
        'an UI/UX designer',
        1000,
        // 'a Scrum Master',
        // 1000
      ]}
      wrapper="span"
      speed={30}
      // style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

              
              </h1>
             <p className=' text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            I am a project manager of both Agile and waterfall methodologies.
            </p>
            <div>
              <Link href = "https://abdan1111.github.io/My-Portfolio-web/">
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-amber-700 via-slate-500 to-amber-700 hover:big-slate-200 text-white'>
                  Hire me
                  </button>
                  </Link >
                  <Link href = "https://abdan1111.github.io/My-Portfolio-web/">
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-amber-700 via-slate-500 to-amber-700   mt-3 text-white'>
                  <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 '>Download CV</span>
                  </button></Link>
            </div>
            </div>
            <div className='col-span-5 place-self-center mt-8 lg:mt-0'>
            <div className='rounded-full mb-4 bg-[#181818] w-[350px] h-[350px] lg:w-[400] lg:h-[400] relative'>
            <Image
            src="/images/my-p-i.png"
            alt='hero image'
            className='absolute transform -translate-x-1/2 -translate-y-2/3 top-1/2 lg:top-1/2 left-1/2'
            width={300}
            height={300}
            />
            </div>
            </div>
        </div>
    </section>
  );
};

export default Herosection;









