import React from "react";
import DoneIcon from "../images/icon-thank-you.svg";
function ThankYouPage() {
  return (
    <div className="thankyouPage">
      <img src={DoneIcon} alt="doneIcon" />
      <h1>Thank You!</h1>
      <h6>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </h6>
    </div>
  );
}
export default ThankYouPage;
