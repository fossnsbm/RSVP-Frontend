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
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const data = {
  imageURL:"https://vacuumlabs.com/wp-content/uploads/2020/02/HC20-Hub-FB-Event-Header_2.3-1.png",// "https://img.devrant.com/devrant/rant/r_1237244_87WJY.jpg",
  date: "7th Febuary, 2022",
  time: "7.00PM Onwards ",
  location: "FOC, C2-002, NSBM Green University",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  title: "Hashcode Awareness Session ",
};

export default function FeatureEvent() {
  return (
    <Center>
      <Box
        maxW={440}
        w={"full"}
        rounded={"lg"}
        overflow={"hidden"}
      >
        <Image src={data.imageURL} roundedTop="lg"/>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={5}>
          <List spacing={2}>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              mb={3}
            >
              {data.title}
            </Heading>

            <ListItem color={"#6699FF"}>
              <ListIcon as={AiOutlineClockCircle} />
              {data.time}
            </ListItem>

            <ListItem color={"#6699FF"}>
              <ListIcon as={AiOutlineCalendar} />
              {data.date}
            </ListItem>

            <ListItem color={"#6699FF"} >
              <ListIcon as={IoLocationOutline} />
              {data.location}
            </ListItem>
            <Text
              color='#808080'
              fontSize={"md"}
              fontWeight={500}
              pt={'2'}
            >
              {data.description}
            </Text>
          </List>
          <Stack
            direction={["row", "row"]}
            mt={4}
            color={useColorModeValue("gray.800", "white")}
          >
            <Text
              fontSize={"sm"}
              fontWeight={400}
              bg={'#E9F2FF'}
              pt={1}
              height={8}
              pl={6}
              pr={6}
              color={"#6699FF"}
              rounded={"full"}
            >
              Hackathon
            </Text>

            <Text
              fontSize={"sm"}
              fontWeight={400}
              bg={'#FFEBEE'}
              pt={1}
              height={8}
              pl={6}
              pr={6}
              color={"#FF6682"}
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
