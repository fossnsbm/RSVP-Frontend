import {
  Button,
  Container,
  Divider,
  Stack,
  Text,
  Heading,
} from '@chakra-ui/react'


export default function FooterSection() {
  var img = require("../FooterSection/fossnsbmlogo.png");
  return (
    
    <Container as="footer" role="contentinfo" maxW={"100%"}>
      <Divider/>
      <Stack
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        py={{ base: '12', md: '16' }}
        width='1000px'
        px={{ base: '12', md: '16' }}
      >
        <img src={img} alt="" width={100} />
        <Stack
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
        >
          <Stack direction="row" spacing="4" >
            <Stack spacing={{ base: '6', md: '8' }} align="start" >
              <Heading>FOSS Community</Heading>
              <Text color="muted">
                Contribute to the society with developments and new concepts transforming young lives to feel as a part of the world’s largest developing community
              </Text>
            </Stack>
          </Stack>
          <Stack spacing="4" >
            <Stack spacing="10" direction={{ base: 'column', sm: 'row' }} >
              <Button variant="link">Home</Button>
              <Button variant="link">About</Button>
              <Button variant="link">Event</Button>
              <Button variant="link">Blog</Button>
              <Button variant="link">Forum</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}