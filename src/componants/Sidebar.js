import React from "react";

import stepData from "../stepData";
function Sidebar(props) {
  const singleStep = stepData.map((element) => {
    return (
      <div className="formStepsContainer" key={element.stepNumber}>
        <div
          className={
            props.currentStep == element.stepNumber
              ? "formStepsHeadingActive"
              : "formStepsHeadingNormal"
          }
        >
          {element.stepNumber}
        </div>
        <div className="formStepsName">
          <p> {element.step}</p>
          <h6>{element.stepHeading}</h6>
        </div>
      </div>
    );
  });
  return <div className="sidebar">{singleStep}</div>;
}
export default Sidebar;
