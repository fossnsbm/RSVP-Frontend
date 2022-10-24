import { Stack, Container, Heading } from "@chakra-ui/react";

export default function TwitterSection() {
    return (
        <Container maxW={"100%"} className="TwitterSection" py={12}>
            <Container maxW={"7xl"} py={16} as={Stack} spacing={4} >
                <Stack spacing={0} align={"left"} justify={"center"} >
                    <Heading color={"#6699FF"}>See What's Happening</Heading>
                </Stack>
                <Stack spacing={0}>
                    <iframe
                        title="rsvp-twitter-wall"
                        id="wallsio-iframe"
                        src="https://my.walls.io/c6nrg?nobackground=1&amp;show_header=0"
                        style={{ border: 0, height: "600px", width: "100%" }}
                        loading="lazy"
                    ></iframe>
                </Stack>
            </Container>
        </Container>
    );
}