import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Avatar,
  Stack,
  Text,
} from "@chakra-ui/react";

interface data {
  imageURL: string;
  name: string;
  writter: string;
}

const BlogPostCard = ({ data }: { data: data }) => {
  return (
    <Flex w="full" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        rounded="lg"
        position="relative"
      >
        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          height="140px"
          width="280px"
          objectFit='cover'
        />

        <Box paddingLeft='15px' paddingRight='15px' paddingTop='8px' paddingBottom='14px'>
          <Flex justifyContent="space-between" alignContent="center">
            <Box
              fontSize="lg"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
          </Flex>
          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="1xl" color={useColorModeValue("gray.700", "white")} paddingTop='5px'>
              <Stack direction={["column", "row"]} spacing="8px" align="center">
                <Avatar name={data.writter} size={"xs"} />
                <Text color={'#9B9B9B'} fontWeight='medium' textTransform={'capitalize'}>{data.writter} </Text>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default BlogPostCard;
