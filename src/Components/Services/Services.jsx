import React, { useEffect } from "react";
import Style from './Services.module.css'

export default function Services() {

    useEffect(() => {
        const sections = document.querySelectorAll(`.${Style.servicesSection}`);

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
        <div className={Style.servicesSection} id="services">
            <div className="container py-5">

                <h2 className={Style.servicesTitle}>Services</h2>

                <div className="row g-4">
                    <div className="col-12 col-md-4">
                        <div className={Style.card}>
                            <i className="fa-solid fa-code"></i>
                            <h5>Frontend Development</h5>
                            <p>Building modern, responsive, and interactive web interfaces using technologies like React, with a focus on clean code and smooth user experience.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className={Style.card}>
                            <i className="fa-solid fa-mobile-screen"></i>
                            <h5>Responsive Design</h5>
                            <p>Creating layouts that adapt seamlessly across different screen sizes, ensuring a consistent and user-friendly experience on all devices.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className={Style.card}>
                            <i className="fa-solid fa-bolt"></i>
                            <h5>Performance Optimization</h5>
                            <p>Improving website speed and performance by writing efficient code and optimizing UI behavior for a better user experience.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>
}