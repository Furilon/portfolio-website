import { Flex, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Experience({ name, date, pointsArr }) {
  return (
    <Flex direction="column" justify="center" align="center" mt="20px">
      <Heading as="h4" fontSize="1.2rem" textDecoration="underline">
        {name}
      </Heading>
      <Flex justify="center" align="flex-start" mt="10px">
        <Text fontWeight="bold">{date}</Text>
        <UnorderedList ml="75px">
          {pointsArr.map((point, index) => (
            <ListItem key={index}>{point}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Flex>
  );
}
