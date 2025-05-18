import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius="lg" overflow="hidden" width="300px">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
