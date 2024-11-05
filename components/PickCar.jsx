"use client";
import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";
import Models from "./Pages/Models";
import AllCars from "./AllCars";

function PickCar() {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our Tour Fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles for your next
                adventure or travel experience. Whether you&apos;re planning a
                family vacation or an exciting tour, we have the perfect vehicle
                to make your journey unforgettable.
              </p>
            </div>
            <div style={{ marginTop: "-80px", marginBottom: "-100px" }}>
              <AllCars />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
