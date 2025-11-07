import React, { useEffect } from "react";

const ApkDetail = () => {
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
                  <h2>APK</h2>
                  <p>
                    De APK voorkomt dat onveilige voertuigen aan het verkeer deelnemen. Bovendien is
                    het wettelijk verplicht om auto's ouder dan 3 jaar jaarlijks te laten keuren.
                    <br />
                    Tijdens deze Algemene Periodieke Keuring wordt uw auto gecontroleerd op de minimale
                    veiligheids- en milieueisen die in Europa van toepassing zijn. Hierbij worden onder
                    andere uw banden, schokdempers, verlichting en remmen gecontroleerd.
                  </p>
                  <br />
                  <h4>Hoe verloopt een APK?</h4>
                  <p>
                    Als uw auto gebreken heeft, worden deze tijdens de APK-keuring tijdig opgespoord,
                    waardoor u kosten kunt besparen op groot onderhoud. Na de keuring ontvangt u een
                    rapport waarin wordt vermeld of uw auto is goedgekeurd. Indien dit niet het
                    geval is, geven wij aan welke gebreken moeten worden verholpen. Het uitvoeren
                    van een APK is alleen toegestaan bij een RDW-erkend bedrijf zoals Automotive van
                    Lierop in Beek en Donk.
                  </p>
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
                    <h3>Grondige inspectie</h3>
                    <p>
                      Onze APK-keuringen worden uitgevoerd door gekwalificeerde en ervaren
                      keurmeesters die een grondige inspectie van uw voertuig uitvoeren. Van
                      remmen en verlichting tot banden en uitlaat, wij controleren elk aspect om
                      ervoor te zorgen dat uw auto voldoet aan de wettelijke veiligheids- en
                      milieunormen.
                    </p>
                  </td>
                  <td>
                    <h2>02</h2>
                    <h3>Snel en betrouwbaar</h3>
                    <p>
                      Bij Automotive van Lierop bent u verzekerd van een snelle en betrouwbare
                      APK-keuringsservice. We streven ernaar om uw voertuig snel en efficiënt te
                      keuren, zodat u snel weer de weg op kunt. Bovendien bieden we indien nodig
                      deskundig advies en ondersteuning bij eventuele reparaties om uw auto
                      APK-goedgekeurd te krijgen.
                    </p>
                  </td>
                  <td>
                    <h2>03</h2>
                    <h3>Transparante kosten</h3>
                    <p>
                      Wij geloven in eerlijke en transparante prijzen voor onze APK-keuringen.
                      Voordat we met de keuring beginnen, ontvangt u een duidelijke kostenraming,
                      zodat u precies weet waar u aan toe bent. Bovendien voeren we geen onnodige
                      reparaties uit zonder uw toestemming. Als er reparaties nodig zijn om uw
                      auto door de keuring te krijgen, ontvangt u eerst een gedetailleerde offerte
                      en beslist u zelf hoe u verder wilt gaan.
                    </p>
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
                  <p>
                    Via het formulier op deze pagina kan eenvoudig een afspraakverzoek worden
                    ingediend. Uiteraard kan dit ook telefonisch. Wij zullen een verzoek altijd
                    bevestigen.
                  </p>
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
                        <div className="form-area-heading">
                          <h3>AUTO GEGEVENS</h3>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="Merk"
                            className="form-control form-styl"
                            type="text"
                            placeholder="Merk"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="Type"
                            className="form-control form-styl"
                            type="text"
                            placeholder="Type"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="kenteken"
                            className="form-control form-styl"
                            type="text"
                            placeholder="kenteken"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="Kilometerstand"
                            className="form-control form-styl"
                            type="text"
                            placeholder="Kilometerstand"
                          />
                        </div>
                      </div>

                    
                      <div className="col-lg-3">
                        <div className="form-group">
                          <select id="TypeOnderhoud" className="form-control form-styl">
                            <option>Type onderhoudsbeurt</option>
                            <option>Oosterwolde</option>
                            <option>Gorredijk</option>
                            <option>Groningen</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <select id="APKKeuring" className="form-control form-styl">
                            <option>APK keuring</option>
                            <option>Oosterwolde</option>
                            <option>Gorredijk</option>
                            <option>Groningen</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <select id="Leenauto" className="form-control form-styl">
                            <option>Leenauto</option>
                            <option>Oosterwolde</option>
                            <option>Gorredijk</option>
                            <option>Groningen</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group form-date-info">
                          <input
                            id="Datum"
                            className="form-control form-styl"
                            type="text"
                            placeholder="mm/dd/yyyy"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form-control form-styl"
                            placeholder="Opmerkingen"
                          ></textarea>
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

export default ApkDetail;
