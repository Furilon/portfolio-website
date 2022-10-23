import NextLink from "next/link";
import { Container, Box, Heading, Button, Link, Text } from "@chakra-ui/react";
import Section from "../components/section";
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
          <Box flexGrow={1}>
            <Heading as="h1" textColor="white" textAlign="center">
              Mykyta Medvediev
            </Heading>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading textColor="white" textAlign="center">
            Index
          </Heading>
          <Text as="p" textColor="white">
            Paragraph
          </Text>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                borderColor="white"
                textColor="white"
                variant="outline"
                _hover={{
                  bg: "#cdcdcd",
                  textColor: "#1e1e1e",
                }}
              >
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </PageLayout>
  );
}
