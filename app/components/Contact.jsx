import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
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
      setResult("Form Submitted Successfully ✓");
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (

    <div className='w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-900/10' id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>
          Connect with me
        </h4>
        <h2 className='text-center text-5xl font-Ovo mb-4'>
          <span className="gradient-text">Get in touch</span>
        </h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-400'>
          I'd love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12'
      >
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className='bg-white dark:bg-gray-900/80 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-glow hover:border-primary-400 dark:hover:border-primary-500 transition-all'
        >
          <div className='w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>Email</h3>
          <a href="mailto:snehithreddy022@gmail.com" className='text-primary-600 dark:text-primary-400 hover:underline text-sm'>
            snehithreddy022@gmail.com
          </a>
        </motion.div>

        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className='bg-white dark:bg-gray-900/80 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-glow hover:border-accent-400 dark:hover:border-accent-500 transition-all'
        >
          <div className='w-14 h-14 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>Phone</h3>
          <a href="tel:+13123582970" className='text-accent-600 dark:text-accent-400 hover:underline text-sm'>
            +1 (312) 358-2970
          </a>
        </motion.div>

        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className='bg-white dark:bg-gray-900/80 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-glow hover:border-success-400 dark:hover:border-success-500 transition-all'
        >
          <div className='w-14 h-14 bg-gradient-to-br from-success-400 to-success-600 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>Location</h3>
          <p className='text-success-600 dark:text-success-400 text-sm'>Chicago, IL, USA</p>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto bg-white dark:bg-gray-900/80 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800'
      >
        <div className='grid grid-cols-auto gap-6 mb-6'>
          <input
            name="name"
            className='flex-1 p-4 outline-none border-2 border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:border-primary-500 dark:focus:border-primary-400 transition-all text-gray-800 dark:text-gray-200'
            type='text'
            placeholder='Your Name'
            required
          />
          <input
            name="email"
            className='flex-1 p-4 outline-none border-2 border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:border-primary-500 dark:focus:border-primary-400 transition-all text-gray-800 dark:text-gray-200'
            type='email'
            placeholder='Your Email'
            required
          />
        </div>
        <textarea
          name="message"
          className='w-full mb-6 p-4 outline-none border-2 border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:border-primary-500 dark:focus:border-primary-400 transition-all text-gray-800 dark:text-gray-200'
          rows={6}
          placeholder='Your Message'
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type='submit'
          className='py-4 px-10 w-full md:w-auto flex items-center justify-center gap-2
          bg-gradient-primary text-white rounded-full mx-auto font-medium shadow-lg hover:shadow-glow transition-all'
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        {result && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 text-center font-medium ${result.includes('Successfully') ? 'text-success-600 dark:text-success-400' : 'text-red-600 dark:text-red-400'}`}
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </div>
  )
}

export default Contact
