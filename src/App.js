import Particles from "./components/Particles.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div>
      <div className="relative">
        <Particles />
        <div className="absolute">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
