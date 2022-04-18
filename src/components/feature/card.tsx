import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Image,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { CalendarIcon, TimeIcon, PlusSquareIcon } from "@chakra-ui/icons";

const data = {
  imageURL: "https://img.devrant.com/devrant/rant/r_1237244_87WJY.jpg",
  date: "7th Febuary, 2022",
  time: "7.00PM Onwards ",
  location: "FOC, C2-002, NSBM Green University",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  title: "Hashcode Awareness Session ",
};

export default function FeatureEvent() {
  return (
    <Center py={6}>
      <Box
        maxW={"500px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"lg"}
        overflow={"hidden"}
      >
        <Image src={data.imageURL} roundedTop="sm" />

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"4xl"}
              mb={5}
            >
              {data.title}
            </Heading>

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
            <Text
              color={useColorModeValue("gray.700", "gray.400")}
              fontSize={"lg"}
              fontWeight={500}
            >
              {data.description}
            </Text>
          </List>
          <Stack
            direction={["row", "row"]}
            mt={6}
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
        </Box>
      </Box>
    </Center>
  );
}
