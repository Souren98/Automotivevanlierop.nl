import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const AanbodDtl = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    voornaam: "",
    achternaam: "",
    telefoon: "",
    email: "",
    bericht: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\-\s()]{6,}$/;

  const validate = () => {
    const e = {};

    if (!form.voornaam.trim()) e.voornaam = "First name is required";
    if (!form.achternaam.trim()) e.achternaam = "Last name is required";

    if (!form.telefoon.trim()) {
      e.telefoon = "Phone number is required";
    } else if (!phoneRegex.test(form.telefoon.trim())) {
      e.telefoon = "Enter a valid phone number";
    }

    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!emailRegex.test(form.email.trim())) {
      e.email = "Enter a valid email address";
    }

    if (!form.bericht.trim()) e.bericht = "Message is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);
    if (validate()) {
      setSubmitted(true);
      console.log("Form data:", form);
    } else {
      setSubmitted(false);
    }
  };

  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const relatedProducts = [
    {
      id: 1,
      img: "/assets/product-car.jpg",
      title: "Audi A1 Sportback",
      desc: "1.2 TFSI Admired | S-LINE | AIRCO ...",
      year: "2015",
      fuel: "Benzine",
      transmission: "Handmatig",
      price: "€ 259.900,-",
      monthly: "€ 401 per maand",
      link: "#",
    },
    {
      id: 2,
      img: "/assets/product-car.jpg",
      title: "BMW X1",
      desc: "2.0 TDI xDrive | NAVI | CAMERA ...",
      year: "2018",
      fuel: "Diesel",
      transmission: "Automaat",
      price: "€ 319.500,-",
      monthly: "€ 460 per maand",
      link: "#",
    },
    {
      id: 3,
      img: "/assets/product-car.jpg",
      title: "Volkswagen Polo",
      desc: "1.4 Comfortline | LED | CRUISE ...",
      year: "2016",
      fuel: "Benzine",
      transmission: "Handmatig",
      price: "€ 199.000,-",
      monthly: "€ 310 per maand",
      link: "#",
    },
     {
      id: 4,
      img: "/assets/product-car.jpg",
      title: "Volkswagen Polo",
      desc: "1.4 Comfortline | LED | CRUISE ...",
      year: "2016",
      fuel: "Benzine",
      transmission: "Handmatig",
      price: "€ 199.000,-",
      monthly: "€ 310 per maand",
      link: "#",
    },
       {
      id: 5,
      img: "/assets/product-car.jpg",
      title: "Volkswagen Polo",
      desc: "1.4 Comfortline | LED | CRUISE ...",
      year: "2016",
      fuel: "Benzine",
      transmission: "Handmatig",
      price: "€ 199.000,-",
      monthly: "€ 310 per maand",
      link: "#",
    },
       {
      id: 6,
      img: "/assets/product-car.jpg",
      title: "Volkswagen Polo",
      desc: "1.4 Comfortline | LED | CRUISE ...",
      year: "2016",
      fuel: "Benzine",
      transmission: "Handmatig",
      price: "€ 199.000,-",
      monthly: "€ 310 per maand",
      link: "#",
    },
  ];
  return (
    <main>
      <section className="back-btn">
        <div className="container">
          <button
            className="common-btn border-btn"
            onClick={() => navigate("/Aanbodlist")}
          >
            <img src="assets/back-arrw.svg" alt="img" />
            Terug naar overzicht
          </button>
        </div>
      </section>

      <section className="aanbod-top-sec">
        <div className="aanbod-top-mark">
          <img src="assets/banner-bg-mark.svg" alt="img" className="w-100" />
        </div>
        <div className="container">
          <div className="aanbod-top-area">
            <div className="row">
              {/* Left Side */}
              <div className="col-lg-8">
                <div className="aanbod-top-left-part">
                  <div className="row">
                    {/* Slider */}
                    <div className="col-lg-9">
                      <div className="aanbod-top-slider position-relative">
                        <Swiper
                          modules={[Navigation]}
                          navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                          }}
                          loop={true}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div className="each-aanbod-top-slider-car">
                              <img
                                src="assets/aanbod-top-slider-car.jpg"
                                alt="car"
                                className="w-100"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="each-aanbod-top-slider-car">
                              <img
                                src="assets/aanbod-top-slider-car.jpg"
                                alt="car"
                                className="w-100"
                              />
                            </div>
                          </SwiperSlide>
                        </Swiper>

                        <div className="swiper-button-next common-arrow">
                          <img src="assets/next.svg" alt="next" />
                        </div>
                        <div className="swiper-button-prev common-arrow">
                          <img src="assets/prev.svg" alt="prev" />
                        </div>
                      </div>
                    </div>

                    {/* Right Images */}
                    <div className="col-lg-3">
                      <div className="aanbod-top-slider-right-img">
                        <div className="each-aanbod-top-slider-right-img">
                          <img
                            src="assets/aanbod-top-slider-car.jpg"
                            alt="car"
                            className="w-100"
                          />
                        </div>
                        <div className="each-aanbod-top-slider-right-img">
                          <img
                            src="assets/aanbod-top-slider-car.jpg"
                            alt="car"
                            className="w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Info */}
              <div className="col-lg-4">
                <div className="aanbod-top-right-part">
                  <div className="aanbod-top-right-title">
                    <h2>Audi A1 Sportback</h2>
                    <p>1.2 TFSI Admired | S- LINE | AIRCO ...</p>
                  </div>
                  <div className="aanbod-top-right-mid">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <h6>
                              Bouwjaar <strong>Hybride (Benzine)</strong>
                            </h6>
                          </td>
                          <td>
                            <h6>
                              Brandstof <strong>Handgeschakeld</strong>
                            </h6>
                          </td>
                          <td>
                            <h6>
                              Transmissie <strong>Handmatig</strong>
                            </h6>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="aanbod-top-right-btm">
                    <h4>
                      € 96.950,- <strong>€ 401 per maand</strong>
                    </h4>
                  </div>
                  <div className="aanbod-top-right-btn">
                    <ul>
                      <li>
                        <a href="#" className="common-btn border-btn">
                          Inruilvoorstel
                        </a>
                      </li>
                      <li>
                        <a href="#" className="common-btn">
                          Inruilvoorstel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dtl-tab-sec">
        <div className="container">
          <div className="tab-wrap">
            <div className="row flex-row-reverse">
              <div className="col-lg-4">
                <div className="tab-right-part make_sticky">
                  <div className="tab-right-top text-center">
                    <h4>Vragen of interesse?</h4>
                    <p>Neem gerust contact op via het formulier op deze pagina, telefonisch of per e-mail. Wij helpen u snel verder.</p>
                  </div>
                  <div className="tab-right-btm">
                    <div className="tab-contact-part">
                      <div className="row align-items-center">
                        <div className="col-lg-5">
                          <div className="tab-man-img">
                            <img src="assets/tab-man-img.svg" alt="img" className="w-100" />
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="tab-man-info">
                            <p>
                              <a href="#">0492 74 52 17</a>
                            </p>
                            <p>
                              <a href="#">info@automotivevanlierop.nl</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-share-icon">
                      <img src="assets/tab-share-icon.svg" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="mob-tab-right-part">
                  <div className="tab-right-top text-center">
                    <h5>Beoordeling <strong>(4.5/5)</strong></h5>
                    <div className="start-icon">
                      <img src="assets/start-icon.svg" alt="img" />
                    </div>
                    <h4>Vragen of interesse?</h4>
                    <p>Neem gerust contact op via het formulier op deze pagina, telefonisch of per e-mail. Wij helpen u snel verder.</p>
                  </div>
                  <div className="tab-right-btm">
                    <div className="tab-contact-part">
                      <div className="row align-items-center">
                        <div className="col-lg-5">
                          <div className="tab-man-img">
                            <img src="assets/tab-man-img.svg" alt="img" className="w-100" />
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="tab-man-info">
                            <p>
                              <a href="#">0492 74 52 17</a>
                            </p>
                            <p>
                              <a href="#">info@automotivevanlierop.nl</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mob-tab-share-icon">
                      <a href="#" className="common-btn">
                        <img src="assets/tab-share-icon.svg" alt="img" />
                        Delen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="dtl-tab-area">
                  <div className="tab-btn">
                    <ul className="tabs nav nav-tabs border-0">
                      <li className="active common-btn" rel="tab1">Kenmerken</li>
                      <li className="common-btn" rel="tab2">Opties</li>
                      <li className="common-btn" rel="tab3">Beschrijving</li>
                      <li className="common-btn" rel="tab4">Zakelijk leasen</li>
                      <li className="common-btn" rel="tab5">Privé financieren</li>
                      <li className="common-btn" rel="tab6">Onderhoudshistorie</li>
                    </ul>
                  </div>
                  <div className="tab-area d-none">
                    <div className="tab_container tab-content">
                      <div className="d_active tab_drawer_heading common-btn" rel="tab1">
                        <span>Kenmerken</span>
                      </div>
                      <div id="tab1" className="tab_content">
                        <div className="kenmerken-tab">
                          <h4>Algemeen</h4>
                          <ul>
                            <li>Merk</li>
                            <li>Audi</li>
                            <li>Model</li>
                            <li>S6</li>
                            <li>Type</li>
                            <li>Sportback 30 Tfsi Pro Line</li>
                            <li>Uitvoering</li>
                            <li>Dakraam / Trekhaak</li>
                            <li>Kilometerstand</li>
                            <li>16.215 km</li>
                            <li>Bouwjaar</li>
                            <li>2019</li>
                            <li>Brandstof</li>
                            <li>Diesel</li>
                            <li>Transmissie</li>
                            <li>Handgeschakeld</li>
                            <li>Carrosserie</li>
                            <li>hatchback</li>
                            <li>Kleur exterieur</li>
                            <li>Black</li>
                            <li>Kleur interieur</li>
                            <li>Black / White</li>
                            <li>Aantal deuren</li>
                            <li>5-deurs</li>
                            <li>Aantal zitplaatsen</li>
                            <li>5 zitplaatsen</li>
                            <li>Aantal versnellingen</li>
                            <li>5 versnellingen</li>
                            <li>BTW/marge</li>
                            <li>BTW</li>
                            <li>Kenteken</li>
                            <li>00-00-00</li>
                          </ul>
                        </div>
                        <div className="tab-btm-btn">
                          <div className="common-btn">+ Bekijk alle kenmerken</div>
                        </div>
                      </div>

                      <div className="tab_drawer_heading common-btn" rel="tab2">
                        <span>Opties</span>
                      </div>
                      <div id="tab2" className="tab_content">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 bullet-panel">
                            <div className="tab_hedaing">
                              <h5>Exterieur</h5>
                            </div>
                            <ul>
                              <li>Bi-xenon koplampen (+koplampreiniging)</li>
                              <li>Buitenspiegels elektrisch verstel- en verwarmbaar</li>
                              <li>Centrale deurvergrendeling met afstandsbediening</li>
                              <li>Dimlichten automatisch</li>
                              <li>LED dagrijverlichting</li>
                              <li>Lichtmetalen velgen 18"</li>
                              <li>Metaalkleur</li>
                              <li>Mistlampen voor</li>
                              <li>Parkeersensor achter</li>
                              <li>Ruitensproeiers verwarmbaar</li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6 bullet-panel">
                            <div className="tab_hedaing">
                              <h5>Infotainment</h5>
                            </div>
                            <ul>
                              <li>Bi-xenon koplampen (+koplampreiniging)</li>
                              <li>Buitenspiegels elektrisch verstel- en verwarmbaar</li>
                              <li>Centrale deurvergrendeling met afstandsbediening</li>
                              <li>Dimlichten automatisch</li>
                              <li>LED dagrijverlichting</li>
                              <li>Lichtmetalen velgen 18"</li>
                              <li>Metaalkleur</li>
                              <li>Mistlampen voor</li>
                              <li>Parkeersensor achter</li>
                              <li>Ruitensproeiers verwarmbaar</li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6 bullet-panel">
                            <div className="tab_hedaing">
                              <h5>Interieur</h5>
                            </div>
                            <ul>
                              <li>Bi-xenon koplampen (+koplampreiniging)</li>
                              <li>Buitenspiegels elektrisch verstel- en verwarmbaar</li>
                              <li>Centrale deurvergrendeling met afstandsbediening</li>
                              <li>Dimlichten automatisch</li>
                              <li>LED dagrijverlichting</li>
                              <li>Lichtmetalen velgen 18"</li>
                              <li>Metaalkleur</li>
                              <li>Mistlampen voor</li>
                              <li>Parkeersensor achter</li>
                              <li>Ruitensproeiers verwarmbaar</li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6 bullet-panel">
                            <div className="tab_hedaing">
                              <h5>Veiligheid</h5>
                            </div>
                            <ul>
                              <li>Bi-xenon koplampen (+koplampreiniging)</li>
                              <li>Buitenspiegels elektrisch verstel- en verwarmbaar</li>
                              <li>Centrale deurvergrendeling met afstandsbediening</li>
                              <li>Dimlichten automatisch</li>
                              <li>LED dagrijverlichting</li>
                              <li>Lichtmetalen velgen 18"</li>
                              <li>Metaalkleur</li>
                              <li>Mistlampen voor</li>
                              <li>Parkeersensor achter</li>
                              <li>Ruitensproeiers verwarmbaar</li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6 bullet-panel">
                            <div className="tab_hedaing">
                              <h5>Overige</h5>
                            </div>
                            <ul>
                              <li>Bi-xenon koplampen (+koplampreiniging)</li>
                              <li>Buitenspiegels elektrisch verstel- en verwarmbaar</li>
                              <li>Centrale deurvergrendeling met afstandsbediening</li>
                              <li>Dimlichten automatisch</li>
                              <li>LED dagrijverlichting</li>
                              <li>Lichtmetalen velgen 18"</li>
                              <li>Metaalkleur</li>
                              <li>Mistlampen voor</li>
                              <li>Parkeersensor achter</li>
                              <li>Ruitensproeiers verwarmbaar</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="tab_drawer_heading common-btn" rel="tab3">
                        <span>Beschrijving</span>
                      </div>
                      <div id="tab3" className="tab_content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.
                          <br /><br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.
                        </p>
                      </div>

                      <div className="tab_drawer_heading common-btn" rel="tab4">
                        <span>Zakelijk leasen</span>
                      </div>
                      <div id="tab4" className="tab_content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.
                          <br /><br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.
                        </p>
                      </div>

                      <div className="tab_drawer_heading common-btn" rel="tab5">
                        <span>Privé financieren</span>
                      </div>
                      <div id="tab5" className="tab_content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.
                          <br /><br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.
                        </p>
                      </div>

                      <div className="tab_drawer_heading common-btn" rel="tab6">
                        <span>Onderhoudshistorie</span>
                      </div>
                      <div id="tab6" className="tab_content">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="each-onderhoud-block">
                              <div className="left-bg-block">
                                <p>20-05-2021<br />44287 KM</p>
                              </div>
                              <div className="block-dtls">
                                <h5><strong>Onderhound</strong></h5>
                                <p>grote beurt</p>
                                <h5><strong>Omschriving</strong></h5>
                                <p>- Stoffilter vervangen - Motorolie en filter vervangen</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="each-onderhoud-block">
                              <div className="left-bg-block">
                                <p>20-05-2021<br />44287 KM</p>
                              </div>
                              <div className="block-dtls">
                                <h5><strong>Onderhound</strong></h5>
                                <p>grote beurt</p>
                                <h5><strong>Omschriving</strong></h5>
                                <p>- Stoffilter vervangen - Motorolie en filter vervangen</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="kenmarken-popup">
        <div className="kenmarken-popup-wrap">
          <div className="kenmarken-popup-overlay"></div>
          <div className="kenmarken-popup-inner container">
            <div className="kenmarken-popup-close">
              <img src="images/pop-close.svg" alt="img" />
            </div>
            <div className="kenmerken-popup-model">
              <h3>BMW 5 Serie</h3>
              <p>Touring 520i Corporate Lease High Executive Panorama-dak, Leder, Sportint.</p>
            </div>
            <div className="kenmarken-popup-content">
              <h4>Algemeen</h4>
              <ul>
                <li>Vermogen</li>
                <li>110 pk</li>
                <li>Vermogen electrisch</li>
                <li>nvt</li>
                <li>Topsnelheid</li>
                <li>204 kilometer per uur</li>
                <li>Acceleratie (0-100)</li>
                <li>10 seconden</li>
                <li>Koppel</li>
                <li>160</li>
                <li>Motorinhoud</li>
                <li>999 cc</li>
                <li>Aantal cilinders</li>
                <li>3</li>
                <li>Aandrijving</li>
                <li>Voorwiel (FWD)</li>
                <li>Actieradius electrisch</li>
                <li>nvt</li>
              </ul>
              <h4>Algemeen</h4>
              <ul>
                <li>Vermogen</li>
                <li>110 pk</li>
                <li>Vermogen electrisch</li>
                <li>nvt</li>
                <li>Topsnelheid</li>
                <li>204 kilometer per uur</li>
                <li>Acceleratie (0-100)</li>
                <li>10 seconden</li>
                <li>Koppel</li>
                <li>160</li>
                <li>Motorinhoud</li>
                <li>999 cc</li>
                <li>Aantal cilinders</li>
                <li>3</li>
                <li>Aandrijving</li>
                <li>Voorwiel (FWD)</li>
                <li>Actieradius electrisch</li>
                <li>nvt</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="form-sec">
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
                    <a href="mailto:info@automotivevanlierop.nl">info@automotivevanlierop.nl</a>
                  </div>
                </div>

                <div className="form-heading text-center">
                  <h2>Vragen of interesse?</h2>
                  <p>
                    Via het formulier op deze pagina kan eenvoudig een afspraakverzoek worden ingediend. Uiteraard kan dit ook telefonisch. Wij zullen een verzoek altijd bevestigen.
                  </p>
                </div>

                <div className="form-area">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="voornaam"
                            className="form-control form-styl"
                            type="text"
                            placeholder="Voornaam"
                            value={form.voornaam}
                            onChange={handleChange}
                          />
                          {errors.voornaam && <small className="text-danger">{errors.voornaam}</small>}
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="achternaam"
                            className="form-control form-styl"
                            type="text"
                            placeholder="Achternaam"
                            value={form.achternaam}
                            onChange={handleChange}
                          />
                          {errors.achternaam && <small className="text-danger">{errors.achternaam}</small>}
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="telefoon"
                            className="form-control form-styl"
                            type="text"
                            placeholder="Telefoon"
                            value={form.telefoon}
                            onChange={handleChange}
                          />
                          {errors.telefoon && <small className="text-danger">{errors.telefoon}</small>}
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="email"
                            className="form-control form-styl"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                          />
                          {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="bericht"
                            className="form-control form-styl"
                            placeholder="Bericht"
                            value={form.bericht}
                            onChange={handleChange}
                            rows={4}
                          />
                          {errors.bericht && <small className="text-danger">{errors.bericht}</small>}
                        </div>
                      </div>
                    </div>

                    <div className="form-button text-center">
                      <button type="submit" className="common-btn">Verzenden</button>
                    </div>

                    {submitted && (
                      <div style={{ marginTop: 12 }}>
                        <small className="text-success">Formulier succesvol verzonden!</small>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-sec aanbod-product-sec">
      <div className="common-wrap">
        <div className="product-sec-wrap">
          <div className="container">
            <div className="product-title">
              <h2>
                Gerelateerde <strong>voertuigen</strong>
              </h2>
            </div>

            <div className="product-slider position-relative">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".aanbod-product-sec .swiper-button-next",
                  prevEl: ".aanbod-product-sec .swiper-button-prev",
                }}
                spaceBetween={20}
                slidesPerView={1}
                loop={false}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  768: { slidesPerView: 1, spaceBetween: 20 },
                  992: { slidesPerView: 2, spaceBetween: 20 },
                  1200: { slidesPerView: 3, spaceBetween: 30 },
                }}
              >
                {relatedProducts.map((item) => (
                  <SwiperSlide key={item.id}>
                    <a href={item.link}>
                      <div className="each-product">
                        <div className="each-product-img position-relative">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-100"
                          />
                          <div className="product-plus">
                            <img
                              src="/assets/product-plus.svg"
                              alt="plus"
                            />
                          </div>
                        </div>
                        <div className="each-product-text">
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <ul>
                            <li>
                              <h6>
                                <strong>Bouwjaar</strong>
                              </h6>
                              <h6>{item.year}</h6>
                            </li>
                            <li>
                              <h6>
                                <strong>Brandstof</strong>
                              </h6>
                              <h6>{item.fuel}</h6>
                            </li>
                            <li>
                              <h6>
                                <strong>Transmissie</strong>
                              </h6>
                              <h6>{item.transmission}</h6>
                            </li>
                            <li>
                              <h6>
                                <strong>{item.price}</strong>
                              </h6>
                              <h6>{item.monthly}</h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper Arrows */}
              <div className="swiper-button-prev common-arrow">
                <img src="/assets/prev.svg" alt="prev" />
              </div>
              <div className="swiper-button-next common-arrow">
                <img src="/assets/next.svg" alt="next" />
              </div>
            </div>
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

export default AanbodDtl

