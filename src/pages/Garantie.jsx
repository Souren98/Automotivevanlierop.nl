import React, { useEffect } from "react";

const Garantie = () => {
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
                        <img src="/assets/back-arrw.svg" alt="img" />
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
                                    <img src="assets/diensten-detail-banner.jpg" alt="img" className="w-100" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="diens-dtl-top-content">
                                    <h2>Garantie</h2>
                                    <p>
                                        Ontdek gemoedsrust op de weg met onze uitgebreide garantiedekking. Bij Automotive van Lierop streven we ernaar uw rijervaring zo probleemloos mogelijk te maken. Onze garantieplannen bieden een brede dekking voor mechanische en elektrische storingen, zodat u beschermd bent tegen onverwachte kosten. Kies uit diverse flexibele opties die passen bij uw behoeften en budget. Of het nu gaat om een kleine reparatie of een grotere onderhoudsbeurt, ons team staat klaar om u te ondersteunen bij elke stap. Rij met vertrouwen, wetende dat wij achter u staan, kilometer na kilometer.
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
                                        <h3>Uitgebreide dekking</h3>
                                        <p>
                                            Onze garantie biedt een uitgebreide dekking die verder gaat dan alleen de standaardcomponenten, zodat u met gemoedsrust kunt rijden, wetende dat vrijwel elk probleem wordt gedekt.
                                        </p>
                                    </td>
                                    <td>
                                        <h2>02</h2>
                                        <h3>Flexibele opties</h3>
                                        <p>
                                            We begrijpen dat één maat niet voor iedereen past. Daarom bieden we verschillende garantieplannen aan die zijn afgestemd op uw specifieke behoeften en budget, waardoor u de flexibiliteit hebt om de dekking te kiezen die het beste bij u past.
                                        </p>
                                    </td>
                                    <td>
                                        <h2>03</h2>
                                        <h3>Juiste ondersteuning</h3>
                                        <p>
                                            Onze garantie wordt ondersteund door een team van experts dat altijd klaarstaat om u te helpen. Of het nu gaat om een vraag over de dekking of om assistentie bij het regelen van een reparatie, wij zijn er om u te ondersteunen bij elke stap van uw garantieperiode.
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
                                        Via het formulier op deze pagina kan eenvoudig een afspraakverzoek worden ingediend. Uiteraard kan dit ook telefonisch. Wij zullen een verzoek altijd bevestigen.
                                    </p>
                                </div>
                                <div className="form-area">
                                    <form>
                                        <div className="row">
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
                                                <div className="form-group">
                                                    <textarea className="form-control form-styl" placeholder="Bericht"></textarea>
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
                        <h2>Gerelateerde <strong>diensten</strong></h2>
                    </div>
                    <div className="dienst-dtl-service-grid">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <a href="">
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
                                                    Bent u geïnteresseerd in het leasen of financieren van uw voertuig? Als u een auto wilt kopen, maar liever maandelijks betaalt, dan biedt een autofinanciering wellicht een goede uitkomst.
                                                </p>
                                                <div className="common-btn border-btn">Lees meer</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <a href="">
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
                                                    Ontdek gemoedsrust op de weg met onze uitgebreide garantiedekking. Bij Automotive van Lierop streven we ernaar uw rijervaring zo probleemloos mogelijk te maken.
                                                </p>
                                                <div className="common-btn border-btn">Lees meer</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <a href="">
                                    <div className="each-service-block position-relative h-100">
                                        <div className="each-service-block-img">
                                            <img src="assets/service3.jpg" alt="" className="w-100" />
                                        </div>
                                        <div className="each-service-block-info">
                                            <h3>verzekering</h3>
                                        </div>
                                        <div className="each-service-block-hover-info">
                                            <div className="each-service-block-info-wrap">
                                                <h3>verzekering</h3>
                                                <p>
                                                    U wilt uw auto optimaal verzekeren, of u nu een zakelijke of particuliere rijder bent. U wilt geen stress en goede premies. Bij Automotive van Lierop in Beek en Donk werken we samen met bekende.
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

    )
}

export default Garantie
