import PageLayout from "../components/layouts/page";
import {
  Heading,
  Flex,
  Text,
  Image,
  Button,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import Section from "../components/section";
import Experience from "../components/experience";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";

const EXPERIENCE_TEXT = {
  pandora: [
    "Set up a project management system that utilizes Trello",
    "Wrote and maintained custom React components",
    "Created and maintained MongoDB database and models",
    "Migrated the app from React client and Express server to NextJS framework",
    "Set up API endpoints and utility functions to access them",
    "Set up and modified Next-Auth authentication system",
    "Wrote the initial Python course",
    "Provided stategic vision for the whole project",
  ],
  walmart: [
    "Always appeared on time",
    "Operated cash register and scanned customers' items in a fast-paced environment",
    "Received payment from customers via card payment, check, or cash",
    "Provided change on items sold to cash customers",
    "Ensured clean and safe working environment",
  ],
  ninjas: [
    "Educated and mentored young minds in various STEM subjects, including 3D modeling with TinkerCAD, Scratch programming, and Makecode with MeowBits.",
    "Conducted interactive workshops on electricity using Makey-Makeys.",
    "Introduced cryptography principles with MicroBits.",
    "Instructed UI/UX fundamentals, encouraging campers to design and prototype user-friendly interfaces, nurturing their understanding of user-centered design principles.",
  ],
};

export default function About() {
  return (
    <PageLayout title="About - MM">
      <Flex direction="column" justify="center" align="center">
        <Heading as="h1">About me</Heading>

        {/* Wrapper for Who I Am section */}
        <Section delay={0.5}>
          <Flex direction="column" justify="center" align="center" my="25px">
            <Heading
              as="h2"
              fontSize="1.6rem"
              mb="15px"
              textDecoration="underline"
              textDecorationColor="gray"
            >
              Who I am
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="center"
              align="flex-start"
            >
              <Image
                src="/Mykyta.jpg"
                alt="Mykyta Medvediev's picture"
                w={{ base: "341px", lg: "426px" }}
                h={{ base: "375px", lg: "469px" }}
                mr={{ base: "none", md: "20px" }}
                mb={{ base: "20px", md: "none" }}
                borderRadius="10px"
              />
              <Text w={{ base: "341px", lg: "426px" }}>
                My name is{" "}
                <Tooltip
                  hasArrow
                  label="(mee-kee-ta)"
                  bg="white"
                  textColor="#1e1e1e"
                  borderRadius="10px"
                  fontStyle="italic"
                >
                  <Text
                    as="span"
                    textDecoration="underline"
                    textDecorationColor="gray"
                    fontWeight="bold"
                  >
                    Mykyta
                  </Text>
                </Tooltip>
                , I&apos;m a senior Business Administration major at UC Irvine
                and a self-taught{" "}
                <Text as="span" fontWeight="bold">
                  full-stack web developer
                </Text>
                . I aspire to build products and services that will positively
                affect people’s lives. For the past year, I&apos;ve been working
                on{" "}
                <Link
                  href="https://vennbury.com"
                  textDecoration="underline"
                  textDecorationColor="gray"
                  fontWeight="bold"
                >
                  Vennbury University
                </Link>{" "}
                (about which you can read{" "}
                <Link
                  href="/project/vennbury"
                  textDecoration="underline"
                  textDecorationColor="gray"
                  fontWeight="bold"
                >
                  here
                </Link>
                ), while also learning new technologies. I love problem-solving
                and I adore the creative process that comes along with it. In my
                free time, I play basketball and read books.
              </Text>
            </Flex>
          </Flex>
        </Section>

        {/* Wrapper for Experience section */}
        <Section delay={1}>
          <Flex direction="column" justify="center" align="center" my="25px">
            <Heading
              as="h2"
              fontSize="1.6rem"
              textDecoration="underline"
              textDecorationColor="gray"
            >
              Experience
            </Heading>
            <Flex direction="column" justify="center" align="center">
              <Experience
                role="Code Sensei"
                name="Code Ninjas"
                date="May 2023 - Jul 2023"
                pointsArr={EXPERIENCE_TEXT["ninjas"]}
              />
              <Experience
                role="Software Engineer"
                name="Vennbury University"
                date="Apr 2022 - Apr 2023"
                pointsArr={EXPERIENCE_TEXT["pandora"]}
              />

              <Experience
                role="Cashier"
                name="Walmart"
                date="Jan 2021 - Mar 2021"
                pointsArr={EXPERIENCE_TEXT["walmart"]}
              />
            </Flex>
          </Flex>
        </Section>

        {/* Wrapper for Contact me section */}
        <Section delay={1.5}>
          <Flex direction="column" justify="center" align="center" my="25px">
            <Heading
              id="contacts"
              as="h4"
              fontSize="1.6rem"
              textDecoration="underline"
              textDecorationColor="gray"
            >
              Contact me
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="center"
              align="center"
              gap={{ base: "20px", md: "30px" }}
              mt="20px"
            >
              <Link
                href="https://www.linkedin.com/in/mykyta-medvediev/"
                isExternal
              >
                <Button
                  colorScheme="linkedin"
                  leftIcon={<AiOutlineLinkedin />}
                  size="lg"
                  w="150px"
                >
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/Furilon" isExternal>
                <Button
                  size="lg"
                  leftIcon={<AiOutlineGithub />}
                  textColor="#cdcdcd"
                  border="1px"
                  bg="none"
                  borderColor="#cdcdcd"
                  w="150px"
                  _hover={{ bg: "whiteAlpha.100" }}
                >
                  GitHub
                </Button>
              </Link>
              <Link href="mailto:mykytamedvediev@gmail.com" isExternal>
                <Button
                  size="lg"
                  leftIcon={<AiOutlineMail />}
                  bg="whiteAlpha.800"
                  textColor="#1e1e1e"
                  w="150px"
                  _hover={{
                    bg: "whiteAlpha.700",
                  }}
                >
                  Email
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Section>
      </Flex>
    </PageLayout>
  );
}
