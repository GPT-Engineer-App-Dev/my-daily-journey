import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg">Sharing my thoughts and experiences on web development, technology, and life.</Text>
        <Box boxSize="sm">
          <Image src="/images/profile.jpg" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Text fontSize="md">Hi, I'm John Doe, a web developer and tech enthusiast. Follow me on my journey as I explore the world of coding and beyond.</Text>
        <VStack spacing={2}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
        </VStack>
        <Link as={RouterLink} to="/add-post" color="teal.500" fontWeight="bold">Add New Post</Link>
      </VStack>
    </Container>
  );
};

export default Index;