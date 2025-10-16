import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Shop", href: "#shop" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const accentColors = [
  { name: "Cyan", value: "cyan", color: "hsl(190 95% 55%)" },
  { name: "Purple", value: "purple", color: "hsl(280 80% 60%)" },
  { name: "Pink", value: "pink", color: "hsl(330 85% 60%)" },
  { name: "Green", value: "green", color: "hsl(140 85% 50%)" },
  { name: "Orange", value: "orange", color: "hsl(30 95% 55%)" },
  { name: "Blue", value: "blue", color: "hsl(220 90% 60%)" },
];

export const Navigation = () => {
  const { theme, toggleTheme, setAccentColor } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold gradient-text">
          Nagi
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-smooth"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-accent/10"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Accent Color Picker */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <Palette className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass">
              {accentColors.map((color) => (
                <DropdownMenuItem
                  key={color.value}
                  onClick={() => setAccentColor(color.value)}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div
                    className="w-5 h-5 rounded-full"
                    style={{ background: color.color }}
                  />
                  <span>{color.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
