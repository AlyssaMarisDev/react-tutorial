import { List } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import GenreItem from "./GenreItem/GenreItem";
import GenreItemSkeleton from "./GenreItem/GenreItemSkeleton";
import { Genre } from "../../hooks/useGenres";

interface GenreListProps {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;

  return (
    <List.Root listStyleType="none">
      {isLoading &&
        skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}
      {!isLoading &&
        genres.map((genre) => (
          <GenreItem key={genre.id} genre={genre} onClick={onSelectGenre} />
        ))}
    </List.Root>
  );
};

export default GenreList;
