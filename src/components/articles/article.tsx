import { Heading, Stack, Container } from "@chakra-ui/react";
import BlogPostCard from "./card";

const data = {
  imageURL: "https://www.nsbm.ac.lk/wp-content/uploads/2019/09/01-7.jpg",
  name: "Card Name",
  writter: "john Doe",
};

export default function ArticleSecion() {
  return (
    <Container maxW={"2xl"} py={16} as={Stack} spacing={8}>
      <Stack spacing={0}>
        <Heading color={"white"} paddingLeft='2'>Recent Articles</Heading>
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, md: 4, lg: 2 }}
      >
        <BlogPostCard data={data} />
        <BlogPostCard data={data} />
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, md: 4, lg: 2 }}
      >
        <BlogPostCard data={data} />
        <BlogPostCard data={data} />
      </Stack>
    </Container>
  );
}
