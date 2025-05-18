import { Button, Menu, MenuItem } from "@chakra-ui/react";

interface Props {
  selectedSortOrder: string | null;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Order by: {currentSortOrder?.label || "Relevance"}
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOrders.map((order) => (
            <Menu.Item
              key={order.value}
              value={order.label}
              onClick={() => onSelectSortOrder(order.value)}
            >
              {order.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
