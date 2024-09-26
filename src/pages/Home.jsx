import React from 'react'
import Navbar from '../components/NavBar'
import TopBrands from "../Assets/Banner/topbrands.png"
import BannerSlider from '../components/BannerSlider'
import MainCarousel from '../components/MainCarousel'
import Image1 from "../Assets/img-1.png"
import HealthProductsList from '../components/HealthProductsList'
import HealthConcerns from '../components/HealthConcerns'
import InfoSection from '../components/InfoSection'
import Footer from "../components/Footer"


const Home = () => {
    return (
        <div>
            <Navbar />
            <br />
            <BannerSlider />
            <br />
            <h1 style={{
                textAlign: "center",

            }}>
                Top Brands
            </h1>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                    src={TopBrands}
                    alt="Top Brands"
                    style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
                />
            </div>
            <h1 style={{ textAlign: 'center' }}>Featured Products</h1>
            <MainCarousel />

            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={Image1} alt="" style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }} />
            </div>

            <HealthProductsList />
            <HealthConcerns />
            <h1 style={{ textAlign: 'center' }}>Deal of the day</h1>
            <MainCarousel />
            <InfoSection />
            <Footer />


        </div>
    )
}

export default Home