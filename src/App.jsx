import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Games, Feedbacks, Hero,Navbar,Tech,Works,StarsCanvas} from './components';

const App=()=> {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className="bg-hero-pqattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
          
        </div>
        <div className='relative z-0'>
        <About/>
        <StarsCanvas/>
        <Games/>
        <Works/>
        </div>
          
        
        <div className='relative z-0'>
        <Feedbacks/>
              <Contact/>
              <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
