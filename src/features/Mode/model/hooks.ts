import { useTheme } from "next-themes";

export function useMode() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return [toggleMode];
}
