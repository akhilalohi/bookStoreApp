import React from 'react'
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";  // Adjust path if needed
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";

function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Freebook/>
        <Footer />
    </div>
  );
}

export default Home;