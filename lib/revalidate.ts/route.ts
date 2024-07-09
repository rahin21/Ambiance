"use server"

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function revalidateMenu()
{
    revalidateTag("menu");
    redirect("/admin/menu");
}
export async function revalidateSetting()
{
    revalidateTag("setting");
    redirect("/admin/setting");
}