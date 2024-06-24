import { connectToDatabase } from "@/app/api/helpers/server-helpers"
import prisma from "@/prisma"
import { NextResponse } from "next/server"

export const GET = async (req:Request) => {
    // GET a menu by id
    await connectToDatabase();
    const url = req.url.split('menu/')[1]

    try {
        const getUniqueMenu = await prisma.menu.findUnique({
            where:{
                id: url || "" 
            }
        })
        return NextResponse.json({getUniqueMenu},{status:200})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        prisma.$disconnect()
    }
}

export const PUT = async (req:Request) => {
    // UPDATE a menu by id
    await connectToDatabase();
    let { name, link } = await req.json();
    const url = req.url.split('menu/')[1]
    if (!name || !link)
        return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    try {
        const updateMenu = await prisma.menu.update({
            where:{
                id: url|| "" 
            },
            data:{
                name,
                link
            }
        })
        return NextResponse.json({updateMenu},{status:201})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        prisma.$disconnect()
    }
}

export const DELETE = async (req:Request) => {
    // DELETE a menu by id
    const url = req.url.split('menu/')[1]
    try {
        const deleteMenu = await prisma.menu.delete({
            where:{
                id: url || "" 
            }
        })
        return NextResponse.json({deleteMenu},{status:201})
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    } finally {
        prisma.$disconnect()
    }
}