import { connectToDatabase } from "@/app/api/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  // GET a slider by id
  await connectToDatabase();
  const url = req.url.split("slider/")[1];

  try {
    const getUniqueSlider = await prisma.slider.findUnique({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ getUniqueSlider }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const PUT = async (req: Request) => {
  // UPDATE a slider by id
  await connectToDatabase();
  let { key, img } = await req.json();
  const url = req.url.split("slider/")[1];
  if (!key || !img)
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  try {
    const updateSlider = await prisma.slider.update({
      where: {
        id: url || "",
      },
      data: {
        key,
        img,
      },
    });
    return NextResponse.json({ updateSlider }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const DELETE = async (req: Request) => {
  // DELETE a slider by id
  const url = req.url.split("slider/")[1];
  try {
    const deleteSlider = await prisma.slider.delete({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ deleteSlider }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
