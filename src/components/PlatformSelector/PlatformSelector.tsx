import { Button, Menu } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../../hooks/usePlatforms";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data: platforms } = usePlatforms();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>{selectedPlatform?.name || "Platform"}</Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {platforms.map((platform) => (
            <Menu.Item
              key={platform.id}
              value={platform.id.toString()}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
