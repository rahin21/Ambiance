import { connectToDatabase } from "@/app/api/helpers/server-helpers"
import prisma from "@/prisma"
import { NextResponse } from "next/server"

export const GET = async (req:Request) => {
    // GET a homePost by id
    await connectToDatabase();
    const url = req.url.split('home-post/')[1]

    try {
        const getUniqueHomePost = await prisma.homePost.findUnique({
            where:{
                id: url || "" 
            }
        })
        return NextResponse.json({getUniqueHomePost: getUniqueHomePost},{status:200})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        prisma.$disconnect()
    }
}

export const PUT = async (req:Request) => {
    // UPDATE a homePost by id
    await connectToDatabase();
    let { imageLink, heading, subHeading, description, linkHeading, link } = await req.json();
    const url = req.url.split('home-post/')[1]
    if (imageLink ||
        !heading ||
        !subHeading ||
        !description ||
        !linkHeading ||
        !link)
        return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    try {
        const updateHomePost = await prisma.homePost.update({
            where:{
                id: url|| "" 
            },
            data:{
                imageLink, heading, subHeading, description, linkHeading, link
            }
        })
        return NextResponse.json({updateHomePost},{status:201})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        prisma.$disconnect()
    }
}

export const DELETE = async (req:Request) => {
    // DELETE a homePost by id
    const url = req.url.split('home-post/')[1]
    try {
        const deleteHomePost = await prisma.homePost.delete({
            where:{
                id: url || "" 
            }
        })
        return NextResponse.json({deleteHomePost: deleteHomePost},{status:201})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        prisma.$disconnect()
    }
}