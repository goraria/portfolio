

const SkillsFooter = ({ items }: { items: { name: string; icon: string }[] }) => {
  return (
    <>
      {items &&
        items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
            >
              <img
                src={item.icon}
                alt={item.name ?? ""}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm text-center font-medium text-muted-foreground">
                {item.name}
              </span>
            </div>
          );
        })}
    </>
  );
};

export { SkillsFooter };
