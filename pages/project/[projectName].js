import { Flex, Heading, Text, Image, chakra } from "@chakra-ui/react";
import Project from "../../components/project";
import PageLayout from "../../components/layouts/page";

const LIVE_LINKS = {
  pandora: "https://theprojectpandora.com",
  "to-do-app": "https://furilon.github.io/to-do-app",
  "cv-application": "https://furilon.github.io/cv-application",
  "shopping-cart": "https://furilon.github.io/shopping-cart",
  "blog-user-frontend": "https://furilon.github.io/blog-user-frontend",
  "membership-club": "https://stark-temple-53647.herokuapp.com/",
};

const DESCRIPTIONS = {
  pandora:
    "Mastery-based and project-focused learning platform. Become an expert by building projects.",
  "to-do-app":
    "This is my first vanilla JS project with separation of concerns using OOP and other abstract patterns, like factory functions and module pattern.",
  "cv-application":
    "Put your information in and the application will automatically generate a resume for you. To practice building functional (as compared to class) React components as well as the state manipulation.",
  "shopping-cart":
    "A shopping cart functionality with the ability to add and remove items from the cart. To build a React app with multiple pages and a more or less complex state management.",
  "blog-user-frontend":
    "The project consists of three parts: the back-end and two front-ends (one for users, the other one for admins). In this part, you can read posts and comments and leave the latter as well.",
  "membership-club":
    "An ExpressJS app with local Passport authorization strategy ",
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { projectName: "pandora" } },
      { params: { projectName: "to-do-app" } },
      { params: { projectName: "cv-application" } },
      { params: { projectName: "shopping-cart" } },
      { params: { projectName: "membership-club" } },
      { params: { projectName: "blog-user-frontend" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const ghLink = `https://github.com/Furilon/${params.projectName}`;
  const liveLink = LIVE_LINKS[params.projectName];
  const description = DESCRIPTIONS[params.projectName];

  return {
    props: {
      //   img,
      ghLink,
      liveLink,
      description,
    },
  };
}

export default function Page({ img, ghLink, liveLink, description }) {
  return (
    <PageLayout title="Project">
      <Project
        // img={img}
        ghLink={ghLink}
        liveLink={liveLink}
        description={description}
      />
    </PageLayout>
  );
}
