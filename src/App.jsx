import "./App.css";
import Analyser from "./components/analyser/Analyser";
import mainLogo from "./assets/logo_main.svg";
import circle from "./assets/circle_radial.svg";

function App() {
  return (
    <div className="mainWrapper">
    <div className="circleContainer">
    <div className="circleWrapper-1">
        <img className="purpleCircle" src={circle} alt="decorative" />
      </div>
      {/* <div className="circleWrapper-2">
        <img className="purpleCircle-2" src={circle} alt="decorative" />
      </div> */}
    </div>
      <div className="logoWrapper">
        <img className="logoMain" src={mainLogo} />
      </div>
      <div className="container">
        <Analyser />
      </div>
    </div>
  );
}

export default App;
