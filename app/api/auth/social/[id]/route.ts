import { connectToDatabase } from "@/app/api/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  // GET a social by id
  await connectToDatabase();
  const url = req.url.split("social/")[1];

  try {
    const getUniqueSocial = await prisma.social.findUnique({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ getUniqueSocial }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const PUT = async (req: Request) => {
  // UPDATE a social by id
  await connectToDatabase();
  let { facebook, pinterest, insta, xtwitter, googleBusiness } =
    await req.json();
  const url = req.url.split("social/")[1];
  if (!facebook || !pinterest || !insta || !xtwitter || !googleBusiness)
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  try {
    const updateSocial = await prisma.social.update({
      where: {
        id: url || "",
      },
      data: {
        facebook,
        pinterest,
        insta,
        xtwitter,
        googleBusiness,
      },
    });
    return NextResponse.json({ updateSocial }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const DELETE = async (req: Request) => {
  // DELETE a social by id
  const url = req.url.split("social/")[1];
  try {
    const deleteSocial = await prisma.social.delete({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ deleteSocial }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
