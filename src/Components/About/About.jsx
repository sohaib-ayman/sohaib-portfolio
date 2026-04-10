import React from "react";
import Style from './About.module.css'
import aboutImage from '../../Images/AboutImage.png';
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        const sections = document.querySelectorAll(`.${Style.aboutSection}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(Style.show);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, []);

    return <>
        <div className={Style.aboutSection} id="about">
            <div className="container-fluid w-100 py-md-5 pb-4 pt-5">
                <div className="row h-100 column-gap-4 justify-content-center align-items-center text-center text-md-start">
                    <div className="col-12 d-flex flex-column justify-content-center text-center mb-3">
                        <h2 className={Style.aboutTitle}>About Me</h2>
                        <p className={Style.aboutSubTitle}>Learn more about my journey, my approach to front-end development, and how I build clean, user-focused web experiences. 🚀</p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <div className={Style.aboutImageContainer}>
                            <img src={aboutImage} alt="Sohaib Ayman" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                        <p className={Style.Description}>Hi, I'm Sohaib 👋 — a Front-End Developer who enjoys building structured, well-thought-out web applications.</p>
                        <p className={Style.Description}>I work on translating ideas into scalable interfaces, focusing on clarity in both code and user experience. My approach is centered around writing maintainable, organized codebases and creating interfaces that feel consistent, predictable, and easy to navigate.</p>
                        <p className={Style.Description}>I primarily use React and modern JavaScript to build modular, reusable components, and I pay close attention to how small details — like state management, performance optimization, and layout behavior — impact the overall experience.</p>
                        <p className={Style.Description}>I'm particularly interested in improving how users interact with products on a practical level, making workflows simpler, reducing friction, and ensuring that every part of the interface serves a clear purpose.</p>
                        <p className={`mb-0 ${Style.Description}`}>I'm always refining my workflow, learning better patterns, and aiming to build applications that are not just functional, but thoughtfully engineered.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}