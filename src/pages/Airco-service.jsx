import React, { useEffect } from "react";

const AircoService = () => {
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
      <section className="back-btn">
        <div className="container">
          <a href="#" className="common-btn border-btn">
            <img src="assets/back-arrw.svg" alt="img" />
            Terug naar overzicht
          </a>
        </div>
      </section>

      <section className="diens-dtl-top-sec werkplaats-dtl-top-sec">
        <div className="diens-dtl-top-mark">
          <img src="assets/diens-dtl-mark.svg" alt="" className="w-100" />
        </div>
        <div className="container">
          <div className="diens-top-wrap">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="diens-dtl-top-img">
                  <img src="assets/airco-service-banner.jpg" alt="img" className="w-100" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="diens-dtl-top-content">
                  <h2>Airco service</h2>
                  <p>Houd uw airco in topconditie in Beek en Donk. Het is belangrijk om regelmatig onderhoud aan uw airconditioning uit te laten voeren. Elk jaar verliest de airco namelijk normaliter een deel van het koelmiddel. Wanneer uw auto-airco te weinig koelmiddel heeft, kan dit leiden tot slijtage en dure reparaties. Bovendien kan een slecht functionerende airco zorgen voor een hoger brandstofverbruik. Bij Automotive van Lierop in Beek en Donk raden we daarom aan om jaarlijks een airco-check te laten doen.</p>
                  <br />
                  <p>Wat houdt een airco-check in? Bij een airco-check bij Automotive van Lierop in Beek en Donk checken we het volgende:</p>
                  <ul>
                    <li>Recycling en aanvullen van koelmiddel</li>
                    <li>Controle van de werking en eventuele lekkages</li>
                    <li>Preventief toevoegen van lekdetectie vloeistof met fluor</li>
                    <li>Controle van uw interieurfilter</li>
                  </ul>
                  <p>Op deze manier zorgen we ervoor dat uw airco optimaal blijft werken. Neem contact met ons op voor een afspraak of meer informatie. We helpen u graag verder.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="diens-dtl-mid-sec">
        <div className="container">
          <div className="diens-dtl-mid-area">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h2>01</h2>
                    <h3>Gegarandeerde koelte</h3>
                    <p>Onze airco-service biedt niet alleen een snelle fix, maar garandeert ook langdurige koelte.</p>
                  </td>
                  <td>
                    <h2>02</h2>
                    <h3>Professionele diagnose</h3>
                    <p>Onze experts beschikken over geavanceerde apparatuur en technieken om nauwkeurige diagnoses te stellen van airco-problemen.</p>
                  </td>
                  <td>
                    <h2>03</h2>
                    <h3>Preventief onderhoud</h3>
                    <p>Voorkomen is beter dan genezen. Met ons periodiek airco-onderhoud houden we uw systeem in topconditie, waardoor de kans op storingen wordt geminimaliseerd en de levensduur van uw airconditioning wordt verlengd.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

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
                  <p>Via het formulier op deze pagina kan eenvoudig een afspraakverzoek worden ingediend. Uiteraard kan dit ook telefonisch. Wij zullen een verzoek altijd bevestigen.</p>
                </div>
                <div className="form-area">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-area-heading">
                          <h3>UW GEGEVENS</h3>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input id="Voornaam" className="form-control form-styl" type="text" placeholder="Voornaam" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input id="Achternaam" className="form-control form-styl" type="text" placeholder="Achternaam" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input id="Telefoon" className="form-control form-styl" type="text" placeholder="Telefoon" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input id="Email" className="form-control form-styl" type="text" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-area-heading">
                          <h3>AUTO GEGEVENS</h3>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input id="Merk" className="form-control form-styl" type="text" placeholder="Merk" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input id="Type" className="form-control form-styl" type="text" placeholder="Type" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input id="kenteken" className="form-control form-styl" type="text" placeholder="kenteken" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input id="Kilometerstand" className="form-control form-styl" type="text" placeholder="Kilometerstand" />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <select name="" id="Selecteer locatie">
                            <option value="Selecteer locatie">Type onderhoudsbeurt</option>
                            <option value="Oosterwolde">Type onderhoudsbeurt</option>
                            <option value="Gorredijk">Type onderhoudsbeurt</option>
                            <option value="Groningen">Type onderhoudsbeurt</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <select name="" id="Selecteer locatie">
                            <option value="Selecteer locatie">APK keuring</option>
                            <option value="Oosterwolde">APK keuring</option>
                            <option value="Gorredijk">APK keuring</option>
                            <option value="Groningen">APK keuring</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <select name="" id="Selecteer locatie">
                            <option value="Selecteer locatie">Leenauto</option>
                            <option value="Oosterwolde">Leenauto</option>
                            <option value="Gorredijk">Leenauto</option>
                            <option value="Groningen">Leenauto</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group form-date-info">
                          <input id="mm/dd/yyyy" className="form-control form-styl" type="text" placeholder="mm/dd/yyyy" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea className="form-control form-styl" placeholder="Opmerkingen"></textarea>
                        </div>
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

      <section className="service-sec diend-dtl-service-sec">
        <div className="container">
          <div className="service-title text-center">
            <h2>Gerelateerde <strong>werkplaats</strong></h2>
          </div>
          <div className="dienst-dtl-service-grid">
            <div className="row g-4"> 
              <div className="col-lg-6">
                <a href="">
                  <div className="each-service-block position-relative h-100">
                    <div className="each-service-block-img">
                      <img src="assets/werkplaats-img1.jpg" alt="" className="w-100" />
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
                <a href="">
                  <div className="each-service-block position-relative h-100">
                    <div className="each-service-block-img">
                      <img src="assets/werkplaats-img2.jpg" alt="" className="w-100" />
                    </div>
                    <div className="each-service-block-info">
                      <h3>Airco service</h3>
                    </div>
                    <div className="each-service-block-hover-info">
                      <div className="each-service-block-info-wrap">
                        <h3>Airco service</h3>
                        <p>De APK voorkomt dat onveilige voertuigen aan het verkeer deelnemen. Bovendien is het wettelijk verplicht om auto's ouder dan 3 jaar jaarlijks te laten keuren.</p>
                        <div className="common-btn border-btn">
                          Lees meer
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Second row */}
              <div className="col-lg-6">
                <a href="">
                  <div className="each-service-block position-relative h-100">
                    <div className="each-service-block-img">
                      <img src="assets/werkplaats-img3.jpg" alt="" className="w-100" />
                    </div>
                    <div className="each-service-block-info">
                      <h3>Onderhoud of reparatie</h3>
                    </div>
                    <div className="each-service-block-hover-info">
                      <div className="each-service-block-info-wrap">
                        <h3>Onderhoud of reparatie</h3>
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
                <a href="">
                  <div className="each-service-block position-relative h-100">
                    <div className="each-service-block-img">
                      <img src="assets/werkplaats-img4.jpg" alt="" className="w-100" />
                    </div>
                    <div className="each-service-block-info">
                      <h3>Werkplaatsafspraak plannen</h3>
                    </div>
                    <div className="each-service-block-hover-info">
                      <div className="each-service-block-info-wrap">
                        <h3>Werkplaatsafspraak plannen</h3>
                        <p>De APK voorkomt dat onveilige voertuigen aan het verkeer deelnemen. Bovendien is het wettelijk verplicht om auto's ouder dan 3 jaar jaarlijks te laten keuren.</p>
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

export default AircoService;
