import { connectToDatabase } from "@/app/api/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  // GET a post by id
  await connectToDatabase();
  const url = req.url.split("post/")[1];

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

export const PUT = async (req: Request) => {
  // UPDATE a post by id
  await connectToDatabase();
  let { key, img, gallery } = await req.json();
  const url = req.url.split("post/")[1];
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

export const DELETE = async (req: Request) => {
  // DELETE a post by id
  const url = req.url.split("post/")[1];
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
