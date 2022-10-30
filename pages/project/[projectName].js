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

const PROJECT_PROBLEMS = {
  pandora:
    "This is my first serious production-ready full-stack project, and there were (and still are) many problems along the way. The first issue we faced is building a React application (SPA) and connecting it to Express server. I quickly realized that we want to have many pages, and that if we only have an SPA, then a page won't load unless it's a homepage, which makes link sharing impossible and hinders SEO. The second problem was team management: we have a team of two, and I'm the 'visionary' in it, so I have to make all of the strategic decisions alongside project management. The third problem was about making lesson page creation scalable: since we are planning to have a big number of lessons, it's a big hassle to create a page for each lesson. The way I dealt with those problems is outlined below.",
  "to-do-app": "To-do Application",
  "cv-application": "CV Generator",
  "shopping-cart": "Shopping Cart",
  "blog-user-frontend": "Blog",
  "membership-club": "Membership Club",
};

const PROJECT_SOLUTIONS = {
  pandora:
    "To solve the issue of connecting the server with the client, we initially tried to set up a hybrid solution that hydrates the React page on the server and sends it to the client as a ready HTML page (Server-Side Rendering), but it was overly complicated from the architectural standpoint, full of hydration bugs, and very unoptimized. So, I made a decision to switch to NextJS, that solved all backend problems, provided much more pleasant developer experience, and lets us easily choose between SSR and CSR. To solve the team management issue, I set up a Trello app with three boards: to-do, in-process, and done. For each task, we create a card and assign labels that indicate urgency/importance, come up with weekly due dates, and delegate tasks. It allowed us to visualize what tasks are important and prioritize them, to track who's responsible for what, and spread what's needed to do among the team. The last problem is the most interesting one. We want to write lessons in Markdown, so we needed to agree on a convention for the structure of those lessons, after which we designed an algorithm to recursively search through the 'lessons' folder, parse the text, and put it into our components.",
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
  const problems = PROJECT_PROBLEMS[params.projectName];
  const solution = PROJECT_SOLUTIONS[params.projectName];

  return {
    props: {
      projectName,
      img,
      ghLink,
      liveLink,
      description,
      problems,
      solution,
    },
  };
}

export default function Page({
  projectName,
  img,
  ghLink,
  liveLink,
  description,
  problems,
  solution,
}) {
  return (
    <PageLayout title="Project">
      <Project
        projectName={projectName}
        img={img}
        ghLink={ghLink}
        liveLink={liveLink}
        description={description}
        problems={problems}
        solution={solution}
      />
    </PageLayout>
  );
}
