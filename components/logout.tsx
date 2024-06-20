"use client"
import React from 'react'

import { signOut } from 'next-auth/react';
import { Button } from '@chakra-ui/react';

function Logout() {
  return (
    <Button onClick={() => signOut()}>
    Log-Out
  </Button>
  )
}

export default Logout