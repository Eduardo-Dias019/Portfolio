import "./App.css";
import ProfilePic from "./assets/profile-pic-bg.png";

function App() {
  return (
    <div className="App">
      <header>
        <li>
          <ul>
            <a href="https://br.linkedin.com/in/eduardo-dias-621b4b220">
              LINKEDIN
            </a>
          </ul>
          <ul>
            <a href="https://github.com/Eduardo-Dias019/">GITHUB</a>
          </ul>
        </li>
      </header>
      <section>
        <div className="apresentation">
          <h1>
            Olá, eu me chamo Eduardo e sou um desenvolvedor Full-Stack, UX/UI
            Designer e Motion Designer
          </h1>
          <img
            src={ProfilePic}
            style={{ borderRadius: "25%" }}
            alt="Eduardo Dias"
          />
        </div>
      </section>
      <section className="about-me">
        <h1>UM POUCO SOBRE MEUS CONHECIMENTOS</h1>
        <div className="box">
          <h3>
            Possuo experiência com desenvolvimento web full-stack como
            freelancer e experiência de 8 anos como motion designer. Na minha
            carreira como desenvolvedor eu estou atualmente desenvolvendo uma
            plataforma EAD para uma barbearia onde o cliente está me dando
            ótimos feedbacks. Já como motion designer em boa parte de minha
            carreira eu trabalhei fazendo vinhetas para youtubers e vídeos
            pessoais para divulgar meu trabalho, com isso eu tenho expêriencia
            para fazer qualquer tipo de vídeo de motion design para divulgar seu
            produto ou serviço.
          </h3>
        </div>
      </section>

      <section className="tecnologies">
        <h1>SKILLS</h1>
        <section>
          <div className="html">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="html"
            />
            HTML
          </div>
          <div className="css">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              alt="css"
            />
            CSS
          </div>
          <div className="javascript">
            <img
              src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
              alt="javascript"
            />
            JAVASCRIPT
          </div>
          <div className="reactjs">
            <img
              src="http://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png"
              alt="reactjs"
            />
            REACT JS
          </div>
          <div className="nodejs">
            <img
              src="https://img.icons8.com/color/480/nodejs.png"
              alt="nodejs"
            />
            NODE JS
          </div>
          <div className="mysql">
            <img
              src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
              alt="mysql"
            />
            MYSQL
          </div>
          <div className="mongodb">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png"
              alt="mongodb"
            />
            MONGODB
          </div>
          <div className="github">
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt="github"
            />
            GITHUB
          </div>
          <div className="figma">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="figma"
            />
            FIGMA
          </div>
          <div className="afterEffects">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png"
              alt="after effects"
            />
            AFTER EFFECTS
          </div>
        </section>
      </section>

      <section className="services">
        <h1>SERVIÇOS QUE EU PRESTO COMO FREELANCER</h1>
        <div className="container-services">
          <div className="ux">
            <h2>UI/UX Design</h2>
            <p>
              Desenvolvimento de design de websites com foco em experiência de
              usuário e geração de resultados para a empresa.
            </p>
          </div>
          <div className="development">
            <h2>Desenvolvimento</h2>
            <p>
              Desenvolvimento de websites e sistemas com tecnologias como
              React.js, Node.js e banco de dados MySQL ou MongoDB
            </p>
          </div>
          <div className="uxAndDevelopment">
            <h2>UX Design + Desenvolvimento</h2>
            <p>
              Se você quiser posso fazer o desenvolvimento de seu projeto por
              completo, desde o design até o desenvolvimento
            </p>
          </div>
          <div className="motionDesign">
            <h2>Motion Design</h2>
            <p>Animações e vídeos para divulgar seu produto ou serviço</p>
          </div>
        </div>
      </section>

      <section className="jobsSection">
        <h1>ALGUNS DE MEUS TRABALHOS</h1>
        <div className="jobsContainer">
          <div>
            <h1>Barbeiro Destinado</h1>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HV6wmaS_8j0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h1>Motion Design</h1>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DiSJOrt7ldM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="contact">
        <h1>
          Está precisando de meus trabalhos? entre em contato comigo pelo
          e-mail: eduardo17DM@outlook.com
        </h1>
      </section>
    </div>
  );
}

export default App;
