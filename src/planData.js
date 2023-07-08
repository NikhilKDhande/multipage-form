import arcadeIcon from "./images/icon-arcade.svg";
import advanceIcon from "./images/icon-advanced.svg";
import proIcon from "./images/icon-pro.svg";
const planData = [
  {
    planName: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    image: `${arcadeIcon}`,
    note: "2 months free",
  },
  {
    planName: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    image: `${advanceIcon}`,
    note: "2 months free",
  },
  {
    planName: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    image: `${proIcon}`,
    note: "2 months free",
  },
];
export default planData;
