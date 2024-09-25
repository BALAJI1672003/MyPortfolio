import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaReact, FaJava, FaNodeJs, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMysql } from "react-icons/si";
import { motion } from 'framer-motion';

const AboutProject = () => {
    const { id } = useParams();  // Get project ID from URL
    const [project, setProject] = useState(null);  // Initialize project state as null

    // Mapping of stack names to icons
    const stackIcons = {
        "Java": <FaJava className='text-5xl text-red-700 transition-transform duration-300 hover:scale-125' initial={{y:0}} animate={{y:[0,-20,0]}} transition={{duration: 2,type:"spring",}}/>,
        "React": <FaReact className='text-5xl transition-transform duration-300 text-cyan-400 hover:scale-125' initial={{y:0}} animate={{y:[0,-20,0]}} transition={{duration: 2,type:"spring",}}/>,
        "Node.js": <FaNodeJs className='text-5xl text-green-800 transition-transform duration-300 hover:scale-125' initial={{y:0}} animate={{y:[0,-20,0]}} transition={{duration: 2,type:"spring",}}/>,
        "JavaScript": <IoLogoJavascript className='text-5xl text-yellow-200 transition-transform duration-300 hover:scale-125' initial={{y:0}} animate={{y:[0,-20,0]}} transition={{duration: 2,type:"spring",}}/>,
        "Express.js": <SiExpress className='text-5xl text-blue-400 transition-transform duration-300 hover:scale-125' initial={{y:0}} animate={{y:[0,-20,0]}} transition={{duration: 2,type:"spring",}}/>,
        "MySQL": <SiMysql className='text-5xl text-blue-500 transition-transform duration-300 hover:scale-125' initial={{y:0}} animate={{y:[0,-20,0]}} transition={{duration: 2,type:"spring",}}/>,
        "GitHub": <FaGithub className='text-5xl transition-transform duration-300 hover:scale-125' initial={{y:0}} animate={{y:[0,-20,0]}} transition={{duration: 2,type:"spring",}}/>
    };

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`https://66e526c75cc7f9b6273c6978.mockapi.io/Projects/${id}`);
                setProject(response.data);  // Set the fetched project data to the state
            } catch (error) {
                console.log(error);
            }
        };
        fetchProject();
    }, [id]);

    return (
        <div className="flex flex-col w-full h-screen gap-5 text-white md:flex-row"> {/* flex-col on small screens, flex-row on medium and up */}
            {project ? (
                <>
                    <motion.div className="w-full md:w-[40%] h-[50%] md:h-full  md:border-b-0 md:border-r-2 flex justify-center items-center" 
                        initial={{ x: -1000, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ duration: 10, type: "spring", stiffness: 50 }}>
                        <img src={project.imageUrl} alt="Project" className='w-4/6' />
                    </motion.div>
                    <motion.div className="w-full md:w-[60%] h-[100%] md:h-full flex flex-col justify-center items-start p-10 gap-5" 
                        initial={{ x: 1000, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ duration: 10, type: "spring", stiffness: 50 }}>
                        
                        <h1 className='text-xl font-poppins'>Project Details</h1>
                        <h1 className='text-xl font-poppins'>Project Name: {project.projectName}</h1>
                        <h1 className='text-xl font-poppins'>Project Stack:</h1>                        
                        <ul className='flex flex-row gap-5'>
                            {project.stack.map((value, index) => (
                                <motion.li key={index} className='flex flex-col items-center'>
                                    {stackIcons[value] ? stackIcons[value] : value}
                                    {/* <motion.span initial={{y:0}} animate={{y:[0,-20,0]}} transition={{duration: 2,type:"spring",}}>{value}</motion.span>
                                     */}
                                     <motion.div initial={{y:0}} animate={{y:[0,-20,0]}} transition={{duration: 2,type:"spring",}}>{value}</motion.div>
                                </motion.li>
                            ))}
                        </ul>

                        <h1 className='text-xl font-poppins'>Project Description:</h1>
                        <p className='font-poppins'>{project.description}</p>

                        <h1 className='text-xl font-poppins'>Project Role:</h1>
                        <p className='font-poppins'>{project.role}</p>
                    </motion.div>
                </>
            ) : (
                <p>Loading project details...</p>
            )}
        </div>
    );
};

export default AboutProject;
