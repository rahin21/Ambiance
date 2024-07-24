import PrivacyTermForm from '@/components/tailAdmin/privacy/privacyForm'
import { getPrivacyData } from '@/constants/admin/privacyData';
import React from 'react'


async function PrivacyTermKey() {
  const privacy = await getPrivacyData();
  return (
    <div>
        <PrivacyTermForm privacyTerms={privacy} privacy isUpdate/>
    </div>
  )
}

export default PrivacyTermKey