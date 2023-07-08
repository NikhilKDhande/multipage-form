import React from "react";

function Bottombar(props) {
  return (
    <div className="btnContainer">
      <button type="button" className="backBtn" onClick={props.prevStep}>
        Go Back
      </button>
      {props.currentStep < 4 ? (
        <button type="button" className="nextBtn" onClick={props.nextStep}>
          Next Step
        </button>
      ) : (
        <button
          type="button"
          className="confirmBtn"
          onClick={props.handleSubmit}
        >
          Confirm
        </button>
      )}
    </div>
  );
}
export default Bottombar;
