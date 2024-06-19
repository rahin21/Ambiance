"use client"
import React from 'react'
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

function Logout() {
  return (
    <Button onClick={() => signOut()}>
    Log-Out
  </Button>
  )
}

export default Logout