import React from "react";
import Image from "next/image";
import CarImg2 from "@/public/cars/Maruti-Suzuki-Ciaz.jpg";
import CarImg3 from "@/public/cars/Toyota-Innova-Crysta.jpg";
import CarImg4 from "@/public/cars/Toyota-Innova.jpg";
import CarImg5 from "@/public/cars/Tempo-Traveller-Hire.jpg";

import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { LiaCarSideSolid } from "react-icons/lia";

export default function AllCars() {
  return (
    <div className="container">
      <div className="models-div">
        <div className="models-div__box">
          <div className="models-div__box__img">
            <Image src={CarImg2} alt="car_img" width={300} height={300} />
            <div className="models-div__box__descr">
              <div className="models-div__box__descr__name-price">
                <div className="models-div__box__descr__name-price__name">
                  <p>Maruti Suzuki Ciaz</p>
                  <span>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                </div>
              </div>
              <div className="models-div__box__descr__name-price__details">
                <span>
                  <LiaCarSideSolid /> &nbsp; VW
                </span>
                <span style={{ textAlign: "right" }}>
                  4/5 &nbsp; <LiaCarSideSolid />
                </span>
                <span>
                  <LiaCarSideSolid /> &nbsp; Manual
                </span>
                <span style={{ textAlign: "right" }}>
                  Diesel &nbsp; <LiaCarSideSolid />
                </span>
              </div>
              <div className="models-div__box__descr__name-price__btn">
                <Link onClick={() => window.scrollTo(0, 0)} href="/">
                  Book Ride
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="models-div__box">
          <div className="models-div__box__img">
            <Image src={CarImg3} alt="car_img" width={300} height={300} />
            <div className="models-div__box__descr">
              <div className="models-div__box__descr__name-price">
                <div className="models-div__box__descr__name-price__name">
                  <p>Toyota Innova Crysta</p>
                  <span>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                </div>
              </div>
              <div className="models-div__box__descr__name-price__details">
                <span>
                  <LiaCarSideSolid /> &nbsp; Camry
                </span>
                <span style={{ textAlign: "right" }}>
                  4/5 &nbsp; <LiaCarSideSolid />
                </span>
                <span>
                  <LiaCarSideSolid /> &nbsp; Manual
                </span>
                <span style={{ textAlign: "right" }}>
                  Diesel &nbsp; <LiaCarSideSolid />
                </span>
              </div>
              <div className="models-div__box__descr__name-price__btn">
                <Link onClick={() => window.scrollTo(0, 0)} href="/">
                  Book Ride
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="models-div__box">
          <div className="models-div__box__img">
            <Image src={CarImg4} alt="car_img" width={300} height={300} />
            <div className="models-div__box__descr">
              <div className="models-div__box__descr__name-price">
                <div className="models-div__box__descr__name-price__name">
                  <p>Toyota Innova</p>
                  <span>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                </div>
              </div>
              <div className="models-div__box__descr__name-price__details">
                <span>
                  <LiaCarSideSolid /> &nbsp; VW
                </span>
                <span style={{ textAlign: "right" }}>
                  4/5 &nbsp; <LiaCarSideSolid />
                </span>
                <span>
                  <LiaCarSideSolid /> &nbsp; Manual
                </span>
                <span style={{ textAlign: "right" }}>
                  Diesel &nbsp; <LiaCarSideSolid />
                </span>
              </div>
              <div className="models-div__box__descr__name-price__btn">
                <Link onClick={() => window.scrollTo(0, 0)} href="/">
                  Book Ride
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="models-div__box">
          <div className="models-div__box__img">
            <Image src={CarImg5} alt="car_img" width={300} height={300} />
            <div className="models-div__box__descr">
              <div className="models-div__box__descr__name-price">
                <div className="models-div__box__descr__name-price__name">
                  <p>Tempo Traveller Hire</p>
                  <span>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                </div>
              </div>
              <div className="models-div__box__descr__name-price__details">
                <span>
                  <LiaCarSideSolid /> &nbsp; Benz GLK
                </span>
                <span style={{ textAlign: "right" }}>
                  4/5 &nbsp; <LiaCarSideSolid />
                </span>
                <span>
                  <LiaCarSideSolid /> &nbsp; Manual
                </span>
                <span style={{ textAlign: "right" }}>
                  Diesel &nbsp; <LiaCarSideSolid />
                </span>
              </div>
              <div className="models-div__box__descr__name-price__btn">
                <Link onClick={() => window.scrollTo(0, 0)} href="/">
                  Book Ride
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
