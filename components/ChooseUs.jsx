import MainImg from "@/public/images/chooseUs/main.png";
import Box1 from "@/public/images/chooseUs/icon1.png";
import Box2 from "@/public/images/chooseUs/icon2.png";
import Box3 from "@/public/images/chooseUs/icon3.png";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <Image
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
              width={300}
              height={300}
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                  Discover the best deals you&apos;ll ever find with our
                  unbeatable offers. We&apos;re dedicated to providing you with
                  the best value for your money, so you can enjoy top-quality
                  services and products without breaking the bank. Our deals are
                  designed to give you the ultimate renting experience, so
                  don&apos;t miss out on your chance to save big.
                </p>
                <a href="#home" className="center-align">
                  Find Details &nbsp;
                  <MdOutlineKeyboardArrowRight size={20} />
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <Image src={Box1} alt="car-img" width={300} height={300} />
                  <div className="text-container__right__box__text">
                    <h4>Cross Country Drive</h4>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  <Image src={Box2} alt="coin-img" width={300} height={300} />
                  <div className="text-container__right__box__text">
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  <Image src={Box3} alt="coin-img" width={300} height={300} />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
