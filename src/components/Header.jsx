import ButtonToggleTheme from "./ButtonToggleTheme";
import { UseTheme } from "./ThemeContext";

export default function Header() {
  const { isDarkTheme } = UseTheme();
  return (
    <header>
      <div
        className={
          isDarkTheme ? "dark-theme-header-container" : "header-container"
        }
        id="header-ref"
      >
        <ButtonToggleTheme />
        <p className={isDarkTheme ? "dark-theme-header-name" : "header-name"}>
          Детский психолог
          <br />
          нейропсихолог
        </p>
        <nav
          className={
            isDarkTheme ? "dark-theme-header-navigation" : "header-navigation"
          }
        >
          <ul
            className={
              isDarkTheme
                ? "dark-theme-header-navigation-lists"
                : "header-navigation-lists"
            }
          >
            <li>
              <a href="#services">Услуги</a>
            </li>
            <li>
              <a href="#prices">Цены</a>
            </li>
            <li>
              <a href="#specialists">Специалисты</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
