import { Heading } from "@/components/element/heading.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { ExternalLink, PackagePlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button.tsx";
import { FramerWrapper } from "@/components/animation/wrapper.tsx";
import { portfolioConfig } from "@/configs/portfolio.config";

const MorePage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge>
        <PackagePlus className="h-4 w-4" />
        More
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>More</Heading>
      </div>
      <div className="h-auto w-full flex flex-wrap gap-4">
        {portfolioConfig.moreLinks.map((value, indx) => {
          return (
            <FramerWrapper
              key={indx}
              className="max-w-[32%] max-lg:max-w-full"
              y={0}
              scale={0.8}
              delay={indx / 4}
              duration={0.15}
            >
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base">{value.description}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href={value.link}
                    target="blank"
                    className={cn(buttonVariants(), "w-full gap-3")}
                  >
                    {" "}
                    <ExternalLink />
                    Visit here
                  </a>
                </CardFooter>
              </Card>
            </FramerWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default MorePage;
