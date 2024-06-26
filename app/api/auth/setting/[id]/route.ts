import { connectToDatabase } from "@/app/api/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  // GET a setting by id
  await connectToDatabase();
  const url = req.url.split("setting/")[1];

  try {
    const getUniqueSetting = await prisma.setting.findUnique({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ getUniqueSetting }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const PUT = async (req: Request) => {
  // UPDATE a setting by id
  await connectToDatabase();
  let { name, description } = await req.json();
  const url = req.url.split("setting/")[1];
  if (!name || !description)
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  try {
    const updateSetting = await prisma.setting.update({
      where: {
        id: url || "",
      },
      data: {
        name,
        description,
      },
    });
    return NextResponse.json({ updateSetting }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const DELETE = async (req: Request) => {
  // DELETE a setting by id
  const url = req.url.split("setting/")[1];
  try {
    const deleteSetting = await prisma.setting.delete({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ deleteSetting }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
