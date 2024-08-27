"use client"
import { Avatar, Button, Divider, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { GalleryThumbnails, Smile, Video } from "lucide-react";
import { useRef, useState } from "react";
import { db, storage } from '../utils/firebaseConfig.js';

export default function PostFeed() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [caption,setCaption] = useState('')
  const inputRef = useRef<any>(null)
  const submitPost = async()=>{
    

try{
  let postImage = ''
  if(inputRef.current.files[0]){
    const file = inputRef.current.files[0]
    const fileRef = ref(storage,`image/${file.name}`)
   const imageSnapshot=  await uploadBytes(fileRef,file)

    const image = await getDownloadURL(imageSnapshot.ref)
    postImage = image;
  }
const docRef = await addDoc(collection(db,'fbPost'),{
  user:'Elon Musk',
  caption:caption,
  image: postImage
})
}
catch(err){
  console.log("Error occured",err)
}
finally{
  onClose()

}
  }

  return (
   <Flex direction={'column'} boxShadow={'md'} padding={5} borderRadius={9} maxH={'150px'} background={'#fff'} >
    <Flex cursor={'pointer'}  alignItems={'center'} gap={2}>
      <Avatar src="https://bit.ly/sage-adebayo" name="Elon Musk" size={'md'} objectFit={'cover'} objectPosition={'center'} marginRight={1}/>
      <Button onClick={onOpen} width={'100%'} backgroundColor={"#F0F2F5"} border={'none'} padding={6} borderRadius={50} colorScheme='teal' variant='outline' display={'flex'} justifyContent={'flex-start'} fontSize={16} fontWeight={'500'} textAlign={'start'} _hover={{backgroundColor:"#F0F2F5"}}>
    What's on your mind, Elon?
  </Button>
    </Flex>
    <Divider marginTop={4}/>
    <Flex paddingLeft={8} paddingRight={8} paddingTop={2} paddingBottom={1} justifyContent={'space-between'}>
        <Flex justifyContent={'space-between'} cursor={'pointer'} _hover={{backgroundColor:'#F0F2F5'}} padding={2} borderRadius={6} gap={4} alignItems={'center'}>
            <Video color="red" size={28}/>
            <Text color={'gray'} fontSize={14} fontWeight={'600'}>Live Video</Text>
        </Flex>
        <Flex justifyContent={'space-between'} cursor={'pointer'} _hover={{backgroundColor:'#F0F2F5'}} padding={2} borderRadius={6} gap={4} alignItems={'center'}>
            <GalleryThumbnails color="green" size={28}/>
            <Text color={'gray'} fontSize={14} fontWeight={'600'}>Photos/Videos</Text>
        </Flex>
        <Flex justifyContent={'space-between'} cursor={'pointer'} _hover={{backgroundColor:'#F0F2F5'}} padding={2} borderRadius={6} gap={4} alignItems={'center'}>
            <Smile color="green" size={28}/>
            <Text color={'gray'} fontSize={14} fontWeight={'600'}>Feelings/Activities</Text>
        </Flex>
    </Flex>
    

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader textAlign={'center'}>Create Post</ModalHeader>
    <ModalCloseButton />
    <Divider/>
    <ModalBody>
    <Flex flex='1' gap='1' alignItems='center' flexWrap='wrap' >
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  
          <Flex direction={'column'} padding={2}>
            <Text fontWeight={'800'} fontSize={14} marginTop={1}>Creator, Chakra UI</Text>
            <Text fontWeight={'500'} fontSize={10} >Sr. Developer</Text>

          </Flex>
        </Flex>
        <Textarea onChange={(e)=>setCaption(e.target.value)} fontSize={22} marginTop={6} marginBottom={2} height={180} placeholder='Whats on your mind, Elon Musk?' />    </ModalBody>
        <input type="file" ref={inputRef} style={{marginLeft:'30px'}} />

    <ModalFooter>
      <Button colorScheme='blue' mr={3} marginBottom={2} width={'100%'} onClick={submitPost}>
        Post
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
   </Flex>
  )
}
