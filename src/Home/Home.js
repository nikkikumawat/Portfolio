import React from 'react'
import "./Home.css"
import bcImg from "../images/macbook-minimal-dark-wallpaper.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect"


function Home() {
    const navigate = useNavigate()
    function handelnext(e) {
        e.preventDefault()
        navigate("/about")
    }
    return (
        <>
            <div className='about'>
                <div className='home'>
                    <div className='intro'>
                        <h3>Hello,</h3>
                        <h2 className='content'>I am <span>Nikky</span></h2>
                        <Typewriter options={{
                            autoStart: true,
                            loop: true,
                            delay: 50
                        }}

                            onInit={(content) => {
                                content
                                    .typeString("Full Stack Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Quick Learner")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .start()
                            }}
                        />
                        <p>Embrace the journey of becoming a frontend developer with a self motivated spirit.Aspiration is to  continually grow as a professional and utilize my expertise in problem solving skills to identify root causes and develop effective solution</p>
                    </div>
                    <div className='social'>
                        <a href='https://www.instagram.com/_nikki___kumawat_/'><InstagramIcon /></a>
                        <a href=''><FacebookIcon /></a>
                        <a href='https://www.linkedin.com/in/nikky-kumawat/'><LinkedInIcon /></a>
                    </div>
                </div>
                <div className='image'>
                    <img src={bcImg}></img>
                </div>
            </div>
            <div className='more'>
                <a href='' onClick={handelnext}>More About Me</a>
            </div>
        </>
    )
}

export default Home