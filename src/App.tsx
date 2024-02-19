import { useEffect, useState } from "react"
import Dashboard from "./components/Dashboard"
import { Box, Button, Icon } from "@chakra-ui/react";
import { themes } from './assets/themes.json';
import { FaSun, FaMoon } from "react-icons/fa6";


function App() {

  const [ isLightMode, setIsLigthMode ] = useState(true);

  const [num, setNum ] = useState(0);

  const theme = themes[num];

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

  return (
    <>
      <Dashboard text={textColor} background={bgColor} primary={primaryColor} secondary={secondaryColor} accent={accentColor}/>
      <Box pos='fixed' w='10vw' h='100vh' boxShadow='md' left='0' top='0' display='flex' flexDir='column' alignItems='center' padding={12} justifyContent='space-between'>
        <Button onClick={generateNewColors} colorScheme="teal" fontSize={'1vw'}>Generate</Button>
        <Box display='flex' flexDir='column' justifyContent='center' alignItems='center'>
          <Icon as={isLightMode ? FaMoon : FaSun} onClick={toggleMode} cursor="pointer"/>
          <Button w='8vw' color={textColor} cursor="default" marginTop={4} bgColor={bgColor} _hover={{bgColor: bgColor}} fontSize={'1vw'}>Background</Button>
          <Button w='8vw' color={textColor} cursor="default" marginTop={4} bgColor={primaryColor} _hover={{bgColor: primaryColor}} fontSize={'1vw'}>Primary</Button>
          <Button w='8vw' color={textColor} cursor="default" marginTop={4} bgColor={secondaryColor} _hover={{bgColor: secondaryColor}} fontSize={'1vw'}>Secondary</Button>
          <Button w='8vw' color={textColor} cursor="default" marginTop={4} bgColor={accentColor} _hover={{bgColor: accentColor}} fontSize={'1vw'}>Accent</Button>
        </Box>
        <Button w='8vw' colorScheme="teal" fontSize={'1vw'}>Export</Button>
      </Box>
    </>
  )
}

export default App
