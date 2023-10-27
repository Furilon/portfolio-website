import PageLayout from "../../../components/layouts/page";
import { Box } from "@chakra-ui/react";

import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import matter from "gray-matter";

const md = markdownIt({ html: true })
  .use(markdownItAnchor, {
    tabIndex: false,
    permalink: markdownItAnchor.permalink.headerLink(),
  })
  .use(require("markdown-it-external-anchor"), {
    domain: "medvediev.net",
    class: "external",
  });

export async function getStaticPaths() {
  const Path = require("path");
  const fs = require("fs");

  let paths = [];

  function throughDirectory(directory) {
    fs.readdirSync(directory).forEach((file) => {
      const fileName = Path.basename(file).split(".")[0];

      const path = {
        params: { postName: fileName.toLowerCase().replace(/ /g, "-") },
      };

      paths.push(path);
    });
  }

  throughDirectory("data/articles");

  console.log(paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { postName } }) {
  let address = postName.replace(/-/g, " ");
  address = address.charAt(0).toUpperCase() + address.slice(1);

  const { data: frontmatter, content } = matter.read(
    `/home/furilon/portfolio-website/data/articles/${address}.md`
  );

  console.log(address);

  return {
    props: { frontmatter, content },
  };
}

export default function Post({ frontmatter, content }) {
  return (
    <PageLayout title="note page" background="light">
      <Box dangerouslySetInnerHTML={{ __html: md.render(content) }}></Box>
    </PageLayout>
  );
}
