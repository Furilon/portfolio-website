import { Image, Link, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Project({
  projectName,
  ghLink,
  liveLink,
  img,
  description,
  problems,
  solution,
}) {
  return (
    <Flex direction="column">
      {/* Wrapper for Image */}
      <Flex direction="column" justify="center" align="center">
        <Heading>{projectName}</Heading>
        <Image
          src={img}
          w="fill"
          h="auto"
          alt="Project Screenshot"
          layout="fill"
          border="8px"
          borderRadius="10px"
          borderColor="gray"
          mt="10px"
        />
      </Flex>

      {/* Wrapper for buttons */}
      <Flex justify="center" align="center" gap="20px" mt="10px" mb="20px">
        <Link href={ghLink} isExternal>
          <Button
            leftIcon={<AiFillGithub />}
            bg="#cdcdcd"
            textColor="#1e1e1e"
            _hover={{
              bg: "whiteAlpha.600",
            }}
          >
            GitHub
          </Button>
        </Link>
        <Link href={liveLink} isExternal>
          <Button
            leftIcon={<ExternalLinkIcon />}
            bg="purple.500"
            _hover={{ bg: "purple.700" }}
          >
            Live Version
          </Button>
        </Link>
      </Flex>

      {/* Wrapper for text */}
      <Flex direction="column" justify="center" align="center">
        <Heading>Description</Heading>
        <Text>{description}</Text>

        <Heading mt={6}>Problems Faced</Heading>
        <Text>{problems}</Text>

        <Heading mt={6}>What I did</Heading>
        <Text mb={10}>{solution}</Text>
      </Flex>
    </Flex>
  );
}
