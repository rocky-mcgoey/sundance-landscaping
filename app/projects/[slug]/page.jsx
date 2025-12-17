import BackgroundShell from "@/components/ui/BackgroundShell";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProjectDetailPage(props) {
  const { slug } = await props.params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <BackgroundShell backgroundSrc="/images/background/Landscape-1.jpg">
      <div className="h-full overflow-y-auto">
        <div className="mx-auto max-w-6xl px-6 py-10 pb-24">
          <div className="mb-8 rounded-xl bg-black/35 p-4 ring-1 ring-white/10 backdrop-blur-sm">
            <Link
              href="/projects"
              className="text-sm font-semibold text-white/80 hover:text-lime-300"
            >
              ← Back to Projects
            </Link>
          </div>

          <ProjectGallery images={project.gallery} />
        </div>
      </div>
    </BackgroundShell>
  );
}
