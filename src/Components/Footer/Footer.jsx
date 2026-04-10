import React, { useEffect } from "react";
import Style from "./Footer.module.css";

export default function Footer() {
    useEffect(() => {
        const sections = document.querySelectorAll(`.${Style.footer}`);

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
        <footer className={Style.footer}>

            <div className="container">

                {/* TOP */}
                <div className={Style.top}>

                    <div className={Style.left}>
                        <h3>Sohaib Ayman</h3>

                        <p>Building clean, modern, and user-focused web experiences.</p>

                        <p>
                            Passionate about frontend development, performance, and creating smooth UI.
                        </p>

                        <span>Built by Sohaib Ayman | Frontend Developer</span>
                    </div>

                    <div className={Style.right}>
                        <a href="https://github.com/sohaib-ayman" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>

                        <a href="https://linkedin.com/in/sohaib-ayman" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a href="mailto:sohaib.a.job@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>

                </div>

                {/* LINE */}
                <div className={Style.line}></div>

                {/* BOTTOM */}
                <div className={Style.bottom}>
                    <p>This page was handcrafted with care.</p>
                    <p>© 2026 Sohaib Ayman. All rights reserved.</p>
                </div>

            </div>

        </footer>
    </>
}