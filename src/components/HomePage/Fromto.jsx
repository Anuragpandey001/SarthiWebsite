import { useEffect, useState } from "react";
import { Fromtocss } from "./Fromtocss";

export const Fromto = ({ handleChange }) => {
  const [text, setText] = useState([]);

  return (
    <Fromtocss>
      <div className="fromtodiv">
        <div>
          <h3>FROM</h3>
          <select
            onChange={handleChange}
            name="from"
            id=""
            className="form-control form-select"
          >
            {text?.map((e) => (
              <option value={e.IATA_code} key={e.IATA_code}>
                {e.city_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3>TO</h3>
          <select
            onChange={handleChange}
            name="to"
            id=""
            className="form-control form-select m-0"
          >
            {text?.map((e) => (
              <option value={e.IATA_code} key={e.IATA_code}>
                {e.city_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="fromtodiv2">
        <div>
          <h3>DEPARTURE</h3>
          <input
            type="date"
            className="date form-control m-0"
            style={{ position: "relative", top: "5px" }}
          />
        </div>
        <div>
          <h3>RETURN</h3>
          <input
            placeholder="choose it"
            type="date"
            style={{ position: "relative", top: "5px" }}
            className="date form-control m-0"
          />
        </div>
        <div>
          <h3>TRAVLLER & CLASS</h3>
          <select name="" id="" className="form-control form-select ">
            <option value="">Select</option>

            <option value="">Economy</option>
            <option value="">Premium</option>
          </select>
        </div>
      </div>
    </Fromtocss>
  );
};
