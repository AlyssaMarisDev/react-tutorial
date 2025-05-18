import { InputGroup, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  return (
    <InputGroup startElement={<FaSearch />}>
      <Input
        type="text"
        placeholder="Search games..."
        borderRadius={20}
        variant="outline"
        onChange={(event) => onSearch(event.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
