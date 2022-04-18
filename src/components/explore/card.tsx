import {
  Button,
  Flex,
  List,
  ListItem,
  Heading,
  ListIcon,
  Link,
  Avatar,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  CalendarIcon,
  TimeIcon,
  PlusSquareIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";

interface data {
  imageURL: string;
  name: string;
  writter: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

const EventExploreCard = ({ data }: { data: data }) => {
  return (
    <Stack
      borderWidth="1px"
      borderRadius="lg"
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      padding={4}
    >
      <Flex flex={1} bg="blue.200">
        <Image objectFit="cover" boxSize="100%" src={data.imageURL} />
      </Flex>
      <Stack flex={1} flexDirection="column" p={1} pt={2} px={3}>
        <Heading fontSize={"2xl"} fontFamily={"body"} px={3} mt={5} mb={3}>
          {data.title}
        </Heading>

        <Stack direction={["row", "row"]} spacing="10px" px={3}>
          <Avatar name={data.writter} size={"sm"} />
          <Text>{data.writter} </Text>
        </Stack>

        <br />

        <Text color={useColorModeValue("gray.700", "gray.400")} px={3}>
          {data.description}

          <br />

          <Button
            size={"lg"}
            fontWeight={"normal"}
            rightIcon={<ArrowForwardIcon />}
            px={"3"}
            mt={3}
            mb={3}
            colorScheme={"twitter"}
            borderRadius="4px"
            border="1px"
          >
            <Link href="/somewhare">Read More</Link>
          </Button>
        </Text>

        <List spacing={2} px={3}>
          <ListItem color={"#6699FF"}>
            <ListIcon as={TimeIcon} />
            {data.time}
          </ListItem>

          <ListItem color={"#6699FF"}>
            <ListIcon as={CalendarIcon} />
            {data.date}
          </ListItem>

          <ListItem color={"#6699FF"}>
            <ListIcon as={PlusSquareIcon} />
            {data.location}
          </ListItem>
        </List>

        <Stack
          direction={["row", "row"]}
          mt={6}
          px={3}
          pt={3}
          color={useColorModeValue("gray.800", "white")}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            color={"blue.500"}
            rounded={"full"}
          >
            Hackathon
          </Text>

          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("red.50", "red.900")}
            p={2}
            color={"red.500"}
            rounded={"full"}
          >
            Competition
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EventExploreCard;
