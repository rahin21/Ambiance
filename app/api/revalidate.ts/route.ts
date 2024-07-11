"use server"

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function revalidateMenu()
{
    revalidateTag("menu");

}
export async function revalidateSetting()
{
    revalidateTag("setting");

}
export async function revalidateSlider()
{
    revalidateTag("slider");
}
export async function revalidateAbout()
{
    revalidateTag("about");
}