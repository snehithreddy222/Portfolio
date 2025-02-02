import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
    {/*---web3form----------*/}
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eb7f1c4e-16e2-4e22-ad6f-95ce08126fe9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    
    <div className='w-full px-[12%] py-10 scroll-mt-200 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none' id="contact">
            <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
            <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I'd love to hear from you! If you have any question, comment,s or feedback,
                 please use the form below.
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto mt-10 mb-8 gap-6'>
                    <input name="name" className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' type='text' placeholder='Enter your name' required/>
                    <input name="email" className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' type='email' placeholder='Enter your email' required/>
                </div>
                <textarea name="message"  className='w-full mb-6 p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' rows={6} placeholder='Enter your message'></textarea>
                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2
                bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit now <Image src={assets.right_arrow_white} alt="" 
                className="w-4" /></button>

                <p className='mt-4'>{result}</p>
                
            </form>
    </div>
  )
}

export default Contact
