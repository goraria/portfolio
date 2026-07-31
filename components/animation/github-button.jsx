import githubIcon from "@/assets/fonts/iconify/svg/logos/bxl-github.svg";
import Image from "next/image";
import Link from "next/link";

const GithubButton = () => {
  return (
    <Link
      href={"https://github.com/goraria"}
      target="blank"
      className="animate-pulse absolute left-0 bottom-16 sm:bottom-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md  border-y border-r  border-black hover:bg-primary hover:text-white hover:animate-none "
    >
      <Image src={githubIcon} alt="" width={24} height={24} />
      <span className="text-2xl font-semibold max-sm:text-xl">Github</span>
    </Link>
  );
};

export { GithubButton };
