import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content, imageUrl });
  };

  return (
    <Container centerContent maxW="container.md" mt={10}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Add New Blog Post</Heading>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="content">
          <FormLabel>Content</FormLabel>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </FormControl>
        <FormControl id="image-url">
          <FormLabel>Image URL</FormLabel>
          <Input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="md">Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;