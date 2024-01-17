import { NextResponse } from 'next/server';
import knex from '@/db/knex'

export async function GET() {
  const users = knex.from('users').select('email')

  return NextResponse.json({result: users});
}