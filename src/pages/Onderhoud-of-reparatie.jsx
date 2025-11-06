import React, { useState, useEffect } from "react";

const Werkplaats = () => {
    const [formData, setFormData] = useState({
    voornaam: "",
    achternaam: "",
    telefoon: "",
    email: "",
    merk: "",
    type: "",
    kenteken: "",
    kilometerstand: "",
    onderhoudsbeurt: "",
    apk: "",
    leenauto: "",
    datum: "",
    opmerkingen: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Required field checks
    if (!formData.voornaam.trim()) newErrors.voornaam = "First name is required";
    if (!formData.achternaam.trim()) newErrors.achternaam = "Last name is required";
    if (!formData.telefoon.trim()) newErrors.telefoon = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.merk.trim()) newErrors.merk = "Merk is required";
    if (!formData.type.trim()) newErrors.type = "Type is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s]{6,}$/;
    if (formData.telefoon && !phoneRegex.test(formData.telefoon)) {
      newErrors.telefoon = "Enter a valid phone number";
    }

    // Date format (optional)
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (formData.datum && !dateRegex.test(formData.datum)) {
      newErrors.datum = "Use the format mm/dd/yyyy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id.toLowerCase()]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form successfully submitted!");
      console.log("Form Data:", formData);
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
      {/* Back Button */}
      <section className="back-btn">
        <div className="container">
          <a href="#" className="common-btn border-btn">
            <img src="assets/back-arrw.svg" alt="img" />
            Terug naar overzicht
          </a>
        </div>
      </section>

      {/* Top Section */}
      <section className="diens-dtl-top-sec apk-top-sec">
        <div className="diens-dtl-top-mark">
          <img src="assets/diens-dtl-mark.svg" alt="" className="w-100" />
        </div>
        <div className="container">
          <div className="diens-top-wrap">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="diens-dtl-top-img">
                  <img src="assets/apk-banner.jpg" alt="img" className="w-100" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="diens-dtl-top-content">
                  <h2>Onderhoud of reparatie</h2>
                  <p>
                    Bij Automotive van Lierop in Beek en Donk zorgen we voor het
                    onderhoud van uw auto. Goed en tijdig onderhoud voorkomt
                    kostbare reparaties. Of het nu gaat om een grote of kleine
                    onderhoudsbeurt, u kunt bij ons terecht.
                    <br />
                    Grote en kleine onderhoudsbeurt. Bij een grote onderhoudsbeurt
                    controleren we uw auto grondig. We kijken naar de technische
                    staat, zoals de distributieriem, uitlaat en banden. Ook vullen
                    we alle vloeistoffen bij. Daarnaast voeren we een APK-keuring
                    uit, zodat u zonder zorgen op weg kan.
                    <br />
                    Kleine onderhoudsbeurten. Bij een kleine beurt controleren we
                    verschillende punten, waaronder verlichting, banden en
                    remblokken. Heeft u vragen of wilt u direct een afspraak maken?
                    Neem gerust contact met ons op. We staan voor u klaar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <section className="diens-dtl-mid-sec">
        <div className="container">
          <div className="diens-dtl-mid-area">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h2>01</h2>
                    <h3>Maatwerk serviceplannen</h3>
                    <p>
                      Bij Automotive van Lierop geloven we in maatwerk. We bieden
                      serviceplannen die zijn afgestemd op uw specifieke behoeften
                      en rijgedrag. Of u nu veel kilometers maakt of uw auto
                      voornamelijk voor korte ritten gebruikt, ons team zal een
                      onderhoudsschema opstellen dat perfect past bij uw auto en
                      levensstijl.
                    </p>
                  </td>
                  <td>
                    <h2>02</h2>
                    <h3>Geavanceerde diagnostiek</h3>
                    <p>
                      Onze werkplaats is uitgerust met de nieuwste apparatuur,
                      waarmee we snel en nauwkeurig problemen kunnen identificeren
                      en oplossen. Of het nu gaat om motorstoringen, elektronische
                      problemen of andere complexe kwesties, we hebben de tools en
                      expertise om uw auto weer in topconditie te brengen.
                    </p>
                  </td>
                  <td>
                    <h2>03</h2>
                    <h3>Transparante kostenramingen</h3>
                    <p>
                      Bij ons weet u altijd waar u aan toe bent. Voordat we met
                      het onderhoud beginnen, ontvangt u een duidelijke en
                      gedetailleerde kostenraming, zodat u niet voor verrassingen
                      komt te staan. We streven ernaar om eerlijk en transparant te
                      zijn in al onze communicatie, zodat u met vertrouwen uw auto
                      aan ons kunt toevertrouwen.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Form Section */}
       <section className="form-sec werkplaats-form">
      <div className="common-wrap">
        <div className="form-sec-wrap">
          <div className="container">
            <div className="contact-form-wrap">
              <div className="contact-form-top">
                <div className="contact-form-top-logo">
                  <img src="assets/teun-van-logo.jpg" alt="img" className="w-100" />
                </div>
                <div className="contact-form-top-text">
                  <p>Teun van Lierop</p>
                  <a href="#">info@automotivevanlierop.nl</a>
                </div>
              </div>

              <div className="form-heading text-center">
                <h2>Vragen of interesse?</h2>
                <p>
                  Via het formulier op deze pagina kan eenvoudig een afspraakverzoek
                  worden ingediend. Uiteraard kan dit ook telefonisch. Wij zullen
                  een verzoek altijd bevestigen.
                </p>
              </div>

              <div className="form-area">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {/* ---- PERSOONLIJKE GEGEVENS ---- */}
                    <div className="col-lg-12">
                      <div className="form-area-heading">
                        <h3>UW GEGEVENS</h3>
                      </div>
                    </div>

                    {[
                      ["Voornaam", "voornaam"],
                      ["Achternaam", "achternaam"],
                      ["Telefoon", "telefoon"],
                      ["Email", "email"],
                    ].map(([label, id]) => (
                      <div className="col-lg-6" key={id}>
                        <div className="form-group">
                          <input
                            id={id}
                            type="text"
                            className="form-control form-styl"
                            placeholder={label}
                            value={formData[id]}
                            onChange={handleChange}
                          />
                          {errors[id] && <small className="text-danger">{errors[id]}</small>}
                        </div>
                      </div>
                    ))}

                    {/* ---- AUTO GEGEVENS ---- */}
                    <div className="col-lg-12">
                      <div className="form-area-heading">
                        <h3>AUTO GEGEVENS</h3>
                      </div>
                    </div>

                    {[
                      ["Merk", "merk"],
                      ["Type", "type"],
                      ["Kenteken", "kenteken"],
                      ["Kilometerstand", "kilometerstand"],
                    ].map(([label, id]) => (
                      <div className="col-lg-6" key={id}>
                        <div className="form-group">
                          <input
                            id={id}
                            type="text"
                            className="form-control form-styl"
                            placeholder={label}
                            value={formData[id]}
                            onChange={handleChange}
                          />
                          {errors[id] && <small className="text-danger">{errors[id]}</small>}
                        </div>
                      </div>
                    ))}

                    <div className="col-lg-3">
                      <div className="form-group">
                        <select
                          id="onderhoudsbeurt"
                          className="form-control form-styl"
                          value={formData.onderhoudsbeurt}
                          onChange={handleChange}
                        >
                          <option value="">Type onderhoudsbeurt</option>
                          <option>Oosterwolde</option>
                          <option>Gorredijk</option>
                          <option>Groningen</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-group">
                        <select
                          id="apk"
                          className="form-control form-styl"
                          value={formData.apk}
                          onChange={handleChange}
                        >
                          <option value="">APK keuring</option>
                          <option>Oosterwolde</option>
                          <option>Gorredijk</option>
                          <option>Groningen</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-group">
                        <select
                          id="leenauto"
                          className="form-control form-styl"
                          value={formData.leenauto}
                          onChange={handleChange}
                        >
                          <option value="">Leenauto</option>
                          <option>Oosterwolde</option>
                          <option>Gorredijk</option>
                          <option>Groningen</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-group form-date-info">
                        <input
                          id="datum"
                          type="text"
                          className="form-control form-styl"
                          placeholder="mm/dd/yyyy"
                          value={formData.datum}
                          onChange={handleChange}
                        />
                        {errors.datum && <small className="text-danger">{errors.datum}</small>}
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          id="opmerkingen"
                          className="form-control form-styl"
                          placeholder="Opmerkingen"
                          value={formData.opmerkingen}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-button text-center">
                    <button type="submit" className="common-btn">
                      Aanvragen
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Related Services */}
      <section className="service-sec diend-dtl-service-sec">
  <div className="container">
    <div className="service-title text-center">
      <h2>Gerelateerde <strong>werkplaats</strong></h2>
    </div>
    <div className="dienst-dtl-service-grid">
      <div className="row g-4">
        {[
          { img: "werkplaats-img1.jpg", title: "APK" },
          { img: "werkplaats-img2.jpg", title: "Airco service" },
          { img: "werkplaats-img3.jpg", title: "Onderhoud of reparatie" },
          { img: "werkplaats-img4.jpg", title: "Werkplaatsafspraak plannen" },
        ].map((service, idx) => (
          <div key={idx} className="col-lg-6">
            <a href="#">
              <div className="each-service-block position-relative h-100">
                <div className="each-service-block-img">
                  <img src={`assets/${service.img}`} alt="" className="w-100" />
                </div>
                <div className="each-service-block-info">
                  <h3>{service.title}</h3>
                </div>
                <div className="each-service-block-hover-info">
                  <div className="each-service-block-info-wrap">
                    <h3>{service.title}</h3>
                    <p>
                      De APK voorkomt dat onveilige voertuigen aan het verkeer deelnemen. Bovendien
                      is het wettelijk verplicht om auto's ouder dan 3 jaar jaarlijks te laten keuren.
                    </p>
                    <div className="common-btn border-btn">Lees meer</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
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
  );
};

export default Werkplaats;
