import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import {
  Bell,
  Home,
  HomeIcon,
  IceCream,
  MessageCircle,
  Search,
  Settings,
  User,
  UserPlus,
  Video,
} from "lucide-react";

export default function Navbar() {
  return (
    <Flex padding={4} backgroundColor={"#fff"}>
      <Flex flex={1}  justifyContent={"flex-start"} alignItems={"center"}>
        <IceCream color="#0866FF" size={32} />
        <Stack spacing={4} marginLeft={6}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search color="#d4d4d4" size={17} />
            </InputLeftElement>
            <Input
              type="tel"
              background={"#F0F2F5"}
              fontSize={14}
              textIndent={20}
              placeholder="Search Facebook"
              borderRadius={20}
            />
          </InputGroup>
        </Stack>
      </Flex>
      <Flex flex={3}  justifyContent={"space-evenly"} alignItems={"center"}>
        <Flex
          cursor={"pointer"}
          borderRadius={4}
          width={100}
          height={12}
          justifyContent={"center"}
          alignItems={"center"}
          _hover={{ background: "#F0F2F5", color: "#0866FF" }}
        >
          <Home />
        </Flex>
        <Flex
          cursor={"pointer"}
          borderRadius={4}
          width={100}
          height={12}
          justifyContent={"center"}
          alignItems={"center"}
          _hover={{ background: "#F0F2F5", color: "#0866FF" }}
        >
          <User />
        </Flex>
        <Flex
          cursor={"pointer"}
          borderRadius={4}
          width={100}
          height={12}
          justifyContent={"center"}
          alignItems={"center"}
          _hover={{ background: "#F0F2F5", color: "#0866FF" }}
        >
          <MessageCircle />
        </Flex>
        <Flex
          cursor={"pointer"}
          borderRadius={4}
          width={100}
          height={12}
          justifyContent={"center"}
          alignItems={"center"}
          _hover={{ background: "#F0F2F5", color: "#0866FF" }}
        >
          <Video />
        </Flex>
      </Flex>
      <Flex display={{base:'none',sm:'none',md:'none',lg:"flex"}} className="iconsList" flex={1} justifyContent={"space-evenly"}>
        {" "}
        <Flex
          cursor={"pointer"}
          borderRadius={50}
          width={50}
          height={12}
          justifyContent={"center"}
          alignItems={"center"}
          background={'#e2e2e2'}
          _hover={{ background: "#F0F2F5", color: "#0866FF" }}
        >
          <Settings />
        </Flex>
        <Flex
          cursor={"pointer"}
          borderRadius={50}
          width={50}
          height={12}
          justifyContent={"center"}
          alignItems={"center"}
          background={'#e2e2e2'}
          _hover={{ background: "#F0F2F5", color: "#0866FF" }}
        >
          <Bell />
        </Flex>
        <Flex
          cursor={"pointer"}
          borderRadius={50}
          width={50}
          height={12}
          justifyContent={"center"}
          alignItems={"center"}
          background={'#e2e2e2'}
          _hover={{ background: "#F0F2F5", color: "#0866FF" }}
        >
          <HomeIcon />
        </Flex>
        <Flex
          cursor={"pointer"}
          borderRadius={50}
          width={50}
          height={12}
          justifyContent={"center"}
          alignItems={"center"}
          background={'#e2e2e2'}
          _hover={{ background: "#F0F2F5", color: "#0866FF" }}
        >
          <UserPlus />
        </Flex>
      </Flex>
    </Flex>
  );
}
