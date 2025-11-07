
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Style.css";
import "../css/Responsive.css";

const ThankYouPage = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    
    setShowModal(true);
  }, []);

  const closeModal = (e) => {
    e && e.preventDefault();
    setShowModal(false);
  };

  return (
    <div id="page">
     
      {showModal && (
        <>
          <div
            className="modal fade show"
            id="myModal"
            role="dialog"
            tabIndex="-1"
            style={{ display: "block" }}
            aria-modal="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-main-content">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="pop-up-image">
                        <img src="assets/popup-img.jpg" alt="" className="w-100" />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <a
                        className="close-img"
                        href="#"
                        onClick={closeModal}
                        aria-label="Close"
                      >
                        <img src="assets/cross-img.png" alt="close" />
                      </a>
                      <div className="popup-content d-table w-100 h-100">
                        <div className="d-table-cell align-middle">
                          <p>
                            Ontdek ons assortiment van topkwaliteit. Wij hebben voor elk wat
                            wils. Bekijk nu ons aanbod en vind de perfecte occasion!
                          </p>
                          <h3>Waarom kiezen voor Automotive van Lierop?</h3>
                          <ul>
                            <li>Betrouwbare occasions van gerenommeerde merken</li>
                            <li>Deskundig advies en uitstekende service</li>
                            <li>Flexibele financieringsopties beschikbaar</li>
                          </ul>
                          <p>
                            Mis onze speciale aanbiedingen niet! Bezoek ons snel of neem
                            eenvoudig contact met ons op.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div
            className="modal-backdrop fade show"
            onClick={closeModal}
            style={{ cursor: "pointer" }}
          />
        </>
      )}
     
      
      <div className="fix-block">
        <div className="fix-wp">
          <a href="#">
            <img src="assets/fix-wp.svg" alt="fix-wp" />
          </a>
        </div>
        <div className="fix-call">
          <a href="#">
            <img src="assets/fix-call.svg" alt="fix-call" />
          </a>
        </div>
      </div>

      <div className="fixed-klanten">
        <a href="#">
          <img src="assets/fix-klanten.svg" alt="fix-klanten" />
        </a>
      </div>

      <main>
        <section className="inner-banner thankyou-banner-sce">
          <div className="common-wrap">
            <div className="inner-banner-img">
              <img src="assets/tankyou-banner.jpg" alt="thank you banner" className="w-100" />
            </div>
            <div className="container">
              <div className="inner-banner-content text-center">
                <h1>Hartelijk dank voor uw interesse.</h1>
                <a href="#" className="common-btn">
                  Bekijk aanbod
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      
      <div id="mobile-contact-bar">
        <div id="mobile-contact-bar-outer">
          <ul>
            <li>
              <a href="#">
                <img src="assets/phone.svg" alt="phone" />
              </a>
            </li>
            <li className="li_color">
              <a href="#">
                <img src="assets/mail.svg" alt="mail" />
              </a>
            </li>
            <li className="li_color">
              <a href="#">
                <img src="assets/pin.svg" alt="pin" />
              </a>
            </li>
            <li className="li_color" style={{ backgroundColor: "#25D366" }}>
              <a href="#">
                <img src="assets/whatsapp.svg" alt="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
