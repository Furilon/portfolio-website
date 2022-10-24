import Link from "next/link";
import PageLayout from "../components/layouts/page";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";

export default function Works() {
  return (
    <PageLayout title="Works - MM">
      <Flex direction="column" justify="center" align="center">
        <Heading as="h1" textAlign="center">
          Projects
        </Heading>
        <Link href="/project/pandora">
          <Button
            borderColor="white"
            textColor="white"
            variant="outline"
            w="215px"
            mb="20px"
            _hover={{
              bg: "#cdcdcd",
              textColor: "#1e1e1e",
            }}
          >
            Pandora
          </Button>
        </Link>
        <Link href="/project/to-do-app">
          <Button
            borderColor="white"
            textColor="white"
            variant="outline"
            w="215px"
            mb="20px"
            _hover={{
              bg: "#cdcdcd",
              textColor: "#1e1e1e",
            }}
          >
            To-do List
          </Button>
        </Link>
        <Link href="/project/blog-user-frontend">
          <Button
            borderColor="white"
            textColor="white"
            variant="outline"
            w="215px"
            mb="20px"
            _hover={{
              bg: "#cdcdcd",
              textColor: "#1e1e1e",
            }}
          >
            Blog
          </Button>
        </Link>
        <Link href="/project/membership-club">
          <Button
            borderColor="white"
            textColor="white"
            variant="outline"
            w="215px"
            mb="20px"
            _hover={{
              bg: "#cdcdcd",
              textColor: "#1e1e1e",
            }}
          >
            Membership Club Board
          </Button>
        </Link>
        <Link href="/project/shopping-cart">
          <Button
            borderColor="white"
            textColor="white"
            variant="outline"
            w="215px"
            mb="20px"
            _hover={{
              bg: "#cdcdcd",
              textColor: "#1e1e1e",
            }}
          >
            Shopping Cart
          </Button>
        </Link>
        <Link href="/project/cv-application">
          <Button
            borderColor="white"
            textColor="white"
            variant="outline"
            w="215px"
            mb="20px"
            _hover={{
              bg: "#cdcdcd",
              textColor: "#1e1e1e",
            }}
          >
            CV Generator
          </Button>
        </Link>
      </Flex>
    </PageLayout>
  );
}
