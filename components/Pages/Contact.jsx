import { useState } from "react";
import { FiPhone, FiPhoneCall } from "react-icons/fi";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { BsEnvelopeOpen } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Contact() {
  // State to store form data and message
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [submittedMessage, setSubmittedMessage] = useState("");

  const sendSms = async () => {
    // const response = await fetch("/api/booktrip", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     message: `Contact Infromation: \nName: ${formData.fullName} \nEmail: ${formData.email} \nMessage: ${formData.message}`
    //   }),
    // });
    // const data = await response.json();

    const message = `Contact Infromation: \nName: ${formData.fullName} \nEmail: ${formData.email} \nMessage: ${formData.message}`;
    console.log(message);

    // if (response.ok) {
    //   console.log("Message sent successfully!", data);
    // } else {
    //   console.error("An error occurred", data);
    // }

    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    sendSms();

    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <p className="booking-done">
              Your data has been received. You will receive a response Email or
              Call shortly.
              <IoClose onClick={hideMessage} />
            </p>

            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development, as well as a learning specialist. Over 14
                years of experience.
              </p>
              <a href="tel:9886567456">
                <FiPhone />
                &nbsp; (988) 656-7456
              </a>
              <a href="mailto:shaanusha8611@gmail.com">
                <BsEnvelopeOpen />
                &nbsp; shaanusha8611@gmail.com
              </a>
              <a href="/">
                <FaLocationDot />
                &nbsp; India
              </a>
            </div>
            <div className="contact-div__form">
              <form onSubmit={handleSubmit}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder='E.g: "Joe Shmoe"'
                  required
                />

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@example.com"
                  required
                />

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Here.."
                  required
                ></textarea>

                <button type="submit">
                  <BsEnvelopeOpen />
                  Message
                </button>
              </form>

              {/* Display the submitted message */}
              {submittedMessage && (
                <div className="submitted-message">
                  <h3>Submitted Message:</h3>
                  <p>{submittedMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <FiPhoneCall />
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

export default Contact;
