'use client'

const { FormControl, InputLabel, MenuItem, Select, TextField, Box, Fab, Chip, Stack } = require("@mui/material");
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import RemoveIcon from '@mui/icons-material/Remove';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';

const { default: AmountInput } = require("./AmountInput");
const { default: CurrencySelector } = require("./CurrencySelector");
const { useState } = require("react")

function Calculator() {
  const currencies = ["SGD", "USD", "GBP", "EUR"];

  const [sourceAmount, setSourceAmount] = useState(1000);
  const [targetAmount, setTargetAmount] = useState(1000);
  const [sourceCurrency, setSourceCurrency] = useState(currencies[0]);
  const [targeCurrency, setTargetCurrency] = useState(currencies[1]);
  const [rate, setRate] = useState(1.175);

  const handleSetSourceAmount = (event) => {
    setSourceAmount(event.target.value);
  };

  const handleSetSourceCurrency = (event) => {
    setSourceCurrency(event.target.value);
  };

  const handleSetTargetCurrency = (event) => {
    setTargetCurrency(event.target.value);
  };

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
                value={targeCurrency}
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
