


import logo from "../src/assets/logo.svg";

import "./App.css";

function App()
 {
  function preventScroll(event) {
    event.preventDefault();
    const element = document.getElementById("AboutMe");
    element.scrollIntoView({ behavior: "smooth" });
  }

  const images = [ {image:"image4.png", text:"asdasd"}, {image:"image2.png", text:"asdasd"},{image:"api.png", text:"asdasd"},{image:"image1.png", text:"asdasd"},{image:"image5.png", text:"asdasd"},{image:"image6.png", text:"asdasd"}]
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
            <a href="#AboutMe" className="HoverBlack">
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#Skills" className="HoverBlack">
              
              SKILLS
            </a>
          </li>
          <li> <a href="#Proyect" className="HoverBlack">MY PROYECTS</a></li>
          <li> <a href="#Cv" className="HoverBlack">CURRICULUM</a></li>
          <li> <a href="#Contact" className="HoverBlack">CONTACT</a></li>
        </ul>
      </header>
      <div className="App">
        <section id="inicio">
          <div className="App-header">
            <img src={logo} className="App-logo asd" alt="logo" />
            <h2 className="name">Manuel Urruti</h2>
            <h3 className="text">Full-stack Developer</h3>
          </div>
        </section>
      </div>

   <div className="AboutMe" id="AboutMe">
 
        <section className="flexin">
          <h3 className="Color">
            Hello! My name is Manuel Urruti, I was born on July 25th, 1998,
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
  
     
        <section className="d-flex justify-content-center align-items-center Skills flex-column" id="Skills">
         <div className="estilizando"> 
          <h2 className="d-flex justify-content-center align-center p-5 whitecolor ">
            My skills
          </h2>
         
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <i className="fa-brands fa-react icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-bootstrap icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-css3-alt icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-html5 icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-node-js icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-js icon HoverBlack"></i>
              </div>

              <div className="slide">
                <i className="fa-brands fa-github icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-solid fa-database icon HoverBlack"></i>
              </div>

              <div className="slide">
                <i className="fa-brands fa-sass icon HoverBlack"></i>
              </div>

              <div className="slide">
                <i className="fa-brands fa-react icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-bootstrap icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-css3-alt icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-html5 icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-node-js icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-js icon HoverBlack"></i>
              </div>

              <div className="slide">
                <i className="fa-brands fa-github icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-solid fa-database icon HoverBlack"></i>
              </div>
              <div className="slide">
                <i className="fa-brands fa-mdb HoverBlack"></i>
              </div>

              <div className="slide">
                <i className="fa-brands fa-sass icon HoverBlack"></i>
              </div>
            </div>
          </div>
          </div>
          <div className="estilizando2"> 
          <h2 className="d-flex justify-content-center align-items-center SkillTexto">
            Soft skills
          </h2>
          <div className="PB">
         
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
          </div>
        </section>
        <section className="sectionX"  id="Proyect">
          <h1 className="d-flex justify-content-center whitecolor paddij">Some of my proyects</h1>
          <div className="master">
    
    <div className='height'>
      <div className="card xx border">
  <img src="../image4.png" className="card-img-top" alt="Sunset Over the Sea"/>
    <h4 className="card-text whitecolor">Perfumall</h4>
    <p className="card-text whitecolor">Fullstack application</p>
    <div className=" card-body d-flex align-items-end">
    <div className="d-flex flex-row justify-content-start important">
 <a href="https://github.com/manuelurruti/perfumall" target="a_blank" ><i className="fa-brands fa-github iconxx HoverBlack"></i></a>
  <a href="https://perfumall-mv7u.onrender.com/" target="a_blank"><i className="fa-solid fa-eye iconxx HoverBlack"></i></a>
 </div>
  </div>
</div>
</div>

    <div className='height'>
      <div className="card xx border">
  <img src="../image2.png" className="card-img-top" alt="Sunset Over the Sea"/>
    <h4 className="card-text whitecolor">React dashboard of Perfumall</h4>
   

    <div className="card-body d-flex align-items-end">
    <div className="d-flex flex-row justify-content-start important">
    <a href="https://github.com/manuelurruti/dataPerfumall-Dashboard" target="a_blank" ><i className="fa-brands fa-github iconxx HoverBlack"></i></a>
    <a href="https://dashboard-tmwc.onrender.com" target="a_blank"><i className="fa-solid fa-eye iconxx HoverBlack"></i></a>
 </div>
  </div>
</div>
</div>

    <div className='height'>
      <div className="card xx border">
  <img src="../api.png" className="card-img-top" alt="Sunset Over the Sea"/>
    <h4 className="card-text whitecolor">API of perfumall</h4>
  <div className="card-body d-flex align-items-end">
    <div className="d-flex flex-row justify-content-start important">
    <a href="https://github.com/manuelurruti/API-perfumall" target="a_blank" ><i className="fa-brands fa-github iconxx HoverBlack"></i></a>
    <a href="https://api-perfumall.onrender.com/" target="a_blank"><i className="fa-solid fa-eye iconxx HoverBlack"></i></a>
 </div>
  </div>
</div>
</div>
<div className='height'>
      <div className="card xx border">
  <img src="../rick.png" className="card-img-top" alt="Sunset Over the Sea"/>
    <h4 className="card-text whitecolor">Rick & morty app</h4>
    <div className="card-body d-flex align-items-end">
    <div className="d-flex flex-row justify-content-start important">
    <a href="https://github.com/manuelurruti/rickymorty" target="a_blank" ><i className="fa-brands fa-github iconxx HoverBlack"></i></a>
    <a href="https://rikandmortyx.onrender.com/" target="a_blank"><i className="fa-solid fa-eye iconxx HoverBlack"></i></a>
 </div>
  </div>
</div>
</div>

<div className='height'>
      <div className="card xx border">
  <img src="../image5.png" className="card-img-top" alt="Sunset Over the Sea"/>
    <h4 className="card-text whitecolor">Wheater App</h4>
    <div className="card-body d-flex align-items-end">
    <div className="d-flex flex-row justify-content-start important">
    <a href="https://github.com/manuelurruti/Wheater-App" target="a_blank" ><i className="fa-brands fa-github iconxx HoverBlack"></i></a>
    <a href="https://wheaterapp-efdp.onrender.com/" target="a_blank"><i className="fa-solid fa-eye iconxx HoverBlack"></i></a>
 </div>
  </div>
</div>
</div>
<div className='height'>
      <div className="card xx border">
  <img src="../image6.png" className="card-img-top" alt="Sunset Over the Sea"/>
    <h4 className="card-text whitecolor">Films</h4>
    <div className="card-body d-flex align-items-end">
    <div className="d-flex flex-row justify-content-start important">
    <a href="https://github.com/manuelurruti/films" target="a_blank" ><i className="fa-brands fa-github iconxx HoverBlack"></i></a>
    <a href="https://films-1ct6.onrender.com/" target="a_blank"><i className="fa-solid fa-eye iconxx HoverBlack"></i></a>
 </div>
  </div>
</div>
</div>
<h2 className="whitecolor">And more proyects <a href="https://github.com/manuelurruti" className="none">HERE!</a></h2>
</div>
</section>
        
    
      <section className="d-flex justify-content-center align-items-center flex-column Skills" id="Cv">
                <h1 className="whitecolor">CURRICULUM</h1>
                <a target="_blank" href="CvEnglish.pdf">
                    <i className="fa-solid fa-download asdxx alto"></i>
                </a>
            </section>  
            <section className="d-flex justify-content-center align-items-center flex-column Skills" id="Contact">
            <h1 className="p-5 whitecolor">Contact</h1>
            <div className="d-flex justify-content-space-around">  <a href="https://www.linkedin.com/in/manuel-urruti-b9ab69262/" target="_blank"><i className="fa-brands fa-linkedin p-3 whitecolorx alto"></i></a>
         
            <a href="mailto:manuelurrutimarquez@gmail.com" target="_blank"><i className="fa-solid fa-envelope  p-3 whitecolorx alto"></i></a> </div>
          
            </section>  
              
    </>
  );
}

export default App;
