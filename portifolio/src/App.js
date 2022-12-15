import "./App.css";
import ProfilePic from "./assets/profile-pic-bg.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <li>
          <Link to="/linkedin">
            <ul>LIKENDIN</ul>
          </Link>
          <Link to="/github">
            <ul>GITHUB</ul>
          </Link>
        </li>
      </header>
      <section>
        <div className="apresentation">
          <h1>
            Olá, eu me chamo Eduardo e sou um desenvolvedor Full-Stack e UX
            Designer Júnior
          </h1>
          <img src={ProfilePic} alt="Eduardo Dias" />
        </div>
      </section>
    </div>
  );
}

export default App;
