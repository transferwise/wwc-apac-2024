'use client'

import { TextField } from "@mui/material";

const { useState } = require("react")

function AmountInput() {
  const [amount, setAmount] = useState(0);

  const handleSetAmount = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <TextField
        id="inputAmount"
        label="Enter the amount"
        variant="outlined"
        value={amount}
        onChange={handleSetAmount}
      />
      <p>You entered: {amount}</p>
    </div>
  );
};
export default AmountInput;
