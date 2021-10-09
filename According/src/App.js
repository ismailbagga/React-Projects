import React from "react";
import Question from "./Question";
import data from "./data";
const App = () => {
  return (
    <div className="container">
      <h1 className="text-header">Question and Ansewers About Account </h1>
      <div className="Questions">
        {data.map((question) => {
          return <Question key={question.id} question={question} />;
        })}
      </div>
    </div>
  );
};

export default App;
