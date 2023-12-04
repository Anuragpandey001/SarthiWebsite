import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import styled from "styled-components";
import logo from "../../image/logo.png";

import { Navbar } from "./Navbar";
import { Smallbutton } from "./Smallbutton";
import BusinessIcon from "@mui/icons-material/Business";
import { Icondiv } from "./Icondiv";
import { Bookingcss } from "./Bookingcss";
import { Fromto } from "./Fromto";
import { MultipleSlidesExample, BigSlidesExample } from "./Slidebar";
import { Bigslide, TripMoney } from "./Slidecss";
import { Bottom } from "./Bottom";

import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Cards from "../Cards";
import { SmallBottom } from "./SmallBottom";
import { useState } from "react";
import { FareTypes } from "./FareTypes";
import { Login } from "../login/Login";
import { useEffect } from "react";
import MassonaryImage from "../MassonaryImage";
import exp from "../../image/exp.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Gallerydata from "../../data/Gallerydata";
import axios from "axios";
import { BASEURL } from "../BaseUrl";
import Select from "react-select";

const Icondivcss = styled.div`
  .icondiv {
    height: 60px;
    width: 100%;
    margin: auto;
    background-color: white;
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 100;
    text-align: center;
    box-shadow: 1px 3px 5px #c0c0c0;
    .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 60%;

      p {
        padding: 0px;
        margin: -6px;
        color: #555454;
        font-size: 11px;
      }
      span {
        color: #a3a3a3;
        cursor: pointer;
      }
      span:hover {
        color: #2db0fc;
      }
      div:hover {
        color: #2db0fc;
      }
    }
  }
  .disnone {
    display: none;
  }
  .imgdiv {
    position: relative;
    top: 10px;
    left: 0px;
    img {
      width: 50%;
    }
  }
  .login {
    position: relative;
    top: 10px;
    left: 150px;
  }
`;

export const Header = () => {
  const handlePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };
  const { id } = useParams();
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handleChange);
  const [countrydata, setcountrydata] = useState([]);
  const [country, setcountry] = useState("");
  const [rooms, setRooms] = useState(0);
  const [guest, setguest] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  let countrycode = localStorage.getItem("country");

  const location = useLocation();

  const [data, setData] = useState({
    from: "",
    to: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const addLocal = () => {
    localStorage.setItem("myKey", JSON.stringify(data));
  };

  const [selectedIcon, setSelectedIcon] = useState("Flights");
  const [searchbtn, setsearchbtn] = useState("");

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const navigate = useNavigate();

  const main = location.pathname === "/";
  const blog = location.pathname === "/blog";
  const privacy = location.pathname === "/privacy";
  const hotel = location.pathname === `/package/${id}`;

  const expdata = [
    exp,
    "https://images.pexels.com/photos/2432299/pexels-photo-2432299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/163168/mountains-summit-winter-snow-163168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5472599/pexels-photo-5472599.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww",
    "https://images.pexels.com/photos/2407070/pexels-photo-2407070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2267339/pexels-photo-2267339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const allcountrydata = () => {
    axios.get(`${BASEURL}/allcountry`).then((res) => {
      console.log(res.data);
      setcountrydata(res.data);
    });
  };

  useEffect(() => {
    allcountrydata();
  }, []);

  const getSliceCount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1000 && screenWidth <= 1400) {
      return 4;
    } else if (screenWidth >= 400 && screenWidth < 900) {
      return 3;
    } else {
      return 5; // Default slice count for other screen sizes
    }
  };

  const guestminus = (e) => {
    if (guest > 0) {
      let newGuestCount = guest - 1;
      setguest(newGuestCount);
    }
  };

  const guestplus = () => {
    let newguestcount = guest + 1;
    setguest(newguestcount);
  };

  const roomsminus = () => {
    if (rooms > 0) {
      let newroomcount = rooms - 1;
      setRooms(newroomcount);
    }
  };

  const roomsplus = () => {
    let newroomcount = rooms + 1;
    setRooms(newroomcount);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
    }),
  };

  const options = countrydata.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [none, setnone] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const route = `/package/${country.value}`;
  //   navigate(route);
  //   localStorage.setItem("selectedCountry", JSON.stringify(country));

  // };

  const handleSearch = (e) => {
    e.preventDefault();
    const route = `/package/${country.value}`;
    navigate(route);

    // Set values in localStorage
    localStorage.setItem("selectedCountry", JSON.stringify(country));
    localStorage.setItem("guest", guest);
    localStorage.setItem("room", rooms);
  };

  // useEffect(() => {
  //   // Retrieve the selected country from local storage
  //   const storedCountry = localStorage.getItem("selectedCountry");

  //   // Parse the JSON string if it exists
  //   if (storedCountry) {
  //     const parsedCountry = JSON.parse(storedCountry);
  //     setcountry(parsedCountry);
  //   }
  // }, []);

  useEffect(() => {
    // Retrieve the selected country from local storage
    const storedCountry = localStorage.getItem("selectedCountry");

    // Parse the JSON string if it exists
    if (storedCountry) {
      const parsedCountry = JSON.parse(storedCountry);
      setcountry(parsedCountry);
    }

    // Retrieve guest and room from local storage
    const storedGuest = localStorage.getItem("guest");
    const storedRoom = localStorage.getItem("room");

    // Parse the values and set them in state
    if (storedGuest) {
      setguest(parseInt(storedGuest, 10)); // Convert to integer
    }

    if (storedRoom) {
      setRooms(parseInt(storedRoom, 10)); // Convert to integer
    }
  }, []);
  const nonehandle = () => {
    setnone((prevNone) => !prevNone);
  };

  return (
    <>
      {/* <Icondivcss>
        <div >
          <div className="imgdiv ms-5">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  Navbar
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Icondivcss> */}
      <nav
        className={`navbar navbar-expand-lg mb-0 pt-2 ${
          isScrolled ? "header-scrolled" : ""
        }  ${isMenuOpen ? "show" : ""}`}
        style={{
          width: "100%",
          position: hotel ? "static" : "fixed",
          zIndex: "999",
          top: "0",
          paddingTop: "10px",
          backgroundColor: main ? "" : "#3533cd",
          backgroundImage: main
            ? ""
            : "linear-gradient(245deg,#3533cd 0%,#000000 100%)",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-dark" to="/">
            <img src={logo} className="img-fluid" alt="" />
          </Link>
          <button
            onClick={nonehandle}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i class="fa-solid fa-bars text-dark"></i>
            </span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center gap-3 ">
              <li className="nav-item text-white">
                <NavLink className="nav-link" to={"/blog"}>
                  Blog
                </NavLink>
              </li>
              <li className="nav-item text-white">
                <NavLink className="nav-link" to={"/privacy"}>
                  Privacy Policy
                </NavLink>
              </li>
              <li className="nav-item text-white">
                <NavLink className="nav-link" to={"/modal"}>
                  Hotels
                </NavLink>
              </li>
              <li className="nav-item text-white">
                <NavLink className="nav-link" to={"/modal"}>
                  Visa
                </NavLink>
              </li>

              <li className="nav-item my-3 ">
                <a
                  href="tel:8218073585 "
                  className="bg-blue rounded-pill text-white"
                >
                  Call Us Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {main || blog || privacy || (
        <div
          className={`justify-content-center navbar navbar-expand-lg mb-0 mainsearch pt-2 ${
            isScrolled ? "header-scrolled" : ""
          }  ${isMenuOpen ? "show" : ""} ${none ? "d-none" : ""}`}
          // style={{ position: hotel ? "static" : "fixed" }}
        >
          <ul
            className="d-flex align-items-center flex-wrap w-100 "
            style={{ justifyContent: "space-evenly" }}
          >
            <li className="w-md-100">
              <div className="">
                <label htmlFor="" className="fw-bold text-white">
                  Destination City / Country
                </label>

                <Select
                  styles={customStyles}
                  placeholder="Search or select a country"
                  isSearchable
                  value={country}
                  onChange={(selectedOption) => setcountry(selectedOption)}
                  options={options}
                />
              </div>
            </li>

            <li className="w-md-50">
              <div className="">
                <label htmlFor="" className="fw-bold text-white">
                  Guests
                </label>
                <div className="d-flex gap-2">
                  <button
                    className="btn bg-blue increamentbtn text-white "
                    onClick={guestminus}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={guest}
                    style={{ width: "70px" }}
                    onChange={(e) => setguest(e.target.value)}
                    className="form-control"
                    placeholder="0"
                  />
                  <button
                    className="btn bg-blue text-white increamentbtn  "
                    onClick={guestplus}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
            <li className="w-md-50">
              <div className="">
                <label htmlFor="" className="fw-bold text-white">
                  Rooms
                </label>
                <div className="d-flex gap-2">
                  <button
                    className="btn bg-blue increamentbtn text-white"
                    onClick={roomsminus}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    style={{ width: "70px" }}
                    className="form-control"
                    placeholder="0"
                  />
                  <button
                    className="btn bg-blue increamentbtn text-white"
                    onClick={roomsplus}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
            <li className="w-md-100" style={{ marginTop: "0px" }}>
              <button
                className="bg-blue rounded-pill btn text-white"
                onClick={(e) => handleSearch(e)}
                style={{ marginTop: "30px" }}
              >
                Search
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
