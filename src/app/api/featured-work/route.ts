import { NextResponse } from "next/server";
import { featuredWork, portfolioLinks } from "@/lib/portfolio-data";

const featureWork = featuredWork.map((item) => ({
  title: item.title,
  description: item.description,
  roles: item.tags,
  image: "image" in item && item.image ? item.image : "/images/feature-work/feature-img-1.png",
  url: item.links[0]?.href ?? portfolioLinks.github,
}));

export async function GET() {
  return NextResponse.json({ featureWork });
}

