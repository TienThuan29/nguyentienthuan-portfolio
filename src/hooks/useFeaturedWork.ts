"use client";
import { useEffect, useState } from "react";

interface FeaturedWorkItem {
  title: string;
  url?: string;
  image: string;
  roles: string[];
}

interface UseFeaturedWorkReturn {
  data: FeaturedWorkItem[] | null;
  isLoading: boolean;
  error: Error | null;
}

export function useFeaturedWork(): UseFeaturedWorkReturn {
  const [data, setData] = useState<FeaturedWorkItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/featured-work");
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        setData(result?.featureWork ?? null);
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
