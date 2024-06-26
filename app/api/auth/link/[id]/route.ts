import { connectToDatabase } from "@/app/api/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  // GET a link by id
  await connectToDatabase();
  const url = req.url.split("link/")[1];

  try {
    const getUniqueLink = await prisma.link.findUnique({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ getUniqueLink }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const PUT = async (req: Request) => {
  // UPDATE a link by id
  await connectToDatabase();
  let { text,  plainUrl} = await req.json();
  const url = req.url.split("link/")[1];
  if (!text || !plainUrl)
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  try {
    const updateLink = await prisma.link.update({
      where: {
        id: url || "",
      },
      data: {
        text,
        plainUrl,
      },
    });
    return NextResponse.json({ updateLink }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const DELETE = async (req: Request) => {
  // DELETE a link by id
  const url = req.url.split("link/")[1];
  try {
    const deleteLink = await prisma.link.delete({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ deleteLink }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
