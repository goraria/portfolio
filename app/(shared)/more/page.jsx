import { Heading } from "@/components/heading";
import { Badge } from "@gorth/primitive/custom/badge";
import { ExternalLink, PackagePlus } from "@gorth/primitive/cores/lucide";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@gorth/primitive/default/card";
import Link from "next/link";
import { cn } from "@gorth/primitive/lib/utils";
import { buttonVariants } from "@gorth/primitive/custom/button";
import { FramerWrapper } from "@/components/animation/wrapper";
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
      <div className="h-auto w-full flex flex-wrap gap-3 p-2">
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
                  <Link
                    href={value.link}
                    target="blank"
                    className={cn(buttonVariants(), "w-full gap-3")}
                  >
                    {" "}
                    <ExternalLink />
                    Visit here
                  </Link>
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
