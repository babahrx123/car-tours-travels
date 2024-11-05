import Img2 from "@/public/images/testimonials/pradeep.png";
import Img3 from "@/public/images/testimonials/dillibabu.png";
import Image from "next/image";
import { PiQuotesBold } from "react-icons/pi";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client&apos;s Testimonials</h2>
              <p>
                Discover the positive impact we&apos;ve made on the our clients
                by reading through their testimonials. Our clients have
                experienced our service and results, and they&apos;re eager to
                share their positive experiences with you.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <p>
                  &apos;We booked a car from this website and had an amazing
                  experience! The booking was easy and the rates were very
                  affordable. &apos;
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <Image src={Img2} alt="user_img" width={300} height={300} />
                    <span>
                      <h4>Maram Pradeep Sai</h4>
                      <p>Software Engineer ( Amadeus Labs )</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <p>
                  &apos;The car was in great condition and made our trip even
                  better. Highly recommend for this car tours and traveller
                  website!&apos;
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <Image src={Img3} alt="user_img" width={300} height={300} />
                    <span>
                      <h4>V Dilli Babu</h4>
                      <p>Software Engineer ( Tvarana )</p>
                    </span>
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

export default Testimonials;
