import './App.css';
import Welcome from './components/Hello/Welcome'
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
    </div>
  );
}

export default App;
