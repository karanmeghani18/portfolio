import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { About } from './components/About';
import heroimg from '../src/assets/hero.webp';

function App() {
  
  return (
    <div className='bg-gradient-to-b from-[#000000] to-[#222222] ...' >
      <div className="absolute inset-0">
        <img src={heroimg} alt="/" className=" object-cover"  />
      </div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
