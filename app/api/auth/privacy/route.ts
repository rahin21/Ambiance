import prisma from "@/prisma";
import { connectToDatabase } from "../../helpers/server-helpers"
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        await connectToDatabase();
        const privacy = await prisma.privacy.findMany();
        return NextResponse.json({privacy}, {status:200})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        await prisma.$disconnect();
    }
}

export const POST = async (req: Request) => {
    try {
      await connectToDatabase();
      let { key, title, description } = await req.json();
      if (!key || !title || !description)
        return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
      const privacy = await prisma.privacy.create({
        data: { key, title, description },
      });
      
      return NextResponse.json({ privacy }, {status: 201});
    } catch (error) {
      console.log(error);
      return NextResponse.json({message:"Server Error"}, {status: 500})
    } finally {
      await prisma.$disconnect();
    }
  };
  