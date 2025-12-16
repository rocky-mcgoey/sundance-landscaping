import BackgroundShell from "@/components/ui/BackgroundShell";
import ProjectsGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <BackgroundShell backgroundSrc="/images/background/Landscape-1.jpg">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <ProjectsGrid projects={projects} />
      </div>
    </BackgroundShell>
  );
}
