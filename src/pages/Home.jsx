/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import myprofile from '../assets/image/IMG_20230121_213841.jpg';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-[100%] h-[100%]">        
      <div className='flex flex-col items-start justify-center w-1/2 h-screen gap-4 md:ml-9'>
        <motion.h1 className="text-5xl font-bold text-white" initial={{x:-1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 10, type:"spring", stiffness:50}}>
          Hey I am <span className="ml-6 text-blue-600">Balaji</span>
        </motion.h1>
        <motion.p className="font-mono font-bold text-white" initial={{x:-1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 10, type:"spring", stiffness:50}}>
          As a dedicated developer, I specialize in core Java and the MERN stack, building efficient and scalable web applications...
        </motion.p>
        <motion.div className="w-full h-[4rem] flex flex-row justify-start items-center gap-5" initial={{y:0}} animate={{y:[0,-20,0]}} transition={{repeat:Infinity, repeatType:"loop" , duration:2}}>
          {/* <FaReact className='text-5xl transition-transform duration-300 text-cyan-400 hover:scale-125' />
          <FaJava className='text-5xl text-red-700 transition-transform duration-300 hover:scale-125' />
          <IoLogoJavascript className="text-5xl text-yellow-200 transition-transform duration-300 hover:scale-125" />
          <FaNodeJs className="text-5xl text-green-800 transition-transform duration-300 hover:scale-125" />
          <SiExpress className="text-5xl text-blue-400 transition-transform duration-300 hover:scale-125" />
          <SiMysql className="text-5xl text-blue-500 transition-transform duration-300 hover:scale-125" />
          <FaGithub className="text-5xl transition-transform duration-300 hover:scale-125" /> */}
        <a href='https://github.com/BALAJI1672003'>  
        <FaGithub className="text-5xl text-white transition-transform duration-300 hover:scale-125"/>
        </a>
        <a href='https://www.linkedin.com/in/balaji-a-3bb1532b2/'>  
        <CiLinkedin className="text-5xl text-blue-500 transition-transform duration-300 hover:scale-125"/>
        </a>
        <a href="mailto:abalaji1672003@gmail.com">
        <CiMail className="text-5xl text-pink-600 transition-transform duration-300 hover:scale-125"/>
        </a>
        </motion.div>
      </div>
      <motion.div className='flex flex-col items-center justify-center w-1/2 h-screen gap-4' initial={{y:-1000}} animate={{y:0, opacity:1}} transition={{duration:10 ,type:"spring", stiffness:50}}>
      <div className="flex flex-row items-center justify-center w-full">

      </div>
        <img src={myprofile} className="rounded-full w-[20rem] h-[20rem]" />
        <motion.p className="ml-5 font-bold text-white" initial={{y:0}} animate={{ y:[0,-20,0]}} transition={{duration: 2,repeat:Infinity,repeatType:"loop"}}>"If you can't achieve something,<br/><span className="text-blue-700"> keep striving for it until your last breath"</span></motion.p>
      </motion.div>
    </div>
    </>
  )
}

export default Home;
