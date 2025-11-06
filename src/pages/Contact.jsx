import React, { useState,useEffect } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        voornaam: "",
        achternaam: "",
        telefoon: "",
        email: "",
        bericht: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id.toLowerCase()]: value });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.voornaam.trim()) newErrors.voornaam = "First name is required";
        if (!formData.achternaam.trim()) newErrors.achternaam = "Last name is required";
        if (!formData.telefoon.trim()) {
            newErrors.telefoon = "Phone number is required";
        } else if (!/^[0-9]{10,15}$/.test(formData.telefoon)) {
            newErrors.telefoon = "Enter a valid phone number";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!formData.bericht.trim()) newErrors.bericht = "Message is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert("Formulier succesvol verzonden!");
            console.log("Form data:", formData);
            // You can now send formData to API here
        }
    };

    useEffect(() => {
    // Elfsight script already loads only once
    const scriptId = "elfsight-platform-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

    return (
        <main>
            <section className="contact-banner-sec">
                <div className="contact-banner-mark">
                    <img src="assets/contact-mark.svg" alt="" className="w-100" />
                </div>

                <div className="common-wrap">
                    <div className="contact-banner-img common-bg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.8881862940902!2d88.39992957475849!3d22.620650231208543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e075bbf3817%3A0x8bd1a9ec63c9e1aa!2sNeo%20Coderz%20Technologies!5e0!3m2!1sen!2sin!4v1761815470698!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </section>


            <section className="contact-top-sec">
                <div className="container">
                    <div className="contact-top-wrap">
                        <div className="each-contact-top-area">
                            <h4>Contact</h4>
                            <a href="#">0492 74 52 17</a><br />
                            <a href="#">info@automotivevanlierop.nl</a><br />
                            <a href="#">
                                Lange Vonder 1<br />5741 TT Beek en Donk
                            </a>
                        </div>
                        <div className="each-contact-top-area">
                            <h4>Openingstijden</h4>
                            <div className="opening-info">
                                <div className="each-opening-info">
                                    <h6>Showroom</h6>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Ma - vr</td>
                                                <td>09:00 - 17:30</td>
                                            </tr>
                                            <tr>
                                                <td>Za</td>
                                                <td>10:00 - 17:00</td>
                                            </tr>
                                            <tr>
                                                <td>Zo</td>
                                                <td>Op afspraak</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="each-opening-info">
                                    <h6>Werkplaats</h6>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Ma - vr</td>
                                                <td>08:00 - 17:00</td>
                                            </tr>
                                            <tr>
                                                <td>Za</td>
                                                <td>Gesloten</td>
                                            </tr>
                                            <tr>
                                                <td>Zo</td>
                                                <td>Gesloten</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-form-sec">
                <div className="container">
                    <div className="contact-form-wrap">
                        <div className="contact-form-top">
                            <div className="contact-form-top-logo">
                                <img src="assets/teun-van-logo.jpg" alt="logo" className="w-100" />
                            </div>
                            <div className="contact-form-top-text">
                                <p>Teun van Lierop</p>
                                <a href="mailto:info@automotivevanlierop.nl">info@automotivevanlierop.nl</a>
                            </div>
                        </div>

                        <div className="form-heading text-center">
                            <h2>Vragen of interesse?</h2>
                            <p>
                                Via het formulier op deze pagina kan eenvoudig een afspraakverzoek worden ingediend.
                                Uiteraard kan dit ook telefonisch. Wij zullen een verzoek altijd bevestigen.
                            </p>
                        </div>

                        <div className="form-area">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                id="Voornaam"
                                                className="form-control form-styl"
                                                type="text"
                                                placeholder="Voornaam"
                                                value={formData.voornaam}
                                                onChange={handleChange}
                                            />
                                            {errors.voornaam && <small className="text-danger">{errors.voornaam}</small>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                id="Achternaam"
                                                className="form-control form-styl"
                                                type="text"
                                                placeholder="Achternaam"
                                                value={formData.achternaam}
                                                onChange={handleChange}
                                            />
                                            {errors.achternaam && <small className="text-danger">{errors.achternaam}</small>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                id="Telefoon"
                                                className="form-control form-styl"
                                                type="text"
                                                placeholder="Telefoon"
                                                value={formData.telefoon}
                                                onChange={handleChange}
                                            />
                                            {errors.telefoon && <small className="text-danger">{errors.telefoon}</small>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                id="Email"
                                                className="form-control form-styl"
                                                type="text"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && <small className="text-danger">{errors.email}</small>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea
                                                id="Bericht"
                                                className="form-control form-styl"
                                                placeholder="Bericht"
                                                value={formData.bericht}
                                                onChange={handleChange}
                                            ></textarea>
                                            {errors.bericht && <small className="text-danger">{errors.bericht}</small>}
                                        </div>
                                    </div>
                                </div>

                                <div className="form-button text-center">
                                    <button type="submit" className="common-btn">
                                        Verzenden
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

         <section className="google-review">
        <div className="container">
          <div className="google-review-img">
          </div>
          <div
            className="elfsight-app-1ea4db7b-499a-4295-943a-69724537779b"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>
        </main>
    )
}

export default Contact;
