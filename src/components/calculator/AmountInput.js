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
        label="You send"
        variant="outlined"
        value={amount}
        onChange={handleSetAmount}
        type="number"
      />
    </div>
  );
};
export default AmountInput;
