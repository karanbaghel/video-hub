import { Button, Container, Heading, Text, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

 const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={["full","96"]}
          m={'auto'}
          my={'16'}
        >
            <Heading m={'auto'}>
                welcome back  </Heading>
                <Input placeholder={'Email'} type={"email"} required focusBorderColor={'purple.500'}/>
                <Input placeholder={'Password'} type={"Password"} required focusBorderColor={'purple.500'}/>
          
            <Button variant={"link"} alignSelf={'flex-end'}>
                <Link to={'/forgetpassword'}>Forget password?</Link>
            </Button>

            <Button colorScheme={'purple'} >Login
                
            </Button>
            <Text textAlign={'right'}>New user?{' '}
            <Button variant={"link"} colorScheme={'purple'}>
                <Link to={'/signup'}>Sign up?</Link>
            </Button>
            </Text>
            
        </VStack>
      </form>
    </Container>
  );
};
export default Login;
