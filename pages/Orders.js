import { Box, Center, Text } from 'native-base'
import React from 'react'

export default function Orders() {
  return (
    <Box px="10" py={35}>
        <Center mt={40}>
            <Text fontWeight={"semibold"} fontSize="xl">Orders will be out soon...</Text>
        </Center>
    </Box>
  )
}