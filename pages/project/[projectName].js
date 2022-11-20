import Project from "../../components/project";
import PageLayout from "../../components/layouts/page";

const LIVE_LINKS = {
  vennbury: "https://vennbury.com",
  "to-do-app": "https://furilon.github.io/to-do-app",
  "cv-application": "https://furilon.github.io/cv-application",
  "shopping-cart": "https://furilon.github.io/shopping-cart",
  "blog-user-frontend": "https://furilon.github.io/blog-user-frontend",
  "membership-club": "https://stark-temple-53647.herokuapp.com/",
};

const DESCRIPTIONS = {
  vennbury:
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
  vennbury: "/vennbury.png",
  "to-do-app": "/to-do-app.png",
  "cv-application": "/cv-application.png",
  "shopping-cart": "/shopping-cart.png",
  "blog-user-frontend": "/blog-user-frontend.png",
  "membership-club": "/membership-club.png",
};

const PROJECT_NAMES = {
  vennbury: "Vennbury",
  "to-do-app": "To-do Application",
  "cv-application": "CV Generator",
  "shopping-cart": "Shopping Cart",
  "blog-user-frontend": "Blog",
  "membership-club": "Membership Club",
};

const PROJECT_PROBLEMS = {
  vennbury:
    "This is my first serious production-ready full-stack project, and there were (and still are) many problems along the way. The first issue we faced is building a React application (SPA) and connecting it to Express server. I quickly realized that we want to have many pages, and that if we only have an SPA, then a page won't load unless it's a homepage, which makes link sharing impossible and hinders SEO. The second problem was team management: we have a team of two, and I'm the 'visionary' in it, so I have to make all of the strategic decisions alongside project management. The third problem was about making lesson page creation scalable: since we are planning to have a big number of lessons, it's a big hassle to create a page for each lesson.",
  "to-do-app":
    "This is my first big vanilla js project. The goal was to implement the app while making the code as modular as possible (using factory funcitons and IIFEs). I faced two problems with that. The first one was about adhering to DRY principle, not leaving anything in the global space, and making everything modular. The second problem was understanding and using closures properly: I needed to pass manupulate the state in a complicated manner, passing functions and variables, which are scoped within those functions, around. And since I don't have a lot of control over the functions that manipulate DOM, I struggled with passing the state of DOM elements around.",
  "cv-application":
    "This is my first React project. The goal was to learn manipulating state: to get the input from user on the 'input' side and display it on the 'resume' side. The main problem I faced was the one of setting up and updating a complex state.",
  "shopping-cart":
    "This is the first React project where I used react-router-dom. The main problem was to manage state between the pages. When a user clicks on 'Add to cart' button, the flower goes into the cart, where he could see the subtotal for that particular flower (if there's more than one of the same kind), to add more or remove flowers of the same kind, and to see the total for all flowers in the cart.",
  "blog-user-frontend":
    "This is the first app, where I had to combine front- and back-end.",
  "membership-club":
    "This is my first Express app that required authentication. The problems were to connect functionality of database, authentication, and showing the correct page to the user based on the route.",
};

const PROJECT_SOLUTIONS = {
  vennbury:
    "To solve the issue of connecting the server with the client, we initially tried to set up a hybrid solution that hydrates the React page on the server and sends it to the client as a ready HTML page (Server-Side Rendering), but it was overly complicated from the architectural standpoint, full of hydration bugs, and very unoptimized. So, I made a decision to switch to NextJS, that solved all backend problems, provided much more pleasant developer experience, and lets us easily choose between SSR and CSR. To solve the team management issue, I set up a Trello app with three boards: to-do, in-process, and done. For each task, we create a card and assign labels that indicate urgency/importance, come up with weekly due dates, and delegate tasks. It allowed us to visualize what tasks are important and prioritize them, to track who's responsible for what, and spread what's needed to do among the team. The last problem is the most interesting one. We want to write lessons in Markdown, so we needed to agree on a convention for the structure of those lessons, after which we designed an algorithm to recursively search through the 'lessons' folder, parse the text, and put it into our components.",
  "to-do-app":
    "I couldn't solve the first issue immediately. Because I was very early on my JS journey, I didn't know what first-order functions were and how scoping worked in details, and I didn't even know that I didn't know it, and because of that I couldn't make the code DRY immediately. So, I completed the project the way I could (making it barely functional), read a book from You Don't Know Javascript series about scoping and closures, went back and refactored the code to adhere to those principles. To not leave anything in the global scope and make the code modular, I learned about the factory funciton pattern and the module pattern (IIFE), and I connected them using an interface module. The issue of closures was also solved after reading the aforementioned book. I started encapsulating the state of DOM elements in functions and then pass those functions where I needed.",
  "cv-application":
    "Using functional components, I set up three state variables: for personal info, for experience, and one for education. For the application, the number of fields in the personal state was constant, so it's simply a matter of capturing the input and putting it into the correct object field. Experience and Education sections were harder because there, the user is supposed to be able to add more of those sections or delete them. It means that the state for each of those sections needs to be a list of objects, so I had to learn how to access the needed object and change fields in it without changing the rest of the fields and the whole state. For that, I learned to use object destructuring and methods that don't change the original state variable (.push() vs .concat(), for example). Lastly, I combined these three funcitons into one onChange() function and picked which method to invoke based on the clicked button's id.",
  "shopping-cart":
    "To solve that problem, I put all of the flowers and their prices into a 'global' state. When the user clicks on the 'Add to cart' button, the function fetches that flower from the state and passes it into the cart component. The cart component keeps the state of passed flowers, checks whether the flower with this ID is already present. Based on that, it does either of two thigns: if the flower is indeed present, it finds that flower in its state and adds its price to itself; if it doesn't exist, then it simply adds it to the state and displays it in the cart. When the user clicks '+' and '-' buttons, the functions determined what flower in the state user wants to add or remove and simply adds the price or removes it. If the price after removal equals to 0, the cart component removes the flower from the state.",
  "blog-user-frontend":
    "For the server, I used MVC model. I set up RESTish API, and restricted some routes to authorized users (me, admin, and I'm able to make those requests from a separate admin client React app). I connected the database to the server and fetch/store/update/delete data based on the client request. For the front-end, I created a React app that makes a request in useEffect hook for all posts, and then makes a page for an individual post with the post text and comments.",
  "membership-club":
    "To solve that problem, I used Model-View-Controller (MVC) pattern, where the app is thought of as a collection of controller functions, which are invoked based on what route user's request specified, that fetch requested data form the database (I used MongoDB), filter and sanitize it, pass it into views (HTML templates, I used EJS templating language), which are sent to the client. I also used Passport-local authentication strategy with session, and I restricted some routes based on whether the user is logged in or not. Additionally, the user isn't able to see some information on the message board unless he is signed in.",
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { projectName: "vennbury" } },
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
