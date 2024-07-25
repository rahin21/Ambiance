import PrivacyTermForm from '@/components/tailAdmin/privacy/privacyForm'
import PrivacyTable from '@/components/tailAdmin/privacy/privacyTable'
// import { getTermData } from '@/constants/admin/privacyData'
import React from 'react'

async function getTermData() {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/privacy-term/terms`,
      {
        next: { tags: ["privacyTerms"] },
      }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function TermsOfServices() {
  const term = await getTermData();

  return (
    <div>
       <h4 className="text-2xl font-semibold text-black mb-4">
        Add Terms of Services
      </h4>
      <PrivacyTermForm terms/>
      {term &&
      <PrivacyTable privacyTerms={term} terms/>
      }
    </div>
  )
}

export default TermsOfServices