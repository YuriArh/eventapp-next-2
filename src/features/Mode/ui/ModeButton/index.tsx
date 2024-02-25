import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { useMode } from "../../model";

/**
 *
 * @returns {ReactNode} button for toggle theme
 */

export function ModeButton() {
  const { theme } = useTheme();
  const [toggleMode] = useMode();
  return (
    <Button onClick={toggleMode} size="sm" isIconOnly radius="full">
      {theme === "light" ? <CiDark size={25} /> : <CiLight size={25} />}
    </Button>
  );
}
