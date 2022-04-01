import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Button,
  Image,
  Icon,
  Link,
  createIcon,
  IconProps,
} from "@chakra-ui/react";


export default function HeroPage() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading mb={1} fontSize="5xl" fontStyle={"Poppins"} className="thanuHeaderBlack">
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
              Explore
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
                "https://fossnsbm.org/content/images/size/w2000/2020/05/xheaderp.png.pagespeed.ic.FEqs3_u2yN.webp"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}


