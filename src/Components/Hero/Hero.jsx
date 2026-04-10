import React from "react";
import Style from './Hero.module.css';
import myImage from '../../Images/MyImage.jpg';

export default function Hero(){
    return<>
    <div className={Style.heroSection} id="home">
        <div className="container w-100">
            <div className="row justify-content-center align-items-center text-center text-md-start">
                <div className="col-12 col-md-6 mb-5 mb-md-0">
                    <p className={Style.welcome}>Hi, my name is</p>
                    <h1 className={Style.myName}>Sohaib Ayman</h1>
                    <div className={Style.jobTitle}>
                        <span className="fw-semibold">Frontend Developer</span>
                    </div>
                    <p className={Style.Description}>I'm a Front-End Developer who loves transforming ideas into smooth, high-performing user experiences. Whether it's crafting responsive designs, building interactive interfaces, or enhancing performance and usability, I focus on delivering clean, intuitive solutions that not only look great but help businesses engage users, build trust, and drive real results.</p>
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                        <a href="#contacts" className={`${Style.getInTouchBTN}`}>Get In Touch</a>
                        <a href="#projects" className={`${Style.viewMyWorkBTN}`}>View My Work</a>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <div className={Style.myImageContainer}>
                        <img src={myImage} alt="Sohaib Ayman" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}