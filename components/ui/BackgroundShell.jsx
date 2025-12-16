import Image from "next/image";

export default function BackgroundShell({
  backgroundSrc = "/images/background/Landscape-1.jpg",
  children,
}) {
  return (
    <div className="relative min-h-full w-full">
      <Image
        src={backgroundSrc}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative">{children}</div>
    </div>
  );
}
