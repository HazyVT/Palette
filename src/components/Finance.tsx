import { Avatar, Badge, Box, Card, CardBody, CardFooter, Divider, Heading, Icon, IconButton, Image, SkeletonCircle, Stack, Text } from "@chakra-ui/react";
import { LuLayoutGrid, LuSearch, LuBell } from "react-icons/lu";
import { useState } from "react";
import { FaCaretRight, FaMessage } from "react-icons/fa6";
import { FaBookmark, FaCalendar, FaCompass, FaHeart, FaHome } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { MdKeyboardArrowLeft } from "react-icons/md";






export default function Finance(props: {text: string, background: string, primary: string, secondary: string, accent: string}) {

    const text = props.text;
    const bg = props.background;
    const primary = props.primary;
    const secondary = props.secondary;
    const accent = props.accent;

    const [ selectedTab, setSelectedTab ] = useState('all');
    const [ selectedNav, setSelectedNav ] = useState('home');

    const [ isLoaded, setIsLoaded ] = useState(false);

    function PageOne() {
        return (
            <Box pos='relative' w='20vw' h='42vw' bgColor={bg} shadow='md' borderRadius='10px' display='flex' flexDir='column' color={text}>
                <Box w='20vw' h='8vh' bgColor={bg} display='flex' justifyContent='space-between' padding={4} marginTop={4}>
                    <Icon as={LuLayoutGrid} w={5} h={5} _hover={{color: primary}} cursor="pointer" />
                    <Box>
                        <Icon as={LuSearch} w={5} h={5} _hover={{color: primary}} cursor="pointer" />
                        <Icon as={LuBell} w={5} h={5} _hover={{color: primary}} cursor="pointer" marginLeft={4}/>
                    </Box>
                </Box>
                <Box padding={2} display='flex' overflow='hidden' marginLeft={2}>
                    <Badge variant={selectedTab == "all" ? "solid" : ''} bgColor={selectedTab == "all" ? accent : secondary} cursor={"pointer"} onClick={() => setSelectedTab("all")}>All</Badge>
                    <Badge variant={selectedTab == "education" ? "solid" : ''} bgColor={selectedTab == "education" ? accent : secondary} cursor={"pointer"} onClick={() => setSelectedTab("education")} marginLeft={2}>Education</Badge>
                    <Badge variant={selectedTab == "health" ? "solid" : ''} bgColor={selectedTab == "health" ? accent : secondary} cursor={"pointer"} onClick={() => setSelectedTab("health")} marginLeft={2}>Health</Badge>
                    <Badge variant={selectedTab == "Technology" ? "solid" : ''} bgColor={selectedTab == "Technology" ? accent : secondary} cursor={"pointer"} onClick={() => setSelectedTab("Technology")} marginLeft={2}>Technology</Badge>
                    <Badge variant={selectedTab == "Gaming" ? "solid" : ''} bgColor={selectedTab == "Gaming" ? accent : secondary} cursor={"pointer"} onClick={() => setSelectedTab("Gaming")} marginLeft={2}>Gaming</Badge>
                </Box>
                <Box padding={4} overflow='clip'>
                    <Text fontSize={14} fontWeight={500}>RECOMMENDED FOR YOU</Text>
                    <Card marginTop={4} direction={{base: 'column', sm: 'row'}} overflow='hidden' variant='outline' w='18vw' h='20vh'>
                        <Image src="https://images.unsplash.com/photo-1606788075819-9574a6edfab3?q=80&w=3268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" objectFit="cover" w='50%'/>
                        <Stack>
                            <CardBody>
                                <Heading size='sm'>Family Quality Time</Heading>
                                <Text>
                                    why it is so important.
                                </Text>
                            </CardBody>
                            <CardFooter pos='relative'>
                                <Icon as={FaCaretRight} pos='absolute' right='4' bottom='4' cursor="pointer"/>
                            </CardFooter>
                        </Stack>
                    </Card>
                    <Card direction={{base: 'column', sm: 'row'}} overflow='hidden' variant='outline' w='18vw' h='20vh' marginTop={4}>
                        <Image src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" objectFit="cover" w='50%'/>
                        <Stack>
                            <CardBody>
                                <Heading size='sm'>Content Creation</Heading>
                                <Text>
                                    A quick guide
                                </Text>
                            </CardBody>
                            <CardFooter pos='relative'>
                                <Icon as={FaCaretRight} pos='absolute' right='4' bottom='4' cursor="pointer"/>
                            </CardFooter>
                        </Stack>
                    </Card>
                    <Card direction={{base: 'column', sm: 'row'}} overflow='hidden' variant='outline' w='18vw' h='20vh' marginTop={4}>
                        <Image src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" objectFit="cover" w='50%'/>
                        <Stack>
                            <CardBody>
                                <Heading size='sm'>Setup Aesthetics</Heading>
                                <Text>
                                    Make it look clean
                                </Text>
                            </CardBody>
                            <CardFooter pos='relative'>
                                <Icon as={FaCaretRight} pos='absolute' right='4' bottom='4' cursor="pointer"/>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Box>
                <Box w='20vw' h='6vh' bgColor={bg} pos='absolute' bottom='0' borderRadius={'10px'} display='flex' justifyContent='space-between' paddingLeft={4} paddingRight={4} alignItems='center'>
                    <Icon as={FaHome} w={5} h={5} color={selectedNav == "home" ? primary : text} onClick={() => setSelectedNav('home')} cursor="pointer"/>
                    <Icon as={FaCompass} w={5} h={5} color={selectedNav == "compass" ? primary : text} onClick={() => setSelectedNav('compass')} cursor="pointer"/>
                    <Icon as={FaBookmark} w={4} h={4} color={selectedNav == "bookmark" ? primary : text} onClick={() => setSelectedNav('bookmark')} cursor="pointer"/>
                    <SkeletonCircle w={5} h={5} isLoaded={isLoaded} onLoad={() => setIsLoaded(true)}>
                        <Avatar w={5} h={5} src="https://avatar.iran.liara.run/public" cursor="pointer"/>
                    </SkeletonCircle>
                </Box>
            </Box>
        )
    }

    function PageTwo() {

        const [ avatarLoaded, setAvatarLoaded ] = useState(false);
        const avatarIsLoaded = () => setAvatarLoaded(true);

        return (
            <Box w='20vw' h='42vw' bgColor={bg} shadow='md' borderRadius='10px' padding={0} display='flex' pos='relative'>
                <Image src={"https://images.unsplash.com/photo-1606788075819-9574a6edfab3?q=80&w=3268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} objectFit="cover" marginBottom={48} borderRadius={'10px'}/>
                <IconButton pos='absolute' left='4' top='12' aria-label="back" icon={<MdKeyboardArrowLeft />} bgColor={'white'} _hover={{bgColor: 'white'}} borderRadius='50%'/>
                <Box pos='absolute' w='8vw' h='3vw' bgColor={secondary} top='12' left='6.4vw' borderRadius={'50px'} display='flex' flexDir='column' justifyContent='center' alignItems='center'>
                    <Box display='flex' alignItems={'center'} marginLeft={1.5}>
                        <Icon as={FaHeart} w={2.5} h={2.5} />
                        <Text fontSize={12} marginLeft={1} marginRight={1}>36.5k</Text>
                        <Divider orientation="vertical" borderColor={text}/>
                        <Icon as={FaMessage} w={2.5} h={2.5} marginLeft={2} />
                        <Text fontSize={12} marginLeft={1} marginRight={1}>12.5k</Text>
                    </Box>
                </Box>
                <IconButton pos='absolute' right='4' top='12' aria-label="menu" icon={<CiMenuKebab />} bgColor={'white'} _hover={{bgColor: 'white'}} borderRadius='50%'/>
                <Box pos='absolute' h='35vh' bgColor={bg} w='20vw' bottom='0' borderRadius={'10px'} boxShadow={'0px -4px 4px rgba(0,0,0,0.2)'}>
                    <Box padding={4} color='black' display='flex' alignItems='center' justifyContent='space-between'>
                        <Box display='flex' alignItems='center'>
                            <SkeletonCircle isLoaded={avatarLoaded} onLoad={avatarIsLoaded}>
                                <Avatar w={6} h={6} src="https://avatar.iran.liara.run/public/95"/>
                            </SkeletonCircle>
                            <Text marginLeft={2} color={text} fontSize={14} fontWeight={500}>Amina Ahmed </Text>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Icon as={FaCalendar} marginRight={2} w={3} h={3} color={text}/>
                            <Text color={text} fontSize={12} fontWeight={500}>Feb 22, 2024</Text>
                        </Box>
                    </Box>
                    <Box paddingLeft={4} paddingRight={4} fontSize={14} overflow='hidden' h='14.6vw' _after={{backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%)', content: '""'}}>
                        <Text>
                            Spending quality time with family is essential for building strong bonds and cherished memories. 
                            To make the most of this time, engage in activities that encourage meaningful interaction and create opportunities for 
                            laughter and connection. Consider unplugging from technology and dedicating time to shared interests such as cooking together, 
                            playing board games, going for nature walks, or simply enjoying a leisurely meal. Actively listen to each other's stories, dreams, 
                            and concerns, fostering open communication and understanding. Whether it's a cozy evening at home or an adventure outdoors, 
                            prioritize presence, appreciation, and genuine connection to strengthen the familial ties that enrich our lives.
                        </Text>
                    </Box>
                </Box>
            </Box>
        )
    }
    
    
    return (
        <Box w='100wh' h='90vh' display='flex' flexDir='row' alignItems='center' justifyContent='space-evenly' marginLeft={44} color={props.text} marginBottom={12}>
            <PageOne />
            <PageTwo />
            <Box w='20vw' h='42vw' bgColor={bg} shadow='md' borderRadius='10px' padding={4} display='flex'>
            </Box>
        </Box>
    )
}