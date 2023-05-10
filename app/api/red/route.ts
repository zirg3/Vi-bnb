import bcript from 'bcrypt'
import prisma from '@/app/libs/prisma'
import { NextResponse } from 'next/server'
import getCurrentUser from '@/app/actions/getCurrentUser';
import { getSession } from 'next-auth/react';

export async function GET(req: Request, res: Response) {
  
  
  // const body = await req.json()
  
  // const { email, name, password } = body

  // const user = await prisma.user.create({
  //   data: {
  //     email, name, hashedPassword
  //   }
  // })
  const session = await getSession({req});
  // const {currentUser} = await serverAuth(req)
  return NextResponse.json(123)
}