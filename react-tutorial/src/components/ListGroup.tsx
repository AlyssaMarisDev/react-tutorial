import { useState } from "react";

interface ListGroupProps {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (item: string, index: number) => {
    setSelectedIndex(index);
    onSelectItem(item);
  };

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => handleClick(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
