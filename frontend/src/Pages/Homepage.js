import React, { useEffect } from 'react';
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
} from '@chakra-ui/react';
import Login from '../components/authentication/Login';
import Signup from '../components/authentication/Signup';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (user) history.push('/chats');
  }, [history]);

  const imageUrl = 'https://cdn3.vectorstock.com/i/1000x1000/36/97/approved-chat-app-icon-vector-28873697.jpg'; // Replace with your image URL

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="3px"
      >
        <Box display="flex" alignItems="center">
          <Image src={imageUrl} alt="Logo" boxSize="60px" borderRadius="full" />
          <Text ml={1} fontSize="4xl" color="black" fontFamily= "Great Vibes">
            My Chat
          </Text>
        </Box>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;