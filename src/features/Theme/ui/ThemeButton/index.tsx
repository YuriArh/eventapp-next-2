import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { useThemeMode } from "../../model";

/**
 *
 * @returns {ReactNode} button for toggle theme
 */

export function ThemeButton() {
  const { theme } = useTheme();
  const [toggleThemeMode] = useThemeMode();
  return (
    <Button onClick={toggleThemeMode} size="sm" isIconOnly radius="full">
      {theme === "light" ? <CiDark size={25} /> : <CiLight size={25} />}
    </Button>
  );
}
