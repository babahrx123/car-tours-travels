"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoClose, IoMailOutline } from "react-icons/io5";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IoClose />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <Image
                src="/images/logo/logo.png"
                alt="logo-img"
                style={{ cursor: "pointer", width: "210px", height: "auto" }}
                width={145}
                height={61}
              />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="about-link" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="models-link" href="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link className="testi-link" href="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="team-link" href="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="contact-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <div>
              <a
                href="mailto:shaanusha8611@gmail.com"
                className="center-align"
                style={{ color: "#000" }}
                title="Send an email to shaanusha8611@gmail.com"
              >
                <IoMailOutline style={{ color: "#ff4d30", fontSize: "22px" }} />
                &nbsp; shaanusha8611@gmail.com
              </a>
            </div>
            <div>
              <a
                href="tel:9886567456"
                className="center-align"
                title="Call 9886567456"
              >
                <FiPhoneCall
                  className="shake-animate"
                  style={{ color: "#ff4d30" }}
                />
              </a>
            </div>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <FaBars />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
