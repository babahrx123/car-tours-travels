"use client";
import AllCars from "@/components/AllCars";
import Footer from "@/components/Footer";
import HeroPages from "@/components/HeroPages";
import { LuPhoneCall } from "react-icons/lu";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />

        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <LuPhoneCall />
                <h3>(988) 656-7456</h3>
              </span>
            </div>
          </div>
        </div>
        <AllCars />
        <Footer />
      </section>
    </>
  );
}

export default Models;
