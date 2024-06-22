//@ts-nocheck
import Logout from '@/components/logout';
import { Box, Center, IconButton, Text, Flex } from '@chakra-ui/react'
import { FaAngleRight } from "react-icons/fa6";

interface Props {
  onShowSidebar: Function
  showSidebarButton?: boolean
}

const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {
  return (
    <Flex bg="teal" p={4} color="white" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<FaAngleRight />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Center flex="1" h="40px">
        <Text fontSize="xl">Admin Panel</Text>
      </Center>
      <Box flex="1" />
      <Logout/>
    </Flex>
  )
}

export default Header
