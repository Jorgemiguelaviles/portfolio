// src/hooks/useDailyApod.ts
import { useEffect, useState } from 'react';
import { fetchApod, ApodData } from '../services/nasaApod';

const STORAGE_KEY = 'apod-today';

export function useDailyApod() {
  const [data, setData] = useState<ApodData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const cached = localStorage.getItem(STORAGE_KEY);

    if (cached) {
      const parsed: ApodData = JSON.parse(cached);
      if (parsed.date === today) {
        setData(parsed);
        return;
      }
    }

    fetchApod()
      .then(result => {
        setData(result);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
      })
      .catch(() => setError(true));
  }, []);

  return { data, error };
}
