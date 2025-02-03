import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const About = ({isDarkMode}) => {
    return (
        <div   id="about" className='w-full px-[12%] py-10 scroll-mt-200'>
            <h4  className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2  className='text-center text-5xl font-Ovo'>About me</h2>
            <div  className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                
                <div  className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image1} alt="user" className="w-full rounded-3xl" />
                </div>
                
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        I am Snehith Reddy, a results-driven Full Stack Developer with expertise in MERN stack, Python, and PL/SQL, currently pursuing my Master’s in Computer Information Technology at Elmhurst University. With experience as a Software Engineer at Virtusa, I have worked on web applications, data migrations, and backend development, leveraging technologies like React, TypeScript, Node.js, Oracle DB, and Salesforce. I have also built scalable applications, including a MERN-based food delivery app and a BT client’s enterprise platform with dashboards and analytics.
                        Additionally, I have experience in firmware development, automated testing, and working in both Windows and Linux environments. Passionate about solving complex problems and optimizing performance, I am actively seeking opportunities as a Full Stack Developer to contribute my skills and grow in a dynamic environment.
                    </p>

            </div>
            <div  className='flex-1'>
                    <ul  className='grid grid-cols-1 sm:grid-cols-3 gap-6 mx-w-2xl'>
                        {infoList.map(({icon,iconDark,title,description,index})=>(
                            <li   key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                             hover:bg-bluecolor  hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                                <Image src={isDarkMode ? iconDark:icon} alt="title" className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                                </li>
                        ))}
                    </ul>
                    <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools & Technologies I use</h4>
                    <ul  className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool,index)=>(
                            <li  key={index} className='flex items-center justify-center w-14 sm:w-15
                            border-gray-400 aspect-square border rounded-lg cursor-pointer hover:-translate-y-1  duration-500'><Image src={tool} alt="tool" className='w-5 sm:w-7' /></li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}

export default About
