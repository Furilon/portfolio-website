import { Image, Button, Link, Flex, Heading, Text } from "@chakra-ui/react";

export default function GridProjectItem({ link, image, tags, projectName }) {
  return (
    <Flex direction="column" justify="center" align="center">
      <Heading>{projectName}</Heading>
      <Link href={link}>
        <Image src={image} alt="Project screenshot" />
      </Link>
      {tags.map((tag, index) => (
        <Text
          key={index}
          borderRadius="20px"
          px="8px"
          py="5px"
          bg="#cdcdcd"
          textColor="#1e1e1e"
        >
          {tag}
        </Text>
      ))}
    </Flex>
  );
}
