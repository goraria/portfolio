import { cn } from "@gorth/primitive/lib/utils";
import { ExternalLink } from "@gorth/primitive/cores/lucide";
import { buttonVariants } from "@gorth/primitive/custom/button";
import facebookIcon from "@/assets/fonts/iconify/svg/logos/bxl-facebook.svg";
import githubIcon from "@/assets/fonts/iconify/svg/logos/bxl-github.svg";
import linkedinIcon from "@/assets/fonts/iconify/svg/logos/bxl-linkedin.svg";
import twitterIcon from "@/assets/fonts/iconify/svg/logos/bxl-twitter.svg";
import Image from "next/image";
import Link from "next/link";
import { FramerWrapper } from "./animation/wrapper";
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
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
              )}
            >
              {itm.icon ? (
                <Image src={itm.icon} alt="" width={16} height={16} />
              ) : (
                <ExternalLink className="size-4" aria-hidden="true" />
              )}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export { SocialLinks };
