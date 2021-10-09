import React, { useState, useEffect } from "react";
import UserExperience from "./UserExperience";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobOffer, setjobOffer] = useState([]);
  const [value, setValue] = useState(0);

  const [loading, setLoading] = useState(true);
  const fetchJobOffers = async () => {
    let response = await fetch(url).then((res) => res.json());

    setjobOffer(response);
    setLoading(false);
  };
  useEffect(() => fetchJobOffers(), []);
  const findOffer = (index) => {
    setValue(index);
  };
  if (loading) {
    return (
      <main className="container">
        <h1 className="text-header">Loading...</h1>
      </main>
    );
  }

  return (
    <React.Fragment>
      <h1 className="text-header">Experience</h1>
      <main className="container">
        <div className="Companies">
          {jobOffer.map((employe, index) => {
            return (
              <button
                key={employe.id}
                onClick={(e) => findOffer(index)}
                className={`btn  ${index === value && "show"}`}
              >
                {employe.company}
              </button>
            );
          })}
        </div>
        <UserExperience key={jobOffer[value].id} employe={jobOffer[value]} />
      </main>
    </React.Fragment>
  );
};

export default App;
