import "./App.css";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

// Resume
import Resume from "./assets/resume.pdf";

// Images
import ProfilePic from "./assets/profilePic.jpg";
import CyberPunk1 from "./assets/bg1.jpg";
import CyberPunk2 from "./assets/bg2.jpg";

// Skill Images
import HTML from "./assets/html.png";
import CSS from "./assets/css.png";
import JavaScript from "./assets/javascript.png";
import NodeJS from "./assets/nodejs.png";
import MongoDB from "./assets/mongodb.png";
import ReactLogo from "./assets/react.png";
import Git from "./assets/git.png";
import Java from "./assets/java.png";

// Project Images
import EcoCollect from "./assets/ecocollect-ss1.png";
import QuickRentPH from "./assets/quickrent.png";

// School Logo
import NULogo from "./assets/nuLogo.png";
import TUMCSILogo from "./assets/tumcsiLogo.png";

// Components
import Navbar from "./components/Navbar";
import LogoLoop from "./components/LogoLoop";
import Card from "./components/Card";

function App() {
  const imageLogos1 = [
    { src: HTML, alt: "HTML" },
    { src: CSS, alt: "CSS" },
    { src: JavaScript, alt: "JavaScript" },
    { src: Java, alt: "Java" },
  ];

  const imageLogos2 = [
    { src: NodeJS, alt: "NodeJS" },
    { src: MongoDB, alt: "MongoDB" },
    { src: ReactLogo, alt: "React" },
    { src: Git, alt: "Git" },
  ];

  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="hero-content">
          <h2>Hello,</h2>
          <h1>I am John Martin Eustaquio</h1>
          <h1>A Web Developer</h1>
          <div className="social-icons">
            <a href="https://github.com/Estakuyo" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/john-martin-eustaquio-8579a8374"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/john.m.eustaquio" target="_blank">
              <FaFacebook />
            </a>
            <a
              href={Resume}
              download="John_Martin_Eustaquio_Resume.pdf"
              className="resume-btn"
            >
              View Resume
            </a>
          </div>
        </div>
        <img src={ProfilePic} alt="John Martin Eustaquio" />
      </section>

      <div id="about">
        <section className="about-section">
          <div className="about-content">
            <h1>About Me</h1>
            <p>
              I am an Information Technology student the specializes in building
              mobile web applications. I enjoy building innovative websites that
              transforms lives, society, and benefits companies. Currently, I am
              a MERN stack developer, but I am willing and eager to learn other
              new technology stacks to put in my skill toolbelt.
            </p>
          </div>
          <img src={CyberPunk1} />
        </section>
        <section className="education-section">
          <img className="bg2" src={CyberPunk2} />
          <div className="education-content">
            <h1>Education</h1>
            <p>National University</p>
            <p>Taytay United Methodist Christian School</p>
          </div>
          <img className="school1" src={NULogo} />
          <img className="school2" src={TUMCSILogo} />
        </section>
      </div>

      <section id="skills" className="skills-section">
        <div className="skills-content">
          <h1>Skills</h1>
          <div className="logoLoop">
            <LogoLoop
              className="logo-loop1"
              logos={imageLogos1}
              speed={60}
              direction="left"
              logoHeight={200}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#1a1b2f"
              ariaLabel="Skill Toolbelt"
            />
            <LogoLoop
              className="logo-loop2"
              logos={imageLogos2}
              speed={60}
              direction="right"
              logoHeight={200}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#1a1b2f"
              ariaLabel="Skill Toolbelt"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="project-section">
        <div className="project-content">
          <h1>Projects</h1>
          <p>Click The Cards</p>
          <div className="cards">
            <Card
              title={"EcoCollect Mobile Web App"}
              image={EcoCollect}
              alt={"EcoCollect"}
              description={`This is our Capstone Project. 
                I am the fullstack developer of this project. 
                The tech stack that we used to develop this is the MERN Stack.
                This is a gamified electronic 
                waste management for National University, that rewards user
                points, then that points can be used to redeem prizes.`}
              repo={"https://github.com/KylaBridge/CAPSTONE-ECOCOLLECT"}
            />
            <Card
              title={"QuickRentPH"}
              image={QuickRentPH}
              alt={"QuickRentPH"}
              description={`This is our ecommerce project.
                I am the backend developer of this project. 
                We also used the MERN Stack in developing this project. 
                I also helped in implementing the designs for the frontend or client view.
                The payment process of this is just a mockup process, we didn't use any
                payment APIs such as GCash and PayMaya`}
              repo={"https://github.com/KylaBridge/QuickRentPH"}
            />
          </div>
        </div>
      </section>

      <footer>
        <p>
          Thank you for visiting! Feel free to reach out for collaborations.
        </p>
        <p>
          © 2025 John Martin Eustaquio | MERN Stack Developer |
          eustaquiosalcedojohn@gmail.com
        </p>
      </footer>
    </>
  );
}

export default App;
