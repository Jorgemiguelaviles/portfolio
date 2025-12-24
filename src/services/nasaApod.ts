// src/services/nasaApod.ts

export type ApodData = {
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: 'image' | 'video';
  date: string;
  copyright?: string;
};

const API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';

export async function fetchApod(): Promise<ApodData> {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Erro ao buscar APOD');
  }

  return response.json();
}
