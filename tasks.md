# Workshop tasks

## Task 1

### Fix the calculator

As a Special Product Engineer at Wise, your mission is to enhance the target amount calculation for Wise transfers. The target amount represents the final amount that the recipient receives after accounting for all fees and charges applied to the transfer.

- Run the tests <indicate the exact tests to run here and how to run the tests>, see the tests fail
- Fix the relevant code - Find the TODO
- Run the tests to ensure they are running correctly
- Open the frontend page for a transfer 
- Ensure the target amount is passed on to the frontend and appears correctly.

### Tips

Go to localhost:3000/calculator. Why is it not working? 

- What can you use in the Chrome developer tools to figure out what is wrong?
- Is there any error trace or logging on the backend server?
- Is any test failing when you run the tests?

```bash

npm run test

```

## Task 2

### Fix the transfer details page

For transfers that are already created, retrieve the pricing used from the pricing table. Fix our transfers API!

Go to localhost:3000/transfers/1

Same thing, can you figure out why is it not working?

- Is it the backend or the frontend that is missing something?


## Task 3

### Analytics

Now the fun part begins! Let's analyze some data.

#### Transaction Analysis

1. Analyze the dataset to identify the most common currency pairs exchanged.

2. Calculate the average transaction amount for each currency pair.


#### Fee Analysis

1. Evaluate the distribution of transaction fees across different currency pairs.

2. Calculate the average transaction fee as a percentage of the transaction amount for each currency pair.

Use DBBeaver for this task.

> Right click on your DB connection > SQL Editor > Open SQL script