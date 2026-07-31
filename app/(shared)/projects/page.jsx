import { FramerWrapper } from "@/components/animation/wrapper";
import { Heading } from "@/components/heading";
import { ProjectsCard } from "@/components/projects-card";
import { Badge } from "@gorth/primitive/custom/badge";
import { Layers } from "@gorth/primitive/cores/lucide";
import { portfolioConfig } from "@/configs/portfolio.config";

const ProjectsPage = () => {
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge>
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {portfolioConfig.projects.map((val, indx) => {
          return <ProjectsCard key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
