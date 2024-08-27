import { Menus } from '@/constants/sidebar'
import { Avatar, Flex, Image, Text } from '@chakra-ui/react'

export default function LeftSidebar() {

  return (
    <Flex flex={1} display={{base:'none',sm:'none',md:'none',lg:"flex"}} direction={'column'} gap={6} maxW={'250px'}>
    <Flex cursor={'pointer'}  alignItems={'center'} gap={2}>
      <Avatar src="https://bit.ly/sage-adebayo" name="Elon Musk" size={'sm'} objectFit={'cover'} objectPosition={'center'} marginRight={1}/>
      <Text fontSize={14} fontWeight={'500'}>Elon Musk</Text>
    </Flex>
      {
        Menus.map((data,i)=><Flex cursor={'pointer'} key={i} alignItems={'center'} gap={2}>
           <Image src={data.img} alt={data.title} />
          <Text fontSize={14} fontWeight={'500'} >{data.title}</Text>
         
        </Flex>)
      }
    </Flex>
   
  )
}
