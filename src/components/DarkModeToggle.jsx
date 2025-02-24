import { useTheme } from "./ThemeContext";

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="dark-mode-toggle"
    >
      {theme === "dark" ? (
        <span className="material-icons">light_mode</span>
      ) : (
        <span className="material-icons">dark_mode</span>
      )}
    </button>
  );
}

export default DarkModeToggle;
