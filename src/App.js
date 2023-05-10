import './App.css';
import Footer from './components/Footer/Footer';
import Welcome from './components/Hello/Welcome'
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Program from './components/Programs/Program';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Welcome/>
          <Program/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
