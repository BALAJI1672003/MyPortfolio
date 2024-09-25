import './assets/css/App.css';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Weblayouts from './layouts/Weblayouts';
import Addproject from './pages/Addproject';
import AboutProject from './pages/AboutProject';
import Project from './pages/project';
function App() {

  return (
    <>
    <BrowserRouter>
    {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"> */}
     <Routes>
      <Route element={<Weblayouts/>}>
      <Route path="/" Component={Home}/>
      <Route path="/projects" Component={Project}/>
      <Route path="/projects/:id" Component={AboutProject}/>
      <Route path="/about" Component={About}/>
      <Route path="/contact" Component={Contact}/>
      <Route path="/addproject" Component={Addproject}/>
      </Route>
     </Routes>
    {/* </div> */}
    </BrowserRouter>

    </>
  )
}

export default App
