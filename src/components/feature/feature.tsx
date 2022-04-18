
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function FeatureSection() {
  return (
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <h1> feature event card </h1>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} bg={'#6699FF'}>

      <h1> content from the blog </h1>
      
      </Flex>
    </Stack>
  );
}
