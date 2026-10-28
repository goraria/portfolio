import { TextRotator } from "./text-rotator.tsx";
import { portfolioConfig } from "@/configs/portfolio.config";

const HeroTexts = () => {
  // Get the name parts
  const nameParts = portfolioConfig.name.split(" ");
  const firstName = nameParts[0];
  const middleName = nameParts.length > 2 ? nameParts[1] : "";
  const lastName = nameParts.length > 2 ? nameParts[2] : nameParts[1];

  return (
    <>
      <h3 className="text-2xl max-sm:text-xl">My Name is</h3>
      <h1 className="text-8xl font-semibold name_underline text-primary max-sm:text-6xl ">
        {firstName} {middleName} <br /> {lastName} .
      </h1>
      <TextRotator />
    </>
  );
};
export { HeroTexts };
