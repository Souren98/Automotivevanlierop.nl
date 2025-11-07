import React, { useEffect } from "react";

const Automonteur = () => {
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
  return (
    <main>
     
      <section className="back-btn">
        <div className="container">
          <a href="#" className="common-btn border-btn">
            <img src="assets/back-arrw.svg" alt="img" />
            Terug naar overzicht
          </a>
        </div>
      </section>

     
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
                    src="assets/automonteur-banner.jpg"
                    alt="img"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="diens-dtl-top-content">
                  <h2>Automonteur</h2>
                  <p>
                    Ben jij een ervaren automonteur met een passie voor techniek en
                    auto's? Wil je deel uitmaken van een toegewijd team in de
                    automotive branche? Dan is dit jouw kans om bij ons autobedrijf
                    aan de slag te gaan!
                  </p>
                  <br />
                  <h4>Functieomschrijving</h4>
                  <p>
                    Als automonteur ben je verantwoordelijk voor het uitvoeren van
                    onderhouds- en reparatiewerkzaamheden aan personenauto's. Je
                    voert diagnoses uit, stelt problemen vast en zorgt voor de
                    juiste oplossingen. Daarnaast voer je APK-keuringen uit en
                    verricht je technische reparaties volgens de geldende
                    richtlijnen en procedures. Je werkt nauw samen met collega's om
                    ervoor te zorgen dat onze klanten veilig en tevreden de weg op
                    gaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="diens-dtl-mid-sec vacature-dtl-mid-sec">
        <div className="container">
          <div className="diens-dtl-mid-area">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h2>01</h2>
                    <h3>Functie-eisen</h3>
                    <ul>
                      <li>Afgeronde opleiding tot automonteur niveau 2 of hoger</li>
                      <li>Aantoonbare ervaring als automonteur</li>
                      <li>Kennis van moderne autotechniek en diagnoseapparatuur</li>
                      <li>Oog voor detail</li>
                      <li>Teamspeler met goede communicatieve vaardigheden</li>
                    </ul>
                  </td>
                  <td>
                    <h2>02</h2>
                    <h3>Wat bieden wij</h3>
                    <ul>
                      <li>
                        Een uitdagende functie binnen een professioneel en collegiaal
                        team
                      </li>
                      <li>
                        Mogelijkheden voor persoonlijke ontwikkeling en bijscholing
                      </li>
                      <li>Een marktconform salaris en goede secundaire arbeidsvoorwaarden</li>
                      <li>
                        Een prettige werkomgeving met moderne faciliteiten en
                        gereedschappen
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

     
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
                    Via het formulier op deze pagina kan eenvoudig een
                    afspraakverzoek worden ingediend. Uiteraard kan dit ook
                    telefonisch. Wij zullen een verzoek altijd bevestigen.
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
                          ></textarea>
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
          {
            title: "Verkoop",
            image: "assets/vacature-img1.jpg",
            description:
              "Ben jij een enthousiaste en gedreven verkoper met een passie voor auto's? Wil je deel uitmaken van een dynamisch team in de automotive sector? Dan zijn wij op zoek naar jou!",
          },
          {
            title: "Automonteur",
            image: "assets/vacature-img2.jpg",
            description:
              "Ben jij een enthousiaste en gedreven verkoper met een passie voor auto's? Wil je deel uitmaken van een dynamisch team in de automotive sector? Dan zijn wij op zoek naar jou!",
          },
          {
            title: "Receptionist",
            image: "assets/vacature-img3.jpg",
            description:
              "Ben jij een enthousiaste en gedreven verkoper met een passie voor auto's? Wil je deel uitmaken van een dynamisch team in de automotive sector? Dan zijn wij op zoek naar jou!",
          },
        ].map((vacature, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <a href="#">
              <div className="each-service-block position-relative h-100">
                <div className="each-service-block-img">
                  <img
                    src={vacature.image}
                    alt={vacature.title}
                    className="w-100"
                  />
                </div>
                <div className="each-service-block-info">
                  <h3>{vacature.title}</h3>
                </div>
                <div className="each-service-block-hover-info">
                  <div className="each-service-block-info-wrap">
                    <h3>{vacature.title}</h3>
                    <p>{vacature.description}</p>
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

export default Automonteur;
