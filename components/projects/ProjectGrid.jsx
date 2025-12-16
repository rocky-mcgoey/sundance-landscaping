import ProjectThumb from "@/components/projects/ProjectThumbnail";

export default function ProjectsGrid({ projects }) {
  return (
    <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((p) => (
        <ProjectThumb key={p.slug} project={p} />
      ))}
    </div>
  );
}
