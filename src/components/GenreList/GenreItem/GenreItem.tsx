import { HStack, Image, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../../../services/image-url";
import { Genre } from "../../../hooks/useGenres";
import GenreItemContainer from "./GenreItemContainer";
import { useColorModeValue } from "../../ui/color-mode";

interface GenreItemProps {
  genre: Genre;
  isSelected: boolean;
  onClick: (genre: Genre) => void;
}

const GenreItem = ({ genre, isSelected, onClick }: GenreItemProps) => {
  const hoverBg = useColorModeValue("gray.300", "gray.700");

  return (
    <GenreItemContainer>
      <HStack
        width="100%"
        onClick={() => onClick(genre)}
        gap={2}
        cursor="pointer"
        _hover={{
          bg: hoverBg,
          transition: "background 0.2s",
        }}
        borderRadius={8}
        paddingLeft={2}
      >
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          boxSize="32px"
          borderRadius="8px"
          objectFit="cover"
        />
        <Button
          variant="ghost"
          fontSize="md"
          fontWeight={isSelected ? "bold" : "normal"}
          textAlign="left"
          whiteSpace="normal"
          width="100%"
          justifyContent="flex-start"
          _hover={{ bg: "transparent" }}
        >
          {genre.name}
        </Button>
      </HStack>
    </GenreItemContainer>
  );
};

export default GenreItem;
