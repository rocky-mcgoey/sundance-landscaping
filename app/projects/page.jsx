import BackgroundShell from "@/components/ui/BackgroundShell";
import ProjectsGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <BackgroundShell backgroundSrc="/images/background/Landscape-1.jpg">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Scrollable thumbnails area */}
        <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 pb-16">
          <ProjectsGrid projects={projects} />
        </div>
      </div>
    </BackgroundShell>
  );
}
