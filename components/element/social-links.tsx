import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
const facebookIcon = "/fonts/iconify/svg/logos/bxl-facebook.svg";
const githubIcon = "/fonts/iconify/svg/logos/bxl-github.svg";
const linkedinIcon = "/fonts/iconify/svg/logos/bxl-linkedin.svg";
const twitterIcon = "/fonts/iconify/svg/logos/bxl-twitter.svg";


import { FramerWrapper } from "@/components/animation/wrapper.tsx";
import { portfolioConfig } from "@/configs/portfolio.config";

const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      link: portfolioConfig.socialLinks.facebook,
      icon: facebookIcon,
    },
    {
      name: "Twitter",
      link: portfolioConfig.socialLinks.twitter,
      icon: twitterIcon,
    },
    {
      name: "Linkedin",
      link: portfolioConfig.socialLinks.linkedin,
      icon: linkedinIcon,
    },
    {
      name: "External",
      link: portfolioConfig.socialLinks.external,
      icon: null,
    },
    {
      name: "Github",
      link: portfolioConfig.socialLinks.github,
      icon: githubIcon,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Button
              variant="outline"
              size="icon"
              nativeButton={false}
              role="link"
              aria-label={itm.name}
              className="size-10 rounded-full text-foreground"
              render={<a href={itm.link} target="_blank" rel="noopener noreferrer" />}
            >
              {itm.icon ? (
                <span aria-hidden="true" className="size-6 bg-current" style={{ maskImage: `url(${itm.icon})`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
              ) : (
                <ExternalLink className="size-6" aria-hidden="true" />
              )}
            </Button>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export { SocialLinks };
