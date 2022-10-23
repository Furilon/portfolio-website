import MainLayout from "../components/layouts/main";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MainLayout>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
