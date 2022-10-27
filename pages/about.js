import PageLayout from "../components/layouts/page";
import { Heading, Flex, Text, Image, Button, Link } from "@chakra-ui/react";
import Section from "../components/section";
import Experience from "../components/experience";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";

const EXPERIENCE_TEXT = {
  Pandora: ["Project Management using Trello", "Frontend", "Backend"],
};

export default function About() {
  return (
    <PageLayout title="About - MM">
      <Flex direction="column" justify="center" align="center">
        <Heading as="h1">About me</Heading>

        {/* Wrapper for Who I Am section */}
        <Section delay={0.5}>
          <Flex direction="column" justify="center" align="center" my="25px">
            <Heading
              as="h2"
              fontSize="1.6rem"
              mb="15px"
              textDecoration="underline"
              textDecorationColor="gray"
            >
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
              <Text w={{ base: "341px", lg: "569px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                autem laboriosam eum iusto nam nulla quis aliquam harum
                necessitatibus, adipisci eligendi, magnam deserunt rem incidunt
                ullam hic repudiandae. Magnam, officia.
              </Text>
            </Flex>
          </Flex>
        </Section>

        {/* Wrapper for Experience section */}
        <Section delay={1}>
          <Flex direction="column" justify="center" align="center" my="25px">
            <Heading
              as="h2"
              fontSize="1.6rem"
              textDecoration="underline"
              textDecorationColor="gray"
            >
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

        <Section delay={1.5}>
          <Flex direction="column" justify="center" align="center" my="25px">
            <Heading
              id="contacts"
              as="h4"
              fontSize="1.6rem"
              textDecoration="underline"
              textDecorationColor="gray"
            >
              Contact me
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="center"
              align="center"
              gap={{ base: "20px", md: "30px" }}
              mt="20px"
            >
              <Link
                href="https://www.linkedin.com/in/mykyta-medvediev/"
                isExternal
              >
                <Button
                  colorScheme="linkedin"
                  leftIcon={<AiOutlineLinkedin />}
                  size="lg"
                  w="150px"
                >
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/Furilon" isExternal>
                <Button
                  size="lg"
                  leftIcon={<AiOutlineGithub />}
                  textColor="#cdcdcd"
                  border="1px"
                  bg="none"
                  borderColor="#cdcdcd"
                  w="150px"
                  _hover={{ bg: "whiteAlpha.100" }}
                >
                  GitHub
                </Button>
              </Link>
              <Link href="mailto:mykytamedvediev@gmail.com" isExternal>
                <Button
                  size="lg"
                  leftIcon={<AiOutlineMail />}
                  bg="whiteAlpha.800"
                  textColor="#1e1e1e"
                  w="150px"
                  _hover={{
                    bg: "whiteAlpha.700",
                  }}
                >
                  Email
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Section>
      </Flex>
    </PageLayout>
  );
}
