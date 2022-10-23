import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";

export default function MainLayout({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="application-name" content="Portfolio Website" />
        <meta name="author" content="Mykyta Medvediev" />
        <meta
          name="description"
          content="Mykyta Medvediev's Portfolio Website."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/Favicon.jpg" type="image/x-icon" />

        {/* tags for when the website is shared */}
        <meta
          property="og:description"
          content="Mykyta Medvediev's Portfolio Website."
        />
        <meta
          property="og:title"
          content="Mykyta Medvediev's Portfolio Website"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Logo_with_background.png" />
      </Head>
      <Navbar />
      <Container maxW="container.md">{children}</Container>
    </Box>
  );
}
