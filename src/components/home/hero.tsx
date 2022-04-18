import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";

export default function HeroPage() {
  return (
    <Container maxW={"100%"} bg={"#F6F4FC"}>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              mb={1}
              fontSize="5xl"
              fontStyle={"Poppins"}
              className="thanuHeaderBlack"
            >
              A truly{" "}
              <Link color="blue.300" href="/" className="thanuBlue">
                {" "}
                Open Source{" "}
              </Link>
              <br />
              Community dedicated to Open Source Enthusiasts.
            </Heading>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"twitter"}
                borderRadius="4px"
                border="1px"
              >
                <Link href="/explore">Explore</Link>
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              rounded={"5px"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://www.nsbm.ac.lk/wp-content/uploads/2019/09/01-7.jpg"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Container>
  );
}
