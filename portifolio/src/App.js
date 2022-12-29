import "./App.css";
import ProfilePic from "./assets/profile-pic-bg.png";

function App() {
  return (
    <div className="App">
      <header>
        <li>
          <ul>
            <a href="https://br.linkedin.com/in/eduardo-dias-621b4b220">LINKEDIN</a>
          </ul>
          <ul>
            <a href="https://github.com/Eduardo-Dias019/">GITHUB</a>
          </ul>
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
      <section className="about-me">
        <h1>UM POUCO SOBRE MEUS CONHECIMENTOS</h1>
        <div className="box">
          <h3>
            Em dezembro de 2021 eu conclui um curso no SENAI onde eu aprendi HTML5, CSS3, JavaScript, Angular, versionamento com git, SCRUM, UI/UX Design com figma, depois para aumentar meu aprendizado eu conclui um curso na udemy de React.JS onde aprendi os Hooks do react, react router e consumo de API,
            logo após eu conclui um curso de Node.JS onde aprendi a criar API com MySQL e MongoDB e também como criar um CRUD (CREATE, READ, UPDATE, DELETE) e hoje estou fazendo um curso ma udemy onde irei aprender muitas coisas, assim que concluir irei falar aqui sobre o que aprendi nele.
          </h3>
        </div>
      </section>

      <section className="tecnologies">
        <h1>TECNOLOGIAS QUE UTILIZO</h1>
        <section>
          <div className="html">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html" />
            HTML
          </div>
          <div className="css">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css" />
              CSS
          </div>
          <div className="javascript">
            <img src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="javascript" />
            JAVASCRIPT
          </div>
          <div className="reactjs">
            <img src="http://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png" alt="reactjs" />
            REACT JS
          </div>
          <div className="nodejs">
            <img src="https://img.icons8.com/color/480/nodejs.png" alt="nodejs" />
            NODE JS
          </div>
          <div className="mysql">
            <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" alt="mysql" />
            MYSQL
          </div>
          <div className="mongodb">
            <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" alt="mongodb" />
            MONGODB
          </div>
          <div className="github">
            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="github" />
            GITHUB
          </div>
          <div className="figma">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="figma" />
            FIGMA
          </div>
        </section>
      </section>

      <section className="services">
        <h1>SERVIÇOS QUE EU PRESTO COMO FREELANCER</h1>
        <div className="container-services">
          <div className="ux">
            <h2>UI/UX Design</h2>
            <p>Desenvolvimento de design de websites com foco em experiência de usuário e geração de resultados para a empresa.</p>
          </div>
          <div className="development">
            <h2>Desenvolvimento</h2>
            <p>Desenvolvimento de websites e sistemas com tecnologias como React.js, Node.js e banco de dados MySQL ou MongoDB</p>
          </div>
          <div className="uxAndDevelopment">
            <h2>UX Design + Desenvolvimento</h2>
            <p>Se você quiser posso fazer o desenvolvimento de seu projeto por completo, desde o design até o desenvolvimento</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
