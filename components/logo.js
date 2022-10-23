import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import Image from "next/image";

const Logo = () => {
  return (
    <NextLink href="/">
      <Link curson="pointer">
        <Image
          src="/Logo_background.png"
          width="90px"
          height="46px"
          alt="Mykyta Medvediev's logo"
        />
      </Link>
    </NextLink>
  );
};

export default Logo;
