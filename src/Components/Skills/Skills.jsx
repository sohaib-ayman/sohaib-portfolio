import React, { useEffect } from "react";
import Style from './Skills.module.css'

export default function Skills() {

    useEffect(() => {
        const sections = document.querySelectorAll(`.${Style.skillsSection}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(Style.show);
                    }
                });
            },
            {
                threshold: 0,
                rootMargin:"0px 0px -80px 0px",
            }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, []);

    return <>
        <div className={Style.skillsSection} id="skills">
            <div className="container py-5">

                <h2 className={Style.title}>Skills</h2>

                <div className="row g-4 justify-content-center">

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.card}>
                            <h5>Frontend</h5>
                            <div className={Style.skillsList}>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.card}>
                            <h5>Styling</h5>
                            <div className={Style.skillsList}>
                                <span>Bootstrap</span>
                                <span>Flexbox</span>
                                <span>Grid</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.card}>
                            <h5>Tools</h5>
                            <div className={Style.skillsList}>
                                <span>Git</span>
                                <span>GitHub</span>
                                <span>VS Code</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.card}>
                            <h5>Core Skills</h5>
                            <div className={Style.skillsList}>
                                <span>Responsive Design</span>
                                <span>Problem Solving</span>
                                <span>Clean Code</span>
                                <span>Attention to Detail</span>
                                <span>Time Management</span>
                                <span>Self-Learning</span>
                                <span>Team Collaboration</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.card}>
                            <h5>Languages</h5>
                            <div className={Style.skillsList}>
                                <span>Arabic (Native)</span>
                                <span>English (Intermediate)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}