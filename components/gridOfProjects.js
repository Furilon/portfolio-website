import { Grid, Link, Button } from "@chakra-ui/react";
import GridProjectItem from "./gridProjectItem";

const PROJECT_IMAGE = {
  vennbury: "/vennbury.png",
  "to-do-app": "/to-do-app.png",
  "cv-application": "/cv-application.png",
  "shopping-cart": "/shopping-cart.png",
  "blog-user-frontend": "/blog-user-frontend.png",
  "membership-club": "/membership-club.png",
};

const PROJECT_NAMES = {
  vennbury: "Vennbury University",
  "to-do-app": "To-do Application",
  "cv-application": "CV Generator",
  "shopping-cart": "Shopping Cart",
  "blog-user-frontend": "Blog",
  "membership-club": "Membership Club",
};

const PROJECT_LINKS = {
  vennbury: "/project/vennbury",
  "to-do-app": "/project/to-do-app",
  "cv-application": "/project/cv-application",
  "shopping-cart": "/project/shopping-cart",
  "blog-user-frontend": "/project/blog-user-frontend",
  "membership-club": "/project/membership-club",
};

const PROJECT_TAGS = {
  vennbury: ["next.js", "react", "chakra", "mongodb", "auth"],
  "to-do-app": ["vanilla js", "IIFE", "factory funcs", "css"],
  "cv-application": ["react", "useState"],
  "shopping-cart": ["react", "react-router-dom", "useState"],
  "blog-user-frontend": ["express", "react", "heroku", "API", "mongodb"],
  "membership-club": ["passport", "express", "heroku", "mongodb"],
};

const PROJECT_INFO = {
  vennbury: {
    name: PROJECT_NAMES["vennbury"],
    projLink: PROJECT_LINKS["vennbury"],
    image: PROJECT_IMAGE["vennbury"],
    tags: PROJECT_TAGS["vennbury"],
  },
  "blog-user-frontend": {
    name: PROJECT_NAMES["blog-user-frontend"],
    projLink: PROJECT_LINKS["blog-user-frontend"],
    image: PROJECT_IMAGE["blog-user-frontend"],
    tags: PROJECT_TAGS["blog-user-frontend"],
  },
  "membership-club": {
    name: PROJECT_NAMES["membership-club"],
    projLink: PROJECT_LINKS["membership-club"],
    image: PROJECT_IMAGE["membership-club"],
    tags: PROJECT_TAGS["membership-club"],
  },
  "shopping-cart": {
    name: PROJECT_NAMES["shopping-cart"],
    projLink: PROJECT_LINKS["shopping-cart"],
    image: PROJECT_IMAGE["shopping-cart"],
    tags: PROJECT_TAGS["shopping-cart"],
  },
  "cv-application": {
    name: PROJECT_NAMES["cv-application"],
    projLink: PROJECT_LINKS["cv-application"],
    image: PROJECT_IMAGE["cv-application"],
    tags: PROJECT_TAGS["cv-application"],
  },
  "to-do-app": {
    name: PROJECT_NAMES["to-do-app"],
    projLink: PROJECT_LINKS["to-do-app"],
    image: PROJECT_IMAGE["to-do-app"],
    tags: PROJECT_TAGS["to-do-app"],
  },
};

export default function GridOfProjects() {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      templateRows={{ base: "repeat(6, 1fr)", md: "repeat(3, 1fr)" }}
      gap={6}
    >
      {Object.keys(PROJECT_INFO).map((project) => (
        <GridProjectItem
          key={PROJECT_INFO[project].name}
          link={PROJECT_INFO[project].projLink}
          tags={PROJECT_INFO[project].tags}
          projectName={PROJECT_INFO[project].name}
          image={PROJECT_INFO[project].image}
        />
      ))}
    </Grid>
  );
}
