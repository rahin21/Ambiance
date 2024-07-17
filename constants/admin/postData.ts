export async function getPostData() {
    const res = await fetch("http://localhost:3000/api/post", {
      next: { tags: ["posts"] },
    });
    return res.json();
  }
  