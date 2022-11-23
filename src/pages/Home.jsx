import React from "react";
import swal from "sweetalert";
// Component
import Footer from "../component/Footer/footer.js";
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <header className="header-home">
        <h1>
          Hello!, My name is{" "}
          <span className="spanName">
            <a href="https://github.com/Haris-Maulana">Haris Maulana</a>
          </span>
          <br />I am a <a href="https://en.wikipedia.org/wiki/Front-end_web_development" target='_blank'><span className="spanDev">Frontend Developer</span></a>
        </h1>
          <a href='../Assets/download/Haris Maulana - Frontend Developer - CV ATS Friendly.pdf 'download='Haris Maulana - Frontend Developer - CV ATS Friendly.pdf'>
            <button
              onClick={() => {
                swal({
                  title: "Hello 😁",
                  text: "Thank You for downloading...",
                  icon: "success",
                  buttons: "Back"
                });
              }}
            >
              Download CV
            </button>
          </a>
      </header>
      <main className="main-home"></main>
      <Footer />
    </>
  );
}

export default Home;
