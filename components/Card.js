import { Box, Image, Pressable, Text, VStack } from 'native-base'
import React from 'react'

export default function Card() {
  return (
    <Pressable onPress={() => console.log('Just checking')} h={"72%"} w={"11%"} bg="orange.400" mt={4} rounded={"3xl"} px={2} mx={2}>
        <Box>
            <VStack>
                {/* <Image source={'aaa'} alt='Img'/> */}

                <Box bg={"white"} rounded={"xl"} h={20} w={"90%"} mt={4} mx={3}>
                    <VStack p={2} px={4}>
                        <Text fontSize={16} fontWeight={"bold"}>House renovation</Text>
                        <Text fontSize={12} color={'gray.500'} mt={2}>Repair</Text>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    </Pressable>
  )
}