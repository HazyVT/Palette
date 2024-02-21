import { Avatar, AvatarBadge, Box, Divider, Icon, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, SkeletonCircle, Text } from "@chakra-ui/react";
import { CiBellOff, CiBellOn, CiMountain1, CiSearch } from "react-icons/ci";
import { LuLayoutGrid } from "react-icons/lu";
import { BsFillGridFill } from "react-icons/bs";
import { IoAnalyticsOutline, IoTicket } from "react-icons/io5";







import { useState } from "react";
import { IconType } from "react-icons";



export default function Dashboard(props: {text: string, background: string, primary: string, secondary: string, accent: string, bglight: string}) {

    const [ active, setActive ] = useState('home');
    const [ isLoaded, setIsLoaded ] = useState(false);


    const accent = props.accent;
    const primary = props.primary;
    const secondary = props.secondary;
    const text = props.text


    let col = "";
    if (props.text == "white") {
        col = "black";
    } else if (props.text == "black") {
        col = "white";
    }

    function TopNav() {
        return (
            <Box w='80vw' h='8vh' padding={4} bgColor={props.bglight} display='flex' justifyContent='space-between'>
                    <Box display='flex'>
                        <Box display='flex' alignItems='center'>
                            <Icon as={CiMountain1} w={8} h={8} />
                            <Text fontSize={26} fontWeight={500} marginLeft={1}>PEAK</Text>
                            <Divider orientation="vertical"  marginLeft={8}/>
                        </Box>
                        <InputGroup w='20vw' marginLeft={8}>
                            <InputRightElement>
                                <Icon as={CiSearch} />
                            </InputRightElement>
                            <Input variant='outline' placeholder="Search here" _placeholder={{color: 'gray.400'}} focusBorderColor={props.primary}/>
                        </InputGroup>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <Divider orientation="vertical" marginRight={4} />
                        <Icon as={CiBellOn} w={6} h={6} marginRight={4} cursor="pointer" />
                        <SkeletonCircle isLoaded={isLoaded} onLoad={() => setIsLoaded(true)}>
                            <Avatar src="https://avatar.iran.liara.run/public" size='sm' cursor="pointer">
                                <AvatarBadge boxSize='1em' bgColor='green.500' />
                            </Avatar>
                        </SkeletonCircle>
                        <Box marginLeft={4}>
                            <Text fontSize={12}>Ann Hatheway</Text>
                            <Text color={text == "white" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"} fontSize={10}>Admin</Text>
                        </Box>
                    </Box>
                </Box>
        )
    }

    function SideTab(props: {name: string, icon: IconType}) {
        return (
            <Box display='flex' alignItems='center' cursor="pointer" marginTop={4} _hover={{color: secondary}}>
                <Icon as={props.icon} w={5} h={5}/>
                <Text marginLeft={2}>{props.name}</Text>
            </Box>
        )
    }
    
    return (
        <Box w='100wh' h='100vh' display='flex' flexDir='column' alignItems='center' justifyContent='center' marginLeft={44} color={props.text}>
            <Box w='80vw' h='80vh' bgColor={props.background} borderRadius={'10px'} shadow='md'>
                <TopNav />
                <Box>
                    <Box w='9vw' h='72vh' borderBottomLeftRadius={'10px'} bgColor={props.bglight} padding={4}>
                        <SideTab name="Dashboard" icon={BsFillGridFill}/>
                        <SideTab name="Analytics" icon={IoAnalyticsOutline} />
                        <SideTab name="Invoice" icon={IoTicket} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}