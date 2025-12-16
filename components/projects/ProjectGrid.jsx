import ProjectThumb from "@/components/projects/ProjectThumbnail";

export default function ProjectsGrid({ projects }) {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-10">
      {projects.map((p) => (
        <ProjectThumb key={p.slug} project={p} />
      ))}
    </div>
  );
}
