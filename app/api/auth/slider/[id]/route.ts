import { connectToDatabase } from "@/app/api/helpers/server-helpers";
import prisma from "@/prisma";
import { ParamsType } from "@/types/paramTypes";
import { NextResponse } from "next/server";

export const GET = async (req: Request,{params}:{params:ParamsType}) => {
  // GET a slider by id
  await connectToDatabase();
  const url = params.id;

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

export const PUT = async (req: Request,{params}:{params:ParamsType}) => {
  // UPDATE a slider by id
  await connectToDatabase();
  let { key, img } = await req.json();
  const url = params.id;
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

export const DELETE = async (req: Request,{params}:{params:ParamsType}) => {
  // DELETE a slider by id
  const url = params.id;
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
