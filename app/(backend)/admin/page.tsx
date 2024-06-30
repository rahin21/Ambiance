import React from 'react'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Logout from '@/components/logout';
import { authOptions } from '@/lib/auth';
import { Metadata } from 'next';
import DefaultLayout from '@/components/tailAdmin/Layouts/DefautlLayout';

export const metadata: Metadata = {
  title: "Admin",
};

async function page() {
  
    return (
      
      <>
      admin
      </>
  
    )
  


}

export default page
