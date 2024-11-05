import Footer from "@/components/Footer";
import HeroPages from "@/components/HeroPages";
import PlanTrip from "@/components/PlanTrip";

import AboutMain from "@/public/images/about/about-main.jpg";
import Box1 from "@/public/images/about/icon1.png";
import Box2 from "@/public/images/about/icon2.png";
import Box3 from "@/public/images/about/icon3.png";
import Image from "next/image";
import { LuPhone } from "react-icons/lu";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <Image
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
              width={300}
              height={300}
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>We start the engine, and your adventure begins</h2>
              <p>
                At Cars Tours & Travels, we believe that every journey is the
                start of a new adventure. With our fast, reliable, and
                customer-focused services, we ensure that your travel experience
                is seamless and memorable from the moment you hit the road. Our
                dedicated team is committed to providing top-quality car tours
                tailored to your needs, whether you’re exploring the city or
                embarking on a scenic getaway. Let us take care of the details
                so you can sit back, relax, and enjoy the ride.
              </p>

              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <Image src={Box1} alt="car-icon" width={300} height={300} />
                  <span>
                    <h4>5</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <Image src={Box2} alt="car-icon" width={300} height={300} />
                  <span>
                    <h4>2</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <Image
                    src={Box3}
                    alt="car-icon"
                    width={300}
                    height={300}
                    className="last-fk"
                  />

                  <span>
                    <h4>3</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <LuPhone />
              <h3>(988) 656-7456</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
