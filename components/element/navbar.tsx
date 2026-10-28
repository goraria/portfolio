import { Home, User, Lightbulb, GraduationCap, FolderGit2, Mail, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dock, DockItem } from "@/components/animation/dock";
import { ThemeToggle } from "@/components/element/theme-toggle";
const links = [["/", "Home", Home], ["/about", "About", User], ["/skills", "Skills", Lightbulb], ["/education", "Education", GraduationCap], ["/projects", "Projects", FolderGit2], ["/contact", "Contact", Mail], ["/more", "More", MoreHorizontal]] as const;
export function Navbar({ pathname }: { pathname: string }) {
  const current = pathname.replace(/\/+$/, "") || "/";
  return <header className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-2">
    <nav aria-label="Main navigation" className="pointer-events-auto max-w-full">
      <Dock>
        {links.map(([href, label, Icon]) => <DockItem key={href}>
          <Button variant="ghost" nativeButton={false} role="link"
            aria-current={current === href ? "page" : undefined}
            aria-label={label} title={label}
            className={`size-full rounded-full bg-muted p-0 hover:bg-muted [&_svg]:size-1/2! ${current === href ? "border-[#EC6683] text-[#EC6683]" : ""}`}
            render={<a href={href} />}
          ><Icon /></Button>
        </DockItem>)}
        <div aria-hidden="true" className="h-6 w-px shrink-0 bg-border" />
        <DockItem><ThemeToggle /></DockItem>
      </Dock>
    </nav>
  </header>;
}
