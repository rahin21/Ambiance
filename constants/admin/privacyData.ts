export async function getPrivacyData() {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/privacy-term/privacy`, {
      next: { tags: ["privacyTerms"] },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  
  export async function getTermData() {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/privacy-term/terms`, {
      next: { tags: ["privacyTerms"] },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  