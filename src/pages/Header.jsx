import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };


    useEffect(() => {
        if (isMenuActive) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuActive]);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header-area");
            if (window.scrollY > 50) {
                header.classList.add("header-area-active");
            } else {
                header.classList.remove("header-area-active");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header-area">
            <div className="common-wrap">
                <div className="header-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-5">
                                <div className="header-logo">
                                    <a href="#">
                                        <img src="assets/logo.svg" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 d-lg-block d-none">
                                <div className="header-nav">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/Aanbodlist">Aanbod</a></li>
                                        <li><a href="/Dienstenlist">Diensten</a></li>
                                        <li><a href="/Werkplaats">Werkplaats</a></li>
                                        <li><a href="/OverOns">Over ons</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="bovag-logo">
                                    <img src="assets/bovag-logo.svg" alt="Bovag Logo" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-7">
                                <div className="header-right">
                                    <a href="" className="login">Inloggen</a>
                                    <div className="header-btn text-end">
                                        <a href="/Contact" className="common-btn">
                                            Contact
                                        </a>
                                    </div>
                                    <div className="menu-bar d-lg-none d-block">
                                        <button
                                            className={`common-btn ${isMenuActive ? 'active' : ''}`}
                                            onClick={toggleMenu}
                                        >
                                            Menu
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div className={`mobile-header-menu ${isMenuActive ? 'mob-menu-active' : ''}`}>
                            <div className="mobile-header-menu-wrap">
                                <button
                                    className="close-menu"
                                    onClick={() => setIsMenuActive(false)}
                                    aria-label="Close menu"
                                >
                                    &times;
                                </button>

                                <ul>
                                    {[
                                        { name: 'Home', path: '/' },
                                        { name: 'Aanbod', path: '/Aanbodlist' },
                                        { name: 'Diensten', path: '/Dienstenlist' },
                                        { name: 'Werkplaats', path: '/werkplaats' },
                                        { name: 'Over ons', path: '/OverOns' }
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className={isMenuActive ? 'active' : ''}
                                            style={{
                                                animationDelay: `${0.2 * (1 + index)}s`,
                                                WebkitAnimationDelay: `${0.2 * (1 + index)}s`,
                                                OAnimationDelay: `${0.2 * (1 + index)}s`
                                            }}
                                        >
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsMenuActive(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;