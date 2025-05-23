import { Card } from "@chakra-ui/react";

interface GameCardContainerProps {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Card.Root borderRadius="lg" overflow="hidden">
      {children}
    </Card.Root>
  );
};

export default GameCardContainer;
