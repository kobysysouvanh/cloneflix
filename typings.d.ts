import { User } from "@prisma/client";

export interface Genre {
  id: number;
  name: string;
}

export interface Media {
  adult?: boolean;
  backdrop_path?: string;
  id: number;
  title?: string;
  name?: string
  original_language?: string[];
  original_name?: string;
  overview?: string;
  poster_path?: string;
  media_type?: string;
  genre_ids?: number[];
  popularity?: number;
  first_air_date?: string;
  vote_average?: number;
  vote_count?: number;
  origin_country?: string[];
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
