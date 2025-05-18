import { InputGroup, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (inputRef.current) {
          onSearch(inputRef.current.value);
        }
      }}
    >
      <InputGroup startElement={<FaSearch />}>
        <Input
          type="text"
          placeholder="Search games..."
          borderRadius={20}
          variant="outline"
          ref={inputRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
