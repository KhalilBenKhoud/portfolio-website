/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion"
import { styles } from "../styles"
import {fadeIn, textVariant} from '../utils/motion'
import SectionWrapper from "../hoc/SectionWrapper"



const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText }>Overview.</h2>
   </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className="mt-4 text-secondary text-[17x] max-w-3xl leading-[30px]"
    >
    I am a final-year student at Esprit in Tunisia, pursuing a degree in Computer Engineering. I have practical experience in web and mobile development, and I am passionate about building innovative digital solutions. In addition to my technical studies, I am enrolled in a double diploma program with the University of Le Mans, where I study actuarial science. I'm currently seeking an internship opportunity to further develop my skills and contribute to meaningful projects.
    
    </motion.p>
    <div className="flex gap-5">
    <a href="https://github.com/KhalilBenKhoud" target="_blank" className="mt-5 inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.386.6.111.82-.261.82-.577v-2.25c-3.338.726-4.043-1.438-4.043-1.438-.546-1.389-1.334-1.758-1.334-1.758-1.09-.745.083-.73.083-.73 1.203.084 1.835 1.236 1.835 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.774.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.302 1.23.96-.267 1.988-.4 3.008-.405 1.02.005 2.048.138 3.008.405 2.292-1.552 3.298-1.23 3.298-1.23.654 1.653.242 2.873.118 3.176.77.841 1.234 1.912 1.234 3.222 0 4.608-2.804 5.625-5.475 5.921.43.371.813 1.102.813 2.222v3.293c0 .318.218.692.824.575C20.565 21.796 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
  </svg>
  GitHub
</a>
<a href="./resume.pdf" download className="mt-5 inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
  Download CV
</a>

</div>


   </>
  )
}

export default SectionWrapper(About,"about") ;