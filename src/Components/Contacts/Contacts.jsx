import {React, useEffect, useRef} from "react";
import Style from "./Contacts.module.css";
import emailjs from "emailjs-com";

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_quk4pbh",
            "template_xsrk8oh",
            form.current,
            "Tv8hvCaXUMujft0s6"
        )
        .then(
            () => {
                alert("Message sent successfully");
            },
            () => {
                alert("Failed to sent");
            }
        );
    }

    useEffect(() => {
        const sections = document.querySelectorAll(`.${Style.contactSection}`);

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
        <section className={Style.contactSection} id="contacts">
            <div className="container py-5">

                <h2 className={Style.title}>Contact Me</h2>
                <p className={Style.subTitle}>
                    Have a project in mind or want to chat? Feel free to reach out!
                </p>

                <div className="row g-4 align-items-center">

                    {/* LEFT SIDE */}
                    <div className="col-12 col-md-5">
                        <div className={Style.leftSide}>

                            <h4>Let's Connect 🤝</h4>

                            <p>
                                I'm always open to discussing new projects, creative ideas,
                                or opportunities. Feel free to contact me anytime.
                            </p>

                            <div className={Style.infoItem}>
                                <i className="fa-solid fa-envelope"></i>

                                <div className={Style.emailBox}>
                                    <span>Email</span>

                                    <div className={Style.emailRow}>
                                        <p>sohaib.a.job@gmail.com</p>

                                        <button className={Style.copyBTN}
                                            onClick={() => {
                                                navigator.clipboard.writeText("sohaib.a.job@gmail.com");
                                                alert("Copied!");
                                            }}
                                        >
                                            <i className="fa-regular fa-copy"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.infoItem}>
                                <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <span>Location</span>
                                    <p>Egypt</p>
                                </div>
                            </div>

                            <div className={Style.infoItem}>
                                <i className="fa-solid fa-phone"></i>
                                <div>
                                    <span>Phone</span>
                                    <p>+20 128 269 4931</p>
                                </div>
                            </div>

                            <div className={`mb-0 ${Style.infoItem}`}>
                                <i className="fa-solid fa-file"></i>
                                <div>
                                    <span>Resume</span>
                                    <p>
                                        <a href="/Sohaib Ayman Resume.pdf" target="_blank" rel="noreferrer">
                                            Download CV
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE (FORM) */}
                    <div className="col-12 col-md-7">
                        <div className={Style.formContainer}>

                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row g-3">

                                    <div className="col-md-6">
                                        <input name="name" type="text" placeholder="Your name" required/>
                                    </div>

                                    <div className="col-md-6">
                                        <input name="email" type="email" placeholder="Your email" required/>
                                    </div>

                                    <div className="col-12">
                                        <input name="subject" type="text" placeholder="Subject" required/>
                                    </div>

                                    <div className="col-12">
                                        <textarea name="message" rows="5" placeholder="Your message" required></textarea>
                                    </div>

                                    <div className="col-12">
                                        <button type="submit">
                                            Send Message <i className="fa-solid fa-paper-plane"></i>
                                        </button>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
}