import React from "react";
import Slider from "react-slick";
import ac from "../image/air-conditioner.png";
import cable from "../image/cable-tv.png";
import wifi from "../image/wifi.png";
import slipper from "../image/flip-flops.png";
import hairdryer from "../image/hairdryer.png";
import shampoo from "../image/shampoo.png";
import coffee from "../image/coffee-machine.png";
import safebox from "../image/safe-box.png";
import drink from "../image/welcome-drink.png";
import pet from "../image/pet.png";
import ref from "../image/refrigrator.png";
import towel from "../image/towel.png";
import { Bottom } from "../components/HomePage/Bottom";
import { Header } from "../components/HomePage/Header";
import { useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../components/BaseUrl";
import { useParams } from "react-router";
import { useState } from "react";
import Loader from "./Loader";

function Hoteldetail() {
  const { id, unique } = useParams();
  const [data, setdata] = useState([]);
  const [open, setopen] = useState(false);
  const [msgdata, setmsg] = useState(false);

  const [hotel, sethotel] = useState([]);
  const [coupondata, setcoupondata] = useState([]);
  const price = localStorage.getItem("price");
  const [activeIndex, setActiveIndex] = useState(0);
  const [checkin, setcheckin] = useState("");
  const [checkout, setcheckout] = useState("");
  const [localroom, setlocalroom] = useState("");
  const [localguest, setlocalguest] = useState("");
  const [phone, setphone] = useState("");

  const [email, setemail] = useState("");

  const [discountedPrice, setDiscountedPrice] = useState(null);

  // const handleBoxClick = (index) => {
  //   setActiveIndex(index);

  // };
  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);

  const amenities = [
    { name: "Air conditioner", image: ac },
    { name: "Cable TV", image: cable },
    { name: "Wifi & Internet", image: wifi },
    { name: "Towels", image: towel },
    { name: "Slippers", image: slipper },
    { name: "Hair Dryer", image: hairdryer },
    { name: "Shampoo", image: shampoo },
    { name: "Espresso Machine", image: coffee },
    { name: "Safe Box", image: safebox },
    { name: "Welcome Drinks", image: drink },
    { name: "Pet Friendly", image: pet },
    { name: "In-room Refrigerator", image: ref },
  ];
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true, // Center the items
    speed: 500,
    slidesToShow: 3, // Number of amenities to show per slide
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Set the autoplay speed in milliseconds

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust the number of amenities to show on smaller screens
        },
      },
    ],
  };

  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      const parsedCountry = JSON.parse(storedCountry);
      setmsg(parsedCountry);
    }
  }, []);

  const getdataid = () => {
    axios.get(`${BASEURL}/allhotelsdetail`, { headers }).then((res) => {
      console.log(res.data);

      // Assuming you have a specific ID you want to filter by

      // Filter the data based on the ID
      const filteredData = res.data.filter((item) => item.hotels == id);

      // Set the filtered data using setdata
      setdata(filteredData);
      console.log("filterdata", filteredData);
    });
  };

  useEffect(() => {
    getdataid();
  }, []);

  const coupondatafetch = () => {
    axios.get(`${BASEURL}/allcoupons`, { headers }).then((res) => {
      setcoupondata(res.data.data);
      console.log(res.data.data);
    });
  };

  useEffect(() => {
    coupondatafetch();
  }, []);

  let discount = parseInt(price) + 5000;

  const [visibleItems, setVisibleItems] = useState(2);

  let rem = coupondata.length - visibleItems;

  const [showAll, setShowAll] = useState(false);

  const visibleCoupons = coupondata;

  const handleBoxClick = (index) => {
    setActiveIndex(index);

    // If a coupon is selected, deduct its price from the original price
    if (index !== null) {
      const selectedCoupon = visibleCoupons[index];
      setDiscountedPrice(price - selectedCoupon?.price);
    } else {
      // If no coupon is selected, set the discounted price back to the original price
      setDiscountedPrice(price);
    }
  };

  // Automatically select the first coupon on component mount
  useEffect(() => {
    handleBoxClick(0); // Select the first coupon
  }, [visibleCoupons, price]);

  // const filteredHotels = visibleCoupons?.filter((item) =>
  //   item?.name?.toLowerCase()?.includes(searchQuery.toLowerCase())
  // );

  // let filtercheck = searchQuery ? filteredHotels : visibleCoupons;

  let rooms = localStorage.getItem("rooms");
  let guest = localStorage.getItem("guest");
  // alert(guest ? guest : localguest);

  const handleModalsubmit = (e) => {
    setopen(true);
    e.preventDefault();
    let requestdata = {
      checkin: checkin,
      name: msgdata.label,
      checkout: checkout,
      rooms: localroom ? localroom : rooms,
      guest: localguest ? localguest : guest,
      comes: "Hotel Detail",
      destination: data[0].name,
      price: price,
      phone: phone,
      email: email,
    };
    axios.post(`${BASEURL}/bookings`, requestdata, { headers }).then((res) => {
      if (res.data != null) {
        alert("Data Submit");
        setopen(false);
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
      <Loader open={open} />
      <Header />
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className=" hoteldetail">
                <div className="herotext">
                  {/* <h4 className="text-white">{data?.[0]?.name}</h4> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space ">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h5>{data?.[0]?.name}</h5>

              {/* <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav> */}

              {/* <p className="mt-5" style={{ wordWrap: "break-word" }}>
                {data?.[0]?.description}
              </p> */}
              <div
                className="mt-4"
                style={{ wordWrap: "break-word" }}
                dangerouslySetInnerHTML={{
                  __html: data?.[0]?.description,
                }}
              />

              {/* <h6 className="mt-3 fw-bold">Room Amenities</h6>
              <div className="">
                <Slider {...settings}>
                  {amenities.map((amenity, index) => (
                    <div key={index} className="">
                      <div className="bg-white shadow p-3 m-3 d-flex align-items-center gap-4 rounded-4">
                        <img
                          src={amenity.image}
                          className="img-fluid amentityimag"
                          alt=""
                        />
                        <span>{amenity.name}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div> */}
              <div className="mt-5 ">
                <h6 className="fw-bold">What’s included in this suite?</h6>
                <ul className="p-0 ">
                  {data[0]?.amenities?.map((item, index) => {
                    return (
                      <>
                        <p
                          className="fw-bold bg-blue text-white p-1 rounded-pill text-center"
                          style={{ width: "200px", fontSize: "14px" }}
                        >
                          Day {index + 1}
                        </p>
                        <li className="" style={{ listStyle: "none" }}>
                          <h3
                            className="fw-bold mb-0"
                            style={{ fontSize: "22px" }}
                          >
                            {item.title}
                          </h3>
                        </li>
                        <li style={{ listStyle: "none" }}>
                          <p
                            className="fw-light mb-0"
                            style={{ fontSize: "18px" }}
                          >
                            {item.name}
                          </p>
                        </li>
                        <li
                          className="text-secondary"
                          style={{ listStyle: "none" }}
                        >
                          <p className="text-blue" style={{ fontSize: "12px" }}>
                            Notes : {item.notes}
                          </p>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="shadow p-3 rounded-3 mb-3"
                style={{ background: "#eaf5ff" }}
              >
                <div className="text-end mb-0">
                  <del
                    className="text-secondary mb-0"
                    style={{ fontSize: "14px" }}
                  >
                    ₹ {discount}
                  </del>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-bold my-0">Price</h6>

                  <h4 className="my-0">₹ {price}</h4>
                  {/* <h5>₹ </h5> */}
                </div>
                <p
                  className="text-secondary text-end"
                  style={{ fontSize: "12px" }}
                >
                  *Excluding applicable taxes
                </p>
                {/* <div className="text-center">
                  <button className="btn bg-blue text-white rounded-pill">
                    Proceed to Book Online
                  </button>
                </div> */}
              </div>
              {/* <div className="bg-white shadow p-3 rounded-3 mb-3">
                <h6 className="fw-bold">Coupon & Offers</h6>
                

                <div className="offersscroll">
                  {visibleCoupons.map((item, index) => (
                    <div
                      key={index}
                      className={`couponsOuter ${
                        index === activeIndex ? "activeBox" : ""
                      }`}
                      style={{
                        background: index === activeIndex ? "#d1f8e6" : "",
                        position: "relative",
                      }}
                      onClick={() => handleBoxClick(index)}
                    >
                      <div className="">
                        {index === activeIndex ? (
                          <h4 className="my-0 apply">Remove</h4>
                        ) : (
                          <h4 className="my-0 apply">Apply</h4>
                        )}
                        <h6
                          className="my-0 fw-bold"
                          style={{ fontSize: "14px" }}
                        >
                          {item.name}
                        </h6>
                        <p className="mb-0" style={{ fontSize: "12px" }}>
                          {item.desc}
                        </p>
                        <h6>{item.price}</h6>
                      </div>
                    </div>
                  ))}
                </div>

                
              </div> */}
              <div className="bg-white shadow p-3 rounded-3">
                <h4>Reserve</h4>
                <label htmlFor="">Check In</label>
                <input
                  value={checkin}
                  onChange={(e) => setcheckin(e.target.value)}
                  className="form-control"
                  type={inputType}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <label htmlFor="">Check Out</label>
                <input
                  type={inputType}
                  className="form-control"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={checkout}
                  onChange={(e) => setcheckout(e.target.value)}
                />
                <label htmlFor="">Rooms</label>
                <input
                  type="number"
                  value={localroom}
                  onChange={(e) => setlocalroom(e.target.value)}
                  className="form-control"
                />

                <label htmlFor="">Number of Guest</label>
                <input
                  type="number"
                  value={localguest}
                  onChange={(e) => setlocalguest(e.target.value)}
                  className="form-control"
                />
                <label htmlFor="">Phone</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  className="form-control"
                />
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="form-control"
                />
                <button
                  className="btn w-100 bg-dark text-white mt-3 text-center"
                  onClick={(e) => handleModalsubmit(e)}
                >
                  Book Your Stay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Bottom />
    </>
  );
}

export default Hoteldetail;
