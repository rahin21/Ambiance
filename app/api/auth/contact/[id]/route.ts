import { connectToDatabase } from "@/app/api/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  // GET a contact by id
  await connectToDatabase();
  const url = req.url.split("contact/")[1];

  try {
    const getUniqueContact = await prisma.contact.findUnique({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ getUniqueContact }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const PUT = async (req: Request) => {
  // UPDATE a contact by id
  await connectToDatabase();
  let { email, phone } = await req.json();
  const url = req.url.split("contact/")[1];
  if (!email || !phone)
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  try {
    const updateContact = await prisma.contact.update({
      where: {
        id: url || "",
      },
      data: {
        email,
        phone,
      },
    });
    return NextResponse.json({ updateContact }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const DELETE = async (req: Request) => {
  // DELETE a contact by id
  const url = req.url.split("contact/")[1];
  try {
    const deleteContact = await prisma.contact.delete({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ deleteContact }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
