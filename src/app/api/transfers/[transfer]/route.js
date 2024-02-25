import { NextResponse } from 'next/server';
import knex from '@/db/knex'

export async function GET(req, { params }) {
    const transferId = params.transfer
    const transferWithPricing = await knex.from('transfers')
        .select('transfers.*', 'pricing.*')
        .join('pricing', 'transfers.transferId', 'pricing.transferId') //Task 2: This line will be missing and participants will add in //TODO:
        .where('transfers.transferId', transferId);
    return NextResponse.json({result: transferWithPricing});
}