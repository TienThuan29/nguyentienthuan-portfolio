import { NextResponse } from "next/server";
import { education, experience, featuredWork, sideProjects } from "@/lib/portfolio-data";

const experienceData = experience.map((item) => ({
  icon: "tailwind",
  role: `${item.role} · ${item.org}`,
  location: item.location,
  startYear: item.period.split(" - ")[0],
  endYear: item.period.split(" - ")[1] ?? "Present",
  bulletPoints: item.details,
}));

const educationData = education.map((item) => ({
  date: item.period,
  title: item.degree,
  subtitle: `${item.school} · ${item.details[0]}`,
}));

const projectOverview = {
  caseStudies: featuredWork
    .filter((item) => item.links.length > 0)
    .map((item) => ({
      name: item.title,
      url: item.links[0].href,
    })),
  sideProjects: sideProjects.map((item) => ({
    name: item.title,
    url: item.href,
    comingSoon: false,
  })),
};

export async function GET() {
  return NextResponse.json({
    experienceData,
    educationData,
    projectOverview,
  });
}

