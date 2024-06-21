import React from 'react'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Logout from '@/components/logout';
import { authOptions } from '@/lib/auth';


async function page() {
  const session = await getServerSession(authOptions);
  if(session?.user){
    return (
      <>
      <div>Welcome admin panel</div>
      <Logout/>
      </>
    )
  }
  else{
    redirect('/login')
  }

}

export default page
