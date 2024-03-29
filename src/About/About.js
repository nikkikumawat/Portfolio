import React from 'react'
import selfImage from "../images/selfimage.jpg"
import experience from "../images/istockphoto-1209636820-612x612.jpg"
import education from "../images/Types-of-Education.jpg"
import project from "../images/project.webp"


import "./About.css"


function About() {
  return (
    <>
      <div className='About'>
        <div className='aboutpage'>

          <div className='selfimage'>
            <img src={selfImage}></img>
          </div>
          <div className='abouturself'>
            <h2>About</h2>
            <h3>Full Stack Developer</h3>
            <p> a passionate and versatile full-stack  developer with a love for crafting web solutions that not <br/>only meet the needs of users but also deliver exceptional user experiences. I thrive on the <br/>challenges of turning complex ideas into functional and elegant digital products.</p>
          </div>

        </div>


        <div className='Details'>
          <div className='experience'>
            <div className='image'>
              <div className='img1'>
                <h2>Experience</h2>
                <img src={experience}></img>
                <a href=''>Click Here</a>

              </div>
              <div className='img1'>
                <h2>Education</h2>
                <img src={education}></img>
                <a href=''>Click Here</a>
              </div>

              <div className='img1'>
                <h2>Projects</h2>
                <img src={project}></img>
                <a href=''>Click Here</a>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About