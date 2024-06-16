import { NextResponse } from "next/server";
import { connectToDatabase } from "../../helpers/server-helpers";
import bcrypt from "bcrypt";
import prisma from "@/prisma";

export const POST = async (req: Request) => {
  try {
    let { email, password, role } = await req.json();
    if (!email || !password || !role)
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    password = await bcrypt.hash(password, 10);
    await connectToDatabase;
    const users = await prisma.user.findMany();
    if(users.length<1){
      const user = await prisma.user.create({ data: { email, password, role } });
      return NextResponse.json({ user }, { status: 201 });
    }
    return NextResponse.json({message:"Cannot be more than one User."}, {status: 500})

  } catch (error) {
    console.log(error);

    return NextResponse.json({message:"Server Error"}, {status: 500})
  } finally {
    await prisma.$disconnect();
  }
};
