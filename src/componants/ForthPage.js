import React from "react";

function ForthPage(props) {
  let finalPriceTobePaid = 0;
  const finalPlan =
    Object.keys(props.formDetail.plan).length > 0 &&
    props.formDetail.plan.map((element) => {
      if (props.isYearPlanActive) {
        finalPriceTobePaid = finalPriceTobePaid + element.yearlyPrice;
      } else {
        finalPriceTobePaid = finalPriceTobePaid + element.monthlyPrice;
      }
      return (
        <div key={element.planName} className="checkoutPlan">
          <p>
            {element.planName}{" "}
            {props.isYearPlanActive ? "(Yearly)" : "(Monthly)"}
            <br />
            <a onClick={props.changePlan} href="javascript:void()">
              Change
            </a>
          </p>
          {props.isYearPlanActive ? (
            <p>+${element.yearlyPrice}/yr</p>
          ) : (
            <p>+${element.monthlyPrice}/mo</p>
          )}
        </div>
      );
    });
  const checkoutAddonList =
    props.formDetail.addOns.length > 0 &&
    props.formDetail.addOns.map((element) => {
      if (props.isYearPlanActive) {
        finalPriceTobePaid = finalPriceTobePaid + element.yearlyCharge;
      } else {
        finalPriceTobePaid = finalPriceTobePaid + element.monthlyCharge;
      }
      return (
        <div key={element.addonName} className="checkoutAddon">
          <p>{element.addonName}</p>
          {props.isYearPlanActive ? (
            <p>+${element.yearlyCharge}/yr</p>
          ) : (
            <p>+${element.monthlyCharge}/mo</p>
          )}
        </div>
      );
    });

  return (
    <div className="Step4">
      <h1>Finishing up</h1>
      <h6>Double check everything looks OK before confirming.</h6>
      <div className="checkoutList">
        {finalPlan}
        <hr />
        {checkoutAddonList}
      </div>
      <div className="totalPrice">
        {props.isYearPlanActive ? (
          <>
            <p>Total (per year)</p>
            <h5>+${finalPriceTobePaid}/yr</h5>
          </>
        ) : (
          <>
            <p>Total (per month)</p>
            <h5>+${finalPriceTobePaid}/mo</h5>
          </>
        )}
      </div>
    </div>
  );
}
export default ForthPage;
