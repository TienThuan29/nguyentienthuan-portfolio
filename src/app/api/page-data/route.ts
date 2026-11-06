import { NextResponse } from "next/server";
import { education } from "@/lib/portfolio-data";

// Required by `output: "export"` (GitHub Pages): emitted once at build time.
export const dynamic = "force-static";

const educationData = education.map((item) => ({
  date: item.period,
  title: item.degree,
  subtitle: `${item.school} | ${item.details[0]}`,
}));

export async function GET() {
  return NextResponse.json({ educationData });
}
