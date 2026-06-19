"use client";
import { Chip } from "@heroui/react";

const AboutMe = () => {
  const skillBadges = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Java",
    "Spring",
    "Python",
    "PyTorch",
    "C#",
    "PostgreSQL",
    "MySQL",
    "SQL Server",
    "Redis",
    "AWS",
  ];

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                About me
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                Hi — I&apos;m Nguyễn Tiến Thuận, a{" "}
                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                  software engineer
                </span>{" "}
                in Vietnam. I work on{" "}
                <span className="border-b-2">full-stack web</span> and{" "}
                <span className="border-b-2">AI research</span>, and I&apos;m
                actively learning artificial intelligence.
              </h2>
              <h5 className="text-secondary font-normal">
                Open to collaborating on full-stack projects and products that
                integrate AI.
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">
                Skills &amp; tools
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skillBadges.map((value, index) => (
                  <Chip
                    key={index}
                    variant="soft"
                    size="lg"
                    className="border border-primary/10 hover:bg-primary/5 text-xs sm:text-sm font-medium text-primary"
                  >
                    {value}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
