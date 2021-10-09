import React from "react";

const UserExperience = ({ employe }) => {
  const { dates, title, duties, company } = employe;
  return (
    <div className="job-offer">
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>{dates}</p>
      {duties.map((duty, index) => {
        return (
          <p key={index}>
            {" "}
            <i className="fas fa-angle-double-right"></i>
            {duty}
          </p>
        );
      })}
    </div>
  );
};

export default UserExperience;
