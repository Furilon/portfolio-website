import { Heading, Text, Flex } from "@chakra-ui/react";
import PageLayout from "../components/layouts/page";

export default function Error404() {
  return (
    <PageLayout>
      <Flex direction="column" justify="center" align="center">
        <Heading>404 - Page does not exist</Heading>
      </Flex>
    </PageLayout>
  );
}
