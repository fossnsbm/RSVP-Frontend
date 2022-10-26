import { Flex, Stack, Container, Heading } from "@chakra-ui/react";
import ArticleSecion from "../articles/article";
import FeatureEvent from "./card";

export default function FeatureSection() {
  return (
    <Stack minH={"10vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={6}>
        <Container maxW={480} py={16} as={Stack} spacing={8} >
          <Stack spacing={0} align={"left"} justify={"center"} >
            <Heading color={"#6699FF"}>Featured Event</Heading>
          </Stack>

          <FeatureEvent />

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 2 }}
          ></Stack>
        </Container>
      </Flex>

      <Flex p={8} flex={8} bg={"#6699FF"}>
        <ArticleSecion />
      </Flex>
    </Stack>
  );
}
