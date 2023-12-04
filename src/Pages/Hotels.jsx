import React from "react";
import { Bottom } from "../components/HomePage/Bottom";
// import { Header } from "../components/HomePage/Header";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../components/BaseUrl";
import { useState } from "react";
import nohotel from "../image/nohotel.jpg";
import { Header } from "../components/HomePage/Header";

import { Form, FormGroup, Modal } from "react-bootstrap";
import thankyou from "../image/thankyou.jpg";
import modal from "../image/modalimage.avif";
import { Link } from "react-router-dom";

function Hotels() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [msgdata, setmsgdata] = useState("");
  const [countrydata, setcountrydata] = useState([]);
  const [selectcountry, setselectedcountry] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [travel, settravel] = useState("");
  const [show, setShow] = useState(false);
  const [msg, setmsg] = useState(false);
  const [destination, setdestination] = useState("");
  const [departure, setdeparture] = useState("");

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      const parsedCountry = JSON.parse(storedCountry);
      setmsgdata(parsedCountry);
    }
  }, []);

  const handleClose = () => {
    // Save the current timestamp when the modal is closed
    const closeTimestamp = new Date().getTime();
    localStorage.setItem("modalCloseTimestamp", closeTimestamp);
    setShow(false);
  };

  const handleShow = () => {
    // Check if enough time has passed since the last closure (e.g., one day in milliseconds)
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const lastCloseTimestamp = localStorage.getItem("modalCloseTimestamp");

    if (
      !lastCloseTimestamp ||
      new Date().getTime() - lastCloseTimestamp > oneDayInMillis
    ) {
      // If enough time has passed, show the modal
      setShow(true);
    } else {
      // Otherwise, do not show the modal
      setShow(false);
    }
  };

  const handleSubmit = () => {
    setmsg(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  useEffect(() => {
    handleShow();
  }, []);

  const [selected, setSelected] = useState(-1);

  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [data, setdata] = useState([]);

  const handleItemClick = (index) => {
    // Set the selected rating when an item is clicked
    setSelected(index);
  };

  const handlePriceClick = (range) => {
    // Set the selected price range when a price is clicked
    setSelectedPrice(range);
    console.log(range);
  };
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  const getdataid = () => {
    axios
      .get(`${BASEURL}/country/${selectcountry ? selectcountry : id}`, {
        headers,
      })
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      });
  };

  const allcountrydata = () => {
    axios.get(`${BASEURL}/allcountry`).then((res) => {
      // Determine the current country ID
      const currentCountryId = selectcountry ? selectcountry : id;

      // Filter out the current country from the list
      const filteredCountries = res.data.filter(
        (country) => country._id !== currentCountryId
      );

      setcountrydata(res.data.data);
    });
  };

  useEffect(() => {
    getdataid();
    allcountrydata();
  }, [selectcountry, countrydata, id]);

  const handleNextPage = (e, item, index) => {
    e.preventDefault();
    navigate(`/hotelsdetail/${item._id}/${index}`);
    localStorage.setItem("price", item.price);
  };

  // const handleItemClick = (index) => {};

  // const handlePriceClick = (range) => {};

  // const filteredHotels = data.hotels?.filter((item) =>
  //   item?.name?.toLowerCase()?.includes(searchQuery.toLowerCase())
  // );

  const filterHotels = () => {
    let filteredHotels = data.hotels;

    // Filter by rating if a rating is selected
    if (selected !== -1) {
      filteredHotels = filteredHotels.filter(
        (hotel) => hotel.rating === selected + 1
      );
    }

    if (selectedPrice !== "") {
      // Remove commas and then split
      const [minPriceStr, maxPriceStr] = selectedPrice
        .replace(/,/g, "")
        .split("-");
      const minPrice = parseFloat(minPriceStr);
      const maxPrice = parseFloat(maxPriceStr);

      console.log("minPrice:", minPrice, "maxPrice:", maxPrice);

      if (!isNaN(minPrice) && !isNaN(maxPrice)) {
        filteredHotels = filteredHotels.filter((hotel) => {
          // Remove commas from hotel.price and convert to a number
          const hotelPrice = parseFloat(hotel.price.replace(/,/g, ""));
          return (
            !isNaN(hotelPrice) &&
            hotelPrice >= minPrice &&
            hotelPrice <= maxPrice
          );
        });
      } else {
        console.error("Invalid price range:", selectedPrice);
      }
    }

    // Filter by search query
    if (searchQuery !== "") {
      filteredHotels = filteredHotels.filter((hotel) =>
        hotel?.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredHotels;
  };

  const handleClearFilters = (e) => {
    e.preventDefault();
    // Reset selected rating and price
    setSelected(-1);
    setSelectedPrice("");
  };

  let checkmsg = localStorage.getItem("selectedCountry");

  // const hotelList = searchQuery ? filteredHotels : data.hotels;

  const imageData = [
    {
      id: 1,
      image:
        "https://unsplash.com/photos/a-man-and-a-woman-sitting-on-the-sand-L0X2F4RzMa0",
      name: "Destination 1",
    },
    {
      id: 2,
      image:
        "https://unsplash.com/photos/a-man-and-a-woman-sitting-on-the-sand-L0X2F4RzMa0",
      name: "Destination 2",
    },
    {
      id: 3,
      image:
        "https://unsplash.com/photos/a-man-and-a-woman-sitting-on-the-sand-L0X2F4RzMa0",
      name: "Destination 3",
    },
    // Add more image data as needed
  ];

  const imageUrls = [
    "https://images.unsplash.com/photo-1439209306665-700c9bca794c?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
    "https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=compress,format&fit=crop&w=1199&h=871&q=80&cs=tinysrgb&crop=",
    "https://images.unsplash.com/photo-1488572384981-eac03dfeb6b9?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
    "https://images.unsplash.com/photo-1470091688026-38b51162c8df?dpr=1&auto=compress,format&fit=crop&w=1199&h=750&q=80&cs=tinysrgb&crop=",
  ];

  const handleModalsubmit = () => {
    let requestdata = {
      name: name,
      phone: phone,
      email: email,
      travel: travel,
      comes: "Holidday Package",
      destination: msgdata.label,
      departure: departure,
    };
    axios.post(`${BASEURL}/bookings`, requestdata, { headers }).then((res) => {
      if (res.data != null) {
        setmsg(true);
      }
    });

    setTimeout(() => {
      navigate(`/`);
    }, 2000);
  };

  return (
    <>
      <Header />
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="banner">
                <img
                  src={data.image ? `${BASEURL}/${data.image}` : ""}
                  className="img-fluid"
                  alt=""
                />
                <div className="herotext">
                  <h4 className="text-white">{data && data.name}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div class="container-fluid">
          <div class="gallery">
            {data?.images?.map((item, index) => {
              return (
                <>
                  <figure
                    class={`gallery__item gallery__item--${index + 1} mb-0`}
                  >
                    <img
                      src={`${BASEURL}/${item}`}
                      alt="Gallery image 1"
                      class="gallery__img"
                    />
                  </figure>
                </>
              );
            })}
          </div>
        </div>
      </section> */}

      <section className="space overflowsection section-scrollbar ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="bg-white shadow  "
                style={{ borderRadius: "10px 10px 0 0px" }}
              >
                <div className="row  p-0" style={{ background: "#E0F4FF" }}>
                  <div className="col-md-3 p-0">
                    <div
                      className="d-flex align-items-center justify-content-between w-100"
                      style={{ borderRight: "1px solid #d8d8d8" }}
                    >
                      <div className="p-2 fw-bold">
                        <h3>Filters</h3>
                      </div>
                      <button
                        className="btn bg-white shadow text-dark rounded-pill me-1"
                        onClick={(e) => handleClearFilters(e)}
                        style={{ fontSize: "12px", zIndex: "10" }}
                      >
                        Clear All filters
                      </button>
                    </div>
                  </div>
                  <div className="col-md-9 ">
                    <div className="d-flex align-items-center gap-5  custom-scrollbar  justify-content-end">
                      {/* <h6
                        className="text-center"
                        style={{
                          height: "60px",
                          lineHeight: "60px",
                          margin: "0",
                          padding: "0",
                          background: "#0a223d",
                          color: "white",
                          padding: "0 30px",
                        }}
                      >
                        {data.name}
                      </h6> */}
                      {/* {countrydata.map((item) => {
                        return (
                          <>
                            <div
                              className=""
                              onClick={(e) => setselectedcountry(item._id)}
                            >
                              <h6
                                style={{ textTransform: "capitalize" }}
                                className="text-green"
                              >
                                {item.name}
                              </h6>
                            </div>
                          </>
                        );
                      })} */}
                      <div className="input-group w-50 rounded-4 gap-2 bg-white shadow align-items-center mt-2 mb-3">
                        <span>
                          <i className="fa-solid fa-magnifying-glass ms-2"></i>
                        </span>
                        <input
                          type="search"
                          className="form-control border-0 shadow-none rounded-4"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-0">
              <div className="bg-white shadow h-100">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button shadow-none border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Hotel Category
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body ">
                        <div className="d-flex align-items-center gap-3 flex-wrap">
                          {/* {[1, 2, 3, 4, 5].map((item, index) => {
                            return (
                              <>
                                <div
                                  className=" p-1 rounded-1 text-white"
                                  style={{
                                    fontSize: "14px",
                                    background: "#01e08f",
                                  }}
                                >
                                  {item} <i class="fa-solid fa-star"></i>
                                </div>
                              </>
                            );
                          })}
                            <div> */}
                          {[1, 2, 3, 4, 5].map((item, index) => (
                            <div
                              key={index}
                              className={`p-1 rounded-1 text-white bg-green ${
                                selected === index ? "selected-item" : ""
                              }`}
                              style={{
                                fontSize: "14px",
                                cursor: "pointer",
                              }}
                              onClick={() => handleItemClick(index)}
                            >
                              {item} <i className="fa-solid fa-star"></i>
                            </div>
                          ))}
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed shadow-none border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Budget
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="d-flex align-items-center gap-3 flex-wrap">
                          {[
                            "0 - 10,000",
                            "10,000-25000",
                            "25,000 - 35,000",
                            "35,000-45,000",
                            "45,000 - 1,00,000",
                            "1,00,000 - 5,00,000" /* Add more price ranges as needed */,
                          ].map((range, index) => (
                            <div
                              key={index}
                              className={`p-2 rounded-3 text-white bg-green ${
                                selectedPrice === range ? "selected-item" : ""
                              }`}
                              style={{
                                fontSize: "14px",
                                cursor: "pointer",
                              }}
                              onClick={() => handlePriceClick(range)}
                            >
                              {range}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div
                className="row p-3 custom-scrollbar"
                style={{ height: "500px" }}
              >
                {filterHotels() && filterHotels().length > 0 ? (
                  filterHotels().map((item, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="card">
                        <div className="main m-0">
                          <img
                            src={
                              item.image
                                ? `${BASEURL}/${item.image}`
                                : `https://images.unsplash.com/photo-1518982074995-47ce824cea56?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80`
                            }
                            loading="lazy"
                            className="card-img-top img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="card-body">
                          <h4>{item.name}</h4>
                          <div className="d-flex align-items-center justify-content-between bottom mb-0">
                            <p className="text-secondary">
                              <i className="fa-solid fa-location-dot"></i>{" "}
                              {data.name}
                            </p>
                            <p className="pe-2 text-secondary">
                              <i className="fa-solid fa-clock"></i>{" "}
                              {item.night_stay} Days or {item.night_stay - 1}{" "}
                              Nights
                            </p>
                          </div>
                          <ul class="tripListWrapper">
                            {item.dining.map((dining) => {
                              return (
                                <>
                                  <li>{dining.name}</li>
                                </>
                              );
                            })}
                          </ul>
                          <ul
                            style={{ listStyle: "none" }}
                            className="p-0 hotelabout d-flex align-items-center flex-wrap"
                          >
                            {item.hotelabout.map((dining) => {
                              return (
                                <>
                                  <li className="w-50">
                                    <span>
                                      <i class="fa-solid fa-check"></i>
                                    </span>{" "}
                                    {dining.name}
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                          <div className="mt-2 cardbtnbook">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="m-0">From</h6>
                              <p
                                className="bg-green p-2 rounded-3 text-white mb-0 me-2"
                                style={{ fontSize: "12px" }}
                              >
                                {item.rating}{" "}
                                {/* <i className="fa-solid fa-star"></i> */}
                                Rating
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <h5 className="text-grad fs-5 mb-0 mt-0">
                                INR {item.price}
                              </h5>
                              <button
                                className="btn text-dark"
                                onClick={(e) => handleNextPage(e, item, index)}
                              >
                                Explore Now{" "}
                                <i
                                  className="fa-solid fa-arrow-right text-grad "
                                  style={{ fontSize: "14px" }}
                                ></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center">
                    <img
                      src={nohotel}
                      className="img-fluid"
                      style={{ width: "50%", mixBlendMode: "darken" }}
                      alt=""
                    />
                    <div className="text-center">
                      <h5>No Hotels Found</h5>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        show={show}
        size="md"
        onHide={handleClose}
        className="hotelmodel"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="border-bottom-0 p-0">
          {/* <Modal.Title>Check</Modal.Title> */}
        </Modal.Header>

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
            <Form onSubmit={(e) => handleModalsubmit(e)}>
              <div className="row p-3">
                <div className="col-md-12">
                  <div className="text-center mb-3">
                    <h3 style={{ fontSize: "24px" }}>
                      Search for Travelling in {msgdata.label} ?
                    </h3>
                    <p style={{ fontSize: "16px" }}>
                      Please share your details to get the best customized
                      offer.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <label htmlFor="">Destination</label>
                    <input
                      type="text"
                      value={msgdata.label}
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
                      value={departure}
                      required
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
                      type="number"
                      required
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

                <div className="col-md-12">
                  <button className="btn bg-blue w-100 text-white mt-3">
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
      <Bottom />
    </>
  );
}

export default Hotels;
