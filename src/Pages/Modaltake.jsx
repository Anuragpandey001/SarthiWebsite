import React from "react";
import { Header } from "../components/HomePage/Header";
import { useState } from "react";
import { Form, FormGroup, Modal } from "react-bootstrap";
import thankyou from "../image/thankyou.jpg";
import { useNavigate } from "react-router";
import axios from "axios";
import { BASEURL } from "../components/BaseUrl";
import modal from "../image/modalimage.avif";
import { Link } from "react-router-dom";

function Modaltake() {
  const [show, setShow] = useState(true);
  const [msg, setmsg] = useState(false);
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [travel, settravel] = useState("");
  const [destination, setdestination] = useState("");
  const [departure, setdeparture] = useState("");

  const headers = {
    "Content-Type": "application/json",
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let comes = localStorage.getItem("comes");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let requestdata = {
      name: name,
      phone: phone,
      email: email,
      travel: travel,
      comes: comes,
      destination: destination,
      departure: departure,
    };
    axios.post(`${BASEURL}/bookings`, requestdata, { headers }).then((res) => {
      if (res.data != null) {
        setmsg(true);
        setTimeout(() => {
          navigate(`/`);
        }, 2000);
      }
    });
  };

  const [inputType, setInputType] = useState("text");

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };

  return (
    <>
      <Header />
      <Modal
        show={show}
        size="md"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Check</Modal.Title>
        </Modal.Header> */}

        <Modal.Body className="p-0">
          <div className="">
            <img
              src={modal}
              className="img-fluid w-100"
              alt=""
              style={{ height: "180px", objectFit: "cover" }}
            />
          </div>
          {!msg ? (
            <Form onSubmit={handleSubmit}>
              <div className="row p-3">
                <div className="col-md-12"></div>
                <div className="col-md-12">
                  <div className="text-center mb-3">
                    <h3>Searching for Travelling ?</h3>
                    <p>
                      Please share your details to get the best customized
                      offer.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <label htmlFor="">
                      Destination <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={destination}
                      onChange={(e) => setdestination(e.target.value)}
                      className="form-control"
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <label htmlFor="">
                      Departure City <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={departure}
                      onChange={(e) => setdeparture(e.target.value)}
                      className="form-control"
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <label htmlFor="">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      className="form-control"
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <label htmlFor="">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      required
                      type="number"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                      className="form-control"
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <label htmlFor="">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      className="form-control"
                    />
                  </FormGroup>
                </div>
                {/* <div className="col-md-6">
                  <FormGroup>
                    <label htmlFor="">Date of Travel</label>
                    <input
                      type="date"
                      value={travel}
                      onChange={(e) => settravel(e.target.value)}
                      className="form-control"
                    />
                  </FormGroup>
                </div> */}
                <p style={{ fontSize: "14px" }}>
                  <input type="checkbox" className="mt-3 me-1" />I have read and
                  agree to the{" "}
                  <Link
                    to="/privacy"
                    className=" fw-bold"
                    style={{ color: "#58d6d9" }}
                  >
                    Privacy Policy
                  </Link>
                </p>
                <p className="text-secondary " style={{ fontSize: "14px" }}>
                  350+ Travel Experts | 20 Lac+ Travelers | 45+ Destinations
                </p>

                <div className="col-md-12">
                  <button className="btn bg-blue w-100 text-white mt-3 ">
                    Get a Callback
                  </button>
                </div>
              </div>
            </Form>
          ) : (
            <div className="text-center">
              <img
                src={thankyou}
                className="img-fluid"
                style={{ width: "300px" }}
                alt=""
              />
              <p>
                Thank you for submitting your travel details. Our team will
                review your information and contact you shortly. Safe travels!"
              </p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modaltake;
