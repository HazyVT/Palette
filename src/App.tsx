import { useState } from "react"
import Dashboard from "./components/Dashboard"
import { Box, Button } from "@chakra-ui/react";

function App() {

  const [ bgColor, setBgColor ] = useState('#f6f1f9');
  const [ primaryColor, setPrimaryColor ] = useState('#8a4cb5');
  const [ secondaryColor, setSecondaryColor ]  = useState('#d496cc');
  const [ accentColor, setAccentColor ] = useState('#c87baa');

  return (
    <>
      <Dashboard background={bgColor} primary={primaryColor} secondary={secondaryColor} accent={accentColor}/>
      <Box pos='fixed' w='10vw' h='100vh' boxShadow='md' left='0' top='0' display='flex' flexDir='column' alignItems='center' padding={12} justifyContent='space-between'>
        <Button colorScheme="teal">Generate</Button>
        <Box>
          <Button w='8vw' bgColor={bgColor} _hover={{bgColor: bgColor}}>Background</Button>
          <Button w='8vw' marginTop={4} bgColor={primaryColor} _hover={{bgColor: primaryColor}}>Primary</Button>
          <Button w='8vw' marginTop={4} bgColor={secondaryColor} _hover={{bgColor: secondaryColor}}>Secondary</Button>
          <Button w='8vw' marginTop={4} bgColor={accentColor} _hover={{bgColor: accentColor}}>Accent</Button>
        </Box>
        <Button w='8vw' colorScheme="teal">Export</Button>

      </Box>
    </>
  )
}

export default App
