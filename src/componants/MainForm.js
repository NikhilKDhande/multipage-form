import React, { useState } from "react";

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import ForthPage from "./ForthPage";
import ThankYouPage from "./ThankYouPage";
import Bottombar from "./Bottombar";
function MainForm(props) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isYearPlanActive, setIsYearPlanActive] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  }
  function changePlanType(e) {
    e.preventDefault();
    setIsYearPlanActive(!isYearPlanActive);
  }
  let currentFormStep = (
    <FirstPage
      formDetail={props.formDetail}
      handleChange={props.handleChange}
      isEntriesValid={props.isEntriesValid}
    />
  );
  switch (props.currentStep) {
    case 2:
      currentFormStep = (
        <SecondPage
          formDetail={props.formDetail}
          handleChange={props.handleChange}
          planData={props.planData}
          isYearPlanActive={isYearPlanActive}
          changePlanType={changePlanType}
        />
      );
      break;
    case 3:
      currentFormStep = (
        <ThirdPage
          addonData={props.addonData}
          handleChange={props.handleChange}
          isYearPlanActive={isYearPlanActive}
          formDetail={props.formDetail}
        />
      );
      break;
    case 4:
      currentFormStep = (
        <ForthPage
          isYearPlanActive={isYearPlanActive}
          formDetail={props.formDetail}
          changePlan={props.changePlan}
        />
      );
      break;
  }
  return (
    <div className="mainForm">
      {isSubmitted ? (
        <ThankYouPage />
      ) : (
        <form>
          {currentFormStep}
          <Bottombar
            formDetail={props.formDetail}
            currentStep={props.currentStep}
            prevStep={props.prevStep}
            nextStep={props.nextStep}
            handleSubmit={handleSubmit}
          />
        </form>
      )}
    </div>
  );
}
export default MainForm;
