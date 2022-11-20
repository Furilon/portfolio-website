import { Heading, Text, Flex } from "@chakra-ui/react";
import PageLayout from "../components/layouts/page";

export default function Error404() {
  return (
    <PageLayout>
      <Flex direction="column" justify="center" align="center">
        <Heading>404 - Page doesn't exist</Heading>
      </Flex>
    </PageLayout>
  );
}
