//@ts-nocheck
"use client"
import { useState } from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'

import Header from './components/header'
import Sidebar from './components/sidebar'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

export default function NavBar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  return (
    <>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box ml={!variants?.navigationButton && 200}>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
        
      </Box>
    </>
  )
}
