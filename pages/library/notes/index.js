import matter from "gray-matter";

import {
  Box,
  Flex,
  Text,
  Heading,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";
import PageLayout from "../../../components/layouts/page";

export async function getStaticProps() {
  const path = require("path");
  const fs = require("fs");

  let linksMap = {};

  function throughDirectory(directory) {
    fs.readdirSync(directory).forEach((file) => {
      const fileName = path.basename(file).split(".")[0];
      const link = createLink(fileName);

      linksMap[fileName] = link;
    });
  }

  function createLink(fileName) {
    const lowerCaseFileName = fileName.toLowerCase();
    const formattedFileName = lowerCaseFileName.replace(/ /g, "-");
    const link = `/library/notes/${formattedFileName}`;

    return link;
  }

  throughDirectory("data/notes");

  const serializedLinksMap = JSON.stringify(linksMap);

  return { props: { serializedLinksMap } };
}

export default function Notes({ serializedLinksMap }) {
  const linksMap = JSON.parse(serializedLinksMap);

  return (
    <PageLayout title="all notes">
      <UnorderedList>
        {Object.entries(linksMap).map(([key, value]) => (
          <ListItem key={key}>
            <Link href={value}>{key}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </PageLayout>
  );
}
