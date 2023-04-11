import Particles from "./components/Particles.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div className="relative">
      <Particles />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Card />
      </div>
    </div>
  );
}

export default App;
