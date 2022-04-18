import Nav from "../Navbar/Navbar";
import { Container, Stack, Heading } from "@chakra-ui/react";
import EventExploreCard from "./card";

const data = {
  imageURL: "https://www.nsbm.ac.lk/wp-content/uploads/2019/09/01-7.jpg",
  name: "Card Name",
  writter: "john Doe",
  date: "7th Febuary, 2022",
  time: "7.00PM Onwards ",
  location: "FOC, C2-002, NSBM Green University",
  title: "Azure Cloud Skills Challenge",
  description:
    "Lorem ipsum dolor sit amet. Est nihil ullam et pariatur expedita id assumenda temporibus eum consectetur quidem et vero similique aut quos laborum. Aut ullam beatae et quasi perferendis hic commodi dolorum sit necessitatibus consectetur",
};

export default function Explore() {
  return (
    <>
      <Nav></Nav>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "row", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading fontSize="md" fontStyle={"Poppins"} color={"#6699FF"}>
              All events{" "}
            </Heading>

            <Heading fontSize="x-large" fontStyle={"Poppins"}>
              Explore the event directory for upcoming and past events
            </Heading>

            <EventExploreCard data={data} />

            <EventExploreCard data={data} />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
