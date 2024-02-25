import { NextResponse } from 'next/server';
import knex from '@/db/knex'

export async function GET(req, res) {
    const transferId = res.params.transfer
    const transferWithPricing = await knex.from({t: 'transfers'})
        .select('t.*', 'pricing.*')
        .join('pricing', 't.transferId', 'pricing.transferId') //Task 2: This line will be missing and participants will add in //TODO:
        .where('t.transferId', transferId);
    
    if (transferWithPricing.length > 0) {
        return NextResponse.json(transferWithPricing[0]);
    } else {
        return NextResponse.json({ error: 'Transfer not found!' }, { status: 404 })
    }


}