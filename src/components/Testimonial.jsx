import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ava01 from "../image/ava-1.jpg";
import ava02 from "../image/ava-2.jpg";
import ava03 from "../image/ava-3.jpg";
import axios from "axios";
import { BASEURL } from "./BaseUrl";

const Testimonial = () => {
  const [data, setdata] = useState([]);
  const headers = {
    "Content-Type": "application/json",
  };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swiperToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: data?.length - 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleallreview = () => {
    axios.get(`${BASEURL}/allreviews`, { headers }).then((res) => {
      setdata(res.data.data);
      console.log(res.data.data);
    });
  };

  useEffect(() => {
    handleallreview();
  }, []);
  return (
    <>
      {data.length > 0 && (
        <div className="col-md-12">
          <h3 className="text-center">What Our User Say About Us ?</h3>
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <>
                  <div className="testimonial py-4 px-3">
                    <p style={{ textAlign: "justify" }}>{item?.desc}</p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                      <img
                        src={item?.image ? `${BASEURL}/${item?.image}` : ava01}
                        className="w-25 h-25 rounded-2"
                        alt=""
                      />
                      <div className="">
                        <h5 className="mb-0 mt-3">{item?.name}</h5>
                        <p>{item?.job}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
};
export default Testimonial;
