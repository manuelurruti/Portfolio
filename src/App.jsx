import { useState } from "react";

import logo from "../src/assets/logo.svg";

import "./App.css";

function App()
 {
  function preventScroll(event) {
    event.preventDefault();
    const element = document.getElementById("AboutMe");
    element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <header className="position">
        <ul className="ulHeader" id="header">
          <li>
            <a href="#inicio" className="HoverBlack">
            
              HOME
            </a>
          </li>
          <li>
            <a href="#AboutMe" className="HoverBlack" onClick={preventScroll}>
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#Skills" className="HoverBlack">
              
              SKILLS
            </a>
          </li>
          <li>MY PROYECTS</li>
          <li>CURRICULUM</li>
          <li>CONTACT</li>
          <li>PLAYROOM!</li>
        </ul>
      </header>
      <div className="App">
        <section id="inicio">
          <div className="App-header">
            <img src={logo} className="App-logo asd" alt="logo" />
            <h2 className="name">Manuel Urruti</h2>
            <h3 className="text">Front-end Developer</h3>
          </div>
        </section>
      </div>

      <div className="AboutMe">
        <section className="" id="AboutMe">
          <h3 className="Color">
            Hello! My name is Manuel Urruti, and I was born on July 25th, 1998,
            in Olavarria, Buenos Aires, Argentina. I am a full-stack student
            with a particular passion for front-end development. I am a
            proactive individual who is always eager to learn and bring value to
            any project. Throughout my studies, I have honed my skills in HTML,
            CSS, SASS, BOOSTRAP, JAVASCRIPT, REACT, NODEJS, EXPRESS, MY SQL and
            I am continually learning new technologies and tools to improve my
            abilities. I enjoy collaborating with others and believe that
            teamwork is essential to achieving success in any project.
          </h3>
        </section>
      </div>
  
      <div className="Skills d-flex justify-content-center align-items-center">
        <section className="" id="Skills">
          <h2 className="d-flex justify-content-center align-items-center SkillText ">
            My skills
          </h2>
          <div></div>
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <i className="fa-brands fa-react icon"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-bootstrap icon"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-css3-alt icon"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-html5 icon"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-node-js icon"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-js icon"></i>
              </div>

              <div className="slide">
                <i className="fa-brands fa-github icon"></i>
              </div>
              <div className="slide">
                <i className="fa-solid fa-database icon"></i>
              </div>

              <div className="slide">
                <i className="fa-brands fa-sass icon"></i>
              </div>

              <div className="slide">
                <i className="fa-brands fa-react icon"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-bootstrap icon"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-css3-alt icon"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-html5 icon"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-node-js icon"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-js icon"></i>
              </div>

              <div className="slide">
                <i className="fa-brands fa-github icon"></i>
              </div>
              <div className="slide">
                <i className="fa-solid fa-database icon"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-mdb"></i>
              </div>

              <div className="slide">
                <i className="fa-brands fa-sass icon"></i>
              </div>
            </div>
          </div>
          <h2 className="d-flex justify-content-center align-items-center SkillTexto">
            Soft skills
          </h2>
          <div className="d-flex justify-content-around align-items-centert PB">
         
          <i className=" d-flex flex-row fa-solid fa-check">
              <p className="px">Communication</p>
            </i>
            
          
            <i className=" d-flex flex-row fa-solid fa-check">
              <p className="px">Teamwork</p>
            </i>
           
           
            <i className=" d-flex flex-row fa-solid fa-check">
              <p className="px">Adaptability</p>
            </i>
        
            
            <i className=" d-flex flex-row fa-solid fa-check">
              <p className="px">Attention to detail</p>
            </i>
           
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
