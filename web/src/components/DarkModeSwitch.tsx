import { useColorMode, Switch } from "@chakra-ui/react";

interface DarkModeSwitchProps {
  isFixed?: boolean;
}
export const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({ isFixed }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      position={isFixed ? "fixed" : "inherit"}
      top="1rem"
      right="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};
