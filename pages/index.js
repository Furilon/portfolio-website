import Link from "next/link";
import { Container, Box, Heading } from "@chakra-ui/react";

export default function Index({ children, router }) {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
			<Heading as="h2" variant="page-title">Mykyta Medvediev</Heading>
		</Box>
      </Box>
      <div>
        Index
      </div>
    </Container>
  );
}
