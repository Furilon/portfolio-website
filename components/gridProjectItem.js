import {
  Image,
  Button,
  Link,
  Flex,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";

import Section from "./section";

export default function GridProjectItem({ link, image, tags, projectName }) {
  return (
    <Section>
      <Flex direction="column" justify="center" align="center">
        <Heading fontSize="1.8rem" mb="8px">
          <Link
            href={link}
            _hover={{
              textColor: "gray",
              textDecoration: "underline",
            }}
          >
            {projectName}
          </Link>
        </Heading>
        <Link href={link}>
          <Box
            border="8px"
            borderRadius="10px"
            borderColor="gray.500"
            display="inline-block"
            overflow="hidden"
          >
            <Image
              src={image}
              alt="Project screenshot"
              transition="transform 0.25s ease-in-out 0.01s"
              _hover={{
                transform: "scale(1.4, 1.4)",
              }}
            />
          </Box>
        </Link>
        <Flex justify="center" align="items">
          {tags.map((tag, index) => (
            <Text
              mt="8px"
              mx="3px"
              key={index}
              borderRadius="20px"
              px="8px"
              py="5px"
              bg="#cdcdcd"
              textColor="#1e1e1e"
              _hover={{
                bg: "gray.500",
              }}
            >
              {tag}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Section>
  );
}
