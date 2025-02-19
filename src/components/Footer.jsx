import { UseTheme } from "./ThemeContext";

export default function Footer() {
  const { isDarkTheme } = UseTheme();
  return (
    <>
      <footer>
        <div
          id="contacts"
          className={
            isDarkTheme ? "dark-theme-footer-container" : "footer-container"
          }
        >
          <p>Детский нейропсихолог</p>
          <p className={isDarkTheme ? "dark-theme-phone-call" : "phone-call"}>
            Телефон для записи:
            <a href="tel:+375291486626">+375291486626</a>
          </p>
          <div>
            <p>Мы в соцсетях</p>
            <picture
              className={
                isDarkTheme ? "dark-theme-social-network" : "social-network"
              }
            >
              <a
                href="https://www.instagram.com/neuro_marinaleksina?igsh=b2dqMm1vcHV1OXFl"
                target="blank"
              >
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="https://t.me/wh_marina" target="blank">
                <i class="fa-brands fa-telegram"></i>
              </a>
            </picture>
          </div>
        </div>
      </footer>
    </>
  );
}
