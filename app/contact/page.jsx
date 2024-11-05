import Footer from "@/components/Footer";
import HeroPages from "@/components/HeroPages";
import { LuPhone } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>About Us - Car Tours and Travel</title>
        <meta
          name="description"
          content="Learn more about Car Tours and Travel. We offer unbeatable prices, unlimited destinations, flexible itineraries, and much more."
        />
        <meta
          name="keywords"
          content="car tours, travel, car rental, about us, travel services, car travel, tours and travel"
        />
        <meta name="author" content="Car Tours and Travel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <div className="contact-info">
                <a href="/">
                  <LuPhone />
                  (988) 656-7456
                </a>
                <a href="/">
                  <FaRegEnvelope />
                  shaanusha8611@gmail.com
                </a>
                <a href="/">
                  <CiLocationArrow1 />
                  India
                </a>
              </div>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>* </b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit" className="centered-button">
                  <IoMailOpenOutline />
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
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
      </section>
    </>
  );
}

export default Contact;
