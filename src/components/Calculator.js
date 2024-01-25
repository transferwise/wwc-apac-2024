'use client'

import CenteredComponent from "./CenteredComponent";

const { default: AmountInput } = require("./AmountInput");
const { default: CurrencySelector } = require("./CurrencySelector");

function Calculator() {
  return (
    <>
      <AmountInput></AmountInput>
      <CurrencySelector></CurrencySelector>
      <p>This is the calc teeheeeeee</p>
    </>
  );
};
export default Calculator;
