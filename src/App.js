// import logo from './logo.svg';
import './App.css';
import Partner from './components/Partner';
import About from './components/About';
import Course from './components/Course';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar /><br />
      <div  id="Home"><Home/></div>
      <div  id="About"><About/></div>
      <div  id="Course"><Course/></div><br />
      <div  id="Career"><Career/></div><br />
      <div  id="Partner"><Partner/></div><br />
      <div  id="Contact"><Contact/></div>
      <Footer />
    </div>
  );
}

export default App;