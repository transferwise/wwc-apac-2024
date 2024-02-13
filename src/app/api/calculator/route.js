import { NextResponse } from "next/server";
import knex from "@/db/knex";

/*
  INPUT: sourceAmount, sourceCurrency, targetCurrency
  OUTPUT: returns rate, fee and target amount
*/
export async function POST(req) {
  const data = await req.json();
  const { sourceAmount, sourceCurrency, targetCurrency } = data;

  const rate = await knex
    .from("rates")
    .where({
      sourceCurrency: sourceCurrency,
      targetCurrency: targetCurrency,
    })
    .andWhere("date", "<", knex.fn.now())
    .first();

  if (rate === undefined) {
    return NextResponse.json({
      ...data,
      fee: -1,
      rate: -1,
      targetAmount: -1,
    })
  }

  //Task 2: Calculate Target Amount correctly. 
  //TODO:
  const fee = (1 / 100) * sourceAmount; //we charge a fixed 1% fee on  all transfers
  const total = sourceAmount + fee;
  const targetAmount = total * rate.rate;
  const roundedNumber = formatNumberWithTwoDecimals(targetAmount);

  return NextResponse.json({
    ...data,
    fee: fee,
    rate: rate.rate,
    targetAmount: roundedNumber,
  });
}

function formatNumberWithTwoDecimals(number) {
  const formattedNumber = Number(number).toFixed(2);
  return formattedNumber.replace(/\.00$/, ''); // Remove decimal part if it's .00
}
