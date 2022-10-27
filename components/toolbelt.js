import { Grid, GridItem, Image } from "@chakra-ui/react";

export function Toolbelt() {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      templateRows="repeat(3, 1fr)"
      gap="5px"
    >
      <GridItem as={Image} boxSize="75px" src="/images/css-3.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/html-5.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/javascript.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/react.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/nodejs.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/express.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/mongodb-icon.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/tailwindcss-icon.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/webpack.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/eslint.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/git-icon.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/python.svg" />
      <GridItem
        as={Image}
        boxSize="75px"
        src="/images/visual-studio-code.svg"
      />
      <GridItem as={Image} boxSize="75px" src="/images/nextjs.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/heroku-icon.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/firebase.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/jest.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/formik.svg" />
    </Grid>
  );
}

export function Learning() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5}>
      <GridItem as={Image} boxSize="75px" src="/images/redux.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/typescript-icon.svg" />
      <GridItem as={Image} boxSize="75px" src="/images/graphql.svg" />
    </Grid>
  );
}
