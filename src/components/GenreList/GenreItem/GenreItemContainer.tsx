import { List } from "@chakra-ui/react";

interface GenreItemContainerProps {
  children: React.ReactNode;
}

const GenreItemContainer = ({ children }: GenreItemContainerProps) => {
  return (
    <List.Item paddingY="5px" as="li">
      {children}
    </List.Item>
  );
};

export default GenreItemContainer;
