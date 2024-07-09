import { connectToDatabase } from "@/app/api/helpers/server-helpers";
import prisma from "@/prisma";
import { ParamsType } from "@/types/types";
import { NextResponse } from "next/server";

export const GET = async (req: Request,{params}:{params:ParamsType}) => {
  // GET a setting by id
  await connectToDatabase();

  const key = params.key;
  try {
    const getUniqueSetting = await prisma.setting.findUnique({
      where: {
        key: key || "",
      },
    });
    return NextResponse.json( getUniqueSetting , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const PUT = async (req: Request,{params}:{params:ParamsType}) => {
  // UPDATE a setting by id
  await connectToDatabase();
  const key_param = params.key;
  let {  key,name, description } = await req.json();

  if (!key || !name || !description )
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  try {
    const updateSetting = await prisma.setting.update({
      where: {
        key: key_param || "",
      },
      data: {
        name,
        description,
        key
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
  const key = params.key
  try {
    const deleteSetting = await prisma.setting.delete({
      where: {
        key: key || "",
      },
    });
    return NextResponse.json( deleteSetting , { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
