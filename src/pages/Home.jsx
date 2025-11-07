import React, { useState, useEffect } from "react";
import "../css/common-class.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


const HomePage = () => {
  const products = [
    {
      id: 1,
      link: "/occasions-kopen/48693579-lynk-co-01-1-5-phev-2022-pano-360-cam-trekhaak-13-polig",
      img: "/assets/product-car.jpg",
      title: "Audi A1 Sportback",
      desc: "1.2 TFSI Admired | S- LINE | AIRCO ...",
      year: "2015",
      fuel: "Benzine",
      transmission: "Handmatig",
      price: "€ 96.950,-",
      monthly: "€ 401 per maand",
    },
    {
      id: 2,
      link: "/occasions-kopen/48669037-lynk-co-01-1-5-phev-2022-pano-360-cam-4-season-banden",
      img: "/assets/product-car.jpg",
      title: "BMW Z4",
      desc: "1.2 TFSI Admired | S- LINE | AIRCO ...",
      year: "2015",
      fuel: "Benzine",
      transmission: "Handmatig",
      price: "€ 96.950,-",
      monthly: "€ 401 per maand",
    },
    {
      id: 3,
      link: "/occasions-kopen/48669037-lynk-co-01-1-5-phev-2022-pano-360-cam-4-season-banden",
      img: "/assets/product-car.jpg",
      title: "Lynk & Co 01",
      desc: "1.2 TFSI Admired | S- LINE | AIRCO ...",
      year: "2015",
      fuel: "Benzine",
      transmission: "Handmatig",
      price: "€ 96.950,-",
      monthly: "€ 401 per maand",
    },
    {
      id: 4,
      link: "/occasions-kopen/48669037-lynk-co-01-1-5-phev-2022-pano-360-cam-4-season-banden",
      img: "/assets/product-car.jpg",
      title: "Lynk & Co 01",
      desc: "1.2 TFSI Admired | S- LINE | AIRCO ...",
      year: "2015",
      fuel: "Benzine",
      transmission: "Handmatig",
      price: "€ 96.950,-",
      monthly: "€ 401 per maand",
    },
    {
      id: 5,
      link: "/occasions-kopen/48669037-lynk-co-01-1-5-phev-2022-pano-360-cam-4-season-banden",
      img: "/assets/product-car.jpg",
      title: "Lynk & Co 01",
      desc: "1.2 TFSI Admired | S- LINE | AIRCO ...",
      year: "2015",
      fuel: "Benzine",
      transmission: "Handmatig",
      price: "€ 96.950,-",
      monthly: "€ 401 per maand",
    },
    {
      id: 6,
      link: "/occasions-kopen/48669037-lynk-co-01-1-5-phev-2022-pano-360-cam-4-season-banden",
      img: "/assets/product-car.jpg",
      title: "Lynk & Co 01",
      desc: "1.2 TFSI Admired | S- LINE | AIRCO ...",
      year: "2015",
      fuel: "Benzine",
      transmission: "Handmatig",
      price: "€ 96.950,-",
      monthly: "€ 401 per maand",
    },
  ]
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing experience! Highly recommend it.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      comment: "Good service and friendly staff.",
    },

  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.rating || !newReview.comment) return;
    setReviews([
      ...reviews,
      { id: Date.now(), ...newReview, rating: Number(newReview.rating) },
    ]);
    setNewReview({ name: "", rating: "", comment: "" });
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

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
      <section className="banner-sec">
        <div className="banner-bg-mark">
          <img src="assets/banner-bg-mark.svg" alt="" className="w-100" />
        </div>
        <div className="common-wrap">
          <div className="banner-slider">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="each-banner">
                    {/* <img src="assets/banner.jpg" alt="" className="w-100" /> */}
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="banner-video"
                    >
                      <source src="assets/video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-content text-center">
            <div className="container">
              <h1>Uw auto, ons vakmanschap. <strong>Automotive van Lierop.</strong></h1>
              <a href="#" className="common-btn">
                Ga naar ons aanbod
              </a>
              <a href="#" className="common-btn black-btn">
                Bekijk de diensten
              </a>
            </div>
          </div>
        </div>
      </section>
      

      <section className="banner-btm">
        <div className="container">
          <div className="banner-btm-wrap">
            <div className="row">
              <div className="col-lg-6">
                <a href="#">
                  <div className="each-banner-btm">
                    <h6>Aanbod</h6>
                    <h2>Ontdek onze nieuwste auto's</h2>
                  </div>
                </a>
              </div>
              <div className="col-lg-6">
                <a href="#">
                  <div className="each-banner-btm">
                    <h6>Werkplaats</h6>
                    <h2>Maak werkplaatsafspraak</h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="product-sec">
        <div className="common-wrap">
          <div className="product-sec-wrap">
            <div className="container">
              <div className="product-title">
                <h6>Aanbod</h6>
                <h2>
                  <strong>Onze nieuwste auto’s</strong>, klaar voor u.
                </h2>
                <p>
                  Bij Automotive van Lierop hebben we een uitgebreid en divers
                  assortiment occasions op voorraad. U bent van harte welkom in
                  onze showroom. We raden u aan om van tevoren contact met ons op
                  te nemen, zodat we u alle aandacht kunnen geven die u verdient.
                  Neem alvast een kijkje in ons aanbod!
                </p>
              </div>

              <div className="product-slider position-relative">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".product-slider .swiper-button-next",
                    prevEl: ".product-slider .swiper-button-prev",
                  }}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={false}
                
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    992: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {products.map((item) => (
                    <SwiperSlide key={item.id}>
                      <a href={item.link}>
                        <div className="each-product">
                          <div className="each-product-img position-relative">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-100"
                            />
                            <div className="product-plus">
                              <img src="/assets/product-plus.svg" alt="plus" />
                            </div>
                          </div>
                          <div className="each-product-text">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <ul>
                              <li>
                                <h6>
                                  <strong>Bouwjaar</strong>
                                </h6>
                                <h6>{item.year}</h6>
                              </li>
                              <li>
                                <h6>
                                  <strong>Brandstof</strong>
                                </h6>
                                <h6>{item.fuel}</h6>
                              </li>
                              <li>
                                <h6>
                                  <strong>Transmissie</strong>
                                </h6>
                                <h6>{item.transmission}</h6>
                              </li>
                              <li>
                                <h6>
                                  <strong>{item.price}</strong>
                                </h6>
                                <h6>{item.monthly}</h6>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>

              
                <div className="swiper-button-prev common-arrow">
                  <img src="/assets/prev.svg" alt="prev" />
                </div>
                <div className="swiper-button-next common-arrow">
                  <img src="/assets/next.svg" alt="next" />
                </div>
              </div>

              <div className="product-btn">
                <a className="common-btn" href="aanbod">
                  Bekijk aanbod
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-sec">
        <div className="common-wrap">
          <div className="container">
            <div className="service-title">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="service-title-left">
                    <h6>Diensten</h6>
                    <h2><strong>Service</strong> en <strong>expertise</strong> <br /> onder één dak.</h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service-title-right">
                    <p>Naast autoverkoop bieden wij ook een gevarieerd pakket aan diensten aan om de aan- of verkoop van uw auto zo makkelijk mogelijk te maken. Bekijk ons totale aanbod aan diensten en neem gerust contact op bij vragen.</p>
                    <a href="" className="common-btn">Bekijk diensten</a>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="service-grid">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <a href="">
                    <div className="each-service-block position-relative">
                      <div className="each-service-block-img">
                        <img src="assets/service1.jpg" alt="" className="w-100" />
                      </div>
                      <div className="each-service-block-info">
                        <h3>Financiering / lease</h3>
                      </div>
                      <div className="each-service-block-hover-info">
                        <div className="each-service-block-info-wrap">
                          <h3>Financiering / lease</h3>
                          <p>Bent u geïnteresseerd in het leasen of financieren van uw voertuig? Als u een auto wilt kopen, maar liever maandelijks betaalt, dan biedt een autofinanciering wellicht een goede uitkomst.</p>
                          <div className="common-btn border-btn">
                            Lees meer
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <a href="">
                    <div className="each-service-block position-relative">
                      <div className="each-service-block-img">
                        <img src="assets/service2.jpg" alt="" className="w-100" />
                      </div>
                      <div className="each-service-block-info">
                        <h3>Garantie</h3>
                      </div>
                      <div className="each-service-block-hover-info">
                        <div className="each-service-block-info-wrap">
                          <h3>Garantie</h3>
                          <p>Ontdek gemoedsrust op de weg met onze uitgebreide garantiedekking. Bij Automotive van Lierop streven we ernaar uw rijervaring zo probleemloos mogelijk te maken.</p>
                          <div className="common-btn border-btn">
                            Lees meer
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <a href="">
                    <div className="each-service-block position-relative">
                      <div className="each-service-block-img">
                        <img src="assets/service3.jpg" alt="" className="w-100" />
                      </div>
                      <div className="each-service-block-info">
                        <h3>verzekering</h3>
                      </div>
                      <div className="each-service-block-hover-info">
                        <div className="each-service-block-info-wrap">
                          <h3>verzekering</h3>
                          <p>U wilt uw auto optimaal verzekeren, of u nu een zakelijke of particuliere rijder bent. U wilt geen stress en goede premies. Bij Automotive van Lierop in Beek en Donk werken we samen met bekende.</p>
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

      <section className="home-mid-block">
        <div className="common-wrap">
          <div className="container">
            <div className="home-mid-block-wrap">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="home-mid-block-left">
                    <h3>Onze Werkplaats, uw <br /> vertrouwde servicepunt.</h3>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="home-mid-block-right">
                    <p>Onze werkplaats staat garant voor betrouwbare service, vakkundig onderhoud en snelle reparaties. Bekijk al onze werkplaatsdiensten en plan eenvoudig een afspraak.</p>
                    <a href="" className="common-btn border-btn">Bekijk Werkplaats</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec">
        <div className="common-wrap">
          <div className="about-wrap">
            <div className="container">
              <div className="about-info">
                <h2>Over <br /><strong>Automotive van Lierop</strong></h2>
                <p>Bij Automotive van Lierop draait alles om auto's én om u. Met passie voor auto's maken we uw auto-ervaring geweldig. Kijk rustig rond of kom langs!</p>
                <a href="" className="common-btn border-btn">Meer over ons</a>
              </div>
              <div className="about-img position-relative">
                <img src="assets/about-img.jpg" alt="" className="w-100" />
                <div className="about-title">
                  <h3>Onze voordelen</h3>
                </div>
                <div className="about-vector">
                  <div className="each-about-vector">
                    <img src="assets/about-vector1.svg" alt="" />
                    <h4>Deskundig advies</h4>
                  </div>
                  <div className="each-about-vector">
                    <img src="assets/about-vector2.svg" alt="" />
                    <h4>Uitstekende service</h4>
                  </div>
                  <div className="each-about-vector">
                    <img src="assets/about-vector3.svg" alt="" />
                    <h4>Altijd scherp geprijsd</h4>
                  </div>
                  <div className="each-about-vector">
                    <img src="assets/about-vector4.svg" alt="" />
                    <h4>De koffie staat altijd klaar</h4>
                  </div>
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
  );
};

export default HomePage;
