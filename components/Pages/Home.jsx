import Hero from "@/components/Hero";
import BookCar from "../BookCar";
import PlanTrip from "../PlanTrip";
import PickCar from "../PickCar";
import Banner from "../Banner";
import ChooseUs from "../ChooseUs";
import Testimonials from "../Testimonials";
import Faq from "../Faq";
import Download from "../Download";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}
