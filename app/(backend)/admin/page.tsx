import React from 'react'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Logout from '@/components/logout';
import { authOptions } from '@/lib/auth';
import NavBar from './sidebar/navBar';


async function page() {
  const session = await getServerSession(authOptions);
  if(session?.user){
    return (
      <>
      <NavBar/>    
      </>
    )
  }
  else{
    redirect('/login')
  }

}

export default page
