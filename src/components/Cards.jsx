import React, { useContext } from "react";

function Cards(props) {
  return (
    <>
      <div className="col-md-3">
        <div class="card">
          <div className="main">
            <img
              src={props.img}
              loading="lazy"
              class="card-img-top img-fluid"
              alt="..."
              style={{ height: "14rem" }}
            />
          </div>
          <div class="card-body ">
            <div className="d-flex align-items-center justify-content-between topsection">
              <div className="right">
                {/* <p className="location mb-0">
                  {" "}
                  <span className="me-1">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  {props.location}
                </p> */}
                <h4 className="mb-0">{props.heading}</h4>
                <p class="card-text mb-0">{props.status}</p>
              </div>
              {/* <div className="price">${props.price}</div> */}
            </div>
            <div className="mt-3 px-2 pe-3">
              <a
                className="btn bg-blue border-0 text-white w-100"
                onClick={props.onClick}
              >
                Go To Hotel Package
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
