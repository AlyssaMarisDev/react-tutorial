import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number | null;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedSortOrder: string | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
        ordering: selectedSortOrder,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedSortOrder]
  );

export default useGames;
