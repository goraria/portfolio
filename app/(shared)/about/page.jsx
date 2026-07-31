import { AboutFooter } from "@/components/about-footer";
import { FramerWrapper } from "@/components/animation/wrapper";
import { Heading } from "@/components/heading";
import { Badge } from "@gorth/primitive/custom/badge";
import { Circle, Heart, User2 } from "@gorth/primitive/cores/lucide";
import { portfolioConfig } from "@/configs/portfolio.config";

const AboutPage = () => {
  const items = portfolioConfig.about.hobbies.map((hobby) => ({ hobby }));

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="default">
        <User2 className="h-4 w-4" />
        About me
      </Badge>
      <div className="flex flex-col gap-5">
        <Heading>
          {portfolioConfig.title} And Web <br /> Developer, Based In{" "}
          {portfolioConfig.about.personalInfo.nationality}.
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className="text-xl w-full text-primary max-sm:text-lg ">
            {portfolioConfig.about.bio}
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper
        className="w-full flex flex-row justify-between max-lg:flex-col "
        y={100}
        delay={0.3}
      >
        <AboutFooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default AboutPage;
