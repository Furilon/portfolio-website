import Link from "next/link";
import PageLayout from "../components/layouts/page";
import { Heading, Flex, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <PageLayout title="About - MM">
      <Heading>About me</Heading>
    </PageLayout>
  );
}
