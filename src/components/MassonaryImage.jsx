import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Gallerydata from "../data/Gallerydata";

function MassonaryImage() {
    return (
      
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {Gallerydata.map((item, index) => {
          return (
            <img
              className="masonry_img"
              src={item}
              key={index}
              alt=""
              style={{
                width: "100%",
                display: "block",
                borderRadius: "10px",
              }}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default MassonaryImage;
