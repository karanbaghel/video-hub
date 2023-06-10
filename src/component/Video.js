import React, { useState } from 'react';
import {
  Heading,
  Stack,
  VStack,
  Text,
  AspectRatio,
  Button,
} from '@chakra-ui/react';

const Video = () => {
  const videoArr = [
    'Ho32Oh6b4jc',
    'syFZfO_wfMQ',
    '_kqQDCxRCzM',
    'SWpNhSuGUYE',
    'f_EiqPp-vBM',
    '4NRXx6U8ABQ',
    '34Na4j8AVgA',
    'b8I-7Wk_Vbc',
  ];

  const [videosrc, setvideosrc] = useState(videoArr[1]);

  const getVideoUrl = (videoId) => `https://www.youtube.com/embed/${videoId}`;

  return (
    <Stack direction={['column', 'row']} h="100vh">
      <VStack w="full">
        <AspectRatio ratio={16 / 9} w="full">
          <iframe
            title="Sample Video"
            src={getVideoUrl(videosrc)}
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          />
        </AspectRatio>
        <VStack alignItems="start" p={8} w="full" overflow="auto">
          <Heading>Sample video</Heading>
          <Text>This is a sample video for fun, and I love this song.</Text>
        </VStack>
      </VStack>

      <VStack w={['full', 'xl']} alignItems="stretch" p={8} spacing={8} overflow="auto">
        {videoArr.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            colorScheme="purple"
            onClick={() => setvideosrc(item)}
          >
            Song {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Video;
