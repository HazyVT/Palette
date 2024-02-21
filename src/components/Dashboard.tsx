import { Avatar, AvatarBadge, Badge, Box, Icon, Image, Input, InputGroup, InputLeftElement, SkeletonCircle, Text } from "@chakra-ui/react";
import { WiStars } from "react-icons/wi";
import { FaHome, FaUsers, FaSearch, FaHeart } from "react-icons/fa";
import { RiQuestionnaireFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaGear, FaMessage } from "react-icons/fa6";



import { useState } from "react";



export default function Dashboard(props: {text: string, background: string, primary: string, secondary: string, accent: string}) {

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

    function SidebarTab(props: {icon: typeof FaHome, text: string}) {
        return (
            <Box 
                display='flex' 
                alignItems='center' 
                bgColor={active === props.text.toLocaleLowerCase() ? accent : 'none'} 
                padding={2} borderRadius={'4px'} 
                color={active === props.text.toLowerCase() ? col : props.text}
                onClick={() => setActive(props.text.toLowerCase())}
                cursor={"pointer"}
            >
                <Icon as={props.icon} />
                <Text fontSize={16} fontWeight={500} marginLeft={2}>{props.text}</Text>
            </Box>
        )
    }

    function SidePanel() {
        return (
            <Box w='12vw' h='60vh' bgColor={props.background}>
                <Box marginTop={4} marginLeft={2}>
                    <SidebarTab icon={FaHome} text="Home" />
                    <SidebarTab icon={RiQuestionnaireFill} text="Questions" />
                    <SidebarTab icon={AiFillMessage} text="Messages" />
                    <SidebarTab icon={FaUsers} text="Friends" />
                </Box>
            </Box>
        )
        
    }

    function Navigation() {
        return (
            <Box display='flex' justifyContent='space-between' h='fit-content'>
                    <Box display='flex' alignItems='center'>
                        <Icon as={WiStars} w={10} h={10}/>
                        <Text fontWeight={600} fontSize={24}>QUESTIONS</Text>
                    </Box>
                    <InputGroup w='20vw'>
                        <InputLeftElement>
                            <Icon as={FaSearch} />
                        </InputLeftElement>
                        <Input variant='flushed' id="Input" focusBorderColor={props.accent}/>
                    </InputGroup>
                    <Box display='flex' alignItems='center'>
                        <Icon _hover={{color: secondary}} as={FaGear} w={5} h={5} cursor="pointer" />
                        <Icon _hover={{color: secondary}} as={IoNotifications} w={6} h={6} marginLeft={4} cursor="pointer" />
                        <SkeletonCircle marginLeft={4} isLoaded={isLoaded} onLoad={() => setIsLoaded(true)}>
                            <Avatar size='sm' src="https://avatar.iran.liara.run/public" cursor={"pointer"}>
                                <AvatarBadge boxSize='1em' bgColor='green.300'/>
                            </Avatar>
                        </SkeletonCircle>
                        
                    </Box>
                </Box>
        )
    }

    function QuestionBox(props: {name: string, text: string, image: string, icon: string}) {

        const [ isLoading, setIsLoading ] = useState(false);
        
        return (
            <Box w='40vw' h="fit-content" bgColor={secondary} padding={4} borderRadius={'10px'} marginTop={4} boxShadow='md'>
                <Box display='flex' alignItems='center'>
                    <SkeletonCircle isLoaded={isLoaded} onLoad={() => setIsLoaded(true)}>
                        <Avatar size='sm' bgColor={primary} src={props.icon}/>
                    </SkeletonCircle>
                    <Text marginLeft={4} fontSize={18} fontWeight={500}>{props.name}</Text>
                </Box>
                <Text fontSize={18} marginTop={4}>{props.text}</Text>
                <Image src={props.image} borderRadius={'10px'} marginTop={2} w='800px'/>
                <Box marginTop={2} color={text}>
                    <Badge variant={'subtle'} bgColor={primary} borderRadius={'2px'} color={text == "white" ? 'black' : 'white'}>Javascript</Badge>
                    <Badge variant={'subtle'} bgColor={accent} marginLeft={2} color={text == "white" ? 'black' : 'white'}>React</Badge>
                    <Badge variant={'subtle'} bgColor={primary} marginLeft={2} color={text == "white" ? 'black' : 'white'}>Typescript</Badge>
                </Box>
                <Box marginTop={2} display='flex'>
                    <Box display='flex' alignItems='center'>
                        <Icon as={FaMessage} w={'1rem'} h={'1rem'}/>
                        <Text marginLeft={2}>24</Text>
                    </Box>
                    <Box display='flex' alignItems='center' marginLeft={4}>
                        <Icon as={FaHeart} w={'1.1rem'} h={'1.1rem'}/>
                        <Text marginLeft={1.2}>31</Text>
                    </Box>
                </Box>
            </Box>
        )

    }
    
    return (
        <Box w='100wh' h='90vh' display='flex' flexDir='column' alignItems='center' justifyContent='center' marginLeft={44} color={props.text}>
            <Box w='80vw' h='80vh' bgColor={props.background} borderRadius={'10px'} padding={4} shadow='md'>
                <Navigation />
                <Box display='flex'>
                    <SidePanel />
                    <Box w='50vw' h='68vh' marginTop={4} marginLeft={4} paddingLeft={12} overflow={'clip'}>
                        <Text fontSize={34} fontWeight={600}>ALL QUESTIONS</Text>
                        <QuestionBox icon={"https://avatar.iran.liara.run/public/26"} name={"Andrew Botez"} text={"How do I create a variable that updates in react? Heres what I tried."} image={"/codexample.jpeg"} />
                        <QuestionBox icon={"https://avatar.iran.liara.run/public/94"} name={"Priscilla Dunn"} text={"How do I create a variable that updates in react? Heres what I tried."} image={"/codexample.jpeg"} />
                        <QuestionBox icon={"https://avatar.iran.liara.run/public/74"} name={"Jessica Gardner"} text={"How do I create a variable that updates in react? Heres what I tried."} image={"/codexample.jpeg"} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}