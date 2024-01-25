'use client'

const { FormControl, InputLabel, MenuItem, Select } = require("@mui/material");
const { useState } = require("react")

function CurrencySelector() {
  const [currency, setCurrency] = useState('');

  const handleSetCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const currencies = ["SGD", "USD", "GBP", "EUR"];

  return (
    <div>
      <FormControl fullWidth sx={{ width: '300px' }}>
        <InputLabel id="select-currency-label">Select a currency:</InputLabel>
        <Select
          labelId="select-currency-label"
          id="select"
          value={currency}
          onChange={handleSetCurrency}
          label="Select an Option"
        >
          {
            currencies.map((c, index) => (
              <MenuItem key={index} value={c}>{c}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <p>You entered: {currency}</p>
    </div>
  );
};
export default CurrencySelector;
