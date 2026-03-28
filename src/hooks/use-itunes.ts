import { useQuery } from "@tanstack/react-query";
import { fetchTopMovies, ITunesMovie } from "@/services/itunes";

export function useTopMovies() {
  return useQuery<ITunesMovie[]>({
    queryKey: ["itunes-top-movies"],
    queryFn: () => fetchTopMovies(25),
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 2,
  });
}
