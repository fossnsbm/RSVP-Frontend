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
        shadow="lg"
        position="relative"
      >
        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="1xl" color={useColorModeValue("gray.700", "white")}>
              <Stack direction={["column", "row"]} spacing="10px">
                <Avatar name={data.writter} size={"sm"} />
                <Text>{data.writter} </Text>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default BlogPostCard;
