import { Image, Link, Button, Flex, Header, Text } from "@chakra-ui/react";
// import Img from "../components/image";

export default function Project({ ghLink, liveLink, img, description }) {
  return (
    <Flex direction="column">
      <Image
        src={img}
        // w={{ base: "356px", sm: "510", md: "1187", lg: "1780px" }}
        // h={{ base: "273", sm: "390", md: "911", lg: "1366px" }}
        w="fill"
        h="auto"
        alt="Project Screenshot"
        layout="fill"
      />
      <Link href={ghLink}>GH Link</Link>
      <Link href={liveLink}>Live Link</Link>
      <Text>{description}</Text>
    </Flex>
  );
}
