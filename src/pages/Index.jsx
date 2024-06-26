import { useState, useEffect } from "react";
import { Container, VStack, Heading, Text, Box, Image, Link, useColorModeValue, Button } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from local storage or API
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <Box bg={bg} minH="100vh">
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
          <VStack spacing={4} mt={10} width="100%">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
                {post.imageUrl && <Image src={post.imageUrl} alt={post.title} mt={4} />}
                <Button colorScheme="red" mt={4} onClick={() => handleDelete(index)}>Delete</Button>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;