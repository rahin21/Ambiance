import prisma from "@/prisma";
import { connectToDatabase } from "../helpers/server-helpers"
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        await connectToDatabase();
        const slider = await prisma.slider.findMany();
        return NextResponse.json({slider}, {status:200})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        await prisma.$disconnect();
    }
}

export const POST = async (req: Request) => {
    try {
      await connectToDatabase();
      let { key, img } = await req.json();
      if (!key || !img)
        return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
      const slider = await prisma.slider.create({
        data: { key, img },
      });
      return NextResponse.json({ slider }, {status: 201});
    } catch (error) {
      console.log(error);
      return NextResponse.json({message:"Server Error"}, {status: 500})
    } finally {
      await prisma.$disconnect();
    }
  };
  