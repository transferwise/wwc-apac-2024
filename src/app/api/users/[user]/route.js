import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    const userName = params.user
    return NextResponse.json({ user: `${userName}` })
}