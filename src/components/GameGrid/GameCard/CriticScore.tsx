import { Badge } from "@chakra-ui/react";

interface Props {
  score: number | null;
}

const CriticScore = ({ score }: Props) => {
  let color = "gray.500";
  let displayScore = score?.toString() || "N/A";

  if (score) {
    color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  }

  return (
    <Badge colorPalette={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {displayScore}
    </Badge>
  );
};

export default CriticScore;
