import { Flex, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Experience({ role, name, date, pointsArr }) {
  return (
    <Flex direction="column" justify="center" align="center" mt="20px">
      <Flex direction="column" justify="center" align="center" mt="15px">
        <Heading as="h4" fontSize="1.2rem" fontStyle="italic">
          {name}
        </Heading>
        <Heading as="h4" fontSize="1rem" fontStyle="italic" fontWeight="normal">
          {role}
        </Heading>
      </Flex>
      <Flex
        justify="center"
        align={{ base: "center", md: "flex-start" }}
        direction={{ base: "column", md: "row" }}
        mt={{ base: "0", md: "10px" }}
      >
        <Text w={{ md: "175px" }} whiteSpace="nowrap">
          {date}
        </Text>
        <UnorderedList
          ml={{ base: "0", md: "50px" }}
          mt={{ base: "10px", md: "0" }}
          listStyleType="none"
          px={5}
          w={{ md: "100%" }}
        >
          {pointsArr.map((point, index) => (
            <ListItem
              key={index}
              _before={{
                content: '"•"',
                color: "gray",
                display: "inline-block",
                w: "1em",
                ml: "-1em",
                fontWeight: "bold",
              }}
            >
              {point}
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Flex>
  );
}
