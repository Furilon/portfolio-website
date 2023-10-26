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

export async function getStaticProps() {
  const { data: frontmatter, content } = matter.read(
    "/home/furilon/portfolio-website/data/notes/3D heuristic.md"
  );

  return {
    props: { frontmatter, content },
  };
}

export default function Notes({ frontmatter, content }) {
  return (
    <PageLayout title="note page" background="light">
      <Box dangerouslySetInnerHTML={{ __html: md.render(content) }}></Box>
    </PageLayout>
  );
}
