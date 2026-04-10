import React, { useEffect } from "react";
import Style from "./Projects.module.css";
import project1 from "../../Images/project1.png";
import project2 from "../../Images/project2.png";
import project3 from "../../Images/project3.png";
import project4 from "../../Images/project4.png";
import project5 from "../../Images/project5.png";
import project6 from "../../Images/project6.png";
import project7 from "../../Images/project7.png";
import project8 from "../../Images/project8.png";

export default function Projects() {

    useEffect(() => {
        const sections = document.querySelectorAll(`.${Style.projectsSection}`);

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
        <section className={Style.projectsSection} id="projects">
            <div className="container py-5">
                <h2 className={Style.title}>Projects</h2>
                <div className="row g-4">

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.projectCard}>

                            <div className={Style.imageContainer}>
                                <img src={project1} alt="Portfolio Bootstrap Template" />
                            </div>

                            <div className={Style.projectContent}>
                                <h5>Portfolio Bootstrap Template</h5>

                                <p>
                                    A responsive portfolio template built using Bootstrap, featuring multiple sections such as about, projects, and contact. The project demonstrates the use of responsive frameworks, component-based design, and integration of icons and interactive elements to create a complete portfolio layout.
                                </p>

                                <div className={Style.techStack}>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                    <span>Bootstrap</span>
                                </div>

                                <div className={Style.projectLinks}>
                                    <a href="https://github.com/sohaib-ayman/responsive-portfolio-template" target="_blank" rel="noreferrer">
                                        Repo
                                    </a>
                                    <a href="https://sohaib-ayman.github.io/responsive-portfolio-template/#" target="_blank" rel="noreferrer">
                                        Demo
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.projectCard}>

                            <div className={Style.imageContainer}>
                                <img src={project2} alt="Mobile Store Website" />
                            </div>

                            <div className={Style.projectContent}>
                                <h5>Mobile Store Website</h5>

                                <p>
                                    A responsive mobile store interface that displays products dynamically and allows users to search and filter items by price. The project includes navigation features such as a wishlist and profile pages, and focuses on building interactive UI components using JavaScript and handling data efficiently on the client side.
                                </p>

                                <div className={Style.techStack}>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                </div>

                                <div className={Style.projectLinks}>
                                    <a href="https://github.com/sohaib-ayman/mobile-store-website" target="_blank" rel="noreferrer">
                                        Repo
                                    </a>
                                    <a href="https://sohaib-ayman.github.io/mobile-store-website/index.html" target="_blank" rel="noreferrer">
                                        Demo
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.projectCard}>

                            <div className={Style.imageContainer}>
                                <img src={project3} alt="Authentication System" />
                            </div>

                            <div className={Style.projectContent}>
                                <h5>Authentication System</h5>

                                <p>
                                    A client-side authentication system that allows users to sign up, log in, and manage their session using local storage. The project includes real-time form validation, error handling, and user feedback, along with a simple personalized welcome screen after login. It demonstrates handling user data, validation logic, and page navigation using JavaScript.
                                </p>

                                <div className={Style.techStack}>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                    <span>Bootstrap</span>
                                </div>

                                <div className={Style.projectLinks}>
                                    <a href="https://github.com/sohaib-ayman/authentication-system-js" target="_blank" rel="noreferrer">
                                        Repo
                                    </a>
                                    <a href="https://sohaib-ayman.github.io/authentication-system-js/" target="_blank" rel="noreferrer">
                                        Demo
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.projectCard}>

                            <div className={Style.imageContainer}>
                                <img src={project4} alt="Recipe App" />
                            </div>

                            <div className={Style.projectContent}>
                                <h5>Recipe App</h5>

                                <p>
                                    A dynamic recipe web application that fetches real-time data from the Forkify API. Users can browse different categories, view recipes, and interact with a clean, responsive interface. The project demonstrates working with APIs, asynchronous JavaScript, and rendering dynamic content based on user actions.
                                </p>

                                <div className={Style.techStack}>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                </div>

                                <div className={Style.projectLinks}>
                                    <a href="https://github.com/sohaib-ayman/recipe-app-forkify" target="_blank" rel="noreferrer">
                                        Repo
                                    </a>
                                    <a href="https://sohaib-ayman.github.io/recipe-app-forkify/" target="_blank" rel="noreferrer">
                                        Demo
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.projectCard}>

                            <div className={Style.imageContainer}>
                                <img src={project5} alt="Product Management System" />
                            </div>

                            <div className={Style.projectContent}>
                                <h5>Product Management System</h5>

                                <p>
                                    A responsive CRUD application for managing products, where users can add, update, delete, and search items efficiently. The app uses local storage to persist data and provides a smooth user experience with dynamic updates and validation. This project focuses on core JavaScript logic, data handling, and building interactive interfaces.
                                </p>

                                <div className={Style.techStack}>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                </div>

                                <div className={Style.projectLinks}>
                                    <a href="https://github.com/sohaib-ayman/product-management-system" target="_blank" rel="noreferrer">Repo</a>
                                    <a href="https://sohaib-ayman.github.io/product-management-system/" target="_blank" rel="noreferrer">Demo</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.projectCard}>

                            <div className={Style.imageContainer}>
                                <img src={project6} alt="Portfolio Landing Page" />
                            </div>

                            <div className={Style.projectContent}>
                                <h5>Portfolio Landing Page</h5>

                                <p>
                                    A responsive portfolio landing page built as a UI practice project, focusing on layout design, section structuring. It showcases skills in creating visually appealing interfaces and organizing content effectively using HTML, CSS.
                                </p>

                                <div className={Style.techStack}>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                </div>

                                <div className={Style.projectLinks}>
                                    <a href="https://github.com/sohaib-ayman/portfolio-landing-page" target="_blank" rel="noreferrer">Repo</a>
                                    <a href="https://sohaib-ayman.github.io/portfolio-landing-page/" target="_blank" rel="noreferrer">Demo</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.projectCard}>

                            <div className={Style.imageContainer}>
                                <img src={project7} alt="Shoes Brand Landing Page" />
                            </div>

                            <div className={Style.projectContent}>
                                <h5>Shoes Brand Landing Page</h5>

                                <p>
                                    A modern and fully responsive landing page for a sneakers brand, designed with a clean layout and engaging UI elements. The project focuses on layout structure, responsive design, and visual presentation using HTML and CSS, along with icons integration for enhanced user experience.
                                </p>

                                <div className={Style.techStack}>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                </div>

                                <div className={Style.projectLinks}>
                                    <a href="https://github.com/sohaib-ayman/shoes-brand-landing-page" target="_blank" rel="noreferrer">
                                        Repo
                                    </a>
                                    <a href="https://sohaib-ayman.github.io/shoes-brand-landing-page/" target="_blank" rel="noreferrer">
                                        Demo
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={Style.projectCard}>

                            <div className={Style.imageContainer}>
                                <img src={project8} alt="Crumb Bakery Landing Page" />
                            </div>

                            <div className={Style.projectContent}>
                                <h5>Crumb Bakery Landing Page</h5>

                                <p>
                                    A simple bakery landing page created using HTML and CSS as one of my early projects. It focuses on basic layout structuring and styling, reflecting the starting point of my front-end development journey.
                                </p>

                                <div className={Style.techStack}>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                </div>

                                <div className={Style.projectLinks}>
                                    <a href="https://github.com/sohaib-ayman/crumb-bakery-landing-page" target="_blank" rel="noreferrer">Repo</a>
                                    <a href="https://sohaib-ayman.github.io/crumb-bakery-landing-page/" target="_blank" rel="noreferrer">Demo</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    </>
}