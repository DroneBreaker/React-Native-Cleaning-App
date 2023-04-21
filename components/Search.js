import { Box, Input } from "native-base";

export default function Search() {
    return (
        <Input 
            mt="6" borderRadius={25} 
            bg={'gray.300'} 
            fontWeight={"bold"} 
            placeholderTextColor={"black"} 
            textDecorationColor={"black"} placeholder="Search services" px={6}
        />
    )
}