import { Bottomcss } from "./Bottomcss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Cards from "../Cards";
import Testimonial from "../Testimonial";
import { Link, useParams } from "react-router-dom";

import Iframe from "react-iframe";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

import logo from "../../image/logo.png";
import axios from "axios";
import { BASEURL } from "../BaseUrl";

export const Bottom = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [videoshow, setVideoShow] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [data, setData] = useState([]);
  const { id } = useParams();

  const handleVideoClose = () => {
    setCurrentVideo("");
    setVideoShow(false);
  };

  const handleCountry = () => {
    axios.get(`${BASEURL}/country/${id}`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    handleCountry();
  }, []);

  const handleVideoShow = (url) => {
    setCurrentVideo(url);
    setVideoShow(true);
  };

  const toggleExpansion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  return (
    <Bottomcss>
      {/* <div className="div3">
        <div>
          <h3>Why Trip?</h3>
          <p>
            Established in 2000, Trip has since positioned itself as one of the
            leading companies, providing great offers, competitive airfares,
            exclusive discounts, and a seamless online booking experience to
            many of its customers. The experience of booking your flight
            tickets, hotel stay, and holiday package through our desktop site or
            mobile app can be done with complete ease and no hassles at all. We
            also deliver amazing offers, such as Instant Discounts, Fare
            Calendar, MyRewardsProgram, MyWallet, and many more while updating
            them from time to time to better suit our customers’ evolving needs
            and demands.
          </p>
        </div>
        <div>
          <h3>Booking Flights with Trip</h3>
          <p>
            At Trip, you can find the best of deals and cheap air tickets to any
            place you want by booking your tickets on our website or app. Being
            India’s leading website for hotel, flight, and holiday bookings,
            Trip helps you book flight tickets that are affordable and
            customized to your convenience. With customer satisfaction being our
            ultimate goal, we also have a 24/7 dedicated helpline to cater to
            our customer’s queries and concerns. Serving over 5 million happy
            customers, we at Trip are glad to fulfill the dreams of folks who
            need a quick and easy means to find air tickets. You can get a hold
            of the cheapest flight of your choice today while also enjoying the
            other available options for your travel needs with us.
          </p>
        </div>
        <div>
          <h3>Domestic Flights with Trip</h3>
          <p>
            Trip is India's leading player for flight bookings, and have a
            dominant position in the domestic flights sector. With the cheapest
            fare guarantee, experience great value at the lowest price. Instant
            notifications ensure current flight status, instant fare drops,
            amazing discounts, instant refunds and rebook options, price
            comparisons and many more interesting features.
          </p>
        </div>

      </div> */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row mb-3">
                {data && data.length > 0 && (
                  <div class="col-md-12">
                    <h3 class="text-center title my-5">Video</h3>
                  </div>
                )}
                {data?.videos?.map((item, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className="w-100 h-100 blog p-0 shadow rounded-4 overflow-hidden position-relative">
                      <div className="w-100">
                        <figure className="w-100 mb-0">
                          <div
                            className="w-100 h-100 position-relative"
                            id="startUp"
                          >
                            <Iframe
                              className="w-100 rounded-4 shadow videoIframe"
                              src={`${item}?ecver=1&iv_load_policy=3&controls=0&rel=0&showinfo=0&yt:stretch=16:9&autohide=1&color=red&width=560&width=560`}
                              styles={{ height: "300px" }}
                              frameBorder="0"
                            />
                          </div>
                        </figure>
                        <div className="w-100 blogDesc p-3">
                          <div className="w-100 p-2">
                            <button
                              data-url={`${item}?ecver=1&iv_load_policy=3&controls=0&rel=0&showinfo=0&yt:stretch=16:9&autohide=1&color=red&width=560&width=560`}
                              className="btn w-100 bg-blue text-white rounded-pill"
                              onClick={() => handleVideoShow(item)}
                            >
                              Watch Video
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space">
        <div className="container">
          <div className="row">
            <Testimonial />
          </div>
        </div>
      </section>
      <section class="footer bg-footer space">
        <div class="footer-top">
          <div class="container-fluid">
            <div class="row p-4 justify-content-center">
              <div class="col-md-4">
                <div class="footer-widget">
                  <div class="footer-logo p-0">
                    <img src={logo} className="img-fluid rounded-3" alt="" />
                  </div>
                  <div class="footer-content mt-4">
                    <p>
                      Online to make your journey even more memorable access or
                      meet.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="footer-widget justify-content-center">
                  <div class="fw-title  ">
                    <h6 class="title">Explore</h6>
                  </div>
                  <div class="fw-link ">
                    <ul class="p-0  align-items-center  ">
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>

                      <li>
                        <Link to={"/blog"}>Blogs</Link>
                      </li>
                      {/* <li>
                        <a href="./contact.php">Contact Us</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="footer-widget privacy">
                  <div class="fw-title">
                    <h6 class="title">Privacy</h6>
                  </div>
                  <div class="fw-link">
                    <ul class="p-0">
                      <li>
                        <Link to={"/privacy"}>PRIVACY POLICY </Link>
                      </li>
                      {/* <li>
                        <a href="/terms">TERMS OF USE</a>
                      </li>
                      <li>
                        <a href="/about">ABOUT US</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="footer-widget">
                  <div class="fw-title">
                    <h6 class="title">Contacts</h6>
                  </div>
                  <div className="">
                    <p className="text-white " style={{ fontSize: "16px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius sapiente praesentium ut in hic corporis dolorum,
                      veritatis nemo iste perferendis.
                    </p>
                  </div>
                  {/* <ul className="m-0 p-0">
                    <li>
                      <a href="">
                        <span className="me-3">
                          <i class="fa-solid fa-phone"></i>
                        </span>
                        34834934834
                      </a>
                    </li>
                  </ul> */}
                  <ul className="m-0 p-0 d-flex align-items-center ms-1 mt-2 gap-3 socialicons">
                    <li>
                      <a href="">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="">
                        <i class="fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        size="lg"
        show={videoshow}
        className="productVideo"
        onHide={handleVideoClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="p-0 border-0"></Modal.Header>
        <Modal.Body>
          <Iframe
            url={currentVideo}
            className="iframe"
            display="block"
            position="relative"
            allow="fullscreen"
            allowFullScreen
          />
        </Modal.Body>
      </Modal>
    </Bottomcss>
  );
};
