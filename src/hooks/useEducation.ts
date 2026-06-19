"use client";
import { useEffect, useState } from "react";

interface Education {
  date: string;
  title: string;
  subtitle: string;
}

interface UseEducationReturn {
  data: Education[] | null;
  isLoading: boolean;
  error: Error | null;
}

export function useEducation(): UseEducationReturn {
  const [data, setData] = useState<Education[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        setData(result?.educationData ?? null);
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
