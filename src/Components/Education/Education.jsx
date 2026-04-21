import React, { useEffect } from "react";
import Style from './Education.module.css'

export default function Education() {

    useEffect(() => {
        const sections = document.querySelectorAll(`.${Style.educationSection}`);

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
                rootMargin:"0px 0px -80px 0px"
            }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, []);

    return <>
        <div className={Style.educationSection} id="education">
            <div className="container py-5">

                <h2 className={Style.educationTitle}>Education & Courses</h2>

                <div className="row g-4 justify-content-center">

                    <div className="col-12 col-md-6">
                        <div className={Style.card}>
                            <span className="d-flex justify-content-between">
                                <h5>Zagazig University</h5>
                                <span>2024 - Present</span>
                            </span>
                            <p>Faculty of Computers & Informatics</p>
                            <p className={`mb-0 ${Style.Description}`}>Building a strong foundation in computer science, including programming, data structures, and software development principles, with a focus on applying knowledge through real-world projects.</p>
                            <span className={Style.tag}>Education</span>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className={Style.card}>
                            <span className="d-flex justify-content-between">
                                <h5>Digital Egypt Pioneers Initiative (DEPI)</h5>
                                <span>2025 - 2026</span>
                            </span>
                            <p>Frontend Development Track</p>
                            <p className={`mb-0 ${Style.Description}`}>Studied core frontend technologies including HTML, CSS, JavaScript, and React, and applied them in building responsive, interactive applications, with a focus on clean UI structure and performance optimization.</p>
                            <span className={Style.tag}>Course</span>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className={Style.card}>
                            <span className="d-flex justify-content-between">
                                <h5>Mahara Tech</h5>
                                <span>2025</span>
                            </span>
                            <p>Python Programming Basics</p>
                            <p className={`mb-0 ${Style.Description}`}>Built a solid foundation in Python programming, covering core concepts such as data structures and control flow, with practical application through exercises and small projects.</p>
                            <span className={Style.tag}>Course</span>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className={Style.card}>
                            <span className="d-flex justify-content-between">
                                <h5>Digital Egypt Cubs Initiative (DECI)</h5>
                                <span>2022 - 2023</span>
                            </span>
                            <p>Level Two</p>
                            <p className={`mb-0 ${Style.Description}`}>Built a strong foundation in programming and web development fundamentals, with an emphasis on problem-solving, logical thinking, and applying knowledge through practical tasks.</p>
                            <span className={Style.tag}>Course</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>
}