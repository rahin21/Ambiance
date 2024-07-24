import PrivacyTermForm from '@/components/tailAdmin/privacy/privacyForm'
import { getPrivacyData, getTermData } from '@/constants/admin/privacyData';
import React from 'react'


async function PrivacyTermKey() {
  const term = await getTermData();
  return (
    <div>
        <PrivacyTermForm privacyTerms={term} terms isUpdate/>
    </div>
  )
}

export default PrivacyTermKey