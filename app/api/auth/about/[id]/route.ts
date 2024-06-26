import { connectToDatabase } from "@/app/api/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  // GET a about by id
  await connectToDatabase();
  const url = req.url.split("about/")[1];

  try {
    const getUniqueAbout = await prisma.about.findUnique({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ getUniqueAbout }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const PUT = async (req: Request) => {
  // UPDATE a about by id
  await connectToDatabase();
  let { avatar, title, subTitle } = await req.json();
  const url = req.url.split("about/")[1];
  if (!avatar || !title || !subTitle)
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  try {
    const updateAbout = await prisma.about.update({
      where: {
        id: url || "",
      },
      data: {
        avatar, title, subTitle 
      },
    });
    return NextResponse.json({ updateAbout }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const DELETE = async (req: Request) => {
  // DELETE a about by id
  const url = req.url.split("about/")[1];
  try {
    const deleteAbout = await prisma.about.delete({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ deleteAbout }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
