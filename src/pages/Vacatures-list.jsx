import React, { useEffect } from "react";

const Vacatureslist = () => {
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
     
      <section className="inner-banner">
        <div className="common-wrap">
          <div className="inner-banner-img">
            <img
              src="assets/vacatures-banner.jpg"
              alt="img"
              className="w-100"
            />
          </div>
          <div className="container">
            <div className="inner-banner-content">
              <h1>Onze vacatures</h1>
            </div>
          </div>
        </div>
      </section>

      
      <section className="diens-service-list-sec">
        <div className="container">
          <div className="diens-service-list-area">
            <div className="row">
             
              {[
                {
                  title: "Verkoop",
                  img: "assets/vacatures-service1.jpg",
                  desc: "Ben jij een enthousiaste en gedreven verkoper met een passie voor auto's? Wil je deel uitmaken van een dynamisch team in de automotive sector? Dan zijn wij op zoek naar jou!"
                },
                {
                  title: "Automonteur",
                  img: "assets/vacatures-service2.jpg",
                  desc: "Ben jij een ervaren automonteur met een passie voor techniek en auto's? Wil je deel uitmaken van een toegewijd team in de automotive branche? Dan is dit jouw kans om bij ons autobedrijf aan de slag te gaan!"
                },
                {
                  title: "Receptionist",
                  img: "assets/vacatures-service3.jpg",
                  desc: "Ben jij een vriendelijke en professionele receptionist(e) met een passie voor klantenservice? Wil je deel uitmaken van een dynamisch team in de automotive sector? Dan nodigen we je uit om te solliciteren bij ons autobedrijf!"
                }
              ].map((job, index) => (
                <div key={index} className="col-lg-6 mb-4">
                  <div className="each-diens-service-list">
                    <a href="#">
                      <div className="each-service-block position-relative">
                        <div className="each-service-block-img">
                          <img src={job.img} alt="" className="w-100" />
                        </div>
                        <div className="each-service-block-info">
                          <h3>{job.title}</h3>
                        </div>
                        <div className="each-service-block-hover-info">
                          <div className="each-service-block-info-wrap">
                            <h3>{job.title}</h3>
                            <p>{job.desc}</p>
                            <div className="common-btn border-btn">Lees meer</div>
                          </div>
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

export default Vacatureslist;
