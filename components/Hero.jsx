"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { LuPhone } from "react-icons/lu";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <Image
            src="/images/hero/hero-bg.png"
            alt="bg-shape"
            width={800}
            height={500}
            className="bg-shape"
          />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span>big</span> on your next adventure
              </h1>
              <p>
                Explore the world with unbeatable prices, unlimited
                destinations, flexible itineraries, and much more.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  href="/"
                >
                  Book Ride &nbsp; <SiTicktick />
                </Link>
                <Link className="hero-content__text__btns__learn-more" href="/">
                  Learn More &nbsp; <IoIosArrowForward />
                </Link>
              </div>
            </div>

            <Image
              src="/images/hero/main-car-crysta.png"
              alt="car-img"
              width={700}
              height={420}
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <IoIosArrowUp />
        </div>
      </section>
    </>
  );
}

export default Hero;
