import React from "react";

const Footer = () => {
    return (
        <footer className="footer-sec">
            <div className="common-wrap">
                <div className="footer-sec-wrap">
                    <div className="container">
                        <div className="footer-area">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="each-footer-area">
                                        <div className="footer-mobile-logo">
                                            <a href=""><img src="assets/footer-logo.svg" alt="" /></a>
                                        </div>
                                        <div className="klanten-logo">
                                            <iframe frameborder="0" allowtransparency="true" src="https://www.klantenvertellen.nl/retrieve-widget.html?color=dark&button=true&lang=nl&tenantId=99&locationId=1052788" width="300" height="80"></iframe>
                                        </div>
                                        <div className="footer-whole-wp">
                                            <a href="">
                                                <div className="footer-wp">
                                                    <img src="assets/footer-whatsapp.svg" alt="" />
                                                </div>
                                                <div className="footer-wp-info">
                                                    <h6>whatsapp direct</h6>
                                                    <h5>+31 6 0000 0000</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="each-footer-area">
                                        <div className="footer-logo">
                                            <a href=""><img src="assets/footer-logo.svg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="each-footer-area">
                                        <div className="footer-contact">
                                            <div className="each-footer-contact">
                                                <h4>Contact</h4>
                                                <a href="">0492 74 52 17</a> <br />
                                                <a href="">info@automotivevanlierop.nl</a>
                                            </div>
                                            <div className="each-footer-contact each-footer-opening-mobile">
                                                <h4>Openingstijden</h4>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>Ma - vr</td>
                                                            <td>09:00 - 17:30</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Za</td>
                                                            <td>10:00 - 17:00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zo</td>
                                                            <td>Op afspraak</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="each-footer-contact">
                                                <h4>Adres</h4>
                                                <a href="">Lange Vonder 1<br />5741 TT Beek en Donk</a>
                                            </div>
                                            <div className="each-footer-contact each-footer-opening-mobile each-footer-werk">
                                                <h6>Werkplaats</h6>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>Ma - vr</td>
                                                            <td>08:00 - 17:00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Za</td>
                                                            <td>10:00 - 17:00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zo</td>
                                                            <td>Op afspraak</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="each-footer-contact each-footer-opening each-footer-desk-opening">
                                                <h4>Openingstijden</h4>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>Ma - vr</td>
                                                            <td>09:00 - 17:30</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Za</td>
                                                            <td>10:00 - 17:00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zo</td>
                                                            <td>Op afspraak</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <h6>Werkplaats</h6>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>Ma - vr</td>
                                                            <td>08:00 - 17:00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Za</td>
                                                            <td>10:00 - 17:00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Zo</td>
                                                            <td>Op afspraak</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-btm">
                            <div className="each-footer-btm">
                                <img src="assets/footer-bovag.svg" alt="" className="footer-bovag" />
                            </div>
                            <div className="each-footer-btm">
                                <a href="">Privacy Policy Algemene voorwaarden</a>
                            </div>
                            <div className="each-footer-btm">
                                <ul>
                                    <li>
                                        <a href=""><img src="assets/footer-call.svg" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href=""><img src="assets/footer-fb.svg" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href=""><img src="assets/footer-insta.svg" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href=""><img src="assets/footer-mail.svg" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href=""><img src="assets/footer-wp.svg" alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
