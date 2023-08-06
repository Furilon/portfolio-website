import { Grid, GridItem, Image, Tooltip } from "@chakra-ui/react";

export function Toolbelt() {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      templateRows="repeat(3, 1fr)"
      gap="5px"
    >
      <Tooltip
        label="HTML"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/html-5.svg"
          alt="HTML"
          bg="white"
          padding="5px"
          borderRadius="20px"
        />
      </Tooltip>

      <Tooltip
        label="CSS"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/css-3.svg"
          alt="CSS"
          bg="white"
          padding="5px"
          borderRadius="20px"
        />
      </Tooltip>
      <Tooltip
        label="JS"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/javascript.svg"
          alt="JS"
          borderRadius="20px"
        />
      </Tooltip>
      <Tooltip
        label="ReactJS"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/react.svg"
          alt="React"
        />
      </Tooltip>
      <Tooltip
        label="NodeJS"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/nodejs.svg"
          alt="NodeJS"
        />
      </Tooltip>
      <Tooltip
        label="ExpressJS"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/express.svg"
          alt="ExpressJS"
        />
      </Tooltip>
      <Tooltip
        label="MongoDB"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/mongodb-icon.svg"
          alt="MongoDB"
          bg="white"
          padding="5px"
          borderRadius="20px"
        />
      </Tooltip>
      <Tooltip
        label="Tailwind CSS"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/tailwindcss-icon.svg"
          alt="Tailwind CSS"
        />
      </Tooltip>
      <Tooltip
        label="Webpack"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/webpack.svg"
          alt="Webpack"
        />
      </Tooltip>
      <Tooltip
        label="Eslist"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/eslint.svg"
          alt="Eslint"
        />
      </Tooltip>
      <Tooltip
        label="Git"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/git-icon.svg"
          alt="Git"
        />
      </Tooltip>
      <Tooltip
        label="Python"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/python.svg"
          alt="Python"
        />
      </Tooltip>
      <Tooltip
        label="VS Code"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/visual-studio-code.svg"
          alt="VS Code"
        />
      </Tooltip>
      <Tooltip
        label="NextJS"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          bg="white"
          borderRadius="full"
          src="/images/nextjs.svg"
          alt="NextJS"
        />
      </Tooltip>
      <Tooltip
        label="Heroku"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/heroku-icon.svg"
          alt="Heroku"
          bg="white"
          padding="5px"
          borderRadius="15px"
        />
      </Tooltip>
      <Tooltip
        label="Firebase"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/firebase.svg"
          alt="Firebase"
        />
      </Tooltip>
      <Tooltip
        label="Jest"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem as={Image} boxSize="75px" src="/images/jest.svg" alt="Jest" />
      </Tooltip>
      <Tooltip
        label="Formik"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/formik.svg"
          alt="Formik"
          borderRadius="20px"
        />
      </Tooltip>

      <Tooltip
        label="Redux"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/redux.svg"
          alt="Redux"
        />
      </Tooltip>
      <Tooltip
        label="Typescript"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/typescript-icon.svg"
          alt="Typescript"
          borderRadius="20px"
        />
      </Tooltip>
      <Tooltip
        label="GraphQL"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/graphql.svg"
          alt="GraphQL"
        />
      </Tooltip>
    </Grid>
  );
}

export function Learning() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5}>
      <Tooltip
        label="Salesforce"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/salesforce.svg"
          alt="Salesforce"
        />
      </Tooltip>

      <Tooltip
        label="Java"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem as={Image} boxSize="75px" src="/images/java.svg" alt="Java" />
      </Tooltip>

      <Tooltip
        label="Spring"
        hasArrow
        bg="white"
        borderRadius="10px"
        textColor="#1e1e1e"
      >
        <GridItem
          as={Image}
          boxSize="75px"
          src="/images/spring.svg"
          alt="Java"
        />
      </Tooltip>
    </Grid>
  );
}
