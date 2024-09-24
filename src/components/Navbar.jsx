import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [addproject, setAddproject] = useState(false);
  const [user, setUser] = useState({ key: "" });

  // Disable background scrolling when modal is visible
  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : 'auto';
  }, [visible]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.key === 'Balaji1672003') {
      setAddproject(true);
    } else {
      alert('Wrong key');
    }
    setVisible(false); // Close modal after login attempt
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 w-full h-16 shadow-lg bg-blue"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 2, type: "spring", stiffness: 50 }}
    >
      <div className="container flex items-center justify-between h-full p-4 mx-auto">
        <div className="text-xl font-bold text-white title">Balaji</div>
        {/* Hamburger button for mobile */}
        <button onClick={() => setOpen(!open)} className="text-blue-500 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Navbar links for larger screens */}
        <div className="hidden h-full lg:flex">
          <ul className="flex items-center gap-2 space-x-4">
            <Link to='/'><li><a className="text-xl text-white hover:border-solid hover:border-b-2 hover:border-b-white">Home</a></li></Link>
            <Link to='/about'><li><a className="text-xl text-white hover:border-solid hover:border-b-2 hover:border-b-white">About</a></li></Link>
            <Link to='/projects'><li><a className="text-xl text-white hover:border-solid hover:border-b-2 hover:border-b-white">Projects</a></li></Link>
            <Link to='/contact'><li><a className="text-xl text-white hover:border-solid hover:border-b-2 hover:border-b-white">Contact</a></li></Link>
            {addproject &&
              <Link to='/addproject'>
                <li><a className="text-xl text-white hover:border-solid hover:border-b-2 hover:border-b-white">Add-Project</a></li>
              </Link>}
            <FaRegUser className='text-xl text-white cursor-pointer' onClick={() => setVisible(true)} />
          </ul>
        </div>
      </div>

      {/* Login modal */}
      {visible && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='h-[30%] w-[90%] md:w-[40%] flex flex-col bg-blue-900 p-6 rounded-lg'>
            <div className='h-[20%] flex justify-center items-center text-black border-b-2'>
              <h2 className='text-lg font-bold'>Login</h2>
            </div>
            <div className='flex flex-col items-center justify-center w-full gap-4 mt-4'>
              <input
                type='password'
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

      {open && (
        <div className="lg:hidden">
          <ul className="p-4 bg-white">
            <Link to='/'><li><a className="text-blue-500">Home</a></li></Link>
            <Link to='/about'><li><a className="text-blue-500">About</a></li></Link>
            <Link to='/projects'><li><a className="text-blue-500">Projects</a></li></Link>
            <Link to='/contact'><li><a className="text-blue-500">Contact</a></li></Link>
            {addproject && <Link to='/addproject'><li><a className='text-blue-500'>Add-Project</a></li></Link>}
            <FaRegUser className='text-xl text-blue-500 cursor-pointer' onClick={() => setVisible(true)} />
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;
