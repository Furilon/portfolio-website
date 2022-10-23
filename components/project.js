import { Image, Link, Button, Flex, Header, Text } from "@chakra-ui/react";

export default function Project({ ghLink, liveLink, img, description }) {
  return (
    <Flex direction="column">
      {/* <Image src={img} alt="Project Screenshot" /> */}
      <Link href={ghLink}>GH Link</Link>
      <Link href={liveLink}>Live Link</Link>
      <Text>{description}</Text>
    </Flex>
  );
}
