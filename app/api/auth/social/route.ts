import prisma from "@/prisma";
import { connectToDatabase } from "../../helpers/server-helpers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();
    const social = await prisma.social.findMany();
    return NextResponse.json({ social }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request) => {
  try {
    await connectToDatabase();
    let { facebook, pinterest, insta, xtwitter, googleBusiness } =
      await req.json();
    if (!facebook || !pinterest || !insta || !xtwitter || !googleBusiness)
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    const social = await prisma.social.create({
      data: { facebook, pinterest, insta, xtwitter, googleBusiness },
    });
    return NextResponse.json({ social }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
