import prisma from "@/prisma";
import { connectToDatabase } from "../../helpers/server-helpers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();
    const homePost = await prisma.homePost.findMany();
    return NextResponse.json({ homePost }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request) => {
  try {
    await connectToDatabase();
    let { imageLink, heading, subHeading, description, linkHeading, link } =
      await req.json();
    if (
      imageLink ||
      !heading ||
      !subHeading ||
      !description ||
      !linkHeading ||
      !link
    )
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    const homePost = await prisma.homePost.create({
      data: { imageLink, heading, subHeading, description, linkHeading, link },
    });
    return NextResponse.json({ homePost }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
