import { Image, Link, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Project({
  projectName,
  ghLink,
  liveLink,
  img,
  description,
}) {
  return (
    <Flex direction="column">
      <Flex direction="column" justify="center" align="center">
        <Heading>{projectName}</Heading>
        <Image
          src={img}
          // w={{ base: "356px", sm: "510", md: "1187", lg: "1780px" }}
          // h={{ base: "273", sm: "390", md: "911", lg: "1366px" }}
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
      <Text>{description}</Text>
    </Flex>
  );
}
