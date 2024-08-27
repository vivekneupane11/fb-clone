import PostCard from "@/components/Card";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import PostFeed from "@/components/PostFeed";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
<Flex direction="column" flex={1}>
<Navbar/>
<Flex background={"#F0F2F5"} padding={{base:1,sm:1,md:3,lg:6}} gap={32} flex={1}>
<LeftSidebar/>
   <Flex className="content" flex={4} maxWidth={{base:'auto',sm:'auto',md:'auto',lg:'600px'}} alignItems={"flex-start"} justifyItems={'flex-start'}  direction={'column'}  >
<PostFeed/>
<PostCard/>

   </Flex>
 </Flex>

</Flex>
  );
}
