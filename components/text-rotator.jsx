import { portfolioConfig } from "@/configs/portfolio.config";

function TextRotator() {
  return (
    <div className="flex items-start overflow-hidden rounded-md py-4">
      <div className="flex items-baseline gap-2 whitespace-nowrap text-base text-gray-700 sm:text-2xl">
        <span>I am a {portfolioConfig.title} &amp;</span>
        <span className="inline-flex h-[1.25em] flex-col overflow-hidden">
          <ul className="animate-text-slide block text-left text-base font-semibold leading-[1.25em] sm:text-2xl [&_li]:block">
            {portfolioConfig.skills.roles.map((role, index) => (
              <li key={index} className="text-[#EC6683]">
                {role}
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
}

export { TextRotator };
