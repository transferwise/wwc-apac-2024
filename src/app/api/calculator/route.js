import { NextResponse } from "next/server";
import knex from "@/db/knex";

/*
  INPUT: sourceAmount, sourceCurrency, targetCurrency
  OUTPUT: returns rate, fee and target amount
*/
export async function POST(req) {
  const data = await req.json();
  const { sourceAmount, sourceCurrency, targetCurrency } = data;

  const fee = (1 / 100) * sourceAmount;
  const total = sourceAmount + fee;
  const rate = await knex
    .from("rates")
    .where({
      sourceCurrency: sourceCurrency,
      targetCurrency: targetCurrency,
    })
    .andWhere("date", "<", knex.fn.now())
    .first();
  const targetAmount = total * rate.rate;

  return NextResponse.json({
    ...data,
    fee: fee,
    rate: rate,
    targetAmount: targetAmount,
  });
}
