import { BrowserRouter } from "react-router-dom";

import { About, Contact, Footer, Experience,  Hero, Navbar,  StarsCanvas, Education } from "./components";
import  { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <BrowserRouter>
        <Toaster containerStyle={{position : "fixed", top : '10px' ,zIndex : 1000}}/>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
         <Education />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
     <Footer />
    </BrowserRouter>
  );
}

export default App;