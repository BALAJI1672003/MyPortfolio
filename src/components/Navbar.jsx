import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const[addproject,setAddproject]=useState(false);
  const [user, setUser] = useState({
    key: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(user); 
    if(user.key==='Balaji1672003')
    {      
      setAddproject(true)
    }
    else
    {
      alert('wrong key');
    }
    setVisible(!visible);
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  return (
    <motion.div className="absolute top-0 left-0 w-full shadow--600 md bg-blue" initial={{y:-1000}} animate={{y:0}} transition={{duration:2,type:"spring",stiffness:50}}>
      <div className="container flex items-center justify-between p-4 mx-auto">
        <div className="text-xl font-bold text-white title">Balaji</div>
        {/* Hamburger button for mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="text-blue-500 lg:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Navbar links for larger screens */}
        <div className="hidden lg:flex">
          <ul className="gap-2 space-x-4 lg:flex">
            <Link to='/'>
              <li><a className="text-xl text-white hover:border-solid hover:border-b-2 hover:border-b-white">Home</a></li>
            </Link>
            <Link to='/about'>
              <li><a className="text-xl text-white hover:border-solid hover:border-b-2 hover:border-b-white">About</a></li>
            </Link>
            <Link to='/projects'>
              <li><a className="text-xl text-white hover:border-solid hover:border-b-2 hover:border-b-white">Projects</a></li>
            </Link>
            <Link to='/contact'>
              <li><a className="text-xl text-white hover:border-solid hover:border-b-2 hover:border-b-white">Contact</a></li>
            </Link>
            {addproject&&
            <Link to='/addproject'>
            <li><a className="text-xl text-white hover:border-solid hover:border-b-2 hover:border-b-white">add-project</a></li>
            </Link>}
            <FaRegUser className='text-xl text-white cursor-pointer' onClick={() => setVisible(true)} />
          </ul>
        </div>
      </div>
      {/* Login modal */}
      {visible && (
        <div className='absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50'>
          <div className='h-[40%] w-[30%] flex flex-col bg-white p-6 rounded-lg'>
            <div className='h-[20%] flex justify-center items-center text-black border-b-2'>
              <h2 className='text-lg font-bold'>Login</h2>
            </div>
            <div className='flex flex-col items-center justify-center w-full gap-4 mt-4'>
              <input 
                type='email' 
                id="key" 
                placeholder='Enter the secret Key' 
                className='w-full p-3 font-bold text-black border-b-2 focus:outline-none focus:border-blue-600' 
                onChange={handleChange}
              />
            </div>
            <div className='w-full h-[20%] flex justify-center items-center mt-4'>
              <button 
                className='px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700' 
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <ul className="p-4 bg-white">
            <Link to='/'>
            <li><a className="text-blue-500">Home</a></li>
            </Link>
            <Link to='/about'>
            <li><a className="text-blue-500">About</a></li>
            </Link>
            <Link to='/projects'>
            <li><a className="text-blue-500">Projects</a></li>
            </Link>
            <Link to='/contact'>
            <li><a className="text-blue-500">Contact</a></li>
            </Link>
            {addproject&&<Link to='addproject'>
             <li><a className='text-blue-500'>Add-Project</a></li>
            </Link>}
            <FaRegUser className='text-xl text-white cursor-pointer' onClick={() => setVisible(true)} />
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;
