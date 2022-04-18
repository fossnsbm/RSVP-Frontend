
import {
  Flex,
  Stack,
} from '@chakra-ui/react';
import ArticleSecion from "../articles/article"

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

      <Flex p={8} flex={1}  bg={'#6699FF'}>
      < ArticleSecion />
      </Flex>
  </Stack>
  );
}
