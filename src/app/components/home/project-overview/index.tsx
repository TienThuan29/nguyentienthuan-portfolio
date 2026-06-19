"use client";
import Link from "next/link";
import { Chip } from "@heroui/react";
import { TileArrowIcon } from "@/app/components/svg-icons";
import { useProjectOverview } from "@/hooks";
import { portfolioLinks } from "@/lib/portfolio-data";

const ProjectOverview = () => {
  const { data: projectData } = useProjectOverview();

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16 ">
            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                Highlights
              </p>
              <div className="flex flex-col gap-2.5">
                {projectData?.caseStudies?.map((value, index) => (
                  <Link
                    key={index}
                    href={value.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                  >
                    <h4>{value.name}</h4>
                    <TileArrowIcon className="size-6 text-primary transition-all duration-300 ease-in group-hover:translate-x-1.5 group-hover:rotate-45" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                Side Projects
              </p>
              <div className="flex flex-col gap-2.5">
                {projectData?.sideProjects?.map((value, index) => {
                  const isComingSoon = value.comingSoon;

                  const content = (
                    <div className="group flex flex-wrap items-center gap-2">
                      <h4 className={`${isComingSoon ? "text-muted-foreground" : "text-primary"}`}>
                        {value.name}
                      </h4>
                      {!isComingSoon ? (
                        <TileArrowIcon className="size-6 text-primary transition-all duration-300 ease-in group-hover:translate-x-1.5 group-hover:rotate-45" />
                      ) : (
                        <Chip
                          size="sm"
                          variant="soft"
                          className="bg-muted text-xs md:text-base font-normal text-muted-foreground"
                        >
                          Coming Soon
                        </Chip>
                      )}
                    </div>
                  );

                  const href = value.url ?? portfolioLinks.github;
                  return isComingSoon ? (
                    <div key={index}>{content}</div>
                  ) : (
                    <Link
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
