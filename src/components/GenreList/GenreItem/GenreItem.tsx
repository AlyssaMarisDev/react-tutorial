import { HStack, Image, Text, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../../../services/image-url";
import { Genre } from "../../../hooks/useGenres";
import GenreItemContainer from "./GenreItemContainer";

interface GenreItemProps {
  genre: Genre;
  isSelected: boolean;
  onClick: (genre: Genre) => void;
}

const GenreItem = ({ genre, isSelected, onClick }: GenreItemProps) => {
  return (
    <GenreItemContainer>
      <HStack width="100%" onClick={() => onClick(genre)}>
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          boxSize="32px"
          borderRadius="8px"
        />
        <Button
          variant="ghost"
          fontSize="md"
          fontWeight={isSelected ? "bold" : "normal"}
        >
          {genre.name}
        </Button>
      </HStack>
    </GenreItemContainer>
  );
};

export default GenreItem;
