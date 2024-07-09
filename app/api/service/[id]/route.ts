import { connectToDatabase } from "@/app/api/helpers/server-helpers"
import prisma from "@/prisma"
import { ParamsType } from "@/types/types";
import { NextResponse } from "next/server"

export const GET = async (req:Request,{params}:{params:ParamsType}) => {
    // GET a service by id
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
  const url = searchParams.get("id");

    try {
        const getUniqueService = await prisma.service.findUnique({
            where:{
                id: url || "" 
            }
        })
        return NextResponse.json({getUniqueService: getUniqueService},{status:200})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        prisma.$disconnect()
    }
}

export const PUT = async (req:Request,{params}:{params:ParamsType}) => {
    // UPDATE a service by id
    await connectToDatabase();
    let { thumbnail, title, subTitle, description, linkId } = await req.json();
    const { searchParams } = new URL(req.url);
  const url = searchParams.get("id");
    if (!thumbnail ||
        !title ||
        !subTitle ||
        !description ||
        !linkId)
        return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    try {
        const updateService = await prisma.service.update({
            where:{
                id: url|| "" 
            },
            data:{
                thumbnail, title, subTitle, description, linkId
            }
        })
        return NextResponse.json({updateService},{status:201})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        prisma.$disconnect()
    }
}

export const DELETE = async (req:Request,{params}:{params:ParamsType}) => {
    // DELETE a service by id
    const { searchParams } = new URL(req.url);
  const url = searchParams.get("id");
    try {
        const deleteService = await prisma.service.delete({
            where:{
                id: url || "" 
            }
        })
        return NextResponse.json({deleteService: deleteService},{status:201})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        prisma.$disconnect()
    }
}