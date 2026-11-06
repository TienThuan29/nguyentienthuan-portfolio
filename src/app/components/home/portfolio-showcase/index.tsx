import Image from "next/image";
import type { ComponentType, ReactNode } from "react";
import OutlineNav from "./outline-nav";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Download,
  GitHubBrandIcon,
  Layers3,
  LinkedInBrandIcon,
  MicrosoftBrandIcon,
  Network,
  ReadCvBrandIcon,
  UsersRound,
} from "@/app/components/svg-icons";
import {
  awards,
  basePath,
  certificates,
  education,
  experience,
  heroFacts,
  heroMetrics,
  pageAnchors,
  portfolioLinks,
  profile,
  researchPapers,
  selfAuthorName,
  skills,
} from "@/lib/portfolio-data";

const anchorId = (href: string) => href.slice(1);

const ExternalLink = ({ href, icon, children }: { href: string; icon?: ReactNode; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="label ink-link inline-flex items-center gap-1 pb-0.5 text-foreground hover:text-accent"
  >
    {icon && <span className="mr-1 inline-flex">{icon}</span>}
    {children}
    <ArrowUpRight className="size-3.5" aria-hidden />
  </a>
);

/* Every section opens like a journal article: heavy rule, section mark in the margin. */
const Section = ({
  href,
  index,
  label,
  title,
  children,
}: {
  href: string;
  index: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
}) => (
  <section id={anchorId(href)} className="section-band" aria-labelledby={`${anchorId(href)}-title`}>
    <div className="site-container">
      <div className="grid gap-6 border-t-2 border-foreground pt-5 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-12">
        <p className="flex items-baseline gap-3 md:flex-col md:gap-1.5">
          <span className="font-mono text-sm text-accent">§ {index}</span>
          <span className="label">{label}</span>
        </p>
        <div className="min-w-0">
          <h2
            id={`${anchorId(href)}-title`}
            className="max-w-3xl text-balance font-serif text-3xl leading-tight tracking-[-0.01em] sm:text-[2.75rem]"
          >
            {title}
          </h2>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </div>
  </section>
);

/* Tag label → logo in public/icons/tech/ (Dashboard Icons; spring.svg via its Simple Icons set).
   Concept tags have no brand logo, so they get a monochrome lucide glyph (conceptIcons) in the label's ink instead. */
const tagIcons: Record<string, string> = {
  Python: "python",
  Azure: "azure",
  "Next.js": "nextjs",
  MySQL: "mysql",
  Docker: "docker",
  "C/C++": "cpp",
  Java: "java",
  PyTorch: "pytorch",
  "Spring Framework": "spring",
  Salesforce: "salesforce",
  "Lightning Web Components": "salesforce",
  Apex: "salesforce",
  SOQL: "salesforce",
};

const conceptIcons: Record<string, ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  LLM: BrainCircuit,
  "Agentic AI": Bot,
  "Full-stack": Layers3,
  "Team lead": UsersRound,
  DSA: Network,
};

const Tags = ({ items }: { items: readonly string[] }) => (
  <ul className="flex flex-wrap gap-x-4 gap-y-2">
    {items.map((item) => {
      const Concept = conceptIcons[item];
      return (
        <li key={item} className="label inline-flex items-center gap-1.5">
          {tagIcons[item] ? (
            <Image
              src={`${basePath}/icons/tech/${tagIcons[item]}.svg`}
              alt=""
              width={14}
              height={14}
              className="size-3.5"
            />
          ) : (
            Concept && <Concept className="size-3.5" aria-hidden />
          )}
          {item}
        </li>
      );
    })}
  </ul>
);

const Hero = () => {
  const splitAt = profile.name.lastIndexOf(" ");
  const fadeDelay = (ms: number) => ({ animationDelay: `${ms}ms` });

  return (
    <section id={anchorId(pageAnchors.top)} className="relative isolate">
      {/* Full-bleed ink-wash backdrop behind the masthead; native 4:1 ratio, fades out before the headline. */}
      <Image
        src={`${basePath}/images/hero-sec/banner-bg-img.webp`}
        alt=""
        aria-hidden
        width={1080}
        height={267}
        priority
        sizes="100vw"
        className="ink-fade-down pointer-events-none absolute inset-x-0 top-0 -z-10 h-auto w-full select-none opacity-60"
      />
      <div className="site-container pb-8 pt-10 sm:pt-16">
        <div className="label flex flex-wrap justify-between gap-2 border-b border-border pb-3 animate-fade-up">
          <span>Portfolio | {new Date().getFullYear()} edition</span>
          <span>{profile.location}</span>
        </div>
  
        <div
          className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between animate-fade-up"
          style={fadeDelay(80)}
        >
          <h1 className="font-serif text-[clamp(3.25rem,11.5vw,9.5rem)] font-normal leading-[0.9] tracking-[-0.035em]">
            {profile.name.slice(0, splitAt)}{" "}
            <em className="text-accent">{profile.name.slice(splitAt + 1)}</em>
          </h1>
          {/* Portrait cropped to 4:5 and offset so the frame sits behind it — the one "overlap" in the layout. */}
          <div className="relative order-first w-32 shrink-0 sm:w-40 md:order-none md:w-52 lg:w-60">
            <div className="absolute inset-0 -translate-x-2.5 translate-y-2.5 border border-accent" aria-hidden />
            <Image
              src={`${basePath}/images/hero-sec/user-img.png`}
              alt={`Portrait of ${profile.name}`}
              width={900}
              height={900}
              priority
              sizes="(min-width: 1024px) 240px, (min-width: 768px) 208px, 160px"
              className="relative aspect-[4/5] w-full object-cover object-[50%_12%]"
            />
          </div>
        </div>
  
        <div
          className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-16 animate-fade-up"
          style={fadeDelay(180)}
        >
          <div>
            <p className="max-w-xl font-serif text-2xl leading-snug sm:text-[1.75rem]">{profile.headline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={portfolioLinks.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
              >
                <Download className="size-4" aria-hidden />
                Download CV
              </a>
              {[
                { label: "GitHub", href: profile.github, Icon: GitHubBrandIcon },
                { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInBrandIcon },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-foreground px-4 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" aria-hidden />
                  {label}
                </a>
              ))}
            </div>
            <a
              href={portfolioLinks.email}
              className="ink-link mt-5 inline-block pb-0.5 text-sm font-medium hover:text-accent"
            >
              {profile.email}
            </a>
          </div>
  
          <dl className="text-sm">
            {heroFacts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 border-t border-border py-3">
                <dt className="label pt-0.5">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
  
        <dl
          className="mt-16 grid border-y border-border sm:grid-cols-3 animate-fade-up"
          style={fadeDelay(280)}
        >
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col gap-1 border-border py-6 sm:px-6 sm:first:pl-0 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-t-0"
            >
              <dt className="mt-3 text-sm font-medium">{metric.label}</dt>
              <dd className="order-first font-serif text-5xl leading-none tracking-tight">{metric.value}</dd>
              <dd className="label">{metric.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

const About = () => (
  <Section href={pageAnchors.about} index="01" label="About" title="Engineer first, explainer by training.">
    <p className="drop-cap max-w-2xl text-lg leading-8">{profile.summary}</p>

    <h3 className="label mt-16">Toolkit</h3>
    <dl className="mt-4 border-b border-border">
      {skills.map((group) => (
        <div key={group.title} className="grid gap-1 border-t border-border py-3 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
          <dt className="label pt-0.5">{group.title}</dt>
          <dd className="text-[15px]">
            {group.items.map((item, i) => (
              <span key={item}>
                {i > 0 && <span className="text-muted-foreground">{" / "}</span>}
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

const Experience = () => (
  <Section href={pageAnchors.experience} index="02" label="Experience" title="Where I've built, led, and taught.">
    <ol>
      {experience.map((job) => (
        <li
          key={`${job.org}-${job.role}`}
          className="grid gap-3 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8"
        >
          <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
            <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
            {job.current && (
              <span className="label inline-flex items-center gap-1.5 text-accent">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                Now
              </span>
            )}
          </div>
          <div>
            <h3 className="font-serif text-2xl leading-tight">
              {job.role} <span className="text-muted-foreground">— {job.org}</span>
            </h3>
            <p className="mt-2 font-serif text-lg italic text-muted-foreground">{job.summary}</p>
            <ul className="mt-4 space-y-2 text-[15px] leading-7">
              {job.details.map((detail) => (
                <li key={detail} className="grid grid-cols-[1.25rem_minmax(0,1fr)]">
                  <span className="text-accent" aria-hidden>
                    –
                  </span>
                  {detail}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Tags items={job.skills} />
            </div>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

const Certifications = () => (
  <Section
    href={pageAnchors.certifications}
    index="03"
    label="Certifications"
    title={
      <>
        {/* Sized in em so the logo tracks the heading's cap height at every breakpoint. */}
        <MicrosoftBrandIcon className="mr-[0.25em] inline-block size-[0.72em] align-[-0.04em]" />
        Microsoft-certified in Azure AI and agentic systems.
      </>
    }
  >
    <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {certificates.map((cert) => (
        <li key={cert.code}>
          <a
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-border p-1.5 transition-colors hover:border-foreground"
          >
            <Image
              src={cert.image}
              alt={`Microsoft Certified: ${cert.title} certificate (opens PDF)`}
              width={1200}
              height={678}
              sizes="(min-width: 1024px) 290px, (min-width: 640px) 45vw, 100vw"
              className="h-auto w-full"
            />
          </a>
          <p className={`label mt-4 ${cert.level === "Expert" ? "text-accent" : ""}`}>
            {cert.code} · {cert.level}
          </p>
          <h3 className="mt-1.5 font-serif text-xl leading-snug">{cert.title}</h3>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            <ExternalLink href={cert.pdf}>View PDF</ExternalLink>
            {cert.verifyUrl && <ExternalLink href={cert.verifyUrl}>Verify</ExternalLink>}
          </div>
        </li>
      ))}
    </ul>
  </Section>
);

const Research = () => (
  <Section href={pageAnchors.research} index="04" label="Research" title="Computer vision, peer-reviewed.">
    <ol className="space-y-12">
      {researchPapers.map((paper, i) => (
        <li key={paper.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-2 sm:grid-cols-[3.5rem_minmax(0,1fr)]">
          <span className="font-mono text-lg text-accent">[{i + 1}]</span>
          <article>
            <p className="text-sm text-muted-foreground">
              {paper.authors.map((author, j) => (
                <span key={author}>
                  {j > 0 && ", "}
                  {author === selfAuthorName ? (
                    <strong className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4">
                      {author}
                    </strong>
                  ) : (
                    author
                  )}
                </span>
              ))}
            </p>
            <h3 className="mt-2 font-serif text-2xl italic leading-snug">{paper.title}</h3>
            <p className="mt-2 text-sm">
              {paper.venue}, {paper.year}.{" "}
              <span className="label ml-1 border border-accent px-2 py-0.5 text-accent">{paper.status}</span>
            </p>
            <ul className="mt-4 space-y-1.5 text-[15px] leading-7">
              {paper.contributions.map((item) => (
                <li key={item} className="grid grid-cols-[1.25rem_minmax(0,1fr)]">
                  <span className="text-accent" aria-hidden>
                    –
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <Tags items={paper.tags} />
              <ExternalLink href={paper.href}>Code</ExternalLink>
            </div>
          </article>
        </li>
      ))}
    </ol>
  </Section>
);

const Education = () => (
  <Section href={pageAnchors.education} index="05" label="Education" title="Degree and recognition.">
    <div className="grid gap-12 md:grid-cols-2 md:gap-10">
      <div>
        <h3 className="label">Education</h3>
        {education.map((item) => (
          <div key={item.school} className="mt-4 border-t border-border pt-4">
            <p className="font-serif text-xl">{item.school}</p>
            <p className="mt-1 text-[15px]">{item.degree}</p>
            <p className="label mt-3">{item.period}</p>
            {item.details.map((detail) => (
              <p key={detail} className="mt-1 text-sm text-muted-foreground">
                {detail}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div>
        <h3 className="label">Recognition</h3>
        {awards.map((award) => (
          <div key={award.title} className="mt-4 border-t border-border pt-4">
            <p className="font-serif text-xl">{award.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{award.detail}</p>
            <p className="label mt-3">{award.period}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Contact = () => (
  <Section href={pageAnchors.contact} index="06" label="Contact" title="Have an AI idea that needs to ship? Let's talk.">
    <a
      href={portfolioLinks.email}
      className="ink-link font-serif text-[clamp(1.25rem,5vw,3rem)] leading-tight [overflow-wrap:anywhere] hover:text-accent"
    >
      {profile.email}
    </a>
    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
      <ExternalLink href={profile.linkedin} icon={<LinkedInBrandIcon className="size-4" />}>
        LinkedIn
      </ExternalLink>
      <ExternalLink href={profile.github} icon={<GitHubBrandIcon className="size-4" />}>
        GitHub
      </ExternalLink>
      <ExternalLink href={portfolioLinks.cv} icon={<ReadCvBrandIcon className="size-4" />}>
        CV
      </ExternalLink>
    </div>
  </Section>
);

const PortfolioShowcase = () => (
  <>
    <OutlineNav />
    <Hero />
    <About />
    <Experience />
    <Certifications />
    <Research />
    <Education />
    <Contact />
  </>
);

export default PortfolioShowcase;
