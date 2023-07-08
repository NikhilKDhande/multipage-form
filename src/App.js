import React, { useState } from "react";
import Sidebar from "./componants/Sidebar";
import MainForm from "./componants/MainForm";
import planRawData from "./planData";
import addonRawData from "./addonData";
function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [planData, setPlanData] = useState(planRawData);
  const [addonData, setAddonData] = useState(addonRawData);
  const [isChecked, setisChecked] = useState(false);

  const [isEntriesValid, setIsEntriesValid] = useState({
    isNameValid: false,
    isEmailValid: false,
    isPhoneNumberValid: false,
  });
  const [formDetail, setFormDetail] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    plan: {},
    addOns: [],
  });

  const validateEmail = (email) => {
    let regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (email === null) {
      return false;
    }
    if (regex.test(email) === true) {
      return true;
    } else {
      return false;
    }
  };
  const validatePhoneNumber = (phoneNumber) => {
    let regex = new RegExp(
      "(?:(?:\\+|0{0,2})91(\\s*[\\- ]\\s*)?|[0 ]?)?[789]\\d{9}|(\\d[ -]?){10}\\d",
      "g"
    );
    if (phoneNumber === null) {
      return false;
    }
    if (regex.test(phoneNumber) === true) {
      return true;
    } else {
      return false;
    }
  };

  function handleChange(e) {
    const { value, name, type } = e.target;
    // e.preventDefault();
    const filterPlanData = planData.filter((temp) => {
      return temp.planName === value;
    });
    const filterAddonData = addonData.filter((temp) => {
      return temp.addonName === value;
    });

    if (type === "checkbox") {
      setFormDetail((prev) => {
        const tempFilter =
          prev.addOns.length > 0 &&
          prev.addOns.filter((data) => {
            return data.addonName === filterAddonData[0].addonName;
          });

        if (tempFilter.length > 0) {
          const filterAddno = prev.addOns.filter((data) => {
            return data.addonName !== tempFilter[0].addonName;
          });
          console.log("filterAddno", filterAddno);
          return {
            ...prev,
            [name]: filterAddno.length > 0 ? filterAddno : [],
          };
        } else {
          return {
            ...prev,
            [name]: [
              ...prev.addOns,
              {
                addonName: filterAddonData[0].addonName,
                description: filterAddonData[0].description,
                monthlyCharge: filterAddonData[0].monthlyCharge,
                yearlyCharge: filterAddonData[0].yearlyCharge,
              },
            ],
          };
        }
      });
    } else {
      setFormDetail((prev) => {
        return {
          ...prev,
          [name]: type === "radio" ? filterPlanData : value,
        };
      });
    }
  }
  console.log(formDetail);
  function prevStep(e) {
    e.preventDefault();
    setCurrentStep((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  }

  function nextStep(e) {
    e.preventDefault();
    if (
      formDetail.fullName.length > 1 &&
      validateEmail(formDetail.email) &&
      validatePhoneNumber(formDetail.phoneNumber)
    ) {
      setCurrentStep((prev) => {
        if (prev < 4) {
          return prev + 1;
        }
        return prev;
      });
    }
    if (formDetail.fullName.length < 1) {
      setIsEntriesValid((prev) => {
        return { ...prev, isNameValid: true };
      });
    } else {
      setIsEntriesValid((prev) => {
        return { ...prev, isNameValid: false };
      });
    }
    if (!validateEmail(formDetail.email)) {
      setIsEntriesValid((prev) => {
        return { ...prev, isEmailValid: true };
      });
    } else {
      setIsEntriesValid((prev) => {
        return { ...prev, isEmailValid: false };
      });
    }
    if (!validatePhoneNumber(formDetail.phoneNumber)) {
      setIsEntriesValid((prev) => {
        return { ...prev, isPhoneNumberValid: true };
      });
    } else {
      setIsEntriesValid((prev) => {
        return { ...prev, isPhoneNumberValid: false };
      });
    }
  }
  function changePlan() {
    setCurrentStep(2);
  }
  return (
    <div className="main">
      <Sidebar currentStep={currentStep} />
      <MainForm
        currentStep={currentStep}
        prevStep={prevStep}
        nextStep={nextStep}
        formDetail={formDetail}
        handleChange={handleChange}
        isEntriesValid={isEntriesValid}
        planData={planData}
        addonData={addonData}
        changePlan={changePlan}
      />
    </div>
  );
}
export default App;
