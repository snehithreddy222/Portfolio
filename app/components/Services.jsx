import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = ({isDarkMode}) => {
  return (
    <div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration: 1 }} className='w-full px-[12%] py-10 scroll-mt-200' id="services">
      <h4 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1,y:0 }} transition={{ duration: 0.4,delay :0.5 }} className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
      <h2 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1,y:0 }} transition={{ duration: 0.5,delay :0.6 }} className='text-center text-5xl font-Ovo'>My Services</h2>
      <p initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration: 1,delay:0.7 }}  className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I am a full stack developer from Chicago, USA with 2.9 years of experience in Virtusa Corporation.
      </p>
      <div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration: 1,delay:1 }} className='grid grid-cols-auto  gap-6 my-10'>
        {serviceData.map(({icon,title,description,link,index})=>(
            <div whileHover={{scale:1.05}} key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
            dark:hover:bg-darkHover dark:hover:shadow-white'>
                <Image src={icon} alt="" className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read More <Image src={assets.right_arrow} alt="" className='w-4' /></a>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services
