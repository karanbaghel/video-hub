
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingObj = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <Mycarousel />
      <Container maxW="container.xl" minH="100vh" p="16">
        <Heading
          textTransform="uppercase"
          py="2"
          w="fit-content"
          m="auto"
          borderBottom="2px solid"
        >
          services
        </Heading>

        <Stack
          h="full"
          p="4"
          alignItems={['center', 'center', 'center', 'flex-start']}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            h={['40', '400']}
            alt="lala"
            filter="hue-rotate(-130deg)"
          />
          <Text
            letterSpacing="widest"
            lineHeight="190%"
            p={['4', '16']}
            textAlign={['center', 'center', 'center', 'left']}
          >
            My name is Karan, and I am a fresh professional currently working in
            the field of web development, specializing in the React framework. I
            am passionate about creating dynamic and interactive user interfaces
            using React's component-based architecture. With my strong
            foundation in JavaScript and familiarity with modern web
            technologies, I strive to deliver efficient and visually appealing
            applications. I am constantly exploring new features and updates in
            the React ecosystem to enhance my skills and stay up-to-date with
            the latest industry trends. I enjoy the collaborative nature of web
            development and look forward to leveraging my knowledge and
            creativity to contribute to innovative projects that make a positive
            impact.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const Mycarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showThumbs={false}
    showStatus={false}
    showIndicators={false}
  >
    <Box w="full" h={['100vh', '100vh', '100vh', '100vh']}>
      <Image src={img1} />
      <Heading
        bgColor="blackAlpha.600"
        color="white"
        {...headingObj}
      >
        WATCH THE FUTURE
      </Heading>
    </Box>

    <Box w="full" h={['100vh', '100vh', '100vh', '100vh']}>
      <Image src={img2} alt="lal hai" />
      <Heading
        bgColor="whiteAlpha.600"
        color="black"
        {...headingObj}
      >
        FUTURE IS GAMING
      </Heading>
    </Box>
    <Box w="full" h={['100vh', '100vh', '100vh', '100vh']}>
      <Image src={img3} alt="lal hai" />
      <Heading
        bgColor="whiteAlpha.600"
        color="black"
        {...headingObj}
      >
        GAMING IS CONSOLE
      </Heading>
    </Box>

    <Box w="full" h={['100vh', '100vh', '100vh', '100vh']}>
      <Image src={img4} alt="lal hai" />
      <Heading
        bgColor="whiteAlpha.600"
        color="black"
        {...headingObj}
      >
        NIGHT LIFE IS COOL
      </Heading>
    </Box>
  </Carousel>
);

export default Home;






















// import React from 'react';
// import {
//   Box,
//   Container,
//   Heading,
//   Stack,
//   Image,
//   Text,
// } from '@chakra-ui/react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import img1 from '../assets/1.jpg';
// import img2 from '../assets/2.jpg';
// import img3 from '../assets/3.jpg';
// import img4 from '../assets/4.jpg';
// import img5 from '../assets/5.png';

// const headingObj = {
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   textTransform: 'uppercase',
//   p: '4',
//   size: '4xl',
// };

// const Home = () => {
//   return (
//     <Box>
//       <Mycarousel />
//       <Container maxW="container.xl" minH="100vh" p="16">
//         <Heading
//           textTransform="uppercase"
//           py="2"
//           w="fit-content"
//           m="auto"
//           borderBottom="2px solid"
//         >
//           services
//         </Heading>

//         <Stack
//           h="full"
//           p="4"
//           alignItems={['center', 'center', 'center', 'flex-start']}
//           direction={['column', 'row']}
//         >
//           <Image
//             src={img5}
//             h={['40', '400']}
//             alt="lala"
//             filter="hue-rotate(-130deg)"
//           />
//           <Text
//             letterSpacing="widest"
//             lineHeight="190%"
//             p={['4', '16']}
//             textAlign={['center', 'center', 'center', 'left']}
//           >
//             My name is Karan, and I am a fresh professional currently working in
//             the field of web development, specializing in the React framework. I
//             am passionate about creating dynamic and interactive user interfaces
//             using React's component-based architecture. With my strong
//             foundation in JavaScript and familiarity with modern web
//             technologies, I strive to deliver efficient and visually appealing
//             applications. I am constantly exploring new features and updates in
//             the React ecosystem to enhance my skills and stay up-to-date with
//             the latest industry trends. I enjoy the collaborative nature of web
//             development and look forward to leveraging my knowledge and
//             creativity to contribute to innovative projects that make a positive
//             impact.
//           </Text>
//         </Stack>
//       </Container>
//     </Box>
//   );
// };

// const Mycarousel = () => (
//   <Carousel
//     autoPlay
//     infiniteLoop
//     interval={1000}
//     showArrows={false}
//     showThumbs={false}
//     showStatus={false}
//     showIndicators={false}
//   >
//     <Box w="full" h={['100vh', '100vh', '100vh', '100vh']}>
//       <Image src={img1} />
//       <Heading
//         bgColor="blackAlpha.600"
//         color="white"
//         {...headingObj}
//       >
//         WATCH THE FUTURE
//       </Heading>
//     </Box>

//     <Box w="full" h={['100vh', '100vh', '100vh', '100vh']}>
//       <Image src={img2} alt="lal hai" />
//       <Heading
//         bgColor="whiteAlpha.600"
//         color="black"
//         {...headingObj}
//       >
//         FUTURE IS GAMING
//       </Heading>
//     </Box>
//     <Box w="full" h={['100vh', '100vh', '100vh', '100vh']}>
//       <Image src={img3} alt="lal hai" />
//       <Heading
//         bgColor="whiteAlpha.600"
//         color="black"
//         {...headingObj}
//       >
//         GAMING IS CONSOLE
//       </Heading>
//     </Box>

//     <Box w="full" h={['100vh', '100vh', '100vh', '100vh']}>
//       <Image src={img4} alt="lal hai" />
//       <Heading
//         bgColor="whiteAlpha.600"
//         color="black"
//         {...headingObj}
//       >
//         NIGHT LIFE IS COOL
//       </Heading>
//     </Box>
//   </Carousel>
// );

// export default Home;























































// import React from 'react';
// import { Box, Container, Heading, Stack } from '@chakra-ui/react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import img1 from '../assets/1.jpg';
// import img2 from '../assets/2.jpg';
// import img3 from '../assets/3.jpg';
// import img4 from '../assets/4.jpg';
// import img5 from '../assets/5.png';
// import { Image } from '@chakra-ui/react';
// import { Text } from '@chakra-ui/react';
// // import { Image } from '@chakra-ui/react';

// const headingobj = {
//   pos: 'absolute',
//   left: "30%",
//   top: '50%',
//   Transform: "tranlate(-50%, -50%)",
//   TextTransform: "uppercase",
//   p: '4',
//   size: '4xl',
// };

// const Home = () => {
//   return (
//     <Box>
//       <Mycarousel />
//       <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
//         <Heading
//           TextTransform={'uppercase'}
//           py={'2'}
//           w={'fit-content'}
//           m={'auto'}
//           borderBottom={'2px solid'}
//         >
//           services
//         </Heading>

//         <Stack
//           h="full"
//           p={"4"}
//           alignItems={'center'}
//           direction={["colum", 'row']}
//         >
//           <Image
//             src={img5}
//             h={["40", "400"]}
//             alt="lala"
//             filter={"hue-rotate(-130deg)"}
//           ></Image>
//           <Text letterSpacing={'widest'} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
//             My name is Karan, and I am a fresh professional currently working in
//             the field of web development, specializing in the React framework. I
//             am passionate about creating dynamic and interactive user interfaces
//             using React's component-based architecture. With my strong
//             foundation in JavaScript and familiarity with modern web
//             technologies, I strive to deliver efficient and visually appealing
//             applications. I am constantly exploring new features and updates in
//             the React ecosystem to enhance my skills and stay up-to-date with
//             the latest industry trends. I enjoy the collaborative nature of web
//             development and look forward to leveraging my knowledge and
//             creativity to contribute to innovative projects that make a positive
//             impact.
//           </Text>
//         </Stack>
//       </Container>
//     </Box>
//   );
// };

// const Mycarousel = () => (
//   <Carousel
//     autoPlay
//     infiniteLoop
//     interval={1000}
//     showArrows={false}
//     showThumbs={false}
//     showStatus={false}
//     showIndicators={false}
//   >
//     <Box w="full" h={'100vh'}>
//       <Image src={img1}  />
//       <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingobj}>
        
//         WATCH THE FUTURE
//       </Heading>
//       {/* <p className="legend">Legend 1</p> */}
//     </Box>

//     <Box w="full" h={'100vh'}>
//       <Image src={img2} alt="lal hai" />
//       <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingobj}>
        
//         FUTURE IS GAMING
//       </Heading>
//     </Box>
//     <Box w="full" h={'100vh'}>
//       <Image src={img3} alt="lal hai" />
//       <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingobj}>
//         {' '}
//         GAMING IS CONSOLE
//       </Heading>
//     </Box>

//     <Box w="full" h={'100vh'}>
//       <Image src={img4} alt="lal hai" />
//       <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingobj}>
        
//         NIGHT LIFE IS COOL
//       </Heading>
//     </Box>
//   </Carousel>
// );
// export default Home;
