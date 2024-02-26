import { NextResponse } from 'next/server';
import knex from '@/db/knex'

export async function GET(req, res) {
    const transferId = res.params.transfer
    // Task 2: TODO Join with pricing table to get the fee
    const transferWithPricing = await knex.from({t: 'transfers'})
        .select('t.*')
        .where('t.transferId', transferId);
    
    if (transferWithPricing.length > 0) {
        return NextResponse.json(transferWithPricing[0]);
    } else {
        return NextResponse.json({ error: 'Transfer not found!' }, { status: 404 })
    }


}