import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  VStack,
  Stack,
  Text,
  Icon,
} from '@chakra-ui/react';
// import { IconName } from "react-icons/bs";
import {
  AiOutlineSend,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillGithub
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch '} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to the get update{' '}
          </Heading>
          <HStack borderBottom={'2px solid white'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderright={['none', '1px solid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            {' '}
            Video hub
          </Heading>
          <Text>All right received</Text>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderright={['none', '1px solid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            {' '}
            social media
          </Heading>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a href="https://instagram.com/karanbaghel007?igshid=ZDc4ODBmNjlmNQ==">
              {' '}
              <Icon as={AiOutlineInstagram} color="#CF3772" boxSize={6} />
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a href="https://www.linkedin.com/in/karan-baghel-929a32238/">
              {' '}
              <Icon as={AiFillLinkedin} color="linkedin.400" boxSize={6} />
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a href="https://github.com/karanbaghel">
              
              <Icon as={AiFillGithub} color="white" boxSize={6} />
            </a>

          </Button>

          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a href="https://www.naukri.com/mnjuser/profile?id=&altresid">
              {' '}
              <Icon as={AiOutlineWhatsApp} color="whatsapp.500" boxSize={6} />
            </a>

          </Button>
          <Heading size={'sm'}>mobile no:</Heading>
          <p>8587094060</p>
        </VStack>
      </Stack>
    </Box>
  );
};
export default Footer;
