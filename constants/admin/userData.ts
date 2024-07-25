export async function getUserData() {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/user`, {
      next: { tags: ["user"] },
    });
    return res.json();
  }

export const userData = async ()=>{
    return await getUserData;
}