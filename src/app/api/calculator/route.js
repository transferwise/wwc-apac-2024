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

  //Task 1: TODO Calculate Target Amount correctly using rateResponse.rate
  // Assume we charge a fixed 1% fee here
  return NextResponse.json({
    ...data,
    fee: fee,
    rate: rate.rate,
    targetAmount: "xx",
  });
}
