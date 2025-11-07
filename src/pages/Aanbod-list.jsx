import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Aanbodlist = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

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

      <section className="aanbod-filter-sec aanbod-list-filter">
        <div className="aanbod-filter-bg-mark">
          <img src="assets/aanbod-filter-bg-mark.svg" alt="" className="w-100" />
        </div>
        <div className="container">
          <div className="aanbod-filter-wrap">
            <div className="hidden-filter">
              <div className="filter-main">
                <div className="row">
                  <div className="col-xl-9">
                    <div className="filter-left-area">
                      <div className="filter-left-heading">
                        <h3>Filter op:</h3>
                      </div>
                      <div className="row align-items-center">
                        
                        <div className="col-lg-3 col-6 aanbod-filter merk-filter">
                          <div className="each-filter position-relative dropdown" data-val="Merk">
                            <div
                              className="select-style"
                              onClick={() => toggleDropdown("merk")}
                            >
                              Merk
                            </div>
                            {openDropdown === "merk" && (
                              <div className="filter-content position-absolute w-100 dropdown-menu show pading-10px">
                                <label className="position-relative cursor-pointer">
                                  <input type="checkbox" value="Toyota" /> Toyota <span>2</span>
                                </label>
                                <label className="position-relative cursor-pointer">
                                  <input type="checkbox" value="Volkswagen" /> Volkswagen <span>2</span>
                                </label>
                                <label className="position-relative cursor-pointer">
                                  <input type="checkbox" value="Volvo" /> Volvo <span>2</span>
                                </label>
                              </div>
                            )}
                          </div>
                        </div>

                        
                        <div className="col-lg-3 col-6 model-filter aanbod-filter">
                          <div className="each-filter position-relative dropdown" data-val="Model">
                            <div
                              className="select-style"
                              onClick={() => toggleDropdown("model")}
                            >
                              Model
                            </div>
                            {openDropdown === "model" && (
                              <div className="filter-content position-absolute w-100 dropdown-menu show">
                                <label className="position-relative cursor-pointer">
                                  <input type="checkbox" value="V60" /> V60
                                </label>
                                <label className="position-relative cursor-pointer">
                                  <input type="checkbox" value="X1" /> X1
                                </label>
                                <label className="position-relative cursor-pointer">
                                  <input type="checkbox" value="X5" /> X5
                                </label>
                              </div>
                            )}
                          </div>
                        </div>

                        
                        <div className="col-lg-3 col-6 brandstof-filter aanbod-filter">
                          <div className="each-filter position-relative dropdown" data-val="Brandstof">
                            <div
                              className="select-style"
                              onClick={() => toggleDropdown("brandstof")}
                            >
                              Brandstof
                            </div>
                            {openDropdown === "brandstof" && (
                              <div className="filter-content position-absolute w-100 dropdown-menu show">
                                <label className="position-relative cursor-pointer">
                                  <input type="checkbox" value="B" /> Benzine <span>47</span>
                                </label>
                                <label className="position-relative cursor-pointer">
                                  <input type="checkbox" value="B,E" /> Hybride (Benzine) <span>16</span>
                                </label>
                                <label className="position-relative cursor-pointer">
                                  <input type="checkbox" value="D" /> Diesel <span>6</span>
                                </label>
                              </div>
                            )}
                          </div>
                        </div>

                       
                        <div className="col-lg-3 col-6 transmissie-filter aanbod-filter">
                          <div className="each-filter position-relative dropdown" data-val="Transmissie">
                            <div
                              className="select-style"
                              onClick={() => toggleDropdown("transmissie")}
                            >
                              Transmissie
                            </div>
                            {openDropdown === "transmissie" && (
                              <div className="filter-content position-absolute w-100 dropdown-menu show">
                                <label className="position-relative cursor-pointer">
                                  <input type="checkbox" value="A" /> Automaat <span>34</span>
                                </label>
                                <label className="position-relative cursor-pointer">
                                  <input type="checkbox" value="H" /> Handgeschakeld <span>35</span>
                                </label>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                
                  <div className="col-xl-3">
                    <div className="filter-sort">
                      <div className="each-filter position-relative dropdown" data-val="Sorteren op">
                        <div
                          className="select-style"
                          onClick={() => toggleDropdown("sorteren")}
                        >
                          Sorteren op
                        </div>
                        {openDropdown === "sorteren" && (
                          <div className="filter-content position-absolute w-100 dropdown-menu show">
                            <label className="position-relative cursor-pointer">
                              <input type="checkbox" value="Bouwjaar-asc" /> Bouwjaar oud naar nieuw
                            </label>
                            <label className="position-relative cursor-pointer">
                              <input type="checkbox" value="Bouwjaar-desc" /> Bouwjaar nieuw naar oud
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="clear-filter-main">
              <div className="row align-items-center">
                <div className="col-md-10">
                  <div className="clear-filter-wrap">
                    <div className="show_selected_filter_cls">
                      <span id="overview-model">
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 text-md-end">
                  <div className="filter-reset">
                    <a href="#" className="reset_all_filter">
                      Reset filters <img src="/assets/cross.svg" alt="cross.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="aanbod-list-product-sec">
        <div className="container">
          <div className="aanbod-list-product-area">
            <div className="row">
              {[...Array(12)].map((_, index) => (
                <div key={index} className="col-xl-4 col-lg-6">
                  <div className="each-aanbod-product">
                    <Link to="/AanbodDtl">
                      <div className="each-product">
                        <div className="each-product-img position-relative">
                          <img src="/assets/product-car.jpg" alt="" className="w-100" />
                          <div className="product-plus">
                            <img src="/assets/product-plus.svg" alt="" />
                          </div>
                        </div>
                        <div className="each-product-text">
                          <h3>Audi A1 Sportback</h3>
                          <p>1.2 TFSI Admired | S-LINE | AIRCO ...</p>
                          <ul>
                            <li>
                              <h6><strong>Bouwjaar</strong></h6>
                              <h6>2015</h6>
                            </li>
                            <li>
                              <h6><strong>Brandstof</strong></h6>
                              <h6>Hybride (Benzine)</h6>
                            </li>
                            <li>
                              <h6><strong>Transmissie</strong></h6>
                              <h6>Handgeschakeld</h6>
                            </li>
                            <li>
                              <h6><strong>€ 259.900,-</strong></h6>
                              <h6>v.a € 3.558,02 p/m</h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Link>

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

export default Aanbodlist;
