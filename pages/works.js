import Link from "next/link";
import PageLayout from "../components/layouts/page";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import GridOfProjects from "../components/gridOfProjects";

export default function Works() {
  return (
    <PageLayout title="Works - MM">
      <Flex direction="column" justify="center" align="center">
        <Heading as="h1" textAlign="center" mb="30px">
          Projects
        </Heading>
        <GridOfProjects />
      </Flex>
    </PageLayout>
  );
}
