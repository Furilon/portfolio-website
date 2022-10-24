import Project from "../../components/project";
import PageLayout from "../../components/layouts/page";
import TodoImg from "../../public/to-do-app.png";
import PandoraImg from "../../public/pandora.png";
import CvAppImg from "../../public/cv-application.png";
import ShopCartImg from "../../public/shopping-cart.png";
import MembershipImg from "../../public/membership-club.png";
import BlogImg from "../../public/blog-user-frontend.png";
import { Flex, Heading, Text, Image, chakra } from "@chakra-ui/react";

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

const IMAGES = {
  pandora: "/pandora.png",
  "to-do-app": "/to-do-app.png",
  "cv-application": "/cv-application.png",
  "shopping-cart": "/shopping-cart.png",
  "blog-user-frontend": "/blog-user-frontend.png",
  "membership-club": "/membership-club.png",
};

const PROJECT_NAMES = {
  pandora: "Project Pandora",
  "to-do-app": "To-do Application",
  "cv-application": "CV Generator",
  "shopping-cart": "Shopping Cart",
  "blog-user-frontend": "Blog",
  "membership-club": "Membership Club",
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
  const img = IMAGES[params.projectName];
  const liveLink = LIVE_LINKS[params.projectName];
  const description = DESCRIPTIONS[params.projectName];
  const projectName = PROJECT_NAMES[params.projectName];

  return {
    props: {
      projectName,
      img,
      ghLink,
      liveLink,
      description,
    },
  };
}

export default function Page({
  projectName,
  img,
  ghLink,
  liveLink,
  description,
}) {
  return (
    <PageLayout title="Project">
      <Project
        projectName={projectName}
        img={img}
        ghLink={ghLink}
        liveLink={liveLink}
        description={description}
      />
    </PageLayout>
  );
}
