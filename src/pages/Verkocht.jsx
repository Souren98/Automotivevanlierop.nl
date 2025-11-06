import React, { useEffect } from "react";

const VerkochtPage = () => {
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
      {/* Top Section */}
      <section className="verkocht-top-sec">
        <div className="aanbod-filter-bg-mark">
          <img
            src="assets/aanbod-filter-bg-mark.svg"
            alt=""
            className="w-100"
          />
        </div>
        <div className="container">
          <div className="verkocht-top-area">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="verkocht-top-left">
                  <h2>Verkocht</h2>
                </div>
              </div>
              <div className="col-md-9">
                <div className="verkocht-top-right">
                  <p>Een greep uit onze recent verkochte occasions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aanbod List Section */}
      <section className="aanbod-list-product-sec">
        <div className="container">
          <div className="aanbod-list-product-area">
            <div className="row">
              {/* Repeat Product Card */}
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="col-xl-4 col-lg-6 mb-4">
                  <div className="each-aanbod-product">
                    <a href="#">
                      <div className="each-product">
                        <div className="each-product-img position-relative">
                          <img
                            src="assets/product-car.jpg"
                            alt=""
                            className="w-100"
                          />
                          <div className="product-plus">
                            <img src="assets/product-plus.svg" alt="" />
                          </div>
                        </div>
                        <div className="each-product-text">
                          <h3>Audi A1 Sportback</h3>
                          <p>1.2 TFSI Admired | S- LINE | AIRCO ...</p>
                          <ul>
                            <li>
                              <h6>
                                <strong>Bouwjaar</strong>
                              </h6>
                              <h6>2015</h6>
                            </li>
                            <li>
                              <h6>
                                <strong>Brandstof</strong>
                              </h6>
                              <h6>Hybride (Benzine)</h6>
                            </li>
                            <li>
                              <h6>
                                <strong>Transmissie</strong>
                              </h6>
                              <h6>Handgeschakeld</h6>
                            </li>
                            <li>
                              <h6>
                                <strong>€ 259.900,-</strong>
                              </h6>
                              <h6>v.a € 3.558,02 p/m</h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
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

export default VerkochtPage;
