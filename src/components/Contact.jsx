/* eslint-disable react/no-unknown-property */

import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import SectionWrapper  from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import { useState } from "react";
import toast from 'react-hot-toast';


const Contact = () => {
  
  const [form,setForm] = useState({
     name : '',
     message : ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.name || !form.message) {
     
      toast.error("please provide your name and a message !") ;
      return ;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ "form-name": "contact", ...form })
    })
      .then(() => toast.success("message sent! thank you"))
      .catch(error => toast.error(error));

  }

  return (
    <> 
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          netlify
          className='mt-12 flex flex-col gap-8'
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder="What's your name?"
              onChange={(e) => setForm(prev => {return {...prev, name : e.target.value}})}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
            
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              placeholder='What you want to say?'
              onChange={(e) => setForm(prev => {return {...prev, message : e.target.value}})}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <div data-netlify-recaptcha="true"></div>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
           
          >
         Send
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
