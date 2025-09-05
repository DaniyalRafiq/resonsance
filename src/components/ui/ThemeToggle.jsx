"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "./switch";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setmounted] = useState(false);
  useEffect(() => {
    setmounted(true);
  });
  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <Sun className={`h-6 w-6  `} />
        <Switch disabled />
        <Moon className={`h-6 w-6  `} />
      </div>
    );
  }
  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-6 w-6 transition-colors ${
          theme === "light" ? "text-yellow-500" : "text-muted-foreground"
        } `}
      />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <Moon
        className={`h-6 w-6 transition-colors ${
          theme === "dark" ? "text-yellow-500" : "text-muted-foreground"
        }  `}
      />
    </div>
  );
};

export default ThemeToggle;
