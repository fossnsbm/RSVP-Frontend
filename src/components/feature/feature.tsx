import {
  Flex,
  Stack,
  Container,
  Heading,
  HeadingProps,
} from "@chakra-ui/react";
import ArticleSecion from "../articles/article";

export default function FeatureSection() {
  return (
    <Stack minH={"10vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1}>
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0}>
            <Heading color={"#6699FF"}>Featured Event</Heading>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 2 }}
          >
            <h1> post </h1>
          </Stack>
        </Container>
      </Flex>

      <Flex p={8} flex={1} bg={"#6699FF"}>
        <ArticleSecion />
      </Flex>
    </Stack>
  );
}
