import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';
import axios from 'axios';
import {motion} from 'framer-motion'
const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://66e526c75cc7f9b6273c6978.mockapi.io/Projects');
        setProjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className='flex flex-col w-full min-h-screen p-4'>
      <h1 className='mb-6 text-3xl text-center text-white font-poppins'>Projects</h1>
      <hr className='mb-6'></hr>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className="flex flex-col items-center justify-center p-6 text-white transition duration-300 transform bg-gray-500 rounded-lg shadow-lg hover:scale-105"
            initial={{x:-1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 10, type:"spring", stiffness:50}}
          >
            <img src={project.imageUrl} className='w-2/4'></img>
            <h2 className="mb-4 text-xl font-semibold">{project.name}</h2>
            <Link 
              to={`/projects/${project.id}`} 
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Inspect
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
