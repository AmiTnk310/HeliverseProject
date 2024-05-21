import './App.css';
import HomePage from "./Componnets/HomePage";
import Footer from "./Componnets/Footer";
import ParticlesComponent from "./Componnets/particles";

function App() {
  return (
    <div className="main">
      <ParticlesComponent id="particles"  />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
