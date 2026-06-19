"use client";
import { useEffect, useState } from "react";

interface Experience {
  icon: string;
  role: string;
  startYear: string;
  endYear: string;
  location: string;
  bulletPoints: string[];
}

interface UseExperienceReturn {
  data: Experience[] | null;
  isLoading: boolean;
  error: Error | null;
}

export function useExperience(): UseExperienceReturn {
  const [data, setData] = useState<Experience[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        setData(result?.experienceData ?? null);
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
