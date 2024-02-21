import { useState } from "react";
import Dashboard from "./components/Dashboard";
import { Box, Button, Icon, Text, Tooltip, useToast } from "@chakra-ui/react";
import { themes } from './assets/themes.json';
import { FaSun, FaMoon } from "react-icons/fa6";
import Finance from "./components/Finance";


function App() {

  const [num, setNum ] = useState(0);

  const theme = themes[num];
  const toast = useToast();

  const [ isLightMode, setIsLigthMode ] = useState(true);
  const [ bgColor, setBgColor ] = useState(theme.light[0]);
  const [ primaryColor, setPrimaryColor ] = useState(theme.light[1]);
  const [ secondaryColor, setSecondaryColor ]  = useState( theme.light[2]);
  const [ accentColor, setAccentColor ] = useState(theme.light[3]);
  const [ textColor, setTextColor ] = useState('black');


  const setAllColors = (nl: boolean, num: number) => {
    const theme = themes[num];
    if (nl == false) {
      setBgColor(theme.dark[0]);
      setPrimaryColor(theme.dark[1]);
      setSecondaryColor(theme.dark[2]);
      setAccentColor(theme.dark[3]);
      setTextColor('white')
    } else {
      setBgColor(theme.light[0]);
      setPrimaryColor(theme.light[1]);
      setSecondaryColor(theme.light[2]);
      setAccentColor(theme.dark[3]);
      setTextColor('black');
    }
  }

  const toggleMode = () => {
    const nl = !isLightMode;
    setIsLigthMode(!isLightMode);
    setAllColors(nl, num);
  }

  const generateNewColors = () => {
    const num = Math.floor(Math.random() * themes.length);
    setNum(num);
    setAllColors(isLightMode, num)
  }

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    toast({
      title: "Copied to clipboard",
      status: "success",
      duration: 2000
    })
  } 

  return (
    <>
      <Box>
        <Dashboard text={textColor} background={bgColor} primary={primaryColor} secondary={secondaryColor} accent={accentColor}/>
        <Finance text={textColor} background={bgColor} primary={primaryColor} secondary={secondaryColor} accent={accentColor}/>
      </Box>
      <Box pos='fixed' w='10vw' h='100vh' boxShadow='md' left='0' top='0' display='flex' flexDir='column' alignItems='center' padding={12} justifyContent='space-between'>
        <Button onClick={generateNewColors} colorScheme="teal" fontSize={'1vw'}>Generate</Button>
        <Box display='flex' flexDir='column' justifyContent='center' alignItems='center'>
          <Icon as={isLightMode ? FaMoon : FaSun} onClick={toggleMode} cursor="pointer"/>
          <Tooltip hasArrow label={bgColor}>
            <Button w='8vw' onClick={() => {copyColor(bgColor)}} color={textColor} cursor="default" marginTop={4} bgColor={bgColor} _hover={{bgColor: bgColor}} fontSize={'1vw'}>Background</Button>
          </Tooltip>
          <Tooltip hasArrow label={primaryColor}>        
            <Button w='8vw' onClick={() => {copyColor(primaryColor)}} color={textColor} cursor="default" marginTop={4} bgColor={primaryColor} _hover={{bgColor: primaryColor}} fontSize={'1vw'}>Primary</Button>
          </Tooltip>
          <Tooltip hasArrow label={secondaryColor}>
            <Button w='8vw' onClick={() => {copyColor(secondaryColor)}} color={textColor} cursor="default" marginTop={4} bgColor={secondaryColor} _hover={{bgColor: secondaryColor}} fontSize={'1vw'}>Secondary</Button>
          </Tooltip>
          <Tooltip hasArrow label={accentColor}>
            <Button w='8vw' onClick={() => {copyColor(accentColor)}} color={textColor} cursor="default" marginTop={4} bgColor={accentColor} _hover={{bgColor: accentColor}} fontSize={'1vw'}>Accent</Button>
          </Tooltip>
        </Box>
      </Box>
      <Text pos='fixed' bottom='4' right='4' color={textColor === "black" ? "black" : "gray.400"}>Made By Hazy | Version 1.0</Text>
    </>
  )
}

export default App
