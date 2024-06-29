import { connectToDatabase } from "@/app/api/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

interface ParamsType {
  id:string
}

export const GET = async ({params}:{params:ParamsType}) => {

  await connectToDatabase();
  const url = params.id

  try {
    const getUniquePost = await prisma.post.findUnique({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ getUniquePost }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const PUT = async (req: Request,{params}:{params:ParamsType}) => {
  // UPDATE a post by id
  await connectToDatabase();
  let { key, img, gallery } = await req.json();
  const url = params.id;
  if (!key || !img || !gallery)
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  try {
    const updatePost = await prisma.post.update({
      where: {
        id: url || "",
      },
      data: {
        key,
        img,
        gallery:{
          push:gallery
        }
      },
    });
    return NextResponse.json({ updatePost }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const DELETE = async ({params}:{params:ParamsType}) => {
  // DELETE a post by id
  const url = params.id;
  try {
    const deletePost = await prisma.post.delete({
      where: {
        id: url || "",
      },
    });
    return NextResponse.json({ deletePost }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
