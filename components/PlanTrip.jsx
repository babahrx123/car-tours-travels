import SelectCar from "@/public/images/plan/icon1.png";
import Contact from "@/public/images/plan/icon2.png";
import Drive from "@/public/images/plan/icon3.png";
import Image from "next/image";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy car rental</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <Image
                  src={SelectCar}
                  alt="icon_img"
                  width={300}
                  height={300}
                />
                <h3>Select Car</h3>
                <p>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <Image src={Contact} alt="icon_img" width={300} height={300} />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <Image src={Drive} alt="icon_img" width={300} height={300} />
                <h3>Let&apos;s Drive</h3>
                <p>
                  Whether you&apos;re hitting the open road, we&apos;ve got you
                  covered with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
