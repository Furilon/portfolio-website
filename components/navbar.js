import Logo from "./logo";
import NextLink from "next/link";

import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box as="nav" w="100%" p="10px">
      <Container
        display="flex"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          textColor="white"
        >
          <Link href="/works">Works</Link>
          <Link href="/about">About</Link>
          <Link href="/library/notes">Library</Link>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu autoSelect="false">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                _active={{ bg: "#CDCDCD", border: "none", color: "#1e1e1e" }}
                color="white"
              ></MenuButton>
              <MenuList bg="#1e1e1e" textColor="white">
                <Link href="/">
                  <MenuItem
                    _focus={{ bg: "#cdcdcd", textColor: "#1e1e1e" }}
                    _active={{ bg: "#cdcdcd", textColor: "#1e1e1e" }}
                  >
                    Homepage
                  </MenuItem>
                </Link>
                <Link href="/works">
                  <MenuItem
                    _focus={{ bg: "#cdcdcd", textColor: "#1e1e1e" }}
                    _active={{ bg: "#cdcdcd", textColor: "#1e1e1e" }}
                  >
                    Works
                  </MenuItem>
                </Link>
                <Link href="/about">
                  <MenuItem
                    _focus={{ bg: "#cdcdcd", textColor: "#1e1e1e" }}
                    _active={{ bg: "#cdcdcd", textColor: "#1e1e1e" }}
                  >
                    About
                  </MenuItem>
                </Link>
                <Link href="/library/notes">
                  <MenuItem
                    _focus={{ bg: "#cdcdcd", textColor: "#1e1e1e" }}
                    _active={{ bg: "#cdcdcd", textColor: "#1e1e1e" }}
                  >
                    Library
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
