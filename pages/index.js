import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Button,
  Link,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import Section from "../components/section";
import { Toolbelt, Learning } from "../components/toolbelt";
import { ChevronRightIcon } from "@chakra-ui/icons";

import PageLayout from "../components/layouts/page";

export default function Index() {
  return (
    <PageLayout title="Homepage -  MM">
      <Container>
        <Box
          borderRadius="lg"
          border="1px"
          borderColor="#cdcdcd"
          textColor="white"
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer!
        </Box>

        <Box display={{ md: "flex" }}>
          <Flex flexGrow={1} direction="column">
            <Heading
              as="h1"
              textColor="white"
              textAlign="center"
              fontWeight="normal"
              fontSize="1.5rem"
              fontStyle="italic"
            >
              my name is
            </Heading>
            <Heading
              as="h1"
              textColor="white"
              textAlign="center"
              textDecoration="underline"
              textDecorationColor="gray"
            >
              Mykyta Medvediev
            </Heading>
          </Flex>
        </Box>

        <Section delay={0.5}>
          <UnorderedList my={6}>
            <ListItem>
              I&apos;m currently a senior Business Administration student at UC
              Irvine
            </ListItem>
            <ListItem>
              I&apos;m interested in full-stack web development.
            </ListItem>
            <ListItem>
              I&apos;m looking for a full-time junior front-end developer
              position
            </ListItem>
            <ListItem>
              My contact information is at the bottom of my{" "}
              <Link href="/about#contacts">about</Link> page
            </ListItem>
          </UnorderedList>
        </Section>

        <Section delay={1}>
          <Flex direction="column" justify="center" align="center" my={10}>
            <Heading
              as="h2"
              fontSize="1.8rem"
              mb={4}
              textDecoration="underline"
              textDecorationColor="gray"
              textAlign="center"
            >
              My development toolkit
            </Heading>
            <Toolbelt />
          </Flex>
        </Section>

        <Section delay={1.5}>
          <Flex direction="column" justify="center" align="center" my={10}>
            <Heading
              as="h2"
              fontSize="1.8rem"
              mb={4}
              textDecoration="underline"
              textDecorationColor="gray"
              textAlign="center"
            >
              Currently learning
            </Heading>
            <Learning />
          </Flex>
        </Section>

        <Section delay={2}>
          <Flex direction="column" justify="center" align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                borderColor="white"
                textColor="white"
                variant="outline"
                w="175px"
                mb="20px"
                _hover={{
                  bg: "#cdcdcd",
                  textColor: "#1e1e1e",
                }}
              >
                My Portfolio
              </Button>
            </NextLink>
            <NextLink href="/about">
              <Button
                rightIcon={<ChevronRightIcon />}
                borderColor="white"
                textColor="white"
                variant="outline"
                w="175px"
                mb="20px"
                _hover={{
                  bg: "#cdcdcd",
                  textColor: "#1e1e1e",
                }}
              >
                About me
              </Button>
            </NextLink>
          </Flex>
        </Section>
      </Container>
    </PageLayout>
  );
}
