import Image from "next/image";
import Footer from "@/components/Footer";
import HeroPages from "@/components/HeroPages";
import PlanTrip from "@/components/PlanTrip";
import AboutMain from "@/public/images/about/about-main.jpg";
import Box1 from "@/public/images/about/icon1.png";
import Box2 from "@/public/images/about/icon2.png";
import Box3 from "@/public/images/about/icon3.png";
import { FiPhoneCall } from "react-icons/fi";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            {/* <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            /> */}
            <Image
              src={AboutMain}
              alt="car-renting"
              width={600}
              height={400}
              className="about-main__img"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  {/* <img src={Box1} alt="car-icon" /> */}
                  <Image src={Box1} alt="car-icon" width={50} height={30} />
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  {/* <img src={Box2} alt="car-icon" /> */}
                  <Image src={Box2} alt="car-icon" width={50} height={50} />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  {/* <img src={Box3} alt="car-icon" className="last-fk" /> */}
                  <Image
                    src={Box3}
                    alt="car-icon"
                    width={50}
                    height={50}
                    className="last-fk"
                  />
                  <span>
                    <h4>75</h4>
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
              <FiPhoneCall />
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
