import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import GenreItemContainer from "./GenreItemContainer";

const GenreItemSkeleton = () => {
  return (
    <GenreItemContainer>
      <HStack>
        <Skeleton boxSize="32px" borderRadius="8px" />
        <SkeletonText noOfLines={1} width="100px" />
      </HStack>
    </GenreItemContainer>
  );
};

export default GenreItemSkeleton;
