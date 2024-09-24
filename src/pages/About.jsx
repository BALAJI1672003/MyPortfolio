/* eslint-disable react/no-unescaped-entities */
import { easeInOut, motion } from "framer-motion";
import collegeimg from '../assets/image/college.jpeg';
import schoolimage from '../assets/image/school.jpeg';
import { useState } from "react";
import { FaReact, FaJava, FaNodeJs, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMysql } from "react-icons/si";

const About = () => {
  const [showInfo, setShowInfo] = useState(null);

  return (
    <div className="flex flex-col items-start justify-center w-full h-full p-6 md:flex-row">
      {/* About Me Section */}
      <motion.div
        className="flex flex-col w-full h-full gap-6 px-4 text-white md:w-1/2 md:px-8"
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <h1 className="text-xl font-bold text-center">About Me</h1>
        <div className="leading-relaxed text-justify font-poppins">
          <p>
            Hi, I'm Balaji, a passionate and dedicated Full Stack Developer with a focus on building efficient and visually appealing web applications.
            I have hands-on experience with the MERN stack (MongoDB, Express.js, React, Node.js), along with proficiency in Java and MySQL for backend development.
            <br /><br />
            I thrive in environments where creativity meets technology, and I enjoy solving real-world problems through coding.
            I am constantly learning and improving my skills to stay up-to-date with the latest industry trends and best practices.
          </p>
        </div>
      </motion.div>

      {/* Education and Skills Section */}
      <motion.div
        className="flex flex-col w-full h-full px-4 mt-10 text-white md:w-1/2 md:px-8 md:mt-0"
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <h1 className="text-xl font-bold text-center">Education</h1>

        {/* School and College Section */}
        <div className="flex items-center justify-around mt-5">
          {/* School */}
          <div
            className="relative"
            onMouseEnter={() => setShowInfo('school')}
            onMouseLeave={() => setShowInfo(null)}
          >
            <motion.img
              src={schoolimage}
              className="w-32 h-32 rounded-full"
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
                <p>Percentage: 82.6%</p>
              </motion.div>
            )}
          </div>

          {/* College */}
          <div
            className="relative"
            onMouseEnter={() => setShowInfo('college')}
            onMouseLeave={() => setShowInfo(null)}
          >
            <motion.img
              src={collegeimg}
              className="w-32 h-32 rounded-full"
              whileHover={{ scale: 1.1 }}
            />
            {showInfo === 'college' && (
              <motion.div
                className="absolute right-[-150%] top-[-20%] w-[15rem] p-4 bg-gray-800 text-white rounded-lg text-center"
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

        {/* Skills Section */}
        <div className="mt-10">
          <h1 className="mb-6 text-xl font-bold text-center">Skills</h1>
          <motion.div className="flex flex-wrap justify-center gap-8">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: easeInOut }}
            >
              <FaReact className="text-5xl transition-transform text-cyan-400 hover:scale-125" />
              <p className="text-center">React</p>
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: easeInOut }}
            >
              <FaJava className="text-5xl text-red-700 transition-transform hover:scale-125" />
              <p className="text-center">Java</p>
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: easeInOut }}
            >
              <IoLogoJavascript className="text-5xl text-yellow-300 transition-transform hover:scale-125" />
              <p className="text-center">JavaScript</p>
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: easeInOut }}
            >
              <FaNodeJs className="text-5xl text-green-800 transition-transform hover:scale-125" />
              <p className="text-center">Node.js</p>
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: easeInOut }}
            >
              <SiExpress className="text-5xl text-gray-400 transition-transform hover:scale-125" />
              <p className="text-center">Express.js</p>
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: easeInOut }}
            >
              <SiMysql className="text-5xl text-blue-500 transition-transform hover:scale-125" />
              <p className="text-center">MySQL</p>
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: easeInOut }}
            >
              <FaGithub className="text-5xl transition-transform hover:scale-125" />
              <p className="text-center">GitHub</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
