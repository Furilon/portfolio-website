import NextLink from "next/link";
import { Container, Box, Heading, Button, Link } from "@chakra-ui/react";
import Section from "../components/section";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Index({ children, router }) {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mykyta Medvediev
          </Heading>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Index
        </Heading>
        <p>Paragraph</p>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
}
