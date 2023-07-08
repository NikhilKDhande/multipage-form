import React from "react";

function FirstPage(props) {
  return (
    <div className="Step1">
      <h1>Personal info</h1>
      <h6>Please provide your name, email address, and phone number.</h6>
      <div>
        <label className="inputLabel">
          Name{" "}
          {props.isEntriesValid.isNameValid && (
            <span>this field is required</span>
          )}
          <input
            name="fullName"
            type="text"
            placeholder="e.g. Stephen King"
            required
            value={props.formDetail.fullName}
            onChange={props.handleChange}
          />
        </label>
      </div>
      <div>
        <label className="inputLabel">
          Email Address{" "}
          {props.isEntriesValid.isEmailValid && (
            <span>this field is required</span>
          )}
          <input
            name="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            required
            value={props.formDetail.email}
            onChange={(e) => props.handleChange(e)}
          />
        </label>
      </div>
      <div>
        <label className="inputLabel">
          Phone Number{" "}
          {props.isEntriesValid.isPhoneNumberValid && (
            <span>this field is required</span>
          )}
          <input
            name="phoneNumber"
            type="tel"
            placeholder="e.g. +91 9876543210"
            required
            value={props.formDetail.phoneNumber}
            onChange={(e) => props.handleChange(e)}
          />
        </label>
      </div>
    </div>
  );
}
export default FirstPage;
