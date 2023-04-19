import React from "react";
import { Box, NativeBaseProvider } from "native-base";
import Home from "./pages/Home";
import Tabs from "./components/Tabs";
import { NavigationContainer } from "@react-navigation/native";


// YOUR INTERVIEW
// persol systems

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer> 
    </NativeBaseProvider>
  );
}
