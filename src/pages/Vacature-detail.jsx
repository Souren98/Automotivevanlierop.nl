import React, { useEffect } from "react";

const VacatureDetail = () => {
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
      {/* Back Button Section */}
      <section className="back-btn">
        <div className="container">
          <a href="#" className="common-btn border-btn">
            <img src="assets/back-arrw.svg" alt="img" />
            Terug naar overzicht
          </a>
        </div>
      </section>

      {/* Top Detail Section */}
      <section className="diens-dtl-top-sec vacature-dtl-top-sec">
        <div className="diens-dtl-top-mark">
          <img src="assets/diens-dtl-mark.svg" alt="" className="w-100" />
        </div>
        <div className="container">
          <div className="diens-top-wrap">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="diens-dtl-top-img">
                  <img
                    src="assets/vacature-dtl-banner.jpg"
                    alt="img"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="diens-dtl-top-content">
                  <h2>Verkoop</h2>
                  <p>
                    Ben jij een enthousiaste en gedreven verkoper met een passie
                    voor auto's? Wil je deel uitmaken van een dynamisch team in
                    de automotive sector? Dan zijn wij op zoek naar jou!
                  </p>
                  <br />
                  <h4>Functieomschrijving</h4>
                  <p>
                    Als verkoper bij ons autobedrijf ben je het eerste aanspreekpunt
                    voor onze klanten. Je adviseert hen bij de aankoop van nieuwe en
                    gebruikte voertuigen, waarbij je hun wensen en behoeften begrijpt
                    en vertaalt naar passende oplossingen. Je begeleidt klanten tijdens
                    het gehele aankoopproces, van het eerste contact tot aan de aflevering
                    van het voertuig. Daarnaast ben je verantwoordelijk voor het behalen
                    van verkoopdoelstellingen en het onderhouden van klantrelaties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid Detail Section */}
      <section className="diens-dtl-mid-sec vacature-dtl-mid-sec">
        <div className="container">
          <div className="diens-dtl-mid-area">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h2>01</h2>
                    <h3>Flexibele opties</h3>
                    <ul>
                      <li>Ervaring in de verkoop, bij voorkeur in de automotive sector</li>
                      <li>Uitstekende communicatieve vaardigheden en klantgerichtheid</li>
                      <li>Commercieel inzicht en resultaatgerichte instelling</li>
                      <li>Affiniteit met auto's en technische kennis is een pluspunt</li>
                      <li>Flexibiliteit en bereidheid om in weekenden en avonden te werken</li>
                    </ul>
                  </td>
                  <td>
                    <h2>02</h2>
                    <h3>Wat bieden wij</h3>
                    <ul>
                      <li>Een uitdagende functie binnen een professioneel en enthousiast team</li>
                      <li>Mogelijkheden voor persoonlijke ontwikkeling en doorgroeimogelijkheden</li>
                      <li>Een competitief salaris met aantrekkelijke bonussen</li>
                      <li>Secundaire arbeidsvoorwaarden, waaronder een pensioenregeling en personeelskorting</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="Voornaam"
                            className="form-control form-styl"
                            type="text"
                            placeholder="Voornaam"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="Achternaam"
                            className="form-control form-styl"
                            type="text"
                            placeholder="Achternaam"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="Telefoon"
                            className="form-control form-styl"
                            type="text"
                            placeholder="Telefoon"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="Email"
                            className="form-control form-styl"
                            type="text"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form-control form-styl"
                            placeholder="Bericht"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-button text-center">
                      <button className="common-btn">Verzenden</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Vacatures Section */}
      <section className="service-sec diend-dtl-service-sec">
        <div className="container">
          <div className="service-title text-center">
            <h2>
              Gerelateerde <strong>vacatures</strong>
            </h2>
          </div>
          <div className="dienst-dtl-service-grid">
            <div className="row g-4">
              {[
                { title: "Verkoop", img: "assets/vacature-img1.jpg" },
                { title: "Automonteur", img: "assets/vacature-img2.jpg" },
                { title: "Receptionist", img: "assets/vacature-img3.jpg" },
              ].map((job, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <a href="#">
                    <div className="each-service-block position-relative h-100">
                      <div className="each-service-block-img">
                        <img src={job.img} alt="" className="w-100" />
                      </div>
                      <div className="each-service-block-info">
                        <h3>{job.title}</h3>
                      </div>
                      <div className="each-service-block-hover-info">
                        <div className="each-service-block-info-wrap">
                          <h3>{job.title}</h3>
                          <p>
                            Ben jij een enthousiaste en gedreven verkoper met een passie
                            voor auto's? Wil je deel uitmaken van een dynamisch team in de
                            automotive sector? Dan zijn wij op zoek naar jou!
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

export default VacatureDetail;
