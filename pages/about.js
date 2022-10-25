import Link from "next/link";
import PageLayout from "../components/layouts/page";
import { Heading, Flex, Text, Image } from "@chakra-ui/react";
import Section from "../components/section";
import Experience from "../components/experience";

const EXPERIENCE_TEXT = {
  Pandora: ["Project Management using Trello", "Frontend", "Backend"],
};

export default function About() {
  return (
    <PageLayout title="About - MM">
      <Flex direction="column" justify="center" align="center">
        <Heading as="h1">About me</Heading>

        {/* Wrapper for Who I Am section */}
        <Section>
          <Flex direction="column" justify="center" align="center" my="20px">
            <Heading as="h2" fontSize="1.6rem" mb="15px">
              Who I am
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="center"
              align="flex-start"
            >
              <Image
                src="/Mykyta.jpg"
                alt="Mykyta Medvediev's picture"
                w={{ base: "341px", lg: "569px" }}
                h={{ base: "375px", lg: "625px" }}
                mr={{ base: "none", md: "20px" }}
                mb={{ base: "20px", md: "none" }}
                borderRadius="10px"
              />
              <Text
                w={{ base: "341px", lg: "569px" }}
                h={{ base: "375px", lg: "625px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                autem laboriosam eum iusto nam nulla quis aliquam harum
                necessitatibus, adipisci eligendi, magnam deserunt rem incidunt
                ullam hic repudiandae. Magnam, officia.
              </Text>
            </Flex>
          </Flex>
        </Section>

        <Section>
          <Flex direction="column" justify="center" align="center">
            <Heading as="h2" fontSize="1.6rem">
              Experience
            </Heading>
            <Flex direction="column" justify="center" align="center">
              <Experience
                name={"Project Pandora"}
                date="April 2022 - Present"
                pointsArr={EXPERIENCE_TEXT["Pandora"]}
              />
            </Flex>
          </Flex>
        </Section>
      </Flex>
    </PageLayout>
  );
}
