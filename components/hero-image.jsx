import logo from "@/assets/images/portfolio.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <Image
        src={logo}
        alt="logo"
        loading="eager"
        priority
        height={1000}
        width={1000}
      />
    </>
  );
};

export { HeroImage };
