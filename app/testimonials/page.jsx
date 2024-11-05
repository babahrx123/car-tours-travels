// import Footer from "@/public/components/Footer";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import HeroPages from "@/components/HeroPages";
import { LuPhoneCall } from "react-icons/lu";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <LuPhoneCall />
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

export default TestimonialsPage;
