import { NextResponse } from 'next/server';
import knex from '@/db/knex'

export async function GET(req, { params }) {
    console.log("YAAAAAAAA")
    const transferId = params.transfer
    const transfer = await knex.from('transfers')
        .select("*").where('transferId', transferId)
    return NextResponse.json({result: transfer});
}