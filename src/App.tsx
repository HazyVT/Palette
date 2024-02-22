import { useState } from "react";
import Dashboard from "./components/Dashboard";
import { Box, Button, Icon, IconButton, Menu, MenuButton, MenuList, Text, useToast } from "@chakra-ui/react";
import { themes } from './assets/themes.json';
import { FaSun, FaMoon } from "react-icons/fa6";
import Finance from "./components/Finance";
import { FaCircle } from "react-icons/fa";
import { shadeColor } from "./components/Exports";


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

  const [ primaryShadeLight, setPrimaryShadeLight ] = useState(shadeColor(theme.light[1], 15));
  const [ primaryShadeDark, setprimaryShadeDark ] = useState(shadeColor(theme.light[1], -15));
  const [ secondaryShadeLight, setSecondaryShadeLight ] = useState(shadeColor(theme.light[2], 15));
  const [ secondaryShadeDark, setSecondaryShadeDark ] = useState(shadeColor(theme.light[2], -15));
  const [ accentShadeLight, setAccentShadeLight ] = useState(shadeColor(theme.light[3], 15));
  const [ accentShadeDark, setAccentShadeDark ] = useState(shadeColor(theme.light[3], -15));


  const setAllColors = (nl: boolean, num: number) => {
    const theme = themes[num];
    if (nl == false) {
      setBgColor(theme.dark[0]);
      setPrimaryColor(theme.dark[1]);
      setSecondaryColor(theme.dark[2]);
      setAccentColor(theme.dark[3]);
      setTextColor('white')
      setPrimaryShadeLight(shadeColor(theme.dark[1], 15));
      setprimaryShadeDark(shadeColor(theme.dark[1], -15));
      setSecondaryShadeLight(shadeColor(theme.dark[2], 15));
      setSecondaryShadeDark(shadeColor(theme.dark[2], -15));
      setAccentShadeLight(shadeColor(theme.dark[3], 15));
      setAccentShadeDark(shadeColor(theme.dark[3], -15));
    } else {
      setBgColor(theme.light[0]);
      setPrimaryColor(theme.light[1]);
      setSecondaryColor(theme.light[2]);
      setAccentColor(theme.dark[3]);
      setTextColor('black');
      setPrimaryShadeLight(shadeColor(theme.dark[1], 15));
      setprimaryShadeDark(shadeColor(theme.dark[1], -15));
      setSecondaryShadeLight(shadeColor(theme.dark[2], 15));
      setSecondaryShadeDark(shadeColor(theme.dark[2], -15));
      setAccentShadeLight(shadeColor(theme.dark[3], 15));
      setAccentShadeDark(shadeColor(theme.dark[3], -15));
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

  const copyColor = (color: string, name: string) => {
    navigator.clipboard.writeText(color);
    toast({
      title: "Copied " + name + " to clipboard",
      status: "success",
      duration: 2000
    })
  } 

  return (
    <>
      <Box>
        <Dashboard text={textColor} background={bgColor} primary={primaryColor} secondary={secondaryColor} accent={accentColor} bglight={shadeColor(bgColor, 25)} primarylight={primaryShadeLight}/>
        <Finance text={textColor} background={bgColor} primary={primaryColor} secondary={secondaryColor} accent={accentColor}/>
      </Box>
      <Box w='6vw' h='30vh' pos='fixed' left='8' top='35%' display='flex' flexDir='column' alignItems='center' justifyContent='space-between'>
        <Button onClick={generateNewColors} size='sm' w='fit-content' colorScheme="facebook">Generate</Button>
        <IconButton colorScheme="facebook" aria-label="mode" icon={isLightMode ? <FaMoon /> : <FaSun />} onClick={toggleMode}></IconButton>
        <Box textAlign='center'>
          <Menu closeOnBlur={false}>
            <MenuButton as={Button} colorScheme="facebook" size='sm'>Colors</MenuButton>
            <MenuList padding={2}>
              <Box display='flex' alignItems='center'>
                <Icon as={FaCircle} color={bgColor} cursor={"pointer"} onClick={() => copyColor(bgColor, "Background")} />
                <Text marginLeft={2}>Background</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Icon as={FaCircle} color={primaryColor} cursor="pointer" onClick={() => copyColor(primaryColor, "Primary")}/>
                <Text marginLeft={2}>Primary</Text>
              </Box>
              <Box display='flex' alignItems='center' >
                <Icon as={FaCircle} color={primaryShadeLight} cursor="pointer" onClick={() => copyColor(primaryShadeLight, "Primary Lighter Shade")}/>
                <Text marginLeft={2}>Primary Lighter Shade</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Icon as={FaCircle} color={primaryShadeDark} cursor={"pointer"} onClick={() => copyColor(primaryShadeDark, "Primary Darker Shade")} />
                <Text marginLeft={2}>Primary Darker Shade</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Icon as={FaCircle} color={secondaryColor} cursor={"pointer"} onClick={() => copyColor(secondaryColor, "Secondary")} />
                <Text marginLeft={2}>Secondary</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Icon as={FaCircle} color={secondaryShadeLight} cursor={"pointer"} onClick={() => copyColor(secondaryShadeLight, "Secondary Lighter Shade")} />
                <Text marginLeft={2}>Secondary Lighter Shade</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Icon as={FaCircle} color={secondaryShadeDark} cursor={"pointer"} onClick={() => copyColor(secondaryShadeDark, "Secondary Darker Shade")} />
                <Text marginLeft={2}>Secondary Darker Shade</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Icon as={FaCircle} color={accentColor} cursor={"pointer"} onClick={() => copyColor(accentColor, "Accent")} />
                <Text marginLeft={2}>Accent</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Icon as={FaCircle} color={accentShadeLight} cursor={"pointer"} onClick={() => copyColor(accentShadeLight, "Accent Lighter Shade")} />
                <Text marginLeft={2}>Accent Lighter Shade</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Icon as={FaCircle} color={accentShadeDark} cursor={"pointer"} onClick={() => copyColor(accentShadeDark, "Accent Darker Shade")} />
                <Text marginLeft={2}>Accent Darker Shade</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Icon as={FaCircle} color={'#68D391'} cursor={"pointer"} onClick={() => copyColor('#68D391', "Positive Accent")} />
                <Text marginLeft={2}>Positive Accent</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Icon as={FaCircle} color={'#FC8181'} cursor={"pointer"} onClick={() => copyColor('#FC8181', "Negative Accent")} />
                <Text marginLeft={2}>Negative Accent</Text>
              </Box>
            </MenuList>
          </Menu>      
        </Box>
      </Box>
      
      <Text pos='fixed' bottom='4' right='4' color={textColor === "black" ? "black" : "gray.400"}>Made By Hazy | Version 1.1</Text>
    </>
  )
}

export default App
