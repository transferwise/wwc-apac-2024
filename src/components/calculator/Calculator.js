'use client'

const { FormControl, InputLabel, MenuItem, Select, TextField, Box, Fab, Chip, Stack } = require("@mui/material");
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import RemoveIcon from '@mui/icons-material/Remove';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';

const { useState } = require("react")

function Calculator() {
  const currencies = ["SGD", "USD", "GBP", "EUR"];

  const [sourceAmount, setSourceAmount] = useState(1000);
  const [targetAmount, setTargetAmount] = useState(1000);
  const [sourceCurrency, setSourceCurrency] = useState(currencies[0]);
  const [targetCurrency, setTargetCurrency] = useState(currencies[1]);
  const [rate, setRate] = useState(1.175);

  const handleSetSourceAmount = async (event) => {
    setSourceAmount(event.target.value);
    await callCalculatorApi(event.target.value, sourceCurrency, targetCurrency);
  };

  const handleSetSourceCurrency = async (event) => {
    setSourceCurrency(event.target.value);
    await callCalculatorApi(sourceAmount, event.target.value, targetCurrency);
  };

  const handleSetTargetCurrency = async (event) => {
    setTargetCurrency(event.target.value);
    await callCalculatorApi(sourceAmount, sourceCurrency, event.target.value);
  };

  const callCalculatorApi = async (srcAmount, srcCurrency, trgCurrency) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sourceAmount: srcAmount, sourceCurrency: srcCurrency, targetCurrency: trgCurrency })
    };
    try {
      const res = await fetch(`/api/calculator/`, requestOptions);
      const newData = await res.json();
      setRate(newData.rate)
      setTargetAmount(newData.targetAmount)
    } catch (err) {
      console.log("Error calling API");
    }
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box sx={{ '& > :not(style)': { m: 1 }, width: 1000 }}>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
          <Item><TextField
            id="inputAmount"
            label="You send"
            variant="outlined"
            value={sourceAmount}
            onChange={handleSetSourceAmount}
            type="number"
          /></Item>
          <Item>
            <FormControl>
              <InputLabel id="select-currency-label">Currency:</InputLabel>
              <Select
                labelId="select-currency-label"
                id="select"
                value={sourceCurrency}
                onChange={handleSetSourceCurrency}
                label="Select an Option"
              >
                {
                  currencies.map((c, index) => (
                    <MenuItem key={index} value={c}>{c}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Item>
        </Stack>
      </Box>
      <Box sx={{ '& > :not(style)': { m: 1 }, width: 1000 }}>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
          <Item>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Fab size="small" color="primary" aria-label="remove">
                <RemoveIcon></RemoveIcon>
              </Fab>
              {2.00 + " " + sourceCurrency}
              <Chip label="Transfer Fees" color="primary" />
            </Box>
          </Item>
        </Stack>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
          <Item>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Fab size="small" color="primary" aria-label="remove">
                <DragHandleIcon></DragHandleIcon>
              </Fab>
              {2.00 + " " + sourceCurrency}
              <Chip label="Amount we'll convert" color="primary" />
            </Box>
          </Item>
        </Stack>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
          <Item>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Fab size="small" color="primary" aria-label="remove">
                <CloseIcon></CloseIcon>
              </Fab>
              {rate}
              <Chip label="Rate" color="primary" />
            </Box>
          </Item>
        </Stack>
      </Box >
      <Box sx={{ '& > :not(style)': { m: 1 }, width: 1000 }}>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
          <Item>
            <TextField
              disabled
              variant="outlined"
              label="Recipient gets"
              value={targetAmount}
              type="number"
            /></Item>
          <Item>
            <FormControl>
              <InputLabel id="select-currency-label">Select a currency:</InputLabel>
              <Select
                labelId="select-currency-label"
                id="select"
                value={targetCurrency}
                onChange={handleSetTargetCurrency}
                label="Select an Option"
                defaultValue={currencies[0]}
              >
                {
                  currencies.map((c, index) => (
                    <MenuItem key={index} value={c}>{c}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Item>
        </Stack>
      </Box>
    </>
  );
};
export default Calculator;
