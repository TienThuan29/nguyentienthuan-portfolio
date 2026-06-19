"use client";
import { useEffect, useState } from "react";

interface CaseStudy {
  name: string;
  url: string;
}

interface SideProject {
  name: string;
  url?: string;
  comingSoon?: boolean;
}

interface ProjectOverview {
  caseStudies: CaseStudy[];
  sideProjects: SideProject[];
}

interface UseProjectOverviewReturn {
  data: ProjectOverview | null;
  isLoading: boolean;
  error: Error | null;
}

export function useProjectOverview(): UseProjectOverviewReturn {
  const [data, setData] = useState<ProjectOverview | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        setData(result?.projectOverview ?? null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}
