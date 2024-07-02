import { connectToDatabase } from "@/app/api/helpers/server-helpers";
import prisma from "@/prisma";
import { ParamsType } from "@/types/paramTypes";
import { NextResponse } from "next/server";

export const GET = async (req: Request,{params}:{params:ParamsType}) => {
  // GET a setting by id
  await connectToDatabase();
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("id");;

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

export const PUT = async (req: Request,{params}:{params:ParamsType}) => {
  // UPDATE a setting by id
  await connectToDatabase();
  let { name, description } = await req.json();
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("id");;
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

export const DELETE = async (req: Request,{params}:{params:ParamsType}) => {
  // DELETE a setting by id
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("id");;
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
