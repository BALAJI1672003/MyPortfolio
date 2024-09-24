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
        "Java": <FaJava className='text-5xl text-red-700 transition-transform duration-300 hover:scale-125'/>,
        "React": <FaReact className='text-5xl transition-transform duration-300 text-cyan-400 hover:scale-125'/>,
        "Node.js": <FaNodeJs className='text-5xl text-green-800 transition-transform duration-300 hover:scale-125' />,
        "JavaScript": <IoLogoJavascript  className='text-5xl text-yellow-200 transition-transform duration-300 hover:scale-125'/>,
        "Express.js": <SiExpress className='text-5xl text-blue-400 transition-transform duration-300 hover:scale-125'/>,
        "MySQL": <SiMysql className='text-5xl text-blue-500 transition-transform duration-300 hover:scale-125'/>,
        "GitHub": <FaGithub  className='text-5xl transition-transform duration-300 hover:scale-125'/>
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
        <div className="w-[100%] h-screen flex flex-row text-white">
            {project ? (
                <>
                    <motion.div className="w-[40%] h-full border-solid border-r-2 border-white flex justify-center items-center" initial={{x:-1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 10, type:"spring", stiffness:50}}>
                        <img src={project.imageUrl} alt="Project" className='w-4/6'/>
                    </motion.div>
                    <motion.div className="w-[60%] h-full flex flex-col justify-center items-start ml-10 gap-5" initial={{x:1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 10, type:"spring", stiffness:50}}>
                      <h1 className='text-xl'>Project Details</h1>
                      <h1 className='text-xl font-poppins'>Project Name: {project.projectname}</h1>                      
                      <h1 className='text-xl font-poppins'>Project Stack:</h1>                        
                      <ul className='flex flex-row gap-5'>
                        {project.stack.map((value, index) => (
                            <li key={index} className='flex flex-col items-center'>
                                {stackIcons[value] ? stackIcons[value] : value}
                                <span>{value}</span>
                            </li>
                        ))}
                      </ul>  
                      <h1 className='text-xl font-poppins'>
                        Project Description:
                      </h1>    
                      <h1 className='font-poppins'>
                       {project.description}
                      </h1>
                      <h1 className='font-xl font-poppins'>
                        ProjectRole:{project.role}
                      </h1>                  
                      </motion.div>
                      
                </>
            ) : (
                <p>Loading project details...</p> 
            )}
        </div>
    );
};

export default AboutProject;
