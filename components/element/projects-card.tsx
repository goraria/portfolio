import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button.tsx";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { FramerWrapper } from "@/components/animation/wrapper.tsx";
import { ArrowUpRight } from "lucide-react";

const ProjectsCard = ({ value, num }: { value: { title: string; description: string; tags: string[]; link: string }; num: number }) => {
  return (
    <FramerWrapper
      className="w-full"
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-primary">
            {value.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {value.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag, index) => {
              const tagStyles =
                ({
                  "Next.js": "bg-teal-100 text-teal-800",
                  Freelancing: "bg-yellow-100 text-yellow-800",
                  "Shadcn Ui": "bg-blue-100 text-blue-800",
                  Typescript: "bg-red-100 text-red-800",
                  "PostgreSQL": "bg-orange-100 text-orange-800",
                  Zustand: "bg-purple-100 text-purple-800",
                  Supabase: "bg-emerald-100 text-emerald-800",
                  "Better Auth": "bg-indigo-100 text-indigo-800",
                  Library: "bg-pink-100 text-pink-800",
                  Zod: "bg-cyan-100 text-cyan-800",
                  "React Hook Form": "bg-violet-100 text-violet-800",
                } as Record<string, string>)[tag] || "bg-gray-100 text-gray-800";

              return (
                <span
                  key={index}
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagStyles}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="pt-2 ">
          <a
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "w-fit h-10 transition-all hover:shadow-sm group rounded-full", // hover:translate-y-[-2px]
            )}
          >
            Visit Project
            <ArrowUpRight className="size-4 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </a>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export { ProjectsCard };
