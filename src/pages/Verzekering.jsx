import React, { useEffect } from "react";

const VerzekeringDetail = () => {
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

      
      <section className="diens-dtl-top-sec">
        <div className="diens-dtl-top-mark">
          <img src="assets/diens-dtl-mark.svg" alt="" className="w-100" />
        </div>
        <div className="container">
          <div className="diens-top-wrap">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="diens-dtl-top-img">
                  <img
                    src="assets/diensten-detail-banner.jpg"
                    alt="img"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="diens-dtl-top-content">
                  <h2>Verzekering</h2>
                  <p>
                    U wilt uw auto optimaal verzekeren, of u nu een zakelijke of
                    particuliere rijder bent. U wilt geen stress en goede premies.
                    Bij Automotive van Lierop in Beek en Donk werken we samen met
                    bekende verzekeringsmaatschappijen die alles voor u regelen. Of
                    uw auto nu op brandstof rijdt of elektrisch is, onze partners
                    bieden op maat gemaakte verzekeringen.
                  </p>
                  <br />
                  <p>
                    Bij verzekeringen gaat het om maatwerk. Een goede verzekering is
                    meer dan alleen een all-risk of beperkt casco verzekering; het
                    gaat om het afstemmen van uw specifieke wensen. U kent uw auto
                    en het gebruik ervan als geen ander. Onze verzekeringspartners
                    zorgen ervoor dat uw auto in goede handen is. Ze stellen u de
                    juiste vragen en bieden een verzekering op maat met ideale
                    voorwaarden en goede premies.
                    <br />
                    Als u meer wilt weten, kunt u vrijblijvend informeren naar de
                    mogelijkheden.
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
                    <h3>Maatwerk</h3>
                    <p>
                      We begrijpen dat geen twee bestuurders hetzelfde zijn. Daarom
                      kunt u kiezen uit verzekeringspakketten die zijn afgestemd op
                      uw specifieke behoeften en rijgedrag, zodat u precies de dekking
                      krijgt die u nodig heeft tegen een eerlijke prijs.
                    </p>
                  </td>
                  <td>
                    <h2>02</h2>
                    <h3>Ondersteuning</h3>
                    <p>
                      Hoewel de verzekeringsdiensten worden beheerd door onze partners,
                      blijven we beschikbaar voor ondersteuning en advies. We staan
                      klaar om uw vragen te beantwoorden en u te helpen bij het
                      begrijpen van uw verzekeringsdekking, zodat u met vertrouwen
                      de weg op kunt gaan.
                    </p>
                  </td>
                  <td>
                    <h2>03</h2>
                    <h3>Eenvoudig</h3>
                    <p>
                      We streven ernaar om het proces voor u zo naadloos mogelijk te
                      maken. We zorgen voor een vlotte overgang en bieden u een
                      soepele ervaring, zodat u gemakkelijk de juiste verzekering kunt
                      krijgen voor uw voertuig.
                    </p>
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
                        <textarea
                          className="form-control form-styl"
                          placeholder="Bericht"
                        ></textarea>
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
          <div className="service-title text-center mb-4">
            <h2>
              Gerelateerde <strong>diensten</strong>
            </h2>
          </div>
          <div className="dienst-dtl-service-grid">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <a href="#">
                  <div className="each-service-block position-relative h-100">
                    <div className="each-service-block-img">
                      <img src="assets/service1.jpg" alt="" className="w-100" />
                    </div>
                    <div className="each-service-block-info">
                      <h3>Financiering / lease</h3>
                    </div>
                    <div className="each-service-block-hover-info">
                      <div className="each-service-block-info-wrap">
                        <h3>Financiering / lease</h3>
                        <p>
                          Bent u geïnteresseerd in het leasen of financieren van uw
                          voertuig? Als u een auto wilt kopen, maar liever maandelijks
                          betaalt, dan biedt een autofinanciering wellicht een goede
                          uitkomst.
                        </p>
                        <div className="common-btn border-btn">Lees meer</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a href="#">
                  <div className="each-service-block position-relative h-100">
                    <div className="each-service-block-img">
                      <img src="assets/service2.jpg" alt="" className="w-100" />
                    </div>
                    <div className="each-service-block-info">
                      <h3>Garantie</h3>
                    </div>
                    <div className="each-service-block-hover-info">
                      <div className="each-service-block-info-wrap">
                        <h3>Garantie</h3>
                        <p>
                          Ontdek gemoedsrust op de weg met onze uitgebreide
                          garantiedekking. Bij Automotive van Lierop streven we ernaar
                          uw rijervaring zo probleemloos mogelijk te maken.
                        </p>
                        <div className="common-btn border-btn">Lees meer</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a href="#">
                  <div className="each-service-block position-relative h-100">
                    <div className="each-service-block-img">
                      <img src="assets/service3.jpg" alt="" className="w-100" />
                    </div>
                    <div className="each-service-block-info">
                      <h3>Verzekering</h3>
                    </div>
                    <div className="each-service-block-hover-info">
                      <div className="each-service-block-info-wrap">
                        <h3>Verzekering</h3>
                        <p>
                          U wilt uw auto optimaal verzekeren, of u nu een zakelijke of
                          particuliere rijder bent. U wilt geen stress en goede premies.
                          Bij Automotive van Lierop in Beek en Donk werken we samen met
                          bekende.
                        </p>
                        <div className="common-btn border-btn">Lees meer</div>
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

export default VerzekeringDetail;
