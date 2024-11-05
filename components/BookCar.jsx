"use client";
import { useEffect, useState } from "react";
// import CarAudi from "../../public/images/cars-big/audia1.jpg";
import CarAudi from "../public/images/cars-big/audia1.jpg";
import CarGolf from "../public/images/cars-big/golf6.jpg";
import CarToyota from "../public/images/cars-big/toyotacamry.jpg";
import CarBmw from "../public/images/cars-big/bmw320.jpg";
import CarMercedes from "../public/images/cars-big/benz.jpg";
import CarPassat from "../public/images/cars-big/passatcc.jpg";
import {
  IoCalendarNumberOutline,
  IoClose,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { LiaCarSideSolid } from "react-icons/lia";
import { FaL, FaLocationDot, FaPhone, FaUser } from "react-icons/fa6";
import GetCurrentLocation from "./GetCurrentLocation";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";

function BookCar() {
  const [err, setErr] = useState("All fields required!");
  const [state, setState] = useState({
    customerName: "",
    pickupLocation: "",
    dropoffLocation: "",
    contactNumber: "",
    pickupTime: "",
    GetCurrentLocation: "",
    carName: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  const hideErrMessage = () => {
    const errMessage = document.querySelector(".error-message");
    errMessage.style.display = "none";
  };

  const handleOnFormData = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");

    if (state.pickupLocation === "") {
      setErr("Pick-up location is required");
      errorMsg.style.display = "flex";
    } else if (state.dropoffLocation === "") {
      setErr("Drop-off location is required");
      errorMsg.style.display = "flex";
    } else if (state.contactNumber === "") {
      setErr("Contact number is required");
      errorMsg.style.display = "flex";
    } else if (!/^\d{10}$/.test(state.contactNumber)) {
      setErr("Contact number must be exactly 10 digits and numeric");
      errorMsg.style.display = "flex";
    } else if (state.pickupTime === "") {
      setErr("Pick-up time is required");
      errorMsg.style.display = "flex";
    } else {
      console.log(state);
      hideErrMessage();
      setIsModalOpen(true);
    }
  };

  const sendSms = async () => {
    const response = await fetch("/api/booktrip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `New booking details: \nCustomer Name: ${state.customerName}, \nPickup Location: ${state.pickupLocation}, \nDrop-off Location: ${state.dropoffLocation}, \nContact Number: ${state.contactNumber}, \nPickup Time: ${state.pickupTime}, \nCurrent Location: ${state.GetCurrentLocation}, \nCar Name: ${state.carName}`,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Message sent successfully!", data);
      const successMsg = document.querySelector(".booking-done");
      successMsg.style.display = "flex";
    } else {
      // console.error("An error occurred", data);
      const errorMsg = document.querySelector(".error-message");
      errorMsg.style.display = "flex";
      setErr("An error occurred. Please try again later.");
    }
  };

  const handleOnConfirmBooking = () => {
    sendSms();
    setIsModalOpen(false);
    setState({
      customerName: "",
      pickupLocation: "",
      dropoffLocation: "",
      contactNumber: "",
      pickupTime: "",
      GetCurrentLocation: "",
    });
  };

  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <section id="booking-section" className="book-section">
        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                {err}
                <IoClose onClick={hideErrMessage} />
              </p>

              <p className="booking-done">
                Your booking has been received. You will receive a confirmation
                SMS or Call shortly.
                <IoClose onClick={hideMessage} />
              </p>

              <form className="box-form" onSubmit={handleOnFormData}>
                <div className="box-form__car-type">
                  <label>
                    <FaUser />
                    &nbsp; Name <b>* optional</b>
                  </label>
                  <input
                    className="box-form-input"
                    type="text"
                    value={state.customerName}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        customerName: event.target.value,
                      }))
                    }
                    placeholder="Enter your name"
                  />
                </div>
                <div className="box-form__car-type">
                  <label>
                    <FaLocationDot />
                    &nbsp; Pick-up Location{" "}
                    <b>* Or Click on GetCurrentLocation</b>
                  </label>
                  <input
                    className="box-form-input"
                    type="text"
                    value={state.pickupLocation}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        pickupLocation: event.target.value,
                      }))
                    }
                    required
                    placeholder="Enter pick up location"
                  />
                </div>
                <GetCurrentLocation setState={setState} />
                <div className="box-form__car-type">
                  <label>
                    <FaLocationDot />
                    &nbsp; Drop-off Location <b>*</b>
                  </label>
                  <input
                    className="box-form-input"
                    type="text"
                    value={state.dropoffLocation}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        dropoffLocation: event.target.value,
                      }))
                    }
                    required
                    placeholder="Enter drop off location"
                  />
                </div>
                <div className="box-form__car-type">
                  <label>
                    <FaPhone />
                    &nbsp; Contact Number <b>* 9886567456</b>
                  </label>
                  <input
                    className="box-form-input"
                    type="number"
                    value={state.contactNumber}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        contactNumber: event.target.value,
                      }))
                    }
                    required
                    placeholder="Enter your valid contact number"
                  />
                </div>

                <div className="box-form__car-type">
                  <label>
                    <FaLocationDot />
                    &nbsp; Pick-up Time<b> * (9th March 2023 - 9AM)</b>
                  </label>
                  <input
                    className="box-form-input"
                    type="text"
                    value={state.pickupTime}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        pickupTime: event.target.value,
                      }))
                    }
                    required
                    placeholder="Enter pickup date & time"
                  />
                </div>

                {/* create a dropdown select where it ll show the number of 4 cars */}
                <div className="box-form__car-type">
                  <label>
                    <LiaCarSideSolid />
                    &nbsp; Car Type <b> * optional</b>
                  </label>
                  <select
                    className="box-form-input"
                    value={state.carName}
                    onChange={(event) =>
                      setState((prev) => ({
                        ...prev,
                        carName: event.target.value,
                      }))
                    }
                    required
                  >
                    <option value="">Select Car</option>
                    <option value="Maruti Suzuki Ciaz">
                      Maruti Suzuki Ciaz
                    </option>
                    <option value="Toyota Innova Crysta">
                      Toyota Innova Crysta
                    </option>
                    <option value="Toyota Innova">Toyota Innova</option>
                    <option value="Tempo Traveller Hire">
                      Tempo Traveller Hire
                    </option>
                  </select>
                </div>

                {/* <button onClick={openModal} type="submit">
                  Confirm Booking
                </button> */}
                <button type="submit">Confirm Booking</button>
              </form>
            </div>
          </div>
        </div>

        <Dialog
          open={isModalOpen}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                borderRadius: "10px",
              },
            },
          }}
        >
          <DialogTitle
            sx={{
              background: "#ff4d30",
              color: "#fff",
              fontWeight: "bold",
              height: "60px",
              display: "flex",
              alignItems: "center",
              fontSize: "2.2rem",
            }}
          >
            Confirm Your Details
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              fontSize: "24px",
              color: (theme) => theme.palette.background.default,
            }}
          >
            <IoClose />
          </IconButton>
          <DialogContent sx={{ mt: 1 }}>
            <Box>
              <Typography sx={{ mt: 2, fontSize: "1.7rem" }}>
                <strong>Your Name:</strong> {state.customerName}
              </Typography>
              <Typography sx={{ mt: 2, fontSize: "1.7rem" }}>
                <strong>Pick Up Location:</strong> {state.pickupLocation}
              </Typography>
              <Typography sx={{ mt: 2, fontSize: "1.7rem" }}>
                <strong>Drop Off Location:</strong> {state.dropoffLocation}
              </Typography>
              <Typography sx={{ mt: 2, fontSize: "1.7rem" }}>
                <strong>Contact Number:</strong> {state.contactNumber}
              </Typography>
              <Typography sx={{ mt: 2, fontSize: "1.7rem" }}>
                <strong>Pick Up Time:</strong> {state.pickupTime}
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                color: "#fff",
                fontSize: "1.8rem",
                background: "#010103",
                padding: "1rem 3rem",
                borderRadius: "0.3rem",
                border: "2px solid #010103",
                transition: "all 0.3s",
                borderRadius: "10px !important",
                textTransform: "none",
                fontWeight: "500",
                "&:hover": {
                  background: "transparent",
                  color: "#010103",
                },
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              sx={{
                color: "#fff",
                fontSize: "1.8rem",
                background: "#ff4d30",
                padding: "1rem 3rem",
                borderRadius: "0.3rem",
                boxShadow: "0 10px 15px 0 rgba(255, 83, 48, 0.35)",
                transition: "all 0.3s",
                border: "2px solid #ff4d30",
                borderRadius: "10px !important",
                textTransform: "none",
                fontWeight: "500",
                "&:hover": {
                  boxShadow: "0 10px 15px 0 rgba(255, 83, 48, 0.6)",
                  background: "#fa4226",
                },
              }}
              onClick={handleOnConfirmBooking}
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    </>
  );
}

export default BookCar;
