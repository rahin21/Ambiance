import React from 'react'
import { authOptions } from '@/app/api/[...nextauth]/authOptions'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Logout from '@/components/logout';


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
