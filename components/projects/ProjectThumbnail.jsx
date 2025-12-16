import Link from "next/link";
import Image from "next/image";

export default function ProjectThumb({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <div className="w-[260px]">
        <div className="relative h-[135px] w-full overflow-hidden bg-black/30 ring-1 ring-white/10">
          <Image
            src={project.coverImage}
            alt={`${project.title} - ${project.subtitle}`}
            fill
            className="object-cover"
            sizes="260px"
          />
        </div>

        <div className="pt-3">
          <p className="text-sm font-semibold text-white">{project.title}</p>
          <p className="text-sm text-white/80">{project.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
