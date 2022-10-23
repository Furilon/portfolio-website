import MainLayout from "../components/layouts/main";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <MainLayout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
