// import Navbar from "@/components/Navbar";
import Head from "next/head";
import Home from "../components/Pages/Home";

export default function App() {
  return (
    <>
      <Head>
        <title>Car Tours and Travel - Fast and Easy Booking</title>
        <meta
          name="description"
          content="Explore the world with our car tours and travel services. Fast and easy booking, unbeatable prices, and flexible itineraries."
        />
        <meta
          name="keywords"
          content="car tours, travel, car rental, fast booking, easy booking, travel services, car travel, tours and travel"
        />
        <meta name="author" content="Car Tours and Travel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Home />
    </>
  );
}
