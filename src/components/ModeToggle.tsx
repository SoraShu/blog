import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // 初始化：检查当前是否为深色模式
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const newIsDark = !isDark;
    
    root.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    setIsDark(newIsDark);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={toggle}
      aria-label="切换主题 Toggle theme"
    >
      <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
