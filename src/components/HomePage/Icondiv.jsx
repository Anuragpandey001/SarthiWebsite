import React, { useState } from "react";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Icondivcss } from "./Icondivcss";
import vacation from "../../image/vac.png";
import visa from "../../image/visa.png";
import flight from "../../image/filght.png";
import hotel from "../../image/hotel.png";
import insurance from "../../image/insurance.png";

export const Icondiv = ({ handleIconClick }) => {
  const [selectedItem, setSelectedItem] = useState("Flights");

  // const handleItemClick = (item) => {
  //   if (selectedItem === item) {
  //     // If the same item is clicked, unselect it
  //     console.log("item", item);
  //     setSelectedItem(null);
  //     handleIconClick(null); // You can also send a value to the parent component to indicate deselection
  //   } else {
  //     setSelectedItem(item);
  //     handleIconClick(item);
  //   }
  // };

  const handleItemClick = (item) => {
    setSelectedItem((prevItem) => {
      // If the same item is clicked, do not unselect it
      if (prevItem === item) {
        return prevItem;
      } else {
        handleIconClick(item);
        return item;
      }
    });
  };

  const isSelected = (item) => selectedItem === item;

  return (
    <Icondivcss>
      <div className="icondiv">
        <div
          onClick={() => handleItemClick("Flights")}
          onDoubleClick={() => handleItemClick("Flights")}
          className={isSelected("Flights") ? "selected" : ""}
        >
          <span>
            <img
              src={flight}
              className="img-fluid my-2"
              style={{ width: "30px" }}
              alt=""
            />
          </span>
          <p>Flights</p>
        </div>
        <div
          onClick={() => handleItemClick("Package")}
          onDoubleClick={() => handleItemClick("Package")}
          className={isSelected("Package") ? "selected" : ""}
        >
          <span>
            <img
              src={vacation}
              className="img-fluid my-2"
              style={{ width: "30px" }}
              alt=""
            />
          </span>
          <p>Holiday Package</p>
        </div>

        <div
          onClick={() => handleItemClick("Hotels")}
          onDoubleClick={() => handleItemClick("Hotels")}
          className={isSelected("Hotels") ? "selected" : ""}
        >
          <span>
            <img
              src={hotel}
              className="img-fluid my-2"
              style={{ width: "30px" }}
              alt=""
            />
          </span>
          <p>Hotels</p>
        </div>

        <div
          onClick={() => handleItemClick("Visa")}
          onDoubleClick={() => handleItemClick("Visa")}
          className={isSelected("Visa") ? "selected" : ""}
        >
          <span>
            <img
              src={visa}
              className="img-fluid my-2"
              style={{ width: "30px" }}
              alt=""
            />
          </span>
          <p>Visa</p>
        </div>
        {/* <div
          onClick={() => handleItemClick("Insurance")}
          onDoubleClick={() => handleItemClick("Insurance")}
          className={isSelected("Insurance") ? "selected" : ""}
        >
          <span>
            <img
              src={insurance}
              className="img-fluid my-2"
              style={{ width: "30px" }}
              alt=""
            />
          </span>
          <p>Insurance</p>
        </div> */}
      </div>
    </Icondivcss>
  );
};
