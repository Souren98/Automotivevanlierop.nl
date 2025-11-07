import React, { useEffect } from "react";

const ServiceDetail = () => {
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
                  <h2>Financiering / lease</h2>
                  <p>
                    Bent u geïnteresseerd in het leasen of financieren van uw
                    voertuig? Als u een auto wilt kopen, maar liever maandelijks
                    betaalt, dan biedt een autofinanciering wellicht een goede
                    uitkomst.
                  </p>
                  <br />
                  <p>
                    Wij begrijpen dat het lenen van geld voor een auto geen
                    alledaagse beslissing is. Daarom willen we ervoor zorgen dat u
                    volledig op uw gemak bent. Bij Automotive van Lierop in Beek en
                    Donk werken we nauw samen met financierings- en
                    leasemaatschappijen. Zij kunnen u niet alleen professioneel
                    advies geven als toekomstige eigenaar van uw nieuwe auto, maar
                    ook de juiste lease- of financieringsvorm voor u vinden.
                    <br />
                    <br />
                    Zowel voor zakelijke als particuliere rijders bieden wij
                    mogelijkheden in samenwerking met onze financierings- en
                    leasepartners. Dankzij hun samenwerking met verschillende banken
                    kunnen we u altijd een scherp rentetarief bieden.
                    <br />
                    Als u meer wilt weten over de mogelijkheden, kunt u gerust
                    contact met ons opnemen of langskomen in onze showroom. We
                    helpen u graag verder.
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
                    <h3>Flexibele opties</h3>
                    <p>
                      Of u nu kiest voor financiering of lease, wij bieden
                      flexibele betalingsplannen en voorwaarden die zijn
                      afgestemd op uw budget en behoeften.
                    </p>
                  </td>
                  <td>
                    <h2>02</h2>
                    <h3>Snel goedkeuringsproces</h3>
                    <p>
                      Zo kunt u snel achter het stuur van uw nieuwe voertuig
                      komen, zonder lang te wachten op financiële goedkeuring.
                    </p>
                  </td>
                  <td>
                    <h2>03</h2>
                    <h3>Deskundig advies</h3>
                    <p>
                      Ons team staat klaar om u te begeleiden bij het kiezen van
                      de beste financierings- of lease-optie, met duidelijke
                      uitleg en ondersteuning gedurende het hele proces.
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
        Gerelateerde <strong>diensten</strong>
      </h2>
    </div>
    <div className="dienst-dtl-service-grid">
      <div className="row g-4">
        {[
          {
            title: "Financiering / lease",
            image: "assets/service1.jpg",
            description:
              "Bent u geïnteresseerd in het leasen of financieren van uw voertuig? Als u een auto wilt kopen, maar liever maandelijks betaalt, dan biedt een autofinanciering wellicht een goede uitkomst.",
          },
          {
            title: "Garantie",
            image: "assets/service2.jpg",
            description:
              "Ontdek gemoedsrust op de weg met onze uitgebreide garantiedekking. Bij Automotive van Lierop streven we ernaar uw rijervaring zo probleemloos mogelijk te maken.",
          },
          {
            title: "Verzekering",
            image: "assets/service3.jpg",
            description:
              "U wilt uw auto optimaal verzekeren, of u nu een zakelijke of particuliere rijder bent. U wilt geen stress en goede premies. Bij Automotive van Lierop in Beek en Donk werken we samen met bekende.",
          },
        ].map((service, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <a href="">
              <div className="each-service-block position-relative h-100">
                <div className="each-service-block-img">
                  <img src={service.image} alt={service.title} className="w-100" />
                </div>
                <div className="each-service-block-info">
                  <h3>{service.title}</h3>
                </div>
                <div className="each-service-block-hover-info">
                  <div className="each-service-block-info-wrap">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
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

export default ServiceDetail;
