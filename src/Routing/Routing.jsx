import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../pages/Footer";
import ServicesSection from "../pages/Werkplaats-list";
import ThankYouPage from "../pages/Bedankt"; 
import WerkplaatsDetail from "../pages/Werkplaats-Detail";
import VerzekeringDetail from "../pages/Verzekering";
import VerkochtPage from "../pages/Verkocht";
import Vacatureslist from "../pages/Vacatures-list";
import VacatureDetail from "../pages/Vacature-detail";
import ReceptionistVacature from "../pages/Receptionist";
import OverOns from "../pages/Over-ons";
import Werkplaats from "../pages/Onderhoud-of-reparatie";
import HomePage from "../pages/Home";
import Garantie from "../pages/Garantie";
import ServiceDetail from "../pages/Diensten-detail";
import Dienstenlist from "../pages/Diensten-list";
import Automonteur from "../pages/Automonteur";
import ApkDetail from "../pages/Apk";
import AircoService from "../pages/Airco-service";
import Aanbodlist from "../pages/Aanbod-list";
import AanbodDtl from "../pages/Aanbod-dtl";
import Contact from "../pages/Contact";
import Header from "../pages/Header";
import '../css/font.css'


function Routing() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/AanbodDtl" element={<AanbodDtl />} />
                <Route path="/Aanbodlist" element={<Aanbodlist />} />
                <Route path="/AircoService" element={<AircoService />} />
                <Route path="/ApkDetail" element={<ApkDetail />} />
                <Route path="/Automonteur" element={<Automonteur />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Garantie" element={<Garantie />} />
                <Route path="/Dienstenlist" element={<Dienstenlist />} />
                <Route path="/services" element={<ServicesSection />} />
                <Route path="/OverOns" element={<OverOns />} />
                <Route path="/Werkplaats" element={<Werkplaats />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/WerkplaatsDetail" element={<WerkplaatsDetail />} />
                <Route path="/Service" element={<ServicesSection />} />
                <Route path="/VerzekeringDetail" element={<VerzekeringDetail />} />
                <Route path="/VerkochtPage" element={<VerkochtPage />} />
                <Route path="/Vacatureslist" element={<Vacatureslist />} />
                <Route path="/VacatureDetail" element={<VacatureDetail />} />
                <Route path="/ReceptionistVacature" element={<ReceptionistVacature />} />
                <Route path="/ServiceDetail" element={<ServiceDetail/>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Routing;
