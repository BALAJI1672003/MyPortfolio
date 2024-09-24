/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";
import myprofile from '../assets/image/IMG_20230121_213841.jpg';
import { motion } from "framer-motion";

const Home = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen md:flex-row">
      <div className='flex flex-col items-start justify-center w-full h-full gap-4 px-4 md:w-1/2 md:ml-9 md:px-0'>
        <motion.h1 className="text-4xl font-bold text-white md:text-5xl" initial={{x:-1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 1, type:"spring", stiffness:50}}>
          Hey I am <span className="ml-4 text-blue-600 md:ml-6">Balaji</span>
        </motion.h1>
        <motion.p className="font-mono text-sm font-bold text-white md:text-base" initial={{x:-1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 1, type:"spring", stiffness:50}}>
          As a dedicated developer, I specialize in core Java and the MERN stack...
        </motion.p>
        <motion.div className="flex flex-row items-center justify-start w-full h-16 gap-5" initial={{y:0}} animate={{y:[0,-20,0]}} transition={{repeat:Infinity, repeatType:"loop" , duration:2}}>
          <a href='https://github.com/BALAJI1672003'>
            <FaGithub className="text-4xl text-white transition-transform duration-300 md:text-5xl hover:scale-125"/>
          </a>
          <a href='https://www.linkedin.com/in/balaji-a-3bb1532b2/'>
            <CiLinkedin className="text-4xl text-blue-500 transition-transform duration-300 md:text-5xl hover:scale-125"/>
          </a>
          <a href="mailto:abalaji1672003@gmail.com">
            <CiMail className="text-4xl text-pink-600 transition-transform duration-300 md:text-5xl hover:scale-125"/>
          </a>
        </motion.div>
      </div>
      <motion.div className='flex flex-col items-center justify-center w-full h-full gap-4 md:w-1/2' initial={{y:-1000}} animate={{y:0, opacity:1}} transition={{duration:1 ,type:"spring", stiffness:50}}>
        <img src={myprofile} className="w-48 h-48 rounded-full md:w-80 md:h-80" alt="Profile" />
        <motion.p className="ml-2 font-bold text-center text-white md:ml-5" initial={{y:0}} animate={{ y:[0,-20,0]}} transition={{duration: 2,repeat:Infinity,repeatType:"loop"}}>
          "If you can't achieve something,<br/><span className="text-blue-700"> keep striving for it until your last breath"</span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
