import React from "react";

const Photo = ({
  likes,
  urls: { regular },
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  //   const { thumb, small, regular, full, raw } = urls;
  return (
    <div className="photo">
      <img
        src={regular}
        // style={{ height: "300px", width: "300px" }}
        alt="splash"
      />
      <div className="info">
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt="link" />
        </a>
      </div>
    </div>
  );
};

export default Photo;
