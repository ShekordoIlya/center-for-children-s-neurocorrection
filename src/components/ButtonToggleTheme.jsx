import { UseTheme } from "./ThemeContext";

export default function ButtonToggleTheme() {
  const { isDarkTheme, toggleTheme } = UseTheme();
  return (
    <div
      className={
        isDarkTheme
          ? "dark-theme-header-btn-toggle-theme-wrapper"
          : "header-btn-toggle-theme-wrapper"
      }
    >
      <button
        type="button"
        className={
          isDarkTheme
            ? "dark-theme-header-btn-toggle-theme"
            : "header-btn-toggle-theme"
        }
        onClick={toggleTheme}
      >
        Switch theme
      </button>
    </div>
  );
}
