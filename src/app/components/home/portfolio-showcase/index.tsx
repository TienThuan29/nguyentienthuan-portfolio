"use client";

import Image from "next/image";
import {
  Avatar,
  Button,
  Card,
  Chip,
  Link as HeroLink,
  Separator,
  Tabs,
} from "@heroui/react";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Database,
  Download,
  ExternalLink,
  Facebook,
  FlaskConical,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Phone,
  Sparkles,
  Trophy,
} from "@/app/components/svg-icons";
import {
  awards,
  certificates,
  education,
  experience,
  featuredWork,
  focusCards,
  heroMetrics,
  linkLabels,
  portfolioLinks,
  profile,
  researchPapers,
  sideProjects,
  skills,
} from "@/lib/portfolio-data";

type FeaturedWorkItem = (typeof featuredWork)[number];

const projectAccents = [
  {
    code: "Build",
    surface: "bg-[#0d2d27]",
    glow: "from-emerald-300/24 via-transparent to-amber-300/18",
    chip: "border-emerald-300/45 bg-emerald-100 text-emerald-950",
    text: "text-emerald-800",
    marker: "bg-emerald-500",
  },
  {
    code: "Lab",
    surface: "bg-[#10233a]",
    glow: "from-sky-300/22 via-transparent to-emerald-300/14",
    chip: "border-sky-300/45 bg-sky-100 text-sky-950",
    text: "text-sky-800",
    marker: "bg-sky-500",
  },
  {
    code: "AI",
    surface: "bg-[#2f2615]",
    glow: "from-amber-300/24 via-transparent to-emerald-300/16",
    chip: "border-amber-300/55 bg-amber-100 text-amber-950",
    text: "text-amber-800",
    marker: "bg-amber-500",
  },
  {
    code: "Research",
    surface: "bg-[#25243a]",
    glow: "from-indigo-300/20 via-transparent to-emerald-300/14",
    chip: "border-indigo-300/45 bg-indigo-100 text-indigo-950",
    text: "text-indigo-800",
    marker: "bg-indigo-500",
  },
] as const;

const openExternal = (href: string) => {
  const nextWindow = window.open(href, "_blank", "noopener,noreferrer");
  if (nextWindow) nextWindow.opener = null;
};

const SectionHeading = ({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) => (
  <div className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
    <p className="section-kicker">{kicker}</p>
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold leading-tight tracking-normal text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
        {description}
      </p>
    </div>
  </div>
);

const ContactButton = () => (
  <Button
    className="rounded-md bg-zinc-950 px-5 text-white hover:bg-zinc-800"
    size="lg"
    onPress={() => {
      window.location.href = portfolioLinks.email;
    }}
  >
    <Mail className="size-4" />
    Contact me
  </Button>
);

const FeaturedCard = ({ item, index }: { item: FeaturedWorkItem; index: number }) => {
  const hasImage = "image" in item && item.image;
  const accent = projectAccents[index % projectAccents.length];
  const projectNumber = String(index + 1).padStart(2, "0");
  const primaryTags = item.tags.slice(0, 4);

  return (
    <Card
      className="group overflow-hidden rounded-lg border border-white/12 bg-[#f9fbf6] p-0 text-zinc-950 shadow-[0_28px_90px_rgba(0,0,0,0.22)] lg:grid lg:grid-cols-[minmax(300px,0.8fr)_minmax(0,1.2fr)]"
      variant="default"
    >
      <div className={`relative min-h-[320px] overflow-hidden ${accent.surface} lg:min-h-full`}>
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40"
        />
        <div
          aria-hidden
          className={`absolute inset-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${accent.glow}`}
        />
        {hasImage && (
          <Image
            src={item.image}
            alt={`${item.title} preview`}
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover opacity-[0.82] mix-blend-luminosity transition duration-700 group-hover:scale-[1.035]"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,8,0.08)_0%,rgba(5,9,8,0.62)_100%)]" />
        <div className="relative z-10 flex min-h-[320px] flex-col justify-between p-5 text-white sm:p-6 lg:min-h-full">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-md border border-white/18 bg-white/12 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
              Project {projectNumber}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/78">
              {accent.code}
            </span>
          </div>

          {!hasImage && (
            <div className="my-8 grid gap-3">
              <div className="h-px w-full bg-white/22" />
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div className="h-20 rounded-md border border-white/18 bg-white/10 p-3 backdrop-blur">
                  <Code2 className="size-5 text-white/85" />
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-white/65">
                    Interface
                  </p>
                </div>
                <div className="flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/14">
                  <Layers3 className="size-5" />
                </div>
                <div className="h-20 rounded-md border border-white/18 bg-white/10 p-3 backdrop-blur">
                  <Database className="size-5 text-white/85" />
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-white/65">
                    Data
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-white/22" />
            </div>
          )}

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/64">
              Core stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {primaryTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/16 bg-white/12 px-2.5 py-1 text-xs font-semibold text-white/86 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-full flex-col">
        <Card.Header className="gap-4 p-6 pb-0 sm:p-7 sm:pb-0">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs font-bold ${accent.chip}`}
            >
              <span className={`size-1.5 rounded-full ${accent.marker}`} />
              {item.kicker}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-950/10 bg-white px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
              <CalendarDays className="size-3.5" />
              {item.period}
            </span>
          </div>
          <Card.Title className="max-w-3xl text-2xl font-semibold leading-tight text-zinc-950 sm:text-[1.7rem]">
            {item.title}
          </Card.Title>
          <Card.Description className="max-w-3xl text-base leading-7 text-zinc-600">
            {item.description}
          </Card.Description>
        </Card.Header>

        <Card.Content className="grid gap-6 p-6 sm:p-7">
          <div className="grid gap-4 md:grid-cols-[132px_minmax(0,1fr)]">
            <p className={`font-mono text-xs font-bold uppercase tracking-[0.18em] ${accent.text}`}>
              Impact
            </p>
            <ul className="grid gap-3">
              {item.impact.map((point) => (
                <li
                  key={point}
                  className="grid grid-cols-[20px_minmax(0,1fr)] gap-3 text-sm leading-6 text-zinc-700"
                >
                  <BadgeCheck className={`mt-1 size-4 ${accent.text}`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 border-y border-zinc-950/10 py-5 md:grid-cols-[132px_minmax(0,1fr)]">
            <p className={`font-mono text-xs font-bold uppercase tracking-[0.18em] ${accent.text}`}>
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Chip
                  key={tag}
                  className="rounded-md border border-zinc-950/10 bg-white"
                  size="sm"
                  variant="secondary"
                >
                  <Chip.Label>{tag}</Chip.Label>
                </Chip>
              ))}
            </div>
          </div>
        </Card.Content>

        <Card.Footer className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-zinc-950/10 bg-white/66 p-6 sm:p-7">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Case note / {projectNumber}
          </span>
          <div className="flex flex-wrap gap-3">
            {item.links.length ? (
              item.links.map((link) => (
                <HeroLink
                  key={link.href}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${accent.text} hover:text-zinc-950`}
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                  <ArrowUpRight className="size-4" />
                </HeroLink>
              ))
            ) : (
              <span className="text-sm font-medium text-zinc-500">
                Internal project details available on request
              </span>
            )}
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
};

const TimelineItem = ({
  role,
  org,
  period,
  location,
  summary,
  details,
  skills,
}: (typeof experience)[number]) => (
  <div className="relative grid gap-4 border-l border-zinc-950/10 pb-10 pl-6 last:pb-0">
    <span className="absolute -left-[7px] top-1 size-3 rounded-full border-2 border-white bg-emerald-700 shadow-[0_0_0_3px_rgba(4,120,87,0.18)]" />
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h3 className="text-xl font-semibold text-zinc-950">{role}</h3>
        <p className="mt-1 text-sm font-medium text-zinc-600">{org}</p>
      </div>
      <Chip className="rounded-md" color="accent" size="sm" variant="soft">
        <CalendarDays className="size-3.5" />
        <Chip.Label>{period}</Chip.Label>
      </Chip>
    </div>
    <p className="flex items-center gap-2 text-sm text-zinc-500">
      <MapPin className="size-4" />
      {location}
    </p>
    <p className="max-w-3xl text-sm leading-6 text-zinc-700">{summary}</p>
    <ul className="grid gap-2">
      {details.map((detail) => (
        <li key={detail} className="flex gap-3 text-sm leading-6 text-zinc-700">
          <BadgeCheck className="mt-1 size-4 shrink-0 text-emerald-700" />
          <span>{detail}</span>
        </li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Chip key={skill} className="rounded-md" size="sm" variant="secondary">
          <Chip.Label>{skill}</Chip.Label>
        </Chip>
      ))}
    </div>
  </div>
);

export default function PortfolioShowcase() {
  return (
    <div id="top" className="min-h-screen overflow-hidden bg-[var(--background)] text-zinc-950">
      <section className="relative isolate border-b border-zinc-950/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-56 bg-[url('/images/hero-sec/banner-bg-img.png')] bg-cover bg-center opacity-75"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(247,249,244,0.2)_0%,#f7f9f4_46%,#f7f9f4_100%)]"
        />
        <div className="site-container relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-4xl animate-fade-up">
              <div className="flex flex-wrap items-center gap-3">
                <Chip className="max-w-full rounded-md" color="success" variant="soft">
                  <Sparkles className="size-3.5" />
                  <Chip.Label className="truncate">Open to AI-integrated work</Chip.Label>
                </Chip>
                <span className="basis-full font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 sm:basis-auto">
                  FPT University - Vietnam
                </span>
              </div>
              <h1 className="mt-8 max-w-full break-words text-[2.15rem] font-semibold leading-[0.98] tracking-normal text-zinc-950 sm:max-w-4xl sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-emerald-900 sm:text-2xl">
                {profile.role} focused on full-stack web, computer vision, and applied AI systems.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                {profile.summary}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ContactButton />
                <Button
                  className="rounded-md border-zinc-950/15 bg-white px-5 text-zinc-950 hover:bg-zinc-100"
                  size="lg"
                  variant="outline"
                  onPress={() => {
                    window.location.href = portfolioLinks.cv;
                  }}
                >
                  <Download className="size-4" />
                  Download CV
                </Button>
                <Button
                  className="rounded-md px-5 text-zinc-800"
                  size="lg"
                  variant="tertiary"
                  onPress={() => openExternal(profile.github)}
                >
                  <Github className="size-4" />
                  GitHub
                </Button>
                <Button
                  className="rounded-md px-5 text-zinc-800"
                  size="lg"
                  variant="tertiary"
                  onPress={() => openExternal(profile.facebook)}
                >
                  <Facebook className="size-4" />
                  Facebook
                </Button>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <Card
                    key={metric.label}
                    className="rounded-lg border border-zinc-950/10 bg-white/80 p-4 backdrop-blur"
                    variant="transparent"
                  >
                    <Card.Title className="font-mono text-3xl font-semibold text-zinc-950">
                      {metric.value}
                    </Card.Title>
                    <Card.Description className="mt-2 text-sm font-semibold text-zinc-800">
                      {metric.label}
                    </Card.Description>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">{metric.detail}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-up [animation-delay:120ms]">
              <Card className="overflow-hidden rounded-lg border border-zinc-950/10 bg-white p-0 shadow-[0_30px_90px_rgba(20,28,24,0.18)]">
                <div className="relative aspect-[4/5] min-h-[460px] bg-zinc-100">
                  <Image
                    priority
                    src="/images/hero-sec/user-img.png"
                    alt={profile.name}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-md border border-white/35 bg-zinc-950/80 p-4 text-white backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-200">
                        Current signal
                      </p>
                      <p className="mt-1 text-sm font-medium">
                        Researcher building production-ready AI interfaces.
                      </p>
                    </div>
                    <Avatar className="size-12 border border-white/30">
                      <Avatar.Image src="/images/hero-sec/user-img.png" alt={profile.name} />
                      <Avatar.Fallback>{profile.initials}</Avatar.Fallback>
                    </Avatar>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-band bg-white/72">
        <div className="site-container">
          <SectionHeading
            kicker="About"
            title="A software engineer learning where product engineering and AI research meet."
            description="The portfolio is built around what matters most in the CV: research acceptance, full-stack delivery, practical AI integration, and a clear learning path through FPTU and Microsoft AI coursework."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {focusCards.map((card, index) => {
              const icons = [FlaskConical, Layers3, Code2];
              const Icon = icons[index];
              return (
                <Card
                  key={card.title}
                  className="rounded-lg border border-zinc-950/10 bg-[#fbfcf7] p-5"
                  variant="default"
                >
                  <div className="flex size-11 items-center justify-center rounded-md bg-emerald-900 text-white">
                    <Icon className="size-5" />
                  </div>
                  <Card.Header className="mt-4 p-0">
                    <Card.Title className="text-lg font-semibold text-zinc-950">
                      {card.title}
                    </Card.Title>
                    <Card.Description className="text-sm leading-6 text-zinc-600">
                      {card.description}
                    </Card.Description>
                  </Card.Header>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {skills.map((group, index) => {
              const icons = [Code2, Layers3, Database, FlaskConical];
              const Icon = icons[index];
              return (
                <div key={group.title} className="rounded-lg border border-zinc-950/10 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 text-emerald-800" />
                    <h3 className="font-semibold text-zinc-950">{group.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip key={item} className="rounded-md" size="sm" variant="soft">
                        <Chip.Label>{item}</Chip.Label>
                      </Chip>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="section-band relative isolate overflow-hidden bg-[#101712] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(216,162,58,0.16)_0%,rgba(16,23,18,0)_100%)]"
        />
        <div className="site-container relative z-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div>
              <p className="section-kicker text-emerald-200">Selected work</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl">
                Project stories that show the interface, system layer, and measurable responsibility.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
                Each project now reads like a compact dossier: what it is, what I owned, which stack supported it, and where the proof lives.
              </p>
            </div>
            <div className="border-l border-white/14 pl-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
                Reading order
              </p>
              <div className="mt-5 grid gap-4">
                {["Context", "Impact", "Stack", "Repository"].map((item, order) => (
                  <div key={item} className="grid grid-cols-[32px_minmax(0,1fr)] items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-md border border-white/14 bg-white/8 font-mono text-xs font-bold text-white/78">
                      {String(order + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-6">
            {featuredWork.map((item, index) => (
              <FeaturedCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-band bg-[#f7f9f4]">
        <div className="site-container">
          <SectionHeading
            kicker="Experience"
            title="A focused timeline across lab research, product engineering, and enterprise software training."
            description="Each role shows the practical surface area behind the CV: what problem space I worked in, what responsibilities I owned, and which technologies were involved."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div className="rounded-lg border border-zinc-950/10 bg-white p-6">
              <BriefcaseBusiness className="size-8 text-emerald-800" />
              <h3 className="mt-5 text-2xl font-semibold text-zinc-950">
                What this section proves
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                I have experience moving between research, backend/database design, frontend implementation, and enterprise platform training.
              </p>
              <div className="mt-6 grid gap-3">
                {["AI research execution", "Full-stack product ownership", "Enterprise platform foundation"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md bg-[#f7f9f4] p-3">
                    <BadgeCheck className="size-4 text-emerald-700" />
                    <span className="text-sm font-medium text-zinc-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-zinc-950/10 bg-white p-6">
              {experience.map((item) => (
                <TimelineItem key={`${item.role}-${item.period}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="accepted-papers" className="section-band bg-white">
        <div className="site-container">
          <SectionHeading
            kicker="Accepted papers"
            title="Research work with accepted venues, implementation links, and concrete contributions."
            description="This section is separated from experience so each paper can show the research topic, acceptance metadata, authorship, contribution scope, and technology stack."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {researchPapers.map((paper, index) => (
              <Card
                key={paper.title}
                className="rounded-lg border border-zinc-950/10 bg-[#fbfcf7] p-6"
                variant="default"
              >
                <Card.Header className="p-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Chip className="rounded-md" color="success" size="sm" variant="soft">
                      <BookOpen className="size-3.5" />
                      <Chip.Label>Paper {String(index + 1).padStart(2, "0")}</Chip.Label>
                    </Chip>
                    <Chip className="rounded-md" color="accent" size="sm" variant="soft">
                      <CalendarDays className="size-3.5" />
                      <Chip.Label>Accepted {paper.accepted}</Chip.Label>
                    </Chip>
                  </div>
                  <Card.Title className="mt-5 text-2xl font-semibold leading-tight text-zinc-950">
                    {paper.title}
                  </Card.Title>
                  <Card.Description className="text-sm leading-6 text-zinc-600">
                    {paper.conference}
                  </Card.Description>
                </Card.Header>
                <Card.Content className="mt-5 grid gap-5 p-0">
                  <p className="text-sm leading-6 text-zinc-700">{paper.description}</p>
                  <div className="grid gap-4 rounded-md border border-zinc-950/10 bg-white p-4">
                    <div>
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                        Role
                      </p>
                      <p className="mt-1 text-sm leading-6 text-zinc-700">{paper.role}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                        Authors
                      </p>
                      <p className="mt-1 text-sm leading-6 text-zinc-700">{paper.authors}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                      Contributions
                    </p>
                    <ul className="mt-3 grid gap-2">
                      {paper.contributions.map((contribution) => (
                        <li key={contribution} className="flex gap-3 text-sm leading-6 text-zinc-700">
                          <BadgeCheck className="mt-1 size-4 shrink-0 text-emerald-700" />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <Chip key={tag} className="rounded-md" size="sm" variant="secondary">
                        <Chip.Label>{tag}</Chip.Label>
                      </Chip>
                    ))}
                  </div>
                </Card.Content>
                <Card.Footer className="mt-6 border-t border-zinc-950/10 p-0 pt-4">
                  <HeroLink
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-zinc-950"
                    href={paper.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View repository
                    <ArrowUpRight className="size-4" />
                  </HeroLink>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className="section-band bg-white">
        <div className="site-container">
          <SectionHeading
            kicker="Credentials"
            title="Education, certificates, and recognition in one compact view."
            description="This section keeps the proof points scannable for recruiters: FPTU foundation, recent AI administration coursework, and academic awards."
          />
          <Tabs className="mt-10 w-full" defaultSelectedKey="education" variant="secondary">
            <Tabs.ListContainer>
              <Tabs.List
                aria-label="Credentials"
                className="w-full flex-wrap justify-start gap-2 rounded-lg border border-zinc-950/10 bg-[#f7f9f4] p-2 *:rounded-md *:px-4 *:py-2 *:text-sm *:font-semibold *:text-zinc-600 *:transition *:hover:text-zinc-950"
              >
                <Tabs.Tab className="relative z-0" id="education">
                  <GraduationCap className="mr-2 inline size-4" />
                  Education
                  <Tabs.Indicator className="absolute inset-0 -z-10 rounded-md bg-white shadow-sm" />
                </Tabs.Tab>
                <Tabs.Tab className="relative z-0" id="certificates">
                  <BadgeCheck className="mr-2 inline size-4" />
                  Certificates
                  <Tabs.Indicator className="absolute inset-0 -z-10 rounded-md bg-white shadow-sm" />
                </Tabs.Tab>
                <Tabs.Tab className="relative z-0" id="awards">
                  <Trophy className="mr-2 inline size-4" />
                  Awards
                  <Tabs.Indicator className="absolute inset-0 -z-10 rounded-md bg-white shadow-sm" />
                </Tabs.Tab>
              </Tabs.List>
            </Tabs.ListContainer>
            <Tabs.Panel className="pt-6" id="education">
              <div className="grid gap-4">
                {education.map((item) => (
                  <Card key={item.school} className="rounded-lg border border-zinc-950/10 bg-white p-5">
                    <Card.Header className="p-0">
                      <Card.Title className="text-xl font-semibold text-zinc-950">
                        {item.degree}
                      </Card.Title>
                      <Card.Description className="text-sm text-zinc-600">
                        {item.school} - {item.period}
                      </Card.Description>
                    </Card.Header>
                    <Card.Content className="mt-4 p-0">
                      <ul className="grid gap-2">
                        {item.details.map((detail) => (
                          <li key={detail} className="text-sm leading-6 text-zinc-700">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </Card.Content>
                  </Card>
                ))}
              </div>
            </Tabs.Panel>
            <Tabs.Panel className="pt-6" id="certificates">
              <div className="grid gap-4 md:grid-cols-2">
                {certificates.map((item) => (
                  <Card key={item.title} className="rounded-lg border border-zinc-950/10 bg-white p-5">
                    <Card.Header className="p-0">
                      <Card.Title className="text-xl font-semibold text-zinc-950">
                        {item.title}
                      </Card.Title>
                      <Card.Description className="text-sm text-zinc-600">
                        {item.period}
                      </Card.Description>
                    </Card.Header>
                    <Card.Content className="mt-4 p-0">
                      <ul className="grid gap-2">
                        {item.details.map((detail) => (
                          <li key={detail} className="text-sm leading-6 text-zinc-700">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </Card.Content>
                  </Card>
                ))}
              </div>
            </Tabs.Panel>
            <Tabs.Panel className="pt-6" id="awards">
              <div className="grid gap-4 md:grid-cols-2">
                {awards.map((item, index) => {
                  const Icon = index === 0 ? Medal : Award;
                  return (
                    <Card
                      key={item.title}
                      className="rounded-lg border border-zinc-950/10 bg-[#fbfcf7] p-5"
                    >
                      <Icon className="size-8 text-amber-700" />
                      <Card.Header className="mt-4 p-0">
                        <Card.Title className="text-xl font-semibold text-zinc-950">
                          {item.title}
                        </Card.Title>
                        <Card.Description className="text-sm text-zinc-600">
                          {item.period}
                        </Card.Description>
                      </Card.Header>
                      <Card.Content className="mt-4 p-0">
                        <ul className="grid gap-2">
                          {item.details.map((detail) => (
                            <li key={detail} className="text-sm leading-6 text-zinc-700">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </Card.Content>
                    </Card>
                  );
                })}
              </div>
            </Tabs.Panel>
          </Tabs>

          <Separator className="my-12" />

          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div>
              <p className="section-kicker">Side project</p>
              <h3 className="mt-3 text-2xl font-semibold text-zinc-950">
                Early engineering practice with C and SDL.
              </h3>
            </div>
            <div className="grid gap-4">
              {sideProjects.map((project) => (
                <Card
                  key={project.title}
                  className="rounded-lg border border-zinc-950/10 bg-[#f7f9f4] p-5"
                  variant="default"
                >
                  <Card.Header className="p-0">
                    <Card.Title className="text-xl font-semibold text-zinc-950">
                      {project.title}
                    </Card.Title>
                    <Card.Description className="text-sm text-zinc-600">
                      {project.period}
                    </Card.Description>
                  </Card.Header>
                  <Card.Content className="mt-4 p-0">
                    <p className="text-sm leading-6 text-zinc-700">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Chip key={tag} className="rounded-md" size="sm" variant="secondary">
                          <Chip.Label>{tag}</Chip.Label>
                        </Chip>
                      ))}
                    </div>
                  </Card.Content>
                  <Card.Footer className="mt-5 border-t border-zinc-950/10 p-0 pt-4">
                    <HeroLink
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-zinc-950"
                      href={project.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      View repository
                      <ArrowUpRight className="size-4" />
                    </HeroLink>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-950/10 bg-[#eaf1ea] py-14">
        <div className="site-container">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <p className="section-kicker">Next collaboration</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
                Looking for a junior AI engineer who can still ship the product layer?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
                I am ready for full-stack web projects, AI-integrated products, and research-heavy software work where careful implementation matters.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ContactButton />
              <Button
                className="rounded-md border-zinc-950/15 bg-white text-zinc-950"
                variant="outline"
                onPress={() => openExternal(profile.linkedin)}
              >
                <Linkedin className="size-4" />
                LinkedIn
              </Button>
              <Button
                className="rounded-md border-zinc-950/15 bg-white text-zinc-950"
                variant="outline"
                onPress={() => openExternal(profile.facebook)}
              >
                <Facebook className="size-4" />
                Facebook
              </Button>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 text-sm text-zinc-600 sm:flex-row sm:items-center">
            <span className="inline-flex items-center gap-2">
              <Mail className="size-4" />
              {profile.email}
            </span>
            <span className="hidden h-4 w-px bg-zinc-950/20 sm:block" />
            <span className="inline-flex items-center gap-2">
              <Phone className="size-4" />
              {profile.phone}
            </span>
            <span className="hidden h-4 w-px bg-zinc-950/20 sm:block" />
            <span className="inline-flex items-center gap-2">
              <ExternalLink className="size-4" />
              {linkLabels.github}
            </span>
            <span className="hidden h-4 w-px bg-zinc-950/20 sm:block" />
            <span className="inline-flex items-center gap-2">
              <Facebook className="size-4" />
              {linkLabels.facebook}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
