import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Weblayouts = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Weblayouts;

