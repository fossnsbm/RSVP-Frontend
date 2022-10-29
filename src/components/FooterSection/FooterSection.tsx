import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
  Heading,
} from '@chakra-ui/react'

import { FaFacebook, FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa'


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
            <Divider />
            <Stack spacing="4" direction={{ base: 'column', sm: 'row' }}>
              <ButtonGroup variant="ghost">
                <Text>Follow us on</Text>
                <IconButton
                  as="a"
                  target="_blank"
                  href="https://www.facebook.com/foss.nsbm/"
                  aria-label="Facebook"
                  icon={<FaFacebook fontSize="1.25rem" />}
                />
                <IconButton as="a" target="_blank" href="https://www.instagram.com/fossnsbm/" aria-label="Instagram" icon={<FaInstagram fontSize="1.25rem" />} />
                <IconButton as="a" target="_blank" href="https://twitter.com/fossnsbm" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
                <IconButton as="a" target="_blank" href="https://www.youtube.com/channel/UC_bx6hMjxj3hqqQhBw2LCLA/featured" aria-label="Youtube" icon={<FaYoutube fontSize="1.25rem" />} />
              </ButtonGroup>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
    </Container>
  );
}