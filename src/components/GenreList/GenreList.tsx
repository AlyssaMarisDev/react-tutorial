import { List, Image, Text, HStack } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  return (
    <List.Root listStyleType="none">
      {genres.map((genre) => (
        <List.Item key={genre.id} paddingY="5px" as="li">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius="8px"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
