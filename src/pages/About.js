import React, { Component } from 'react';
import "./About.css";
import mePic from "../assets/mePic.jpg";


export default class About extends Component {
  render() {
    return (
      <div class= "aboutMe">  
          <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={mePic}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          
          <div className="split right">
            <div className="centered">
              <div className="name_title">Elijah Love</div>
              <div className="brief_description">
              <p class = "bio">Hello my name Elijah and I’m a senior COMPSCI major at North Carolina Agricultural and Technical State University. I'm excited to be apart the IBM Accelerate program to further my dev skills while networking with IBM professionals and a bunch of likeminded individuals. Technology has always interested me because I'm so curious by nature and want to know why things work the way they do. Lately I have been getting into more networking, IT and looking into becoming a Certified Ethical Hacker (CEH). In my free time I like to make beats and watch Sci-Fi thrillers. </p> 
              </div>
            </div>
          </div>
        </div>

        <div class="shape-blob"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>
        <script src="../pages/main.js"></script>
      </div>
    )
  }
}