import Footer from "@/components/Footer";
import HeroPages from "@/components/HeroPages";
import Person1 from "@/public/images/team/p3.png";
import Person2 from "@/public/images/team/p4.png";
import Person3 from "@/public/images/team/3.png";
import Person4 from "@/public/images/team/4.png";
import Person5 from "@/public/images/team/5.png";
import Person6 from "@/public/images/team/6.png";
import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Shanawaz S", job: "CEO & Founder" },
    // { img: Person2, name: "Jaheer", job: "Co-Founder & Director" },
    // { img: Person3, name: "Briana Ross", job: "Photographer" },
    // { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    // { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    // { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <Image
                    src={ppl.img}
                    alt="team_img"
                    width={300}
                    height={300}
                    priority
                    layout="responsive"
                  />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
            <div>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                  fontSize: "2rem",
                }}
              >
                <h1>Shanawaz S</h1>
                <h2 style={{ opacity: "0.7", paddingTop: "10px" }}>
                  CEO & Founder, Cars Tours & Travels
                </h2>
              </div>
              <div
                style={{
                  fontSize: "1.6rem",
                  textAlign: "justify",
                  opacity: "0.8",
                }}
              >
                <p style={{ paddingBottom: "10px" }}>
                  With over 14 years of dedicated experience in the car tour and
                  travel industry, Our CEO has established himself as a trusted
                  leader. As the CEO and Founder of Cars Tours & Travels, he is
                  committed to providing top-notch, fast, and reliable services
                  to clients across the region.
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  Under his leadership, Cars Tours & Travels has gained a
                  reputation for delivering exceptional travel experiences,
                  tailored to meet the needs of every customer. His attention to
                  detail, passion for excellence, and commitment to customer
                  satisfaction have resulted in outstanding feedback and a loyal
                  customer base.
                </p>
                <p>
                  We continues to drive my company forward, ensuring every
                  journey booked through Cars Tours & Travels is smooth,
                  enjoyable, and memorable.
                </p>
              </div>
              <div
                style={{
                  padding: "20px",
                  fontSize: "1.6rem",
                  textAlign: "left",
                }}
              >
                <h3 style={{ paddingBottom: "10px" }}>Contact Information</h3>
                <p>
                  <strong>Phone:</strong> (988) 656-7456
                </p>
                <p>
                  <strong>Email: </strong>
                  <a
                    href="mailto:shaanusha8611@gmail.com"
                    style={{ textDecoration: "none" }}
                  >
                    shaanusha8611@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
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

export default Team;
