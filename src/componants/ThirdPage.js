import React from "react";

function ThirdPage(props) {
  const mapAddonData = props.addonData.map((data) => {
    let isChecked = false;
    if (props.formDetail.addOns.length > 0) {
      for (let i = 0; i < props.formDetail.addOns.length; i++) {
        if (data.addonName === props.formDetail.addOns[i].addonName) {
          isChecked = true;
          break;
        }
      }
    }
    return (
      <div
        key={data.addonName}
        className={isChecked ? "activeAddons addOnContainer" : "addOnContainer"}
      >
        <label>
          <input
            type="checkbox"
            name="addOns"
            value={data.addonName}
            autoComplete="off"
            checked={isChecked}
            onChange={props.handleChange}
          />
          {data.addonName}
          <span>{data.description}</span>
        </label>
        {props.isYearPlanActive ? (
          <p>+${data.yearlyCharge}/yr</p>
        ) : (
          <p>+${data.monthlyCharge}/mo</p>
        )}
      </div>
    );
  });
  return (
    <div className="Step3">
      <h1>Pick add-ons</h1>
      <h6>Add-ons help enhance your gaming exprience.</h6>
      <div>{mapAddonData}</div>
    </div>
  );
}
export default ThirdPage;
