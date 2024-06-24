import prisma from "@/prisma";
import { connectToDatabase } from "../../helpers/server-helpers"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectToDatabase();
        const contact = await prisma.contact.findMany();
        return NextResponse.json({contact}, {status:200})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        await prisma.$disconnect();
    }
}

export const POST = async (req: Request) => {
    try {
      await connectToDatabase();
      let { email, phone } = await req.json();
      if (!email || !phone)
        return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
      const contact = await prisma.contact.create({
        data: { email, phone },
      });
      return NextResponse.json({ contact }, {status: 201});
    } catch (error) {
      console.log(error);
      return NextResponse.json({message:"Server Error"}, {status: 500})
    } finally {
      await prisma.$disconnect();
    }
  };
  