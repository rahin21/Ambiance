import PrivacyTermForm from "@/components/tailAdmin/privacy/privacyForm";
import PrivacyTable from "@/components/tailAdmin/privacy/privacyTable";
import { getPrivacyData } from "@/constants/admin/privacyData";
import React from "react";

async function PrivacyInformation() {
  const privacy = await getPrivacyData();
  return (
    <div>
      <h4 className="text-2xl font-semibold text-black mb-4">
        Add Privacy Information
      </h4>
      <PrivacyTermForm privacy/>
      {privacy && 
      <PrivacyTable privacyTerms={privacy} privacy/>
      }
    </div>
  );
}

export default PrivacyInformation;
