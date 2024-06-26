import prisma from "@/prisma";
import { connectToDatabase } from "../../helpers/server-helpers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();
    const service = await prisma.service.findMany();
    return NextResponse.json({ service }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request) => {
  try {
    await connectToDatabase();
    let { thumbnail, title, subTitle, description, linkId } =
      await req.json();
    if (
      !thumbnail ||
      !title ||
      !subTitle ||
      !description ||
      !linkId
    )
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    const service = await prisma.service.create({
      data: { thumbnail, title, subTitle, description, linkId },
      include:{
        link:true
      }
    },
  );
    return NextResponse.json({ service }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
