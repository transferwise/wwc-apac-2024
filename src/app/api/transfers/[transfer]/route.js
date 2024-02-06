import { NextResponse } from 'next/server';
import knex from '@/db/knex'

export async function GET(req, { params }) {
    const transferId = params.transfer
    const transferWithPricing = await knex.from('transfers')
        .select('transfers.*', 'pricing.*')
        .join('pricing', 'transfers.transferId', 'pricing.transferId')
        .where('transfers.transferId', transferId);
    return NextResponse.json({result: transferWithPricing});
}