import React, { useEffect } from "react";

const Dienstenlist = () => {

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
            <section className="inner-banner">
                <div className="common-wrap">
                    <div className="inner-banner-img">
                        <img src="assets/diens-banner.jpg" alt="img" className="w-100" />
                    </div>
                    <div className="container">
                        <div className="inner-banner-content">
                            <h1>Onze diensten</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="diens-service-list-sec">
                <div className="container">
                    <div className="diens-service-list-area">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="each-diens-service-list">
                                    <a href="">
                                        <div className="each-service-block position-relative">
                                            <div className="each-service-block-img">
                                                <img src="assets/diens-service1.jpg" alt="" className="w-100" />
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
                            </div>

                            <div className="col-lg-6">
                                <div className="each-diens-service-list">
                                    <a href="">
                                        <div className="each-service-block position-relative">
                                            <div className="each-service-block-img">
                                                <img src="assets/diens-service2.jpg" alt="" className="w-100" />
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
                            </div>

                            <div className="col-lg-6">
                                <div className="each-diens-service-list">
                                    <a href="">
                                        <div className="each-service-block position-relative">
                                            <div className="each-service-block-img">
                                                <img src="assets/diens-service3.jpg" alt="" className="w-100" />
                                            </div>
                                            <div className="each-service-block-info">
                                                <h3>verzekering</h3>
                                            </div>
                                            <div className="each-service-block-hover-info">
                                                <div className="each-service-block-info-wrap">
                                                    <h3>verzekering</h3>
                                                    <p>
                                                        U wilt uw auto optimaal verzekeren, of u nu een zakelijke of particuliere rijder bent. U wilt geen stress en goede premies. Bij Automotive van Lierop in Beek en Donk werken we samen met bekende verzekeraars om u de beste opties te bieden.
                                                    </p>
                                                    <div className="common-btn border-btn">Lees meer</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="each-diens-service-list">
                                    <a href="">
                                        <div className="each-service-block position-relative">
                                            <div className="each-service-block-img">
                                                <img src="assets/diens-service1.jpg" alt="" className="w-100" />
                                            </div>
                                            <div className="each-service-block-info">
                                                <h3>Onze Werkplaats</h3>
                                            </div>
                                            <div className="each-service-block-hover-info">
                                                <div className="each-service-block-info-wrap">
                                                    <h3>Onze Werkplaats</h3>
                                                    <p>
                                                        Welkom bij de werkplaats van Automotive van Lierop! Wij begrijpen dat onderhoud en zorg voor uw voertuig van groot belang zijn voor uw rijplezier en veiligheid.
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

export default Dienstenlist;
