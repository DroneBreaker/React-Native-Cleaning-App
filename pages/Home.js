import React from "react";
import { Box, Center, HStack, Heading, Icon, Link, ScrollView, Text, VStack } from "native-base";
import Search from "../components/Search";
import Card from "../components/Card";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <VStack>
      <Box h={"100%"} px="10" py={35}>
        <Intro/>
        
        <Heading mt={16} fontSize={45}>What services do you need?</Heading>

        <Search/>

        {/* Category section */}
        <HStack mt={10} justifyContent={"space-between"}>
          <Icon />

          <Heading fontSize={18}>Service Category</Heading>

          <Link isUnderlined>See more</Link>
        </HStack>

        <ScrollView h={120} w={80} horizontal>
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
        </ScrollView>
      </Box>
    </VStack>
  );
};