import { Flex, Stack, Container, Heading } from "@chakra-ui/react";
import ArticleSecion from "../articles/article";
import FeatureEvent from "./card";

export default function FeatureSection() {
  return (
    <Stack minH={"10vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1}>
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"} justify={"center"}>
            <Heading color={"#6699FF"}>Featured Event</Heading>
          </Stack>

          <FeatureEvent />

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 2 }}
          ></Stack>
        </Container>
      </Flex>

      <Flex p={8} flex={1} bg={"#6699FF"}>
        <ArticleSecion />
      </Flex>
    </Stack>
  );
}
