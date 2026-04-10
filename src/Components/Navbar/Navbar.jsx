import React, { useEffect, useState } from "react";
import Style from './Navbar.module.css'
import LogoDark from '../../Images/LogoDark.png'
import LogoLight from '../../Images/LogoLight.png'

export default function Navbar({ theme, setTheme }) {

    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "education", "services", "skills", "projects", "contacts"];

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (!section) return;

                const rect = section.getBoundingClientRect();

                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActiveSection(id);
                }
            });
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <>
        <div className={`${Style.navSection} ${scrolled ? Style.scrolled : ""}`}>
            <nav className="navbar navbar-expand-lg position-fixed w-100">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">
                        <img src={theme === "light" ? LogoDark : LogoLight} alt="Sohaib Ayman" width="60" />
                    </a>
                    <div className="d-flex align-items-center">
                        <button className={`btn ms-4 btn-sm d-lg-none me-2 ${Style.modeBTN}`} onClick={() => {
                            const newTheme = theme === "light" ? "dark" : "light";
                            setTheme(newTheme);
                            localStorage.setItem("theme", newTheme);
                        }}>{theme === "light" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}</button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === "home" ? "active" : ""}`} aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === "about" ? "active" : ""}`} href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === "education" ? "active" : ""}`} href="#education">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === "skills" ? "active" : ""}`} href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === "services" ? "active" : ""}`} href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === "projects" ? "active" : ""}`} href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === "contacts" ? "active" : ""}`} href="#contacts">Contact Me</a>
                            </li>
                            <li>
                                <button className={`btn ms-4 d-none d-lg-block ${Style.modeBTN}`} onClick={() => {
                                    const newTheme = theme === "light" ? "dark" : "light";
                                    setTheme(newTheme);
                                    localStorage.setItem("theme", newTheme);
                                }}>{theme === "light" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
}