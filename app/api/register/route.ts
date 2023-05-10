import bcript from 'bcrypt'
import prisma from '@/app/libs/prisma'
import { NextResponse } from 'next/server'
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(req: Request) {
  
  
  const body = await req.json()
  
  const { email, name, password } = body

  const hashedPassword = await bcript.hash(password, 12)

  const user = await prisma.user.create({
    data: {
      email, name, hashedPassword
    }
  })

  return NextResponse.json(user)
}