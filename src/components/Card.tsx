"use client"
import { db } from '@/utils/firebaseConfig';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import { collection, getDocs } from "firebase/firestore";
import { EllipsisIcon, MessageCircleCode, Share, ThumbsUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PostCard() {
  const [feeds,setFeeds] = useState<any>([])
 useEffect(()=>{
  const  getPosts= async()=>{
    let Posts:any = []
    const docSnap = await getDocs(collection(db,'fbPost'))
    docSnap.forEach((doc)=>{
      Posts.push(doc.data())
    })

    setFeeds(Posts)
  }
  getPosts()

 },[])
  return (
  <>
  {
    feeds.map((post:any,i:any)=>  <Card key ={i} maxW='xl' marginTop={6} >
    <CardHeader>
      <Flex marginBottom={1}>
        <Flex flex='1' gap='1' alignItems='center' flexWrap='wrap' >
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  
          <Flex direction={'column'}>
            <Heading size='sm'>Segun Adebayo</Heading>
            <Text fontSize={12} marginTop={1}>Creator, Chakra UI</Text>
          </Flex>
        </Flex>
        <IconButton
          variant='ghost'
          colorScheme='gray'
          aria-label='See menu'
          icon={<EllipsisIcon />}
        />
      </Flex>
    </CardHeader>
    <CardBody  paddingTop={1}>
      <Text>
     {post.caption}
      </Text>
    </CardBody>
  {
    post.image && <Image
    objectFit='cover'
    src={post.image}
    alt='Chakra UI'
  />
  }  
  
    <CardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '136px',
        },
      }}
    >
      <Button flex='1' variant='ghost' leftIcon={<ThumbsUp />}>
        Like
      </Button>
      <Button flex='1' variant='ghost' leftIcon={<MessageCircleCode />}>
        Comment
      </Button>
      <Button flex='1' variant='ghost' leftIcon={<Share />}>
        Share
      </Button>
    </CardFooter>
  </Card>)
  }</>
  )
}
