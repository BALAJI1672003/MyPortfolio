import { useRef } from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';
const Addproject = () => {
  const p_name=useRef(null);
  const p_descritpion=useRef(null);
  const p_role=useRef(null);
  const p_url=useRef(null);
  const p_stack=useRef(null);
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const projectDetails={
      ProjectName:p_name.current.value,
      description:p_descritpion.current.value,
      stack:p_stack.current.value.split(",").map((value)=>value.trim()).filter(Boolean),
      imageUrl:p_url.current.value,
      role:p_role.current.value
    }
    try {
        const response=await axios.post('https://66e526c75cc7f9b6273c6978.mockapi.io/Projects',projectDetails)
        console.log('success',response.data);
        console.log(projectDetails);
        p_name.current.value='';
        p_descritpion.current.value='';
        p_stack.current.value='';
        p_url.current.value='',
        p_url.current.value=''
        alert('project added successfully');
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <motion.div className='h-[100%] w-[100%] flex flex-col stify-center items-center gap-5' initial={{y:-1000,opacity:0}} animate={{y:0,opacity:1}} transition={{duration: 10, type:"spring", stiffness:50}}>
      <h1 className='text-white font -xl font-poppins'>Add Project</h1>
      <form onSubmit={handleSubmit} className='p-5 bg-gray-100 rounded shadow-md h-[100%] w-[70%]'>
        <div className='mb-5'>
          <label className='block text-gray-500'>Project Name</label>
          <input type="text" required className='w-full p-2 border-gray-500 rounded' ref={p_name}>
          </input>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-500'>Description</label>
          <textarea type="text" required className='w-full p-2 border-gray-500 rounded' ref={p_descritpion}>
          </textarea>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-500'>Enter the stacks</label>
          <input type="text" required className='w-full p-2 border-gray-500 rounded' ref={p_stack}>
          </input>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-500'>imageUrl</label>
          <input type="text" required className='w-full p-2 border-gray-500 rounded' ref={p_url}>
          </input>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-500'>Role</label>
          <input type="text" required className='w-full p-2 border-gray-500 rounded' ref={p_role}>
          </input>
        </div>
        <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Project
      </button>
      </form>
    </motion.div>
  )
}

export default Addproject
