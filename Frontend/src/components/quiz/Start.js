import React from "react";

const Start = ({ startQuiz, showStart }) => {
  return (
    <section
      className="text-white text-center bg-dark"
      style={{ display: `${showStart ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-4">Lets play a trivia</h1>
            <button
              onClick={startQuiz}
              className="btn_t px-4 py-2 bg-light text-dark fw-bold"
            >
              Start Trivia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
