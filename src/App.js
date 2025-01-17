import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './logo.svg';
import './App.css';
import myImage from "./assets/unnamed (5).jpg";
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#B0C2E4" }}>
      {/* Adding the Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      {/* Adding the Bootstrap JS */}
      <div className="container-fluid" style={{ paddingTop: "20px", paddingBottom: "25px", background: "linear-gradient(to right, #061826, #3685B5)", color: "#f5f5f5"}}>
        <h1 className="text-center" style={{ fontFamily: "sans-serif", fontSize: "70px", paddingTop: "5px", fontWeight: "600", fontStretch: "120%" }}>Cameron Ryan</h1>
        <img src={myImage} className="image img-fluid" style={{ width: "300px", height: "auto", paddingBottom: "20px" }}></img>
        <h2 className="text-center">Second Year at Northeastern University</h2>
        <h2 className="text-center" style={{ fontStyle: "italic", fontSize: "20px" }}>Pursuing B.S. in Computer Science With a Concentration in Systems and a minor in Entrepreneurship</h2>
        <div className="container-fluid">
          <h3 style={{ fontWeight: 400, fontSize: "15px" }}>Email: camrya2004@gmail.com | Github: github.com/CameronFenwayRyan </h3>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="container" style={{ paddingBottom: "20px" }}>
              <h3 className="text-start" style={{ paddingTop: "25px" }}>About Me</h3>
              <p className="text-start">
                I am a second-year student at Northeastern University studying Computer Science with a concentration in Systems and a minor in Entrepreneurship.
              </p>
              <p className="text-start">
                I am passionate about creativity and believe that technology and computers are the most powerful tools for turning ideas into reality. My goal is to use technology to make a meaningful impact and contribute to making the world a better place.
              </p>
              <p className="text-start">
                Throughout my journey, I’ve gained valuable experience in the field. During the COVID-19 pandemic, I assisted with web development for a small business, helping them navigate the challenges of digital transformation. Additionally, I had the opportunity to teach children how to code and build rudimentary games at a workshop, which gave me a firsthand understanding of how technology can empower individuals and change lives.
              </p>
              <p className="text-start">
                Feel free to check out my projects and demos down below!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingTop: "25px", background: "rgb(198, 162, 188)" }}>
        <h1 className="text-start text-center" style={{ fontFamily: "sans-serif", fontWeight: "600", fontStretch: "120%" }}>PROJECTS </h1>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
