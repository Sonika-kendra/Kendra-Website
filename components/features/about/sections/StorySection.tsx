import Image from "next/image";
import { aboutStoryRows } from "@/config/pages/about";

export default function StorySection() {
  return (
    <section className="mt-5 w-full bg-background">
      {aboutStoryRows.map((row, index) => {
        const isTextFirst = index % 2 !== 0;
        const textBlock = (
          <div className="flex items-center border border-border bg-card">
            <div className="p-8 lg:p-10">
              <h2 className="ml-10 font-display text-2xl font-bold text-foreground md:text-3xl">
                {row.title}
              </h2>
              <p className="mt-4 ml-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {row.description}
              </p>
            </div>
          </div>
        );
        const imageBlock = (
          <div className="group relative h-[320px] overflow-hidden md:h-[380px]">
            <Image
              src={row.image.src}
              alt={row.image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        );

        return (
          <div
            key={row.title}
            className="grid w-full grid-cols-1 md:grid-cols-[50%_50%]"
          >
            {isTextFirst ? textBlock : imageBlock}
            {isTextFirst ? imageBlock : textBlock}
          </div>
        );
      })}
    </section>
  );
}
