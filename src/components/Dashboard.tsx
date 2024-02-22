import {
  Avatar,
  AvatarBadge,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  SkeletonCircle,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Thead, Tr
} from "@chakra-ui/react";
import { CiBellOn, CiMenuKebab, CiMountain1, CiSearch } from "react-icons/ci";
import { BsFillGridFill } from "react-icons/bs";
import { FaBagShopping, FaBox, FaGear, FaHeart } from "react-icons/fa6";
import { IoAnalyticsOutline, IoTicket } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import {
  useState
} from "react";
import { IconType } from "react-icons";
import { shadeColor, toRGBA } from "./Exports";

export default function Dashboard(props: {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  bglight: string;
  primarylight: string;
}) {
  const [active, setActive] = useState("Dashboard");
  const [selectedDashTab, setSelectedDashTab] = useState("products");
  const [isLoaded, setIsLoaded] = useState(false);

  const accent = props.accent;
  const primary = props.primary;
  const secondary = props.secondary;
  const text = props.text;
  const bglight = props.bglight;
  const primarylight = props.primarylight;

  const tagBg = toRGBA(accent, 0.2);

  let col = "";
  if (props.text == "white") {
    col = "black";
  } else if (props.text == "black") {
    col = "white";
  }

  function TopNav() {
    return (
      <Box
        w="80vw"
        h="8vh"
        padding={4}
        bgColor={props.bglight}
        display="flex"
        justifyContent="space-between"
      >
        <Box display="flex">
          <Box display="flex" alignItems="center">
            <Icon as={CiMountain1} w={8} h={8} />
            <Text fontSize={26} fontWeight={500} marginLeft={1}>
              PEAK
            </Text>
            <Divider orientation="vertical" marginLeft={8} />
          </Box>
          <InputGroup w="20vw" marginLeft={8}>
            <InputRightElement>
              <Icon as={CiSearch} />
            </InputRightElement>
            <Input
              variant="outline"
              placeholder="Search here"
              _placeholder={{ color: "gray.400" }}
              focusBorderColor={props.primary}
            />
          </InputGroup>
        </Box>
        <Box display="flex" alignItems="center">
          <Divider orientation="vertical" marginRight={4} />
          <Icon as={CiBellOn} w={6} h={6} marginRight={4} cursor="pointer" />
          <SkeletonCircle isLoaded={isLoaded} onLoad={() => setIsLoaded(true)}>
            <Avatar
              src="https://avatar.iran.liara.run/public"
              size="sm"
              cursor="pointer"
            >
              <AvatarBadge boxSize="1em" bgColor="green.500" />
            </Avatar>
          </SkeletonCircle>
          <Box marginLeft={4} cursor={"pointer"}>
            <Text fontSize={12}>Ann Hatheway</Text>
            <Text
              color={
                text == "white" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"
              }
              fontSize={10}
            >
              Admin
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }

  function SideTab(props: { name: string; icon: IconType }) {
    return (
      <Box
        display="flex"
        alignItems="center"
        cursor="pointer"
        marginTop={4}
        bgColor={active === props.name ? secondary : "none"}
        color={active === props.name ? col : text}
        onClick={() => setActive(props.name)}
        borderRadius={"4px"}
        padding={2}
      >
        <Icon as={props.icon} w={5} h={5} />
        <Text marginLeft={1}>{props.name}</Text>
      </Box>
    );
  }

  function DashTab(props: {
    icon: IconType;
    topText: string;
    bottomText: string;
    name: string;
  }) {
    return (
      <Box
        w="14vw"
        h="10vh"
        onClick={() => setSelectedDashTab(props.name)}
        bgColor={selectedDashTab === props.name ? primarylight : text}
        cursor="pointer"
        borderRadius={"10px"}
        color={selectedDashTab === props.name ? col : text}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="3vw"
          h="3vw"
          bgColor={selectedDashTab === props.name ? col : primary}
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          borderRadius={"10px"}
        >
          <Icon
            as={props.icon}
            color={selectedDashTab === props.name ? text : col}
            w={5}
            h={5}
          />
        </Box>
        <Box
          marginLeft={6}
          textAlign="left"
          color={selectedDashTab === props.name ? text : col}
        >
          <Text fontWeight={500} fontSize={24}>
            {props.topText}
          </Text>
          <Text>{props.bottomText}</Text>
        </Box>
      </Box>
    );
  }

  function BarComponent(props: {
    height: string;
    left: string;
    color?: string;
  }) {
    return (
      <Box
        pos="absolute"
        w="2vw"
        h={props.height}
        bgColor={props.color ? props.color : primary}
        _hover={{
          bgColor: props.color
            ? shadeColor(props.color, 15)
            : shadeColor(primary, 15),
        }}
        bottom="6"
        left={props.left}
        borderTopRadius={"3px"}
      />
    );
  }

  function BarChart() {
    return (
      <>
        <Divider pos="absolute" bottom="48px" left="6" w="18vw" />
        <Divider pos="absolute" bottom="68px" left="6" w="18vw" />
        <Divider pos="absolute" bottom="88px" left="6" w="18vw" />
        <Divider pos="absolute" bottom="108px" left="6" w="18vw" />
        <Divider pos="absolute" bottom="128px" left="6" w="18vw" />
        <Divider pos="absolute" bottom="148px" left="6" w="18vw" />
        <Divider pos="absolute" bottom="168px" left="6" w="18vw" />
        <BarComponent height="12vh" left="40px" />
        <BarComponent height="8vh" left="80px" color={secondary} />
        <BarComponent height="6vh" left="120px" />
        <BarComponent height="16vh" left="160px" color={secondary} />
        <BarComponent height="14vh" left="200px" />
        <BarComponent height="14vh" left="240px" color={secondary} />
        <Divider
          orientation="vertical"
          pos="absolute"
          h="16vh"
          bottom="6"
          left="6"
        />
        <Divider pos="absolute" w="18vw" bottom="6" left="6" />

        <Text pos="absolute" fontSize={12} bottom="1" left="16%">
          Horizontal Axis
        </Text>
        <Text pos="absolute" fontSize={12} top="16" left="16%">
          Chart Title
        </Text>
        <Box color="gray.400">
          <Text pos="absolute" fontSize={10} left="3" bottom="20px">
            0
          </Text>
          <Text pos="absolute" fontSize={10} left="2" bottom="40px">
            10
          </Text>
          <Text pos="absolute" fontSize={10} left="2" bottom="60px">
            15
          </Text>
          <Text pos="absolute" fontSize={10} left="2" bottom="80px">
            20
          </Text>
          <Text pos="absolute" fontSize={10} left="2" bottom="100px">
            25
          </Text>
          <Text pos="absolute" fontSize={10} left="2" bottom="120px">
            30
          </Text>
          <Text pos="absolute" fontSize={10} left="2" bottom="140px">
            35
          </Text>
          <Text pos="absolute" fontSize={10} left="2" bottom="160px">
            40
          </Text>
        </Box>
      </>
    );
  }

  return (
    <Box
      w="100wh"
      h="100vh"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      marginLeft={44}
      color={props.text}
    >
      <Box
        w="80vw"
        h="80vh"
        overflow="hidden"
        bgColor={props.background}
        borderRadius={"10px"}
        shadow="md"
      >
        <TopNav />
        <Box display="flex">
          <Box
            w="9vw"
            h="72vh"
            borderBottomLeftRadius={"10px"}
            bgColor={props.bglight}
            padding={2}
          >
            <SideTab name="Dashboard" icon={BsFillGridFill} />
            <SideTab name="Analytics" icon={IoAnalyticsOutline} />
            <SideTab name="Invoice" icon={IoTicket} />
            <SideTab name="Settings" icon={FaGear} />
          </Box>
          <Box padding={8}>
            <Box display="flex" justifyContent="space-between" w="66vw">
              <DashTab
                icon={FaHeart}
                topText="132+"
                bottomText="Saved Products"
                name="products"
              />
              <DashTab
                icon={FaBox}
                topText="2000+"
                bottomText="Stock Produced"
                name="stocks"
              />
              <DashTab
                icon={FaBagShopping}
                topText="190+"
                bottomText="Sales Products"
                name="sales"
              />
              <DashTab
                icon={MdWork}
                topText="19"
                bottomText="Job Applications"
                name="jobs"
              />
            </Box>
            <Box w="66vw" display="flex" marginTop={8}>
              <Box
                w="40vw"
                h="30vh"
                bgColor={props.bglight}
                padding={4}
                borderRadius={"10px"}
                pos="relative"
              >
                <Box display="flex" justifyContent="space-between">
                  <Text fontSize={16} fontWeight={500}>
                    Statistics
                  </Text>
                  <Icon as={CiMenuKebab} cursor="pointer" />
                </Box>
                <Box padding={4} display="flex" justifyContent="space-between">
                  <BarChart />
                  <Box marginRight={8} display="flex" alignItems="center">
                    <Stat>
                      <StatLabel>Profit Earned</StatLabel>
                      <StatNumber>$146.25</StatNumber>
                      <StatHelpText>
                        <StatArrow
                          type="increase"
                          color="green.300"
                        ></StatArrow>
                        22.3%
                      </StatHelpText>
                    </Stat>
                    <Stat marginLeft={8}>
                      <StatLabel>Site Views</StatLabel>
                      <StatNumber>429</StatNumber>
                      <StatHelpText>
                        <StatArrow type="decrease" color="red.300" />
                        14.2%
                      </StatHelpText>
                    </Stat>
                  </Box>
                </Box>
              </Box>
              <Box
                marginLeft={12}
                pos="relative"
                w="30vw"
                h="30vh"
                bgColor={bglight}
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize={24} fontWeight={600} marginBottom={4}>
                  Sales Goals
                </Text>
                <CircularProgress
                  size={36}
                  value={80}
                  thickness={"12px"}
                  color={accent}
                >
                  <CircularProgressLabel fontSize={20}>
                    80%
                  </CircularProgressLabel>
                </CircularProgress>
                <Icon
                  as={CiMenuKebab}
                  pos="absolute"
                  top="4"
                  right="4"
                  cursor="pointer"
                />
              </Box>
            </Box>
            <Box w="66vw" h="60vh" bgColor={bglight} marginTop={8} borderRadius={'10px'} padding={8}>
              <Text fontSize={16} fontWeight={500}>Recent Transactions</Text>
              <TableContainer marginTop={2}>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Td>Code</Td>
                      <Td>Product Name</Td>
                      <Td>Date</Td>
                      <Td>Price</Td>
                      <Td>Order</Td>
                      <Td>Total Amount</Td>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <Tag bgColor={`rgba(${tagBg.R}, ${tagBg.G}, ${tagBg.B}, 0.2)`} color={`rgba(${tagBg.R}, ${tagBg.G}, ${tagBg.B}, 1)`}>#3245</Tag>
                      </Td>
                      <Td>Lip Balm</Td>
                      <Td>Mar, 18</Td>
                      <Td>$22</Td>
                      <Td>400</Td>
                      <Td>$8,800.00</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
