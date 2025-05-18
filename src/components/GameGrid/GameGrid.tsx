import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard/GameCard";
import GameCardSkeleton from "./GameCard/GameCardSkeleton";
import { Genre } from "../../hooks/useGenres";
import { Platform } from "../../hooks/usePlatforms";

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedSortOrder: string | null;
  searchText: string | null;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedSortOrder,
  searchText,
}: GameGridProps) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform, selectedSortOrder, searchText);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={3} padding={3}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!isLoading &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
