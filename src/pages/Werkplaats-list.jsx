import React, { useEffect } from "react";
import '../css/Style.css'
import '../css/Responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Service = () => {
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
        <img src="assets/werkplaats-banner.jpg" alt="img" className="w-100" />
      </div>
      <div className="container">
        <div className="inner-banner-content">
          <h1>Onze werkplaats</h1>
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
          </div>
          
          <div className="col-lg-6">
            <div className="each-diens-service-list">
              <a href="">
                <div className="each-service-block position-relative">
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
          </div>
          
          <div className="col-lg-6">
            <div className="each-diens-service-list">
              <a href="">
                <div className="each-service-block position-relative">
                  <div className="each-service-block-img">
                    <img src="assets/werkplaats-service3.jpg" alt="" className="w-100" />
                  </div>
                  <div className="each-service-block-info">
                    <h3>Airco service</h3>
                  </div>
                  <div className="each-service-block-hover-info">
                    <div className="each-service-block-info-wrap">
                      <h3>Airco service</h3>
                      <p>Houd uw airco in topconditie in Beek en Donk. Het is belangrijk om regelmatig onderhoud aan uw airconditioning uit te laten voeren. Elk jaar verliest de airco namelijk normaliter een deel van het koelmiddel.</p>
                      <div className="common-btn border-btn">
                        Lees meer
                      </div>
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
                    <img src="assets/werkplaats-service4.jpg" alt="" className="w-100" />
                  </div>
                  <div className="each-service-block-info">
                    <h3>Onderhoud of reparatie</h3>
                  </div>
                  <div className="each-service-block-hover-info">
                    <div className="each-service-block-info-wrap">
                      <h3>Onderhoud of reparatie</h3>
                      <p>Bij Automotive van Lierop in Beek en Donk zorgen we voor het onderhoud van uw auto. Goed en tijdig onderhoud voorkomt kostbare reparaties. Of het nu gaat om een grote of kleine onderhoudsbeurt, u kunt bij ons terecht.</p>
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

export default Service;

