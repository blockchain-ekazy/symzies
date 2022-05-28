import "./App.css";
import Home from "./Components/Home";
import Homemobile from "./Components/Homemobile";

function App() {
  return (
    <div className="App">
      <div className="Home">
        <Home />
      </div>
      <div className="Homemobile">
        {" "}
        <Homemobile />
      </div>
    </div>
  );
}

export default App;
