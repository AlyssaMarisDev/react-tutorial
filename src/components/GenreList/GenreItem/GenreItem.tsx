import { HStack, Image, Text, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../../../services/image-url";
import { Genre } from "../../../hooks/useGenres";
import GenreItemContainer from "./GenreItemContainer";

interface GenreItemProps {
  genre: Genre;
  onClick: (genre: Genre) => void;
}

const GenreItem = ({ genre, onClick }: GenreItemProps) => {
  return (
    <GenreItemContainer>
      <HStack width="100%" onClick={() => onClick(genre)}>
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          boxSize="32px"
          borderRadius="8px"
        />
        <Button variant="ghost" fontSize="md">
          {genre.name}
        </Button>
      </HStack>
    </GenreItemContainer>
  );
};

export default GenreItem;
