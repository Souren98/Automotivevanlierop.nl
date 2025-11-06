import React, { useEffect } from "react";

const WerkplaatsDetail = () => {
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

      {/* Top Section */}
      <section className="diens-dtl-top-sec werkplaats-dtl-top-sec">
        <div className="diens-dtl-top-mark">
          <img src="assets/diens-dtl-mark.svg" alt="" className="w-100" />
        </div>
        <div className="container">
          <div className="diens-top-wrap">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="diens-dtl-top-img">
                  <img
                    src="assets/werkplaats-detail-banner.jpg"
                    alt="img"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="diens-dtl-top-content">
                  <h2>Werkplaatsafspraak plannen</h2>
                  <p>
                    Uw auto verdient de beste zorg. Goed en regelmatig onderhoud van
                    uw auto helpt problemen te voorkomen en draagt bij aan uw
                    veiligheid. Bij Automotive van Lierop in Beek en Donk staan we
                    graag voor u klaar. Onze ervaren vakmensen bieden professioneel
                    onderhoud tegen betaalbare prijzen. In onze moderne werkplaats
                    kunnen we diverse services voor u uitvoeren:
                  </p>
                  <ul>
                    <li>APK-service voor personenauto's en lichte bedrijfsauto's;</li>
                    <li>Reparaties en onderhoud voor alle automerken;</li>
                    <li>Schadeherstel;</li>
                    <li>Diagnose van storingen;</li>
                    <li>Airco-service;</li>
                    <li>Banden en uitlaten tegen voordelige prijzen.</li>
                  </ul>
                  <p>
                    Met ons deskundige team en moderne apparatuur is uw auto in
                    goede handen. Neem gerust contact met ons op voor vragen. We
                    helpen u graag verder!
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
                    <h3>Snel en eenvoudig</h3>
                    <p>
                      Met slechts een paar klikken heeft u uw afspraak geregeld. Geen
                      gedoe, gewoon gemak.
                    </p>
                  </td>
                  <td>
                    <h2>02</h2>
                    <h3>Vakkundige service</h3>
                    <p>
                      Onze monteurs zijn niet alleen gecertificeerd, maar hebben ook
                      jarenlange ervaring in het vak. Ze zorgen ervoor dat uw auto
                      altijd in topconditie blijft.
                    </p>
                  </td>
                  <td>
                    <h2>03</h2>
                    <h3>Flexibele tijden</h3>
                    <p>
                      We begrijpen dat iedereen een drukke agenda heeft. Daarom bieden
                      we ruime openingstijden, zodat u altijd een geschikt moment kunt
                      vinden voor uw werkplaatsbezoek.
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
                <div className="contact-form-top d-flex align-items-center mb-3">
                  <div className="contact-form-top-logo me-3">
                    <img src="assets/teun-van-logo.jpg" alt="img" className="w-100" />
                  </div>
                  <div className="contact-form-top-text">
                    <p>Teun van Lierop</p>
                    <a href="#">info@automotivevanlierop.nl</a>
                  </div>
                </div>

                <div className="form-heading text-center mb-4">
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
                      <div className="col-lg-12 mb-3">
                        <h3>UW GEGEVENS</h3>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          id="Voornaam"
                          className="form-control form-styl"
                          type="text"
                          placeholder="Voornaam"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          id="Achternaam"
                          className="form-control form-styl"
                          type="text"
                          placeholder="Achternaam"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          id="Telefoon"
                          className="form-control form-styl"
                          type="text"
                          placeholder="Telefoon"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          id="Email"
                          className="form-control form-styl"
                          type="text"
                          placeholder="Email"
                        />
                      </div>

                      <div className="col-lg-12 mb-3">
                        <h3>AUTO GEGEVENS</h3>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          id="Merk"
                          className="form-control form-styl"
                          type="text"
                          placeholder="Merk"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          id="Type"
                          className="form-control form-styl"
                          type="text"
                          placeholder="Type"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          id="kenteken"
                          className="form-control form-styl"
                          type="text"
                          placeholder="Kenteken"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          id="Kilometerstand"
                          className="form-control form-styl"
                          type="text"
                          placeholder="Kilometerstand"
                        />
                      </div>

                      <div className="col-lg-3 mb-3">
                        <select className="form-select">
                          <option>Type onderhoudsbeurt</option>
                          <option>Oosterwolde</option>
                          <option>Gorredijk</option>
                          <option>Groningen</option>
                        </select>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <select className="form-select">
                          <option>APK keuring</option>
                          <option>Oosterwolde</option>
                          <option>Gorredijk</option>
                          <option>Groningen</option>
                        </select>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <select className="form-select">
                          <option>Leenauto</option>
                          <option>Oosterwolde</option>
                          <option>Gorredijk</option>
                          <option>Groningen</option>
                        </select>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <input
                          id="Datum"
                          className="form-control form-styl"
                          type="text"
                          placeholder="mm/dd/yyyy"
                        />
                      </div>

                      <div className="col-lg-12 mb-3">
                        <textarea
                          className="form-control form-styl"
                          placeholder="Opmerkingen"
                        ></textarea>
                      </div>
                    </div>

                    <div className="form-button text-center">
                      <button className="common-btn">Aanvragen</button>
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
          <div className="service-title text-center mb-4">
            <h2>
              Gerelateerde <strong>werkplaats</strong>
            </h2>
          </div>
          <div className="dienst-dtl-service-grid">
            <div className="row g-4">
              <div className="col-lg-6">
                <a href="" className="service-grid-item">
                  <div className="each-service-block position-relative h-100">
                    <div className="each-service-block-img">
                      <img src="assets/werkplaats-service1.jpg" alt="" className="w-100" />
                    </div>
                    <div className="each-service-block-info">
                      <h3>Werkplaatsafspraak plannen</h3>
                    </div>
                    <div className="each-service-block-hover-info">
                      <div className="each-service-block-info-wrap">
                        <h3>Werkplaatsafspraak plannen</h3>
                        <p>Uw auto verdient de beste zorg. Goed en regelmatig onderhoud van uw auto helpt problemen te voorkomen en draagt bij aan uw veiligheid.</p>
                        <div className="common-btn border-btn">
                          Lees meer
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-6">
                <a href="" className="service-grid-item">
                  <div className="each-service-block position-relative h-100">
                    <div className="each-service-block-img">
                      <img src="assets/werkplaats-service2.jpg" alt="" className="w-100" />
                    </div>
                    <div className="each-service-block-info">
                      <h3>APK</h3>
                    </div>
                    <div className="each-service-block-hover-info">
                      <div className="each-service-block-info-wrap">
                        <h3>APK</h3>
                        <p>De APK voorkomt dat onveilige voertuigen aan het verkeer deelnemen. Bovendien is het wettelijk verplicht om auto's ouder dan 3 jaar jaarlijks te laten keuren.</p>
                        <div className="common-btn border-btn">
                          Lees meer
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-6">
                <a href="" className="service-grid-item">
                  <div className="each-service-block position-relative h-100">
                    <div className="each-service-block-img">
                      <img src="assets/werkplaats-service3.jpg" alt="" className="w-100" />
                    </div>
                    <div className="each-service-block-info">
                      <h3>Airco service</h3>
                    </div>
                    <div className="each-service-block-hover-info">
                      <div className="each-service-block-info-wrap">
                        <h3>Airco service</h3>
                        <p>Houd uw airco in topconditie in Beek en Donk. Het is belangrijk om regelmatig onderhoud aan uw airconditioning uit te laten voeren.</p>
                        <div className="common-btn border-btn">
                          Lees meer
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-6">
                <a href="" className="service-grid-item">
                  <div className="each-service-block position-relative h-100">
                    <div className="each-service-block-img">
                      <img src="assets/werkplaats-service4.jpg" alt="" className="w-100" />
                    </div>
                    <div className="each-service-block-info">
                      <h3>Onderhoud of reparatie</h3>
                    </div>
                    <div className="each-service-block-hover-info">
                      <div className="each-service-block-info-wrap">
                        <h3>Onderhoud of reparatie</h3>
                        <p>Bij Automotive van Lierop in Beek en Donk zorgen we voor het onderhoud van uw auto. Goed en tijdig onderhoud voorkomt kostbare reparaties.</p>
                        <div className="common-btn border-btn">
                          Lees meer
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
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
  );
};

export default WerkplaatsDetail;
