import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import './TeamSection.css';

const OverOns = () => {
  const swiperRef = useRef(null);
  const [activeSlideItem, setActiveSlideItem] = useState(0);

  useEffect(() => {
    setActiveSlideItem(activeSlideItem);
    console.log("activeSlideItem ", activeSlideItem);
    const slides = document.querySelectorAll('.team-slider .swiper-slide');
    // Add active class to clicked slide
    if (slides[activeSlideItem]) {
      slides[activeSlideItem].classList.add('team-active');
    }


  }, [activeSlideItem]);

  const handleSlideClick = (index) => {
    // Remove active class from all slides
    const slides = document.querySelectorAll('.team-slider .swiper-slide');
    slides.forEach(slide => slide.classList.remove('team-active'));
    setActiveSlideItem(index)
    // Add active class to clicked slide
    if (slides[index]) {
      slides[index].classList.add('team-active');
    }

  };

  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      position: "Manager",
      image: "assets/team1.jpg",
    },
    {
      id: 2,
      name: "Michael Brown",
      position: "Lead Developer",
      image: "assets/team2.jpg",
    },
    {
      id: 3,
      name: "Emma Wilson",
      position: "Marketing Manager",
      image: "assets/team1.jpg",
    },
    {
      id: 4,
      name: "David Lee",
      position: "UI/UX Designer",
      image: "assets/team3.jpg",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      position: "Project Manager",
      image: "assets/team4.jpg",
    },
    {
      id: 6,
      name: "Robert Taylor",
      position: "Sales Director",
      image: "assets/team5.jpg",
    },
    {
      id: 7,
      name: "David Lee",
      position: "UI/UX Designer",
      image: "assets/team1.jpg",
    },
  ];

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
      {/* Inner Banner */}
      <section className="inner-banner">
        <div className="over-one-banner-mark">
          <img src="assets/over-one-banner-mark.svg" alt="" className="w-100" />
        </div>
        <div className="common-wrap">
          <div className="inner-banner-img">
            <img src="assets/over-one-banner.jpg" alt="img" className="w-100" />
          </div>
          <div className="container">
            <div className="inner-banner-content">
              <h1>Over ons</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Top Features */}
      <section className="over-one-top-sec">
        <div className="container">
          <div className="over-one-top-wrap">
            <ul>
              <li>
                <img src="assets/man-icon.svg" alt="img" />
                <h4>Deskundig advies</h4>
              </li>
              <li>
                <img src="assets/setting-icon.svg" alt="img" />
                <h4>Uitstekende service</h4>
              </li>
              <li>
                <img src="assets/dollar-icon.svg" alt="img" />
                <h4>Altijd scherp geprijsd</h4>
              </li>
              <li>
                <img src="assets/cup-icon.svg" alt="img" />
                <h4>De koffie staat altijd klaar</h4>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="over-one-about-us-sec">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="over-one-about-us-img">
                <img
                  src="assets/over-one-about-img.jpg"
                  alt="img"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="over-one-about-us-info">
                <h2>
                  Welkom bij <br />
                  <strong>Automotive van Lierop</strong>
                </h2>
                <p>
                  Uw betrouwbare partner in mobiliteit. Bij ons draait alles om uw
                  rijervaring en tevredenheid.
                  <br />
                  Met onze passie voor auto's willen we u de beste mogelijke service
                  bieden. Of u nu op zoek bent naar een gloednieuwe auto of een
                  betrouwbare occasion, ons team staat klaar om u te helpen.
                  <br />
                  Wat ons onderscheidt, is onze toewijding aan kwaliteit en
                  klanttevredenheid. Wij geloven in eerlijkheid, transparantie en
                  openheid in alles wat we doen. We staan klaar om al uw vragen te
                  beantwoorden en u te begeleiden bij elke stap van het proces, zodat
                  u met vertrouwen de juiste beslissingen kunt nemen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid Section */}
      <section className="over-one-mid-sec">
        <div className="common-wrap">
          <div className="over-one-mid-wrap">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="over-one-mid-left-area">
                    <div className="over-one-mid-left-heading">
                      <h2>
                        Welkom bij <br />
                        <strong>Automotive van Lierop</strong>
                      </h2>
                    </div>
                    <div className="over-one-mid-left-img">
                      <img
                        src="assets/over-one-mid-img.jpg"
                        alt="img"
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="over-one-mid-right-area">
                    <ul>
                      <li>
                        <h3>Ruime keuze aan merken en modellen</h3>
                        <p>
                          Bij ons vindt u een uitgebreid assortiment aan auto's, zodat
                          er altijd iets voor u bij zit. We streven ernaar om voor elke
                          klant de perfecte auto te vinden, ongeacht hun voorkeuren of
                          budget.
                        </p>
                      </li>
                      <li>
                        <h3>Deskundig advies en begeleiding</h3>
                        <p>
                          Ons team staat altijd klaar om u te voorzien van deskundig
                          advies en begeleiding. Of u nu vragen heeft over verschillende
                          autokenmerken, financieringsopties of onderhoudsadvies, wij
                          zijn er om u te helpen bij elke stap van het proces.
                        </p>
                      </li>
                      <li>
                        <h3>Concurrerende prijzen</h3>
                        <p>
                          Bij ons bent u verzekerd van eerlijke en concurrerende prijzen
                          voor al onze auto's. Bovendien bieden we flexibele
                          financieringsmogelijkheden aan die zijn afgestemd op uw
                          individuele behoeften en budget, zodat u zonder zorgen kunt
                          genieten van uw nieuwe auto.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Swiper */}
      <section className="team-sec team-slider">
        <div className="container">
          <div className="team-area">
            <div className="team-top-area">
              <h2>
                Maak kennis met <br />
                <strong>ons team</strong>
              </h2>
            </div>

            <div className="team-slider-container position-relative">
              <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                slidesPerView="auto"
                spaceBetween={16}
                speed={1200}
                loop={false}
                navigation={{
                  nextEl: ".team-slider .swiper-button-next",
                  prevEl: ".team-slider .swiper-button-prev",
                }}
                breakpoints={{
                  320: {
                    spaceBetween: 5,
                  },
                  768: {
                    spaceBetween: 15,
                  },
                  1200: {
                    spaceBetween: 30,
                  },
                }}
                onSlideChange={(swiper) => {
                  console.log('Slide changed to index:', swiper.activeIndex);
                }}
              >
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={member.id} className={`${activeSlideItem === index ? "team-active" : ""}`}>
                    <div
                      className={`each-team h-100 `}
                    onClick={() => handleSlideClick(index)}

                    >
                      <div className="each-member-img">
                        <img src={member.image} alt={member.name} className="w-100" />
                      </div>
                      <div className="each-member-info">
                        <h3>{member.name}</h3>
                        <p>{member.position}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="swiper-button-prev common-arrow">
                <img src="/assets/prev.svg" alt="prev" />
              </div>
              <div className="swiper-button-next common-arrow">
                <img src="/assets/next.svg" alt="next" />
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

export default OverOns;