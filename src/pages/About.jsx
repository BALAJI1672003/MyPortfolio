/* eslint-disable react/no-unescaped-entities */
import { easeInOut, motion } from "framer-motion";
import collegeimg from '../assets/image/college.jpeg';
import schoolimage from '../assets/image/school.jpeg';
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const About = () => {
  const [showInfo, setShowInfo] = useState(null); 

  return (
    <div className="flex justify-center w-[100%] h-[100%] items-center border-solid flex-row">
      <motion.div
        className="flex w-[45%] h-[100%] border-r-2 border-white flex-col text-white gap-10"
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <h1 className="inline text-xl text-center text-white font-poppins">
          About me
        </h1>
        <div className="font-poppins">
          <p>
            Hi, I'm Balaji, a passionate and dedicated Full Stack Developer with
            a focus on building efficient and visually appealing web
            applications. I have hands-on experience with the MERN stack
            (MongoDB, Express.js, React, Node.js), along with proficiency in
            Java and MySQL for backend development.
            <br />
            <br />
            I thrive in environments where creativity meets technology, and I
            enjoy solving real-world problems through coding. I am constantly
            learning and improving my skills to stay up-to-date with the latest
            industry trends and best practices. I have built projects ranging
            from e-commerce platforms to social media apps and Tic Tac Toe
            games, always aiming for clean, maintainable code and smooth user
            experiences.
          </p>
        </div>
      </motion.div>

      <motion.div className="flex w-[60%] h-[100%]  flex-col text-white ml-5" initial={{x:1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 10, type:"spring", stiffness:50}}>
        <h1 className="text-xl text-center font-poppins">Education</h1>
        <div className="flex flex-row h-[50%] border-b-2 border-white gap-20 justify-center items-center">
          <div 
            className="relative" 
            onMouseEnter={() => setShowInfo('school')} 
            onMouseLeave={() => setShowInfo(null)}
          >
            <motion.img
              src={schoolimage}
              className="rounded-full h-[8rem] w-[8rem]"
              whileHover={{ scale: 1.1 }}
            />
            {showInfo === 'school' && (
              <motion.div
                className="absolute left-[-150%] top-[-20%] w-[15rem] p-4 bg-gray-800 text-white rounded-lg shadow-lg text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold">School</h3>
                <p>S.H.N Edward Higher Secondary School</p>
                <p>percentage: 82.6%</p>
              </motion.div>
            )}
          </div>

          <div 
            className="relative" 
            onMouseEnter={() => setShowInfo('college')}
            onMouseLeave={() => setShowInfo(null)} 
          >
            <motion.img
              src={collegeimg}
              className="rounded-full h-[8rem] w-[8rem]"
              whileHover={{ scale: 1.1 }}
            />
            {showInfo === 'college' && (
              <motion.div
                className="absolute right-[-150%] top-[-20%] w-[15rem] p-4 bg-gray-800 text-white rounded-lg  text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold">College</h3>
                <p>Sri Shakthi Institute of Engineering and Technology</p>
                <p>Bachelor of Technology</p>
                <p>CGPA: 7.8</p>
              </motion.div>
            )}
          </div>
        </div>
          <div className="flex flex-col items-center justify-center w-full gap-10 h-[50%] mt-5">
            <div>              
            <h1 className="text-xl">Skills</h1>
            </div>
            <motion.div className="flex flex-row justify-center items-center w-full h-[20%] gap-5">
              <motion.div  initial={{y:0}} animate={{y:[0,-20,0]}} transition={{repeat:Infinity, repeatType:"loop" , duration:2, ease:easeInOut}}>
                <FaReact className='text-5xl transition-transform duration-300 text-cyan-400 hover:scale-125' />
                <p>React</p>
              </motion.div>
              <motion.div  initial={{y:0}} animate={{y:[0,20,0]}} transition={{repeat:Infinity, repeatType:"loop" , duration:2, ease:easeInOut}}>
              <FaJava className='text-5xl text-red-700 transition-transform duration-300 hover:scale-125'  />
              <p>Java</p>
              </motion.div>
              <motion.div  initial={{y:0}} animate={{y:[0,-20,0]}} transition={{repeat:Infinity, repeatType:"loop" , duration:2, ease:easeInOut}}>
              <IoLogoJavascript className="text-5xl text-yellow-200 transition-transform duration-300 hover:scale-125" />
              <p>javascript</p>
              </motion.div>
              <motion.div  initial={{y:0}} animate={{y:[0,20,0]}} transition={{repeat:Infinity, repeatType:"loop" , duration:2, ease:easeInOut}}>
              <FaNodeJs className="text-5xl text-green-800 transition-transform duration-300 hover:scale-125" />
              <p>Node.js</p>
              </motion.div>
              <motion.div  initial={{y:0}} animate={{y:[0,-20,0]}} transition={{repeat:Infinity, repeatType:"loop" , duration:2, ease:easeInOut}}>
              <SiExpress className="text-5xl text-blue-400 transition-transform duration-300 hover:scale-125" />
              <p>Express.js</p>
              </motion.div>
              <motion.div  initial={{y:0}} animate={{y:[0,20,0]}} transition={{repeat:Infinity, repeatType:"loop" , duration:2, ease:easeInOut}}>
              <SiMysql className="text-5xl text-blue-500 transition-transform duration-300 hover:scale-125" />
              <p>Mysql</p>
              </motion.div>
              <motion.div  initial={{y:0}} animate={{y:[0,-20,0]}} transition={{repeat:Infinity, repeatType:"loop" , duration:2, ease:easeInOut}}>
              <FaGithub className="text-5xl transition-transform duration-300 hover:scale-125" />
              <p>Github</p>
              </motion.div>
            </motion.div>
          </div>
      </motion.div>
    </div>
  );
};

export default About;
