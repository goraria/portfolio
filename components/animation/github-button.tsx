const githubIcon = "/fonts/iconify/svg/logos/bxl-github.svg";
import { Button } from "@/components/ui/button";

const GithubButton = () => {
  return (
    <Button
      nativeButton={false}
      role="link"
      variant="outline"
      aria-label="Github"
      render={<a href="https://github.com/goraria" target="_blank" rel="noopener noreferrer" />}
      className="fixed bottom-16 left-0 z-40 h-auto w-fit animate-pulse gap-2 rounded-l-none rounded-r-full border-y border-r border-l-0 border-foreground bg-background p-2 text-foreground shadow-md hover:animate-none hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground motion-reduce:animate-none sm:bottom-5"
    >
      <span aria-hidden="true" className="size-6 shrink-0 bg-current" style={{ maskImage: `url(${githubIcon})`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
      <span className="text-2xl font-semibold max-sm:text-xl">Github</span>
    </Button>
  );
};

export { GithubButton };
