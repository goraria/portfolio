import { SocialLinks } from "@/components/element/social-links.tsx";
import { HeroTexts } from "@/components/element/hero-texts.tsx";
import { HeroImage } from "@/components/element/hero-image.tsx";
import { GithubButton } from "@/components/animation/github-button.tsx";
import { DownloadResumeButton } from "@/components/element/download-resume-button.tsx";
import { FramerWrapper } from "@/components/animation/wrapper.tsx";

export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <FramerWrapper
        className="flex h-fit w-auto flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        <DownloadResumeButton />
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper
        className="relative block h-fit w-[47%] shrink-0 max-lg:hidden"
        y={0}
        x={100}
      >
        {/* IMAGE  */}
        <HeroImage />
      </FramerWrapper>

      {/* GITHUB BUTTON  */}
      <GithubButton />
    </>
  );
}

