import React, { useState } from "react";

import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
function SecondPage(props) {
  const temp =
    Object.keys(props.formDetail.plan).length > 0 &&
    props.formDetail.plan[0].planName;

  const mapPlanData = props.planData.map((data) => {
    return (
      <div
        className={
          temp == data.planName ? "cardMonth cardMonthActive" : "cardMonth"
        }
        key={data.planName}
      >
        <input
          type="radio"
          id={data.planName}
          name="plan"
          value={data.planName}
          onChange={props.handleChange}
        />
        <div>
          <img src={data.image} alt={`${data.image}`} />
          <p>
            {data.planName}
            <br />
            {props.isYearPlanActive ? (
              <span>${data.yearlyPrice}/yr</span>
            ) : (
              <span>${data.monthlyPrice}/mo</span>
            )}
            <br />
            {props.isYearPlanActive ? <span>{data.note}</span> : null}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="Step2">
      <h1>Select your plan</h1>
      <h6>You have the option of monthly or yearly billing.</h6>
      <div className="cardContainer">{mapPlanData}</div>
      <div className="toggleBtnContainer">
        <p
          className={props.isYearPlanActive ? "normalPlan" : "activePlanType"}
          id="monthly"
        >
          Monthly
        </p>
        <button className="toggleIcon" onClick={props.changePlanType}>
          {props.isYearPlanActive ? <BiToggleRight /> : <BiToggleLeft />}
        </button>
        <p
          className={props.isYearPlanActive ? "activePlanType" : "normalPlan"}
          id="yearly"
        >
          Yearly
        </p>
      </div>
    </div>
  );
}

export default SecondPage;
