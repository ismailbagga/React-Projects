import React, { useState } from "react";

const Question = ({ question }) => {
  const { title, info } = question;
  const [show, setShow] = useState(false);

  return (
    <div className="Question-container">
      <div className="flex-direct-row">
        <h1>{title}</h1>
        {show ? (
          <i class="fas fa-minus-circle" onClick={() => setShow(false)}></i>
        ) : (
          <i class="fas fa-plus-circle" onClick={() => setShow(true)}></i>
        )}
      </div>

      <p>{show && info}</p>
    </div>
  );
};

export default Question;
