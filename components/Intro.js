import React from 'react'
import { Avatar, Box, HStack, Text } from 'native-base'

export default function Intro() {
  return (
    <Box mt={8}>
        <HStack justifyContent={"space-between"}>
            <Avatar
                source={{
                    uri:"https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg"
                }}>
                SS
            </Avatar>
            
            <Box>
                <Text fontSize={14} fontWeight={"light"} color={"gray.600"}>My Location</Text>
                <Text fontSize={16} fontWeight={"bold"}>Accra, Ghana</Text>
            </Box>

            <Avatar
                source={{
                    uri:"https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg"
                }}>
                SS
            </Avatar>
        </HStack>
    </Box>
  )
}