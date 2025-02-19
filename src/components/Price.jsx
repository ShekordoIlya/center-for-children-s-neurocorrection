import { UseTheme } from "./ThemeContext";

export default function Price() {
  const { isDarkTheme } = UseTheme();
  return (
    <>
      <section
        className={isDarkTheme ? "dark-theme-section-price" : "section-price"}
      >
        <div
          id="prices"
          className={
            isDarkTheme ? "dark-theme-price-container" : "price-container"
          }
        >
          <table
            className={
              isDarkTheme
                ? "dark-theme-price-table-wrapper"
                : "price-table-wrapper"
            }
          >
            <tr
              className={
                isDarkTheme ? "dark-theme-header-table" : "header-table"
              }
            >
              <td>&nbsp;</td>
              <th>Наименование услуги</th>
              <th>Цена услуги</th>
            </tr>
            <tr
              className={
                isDarkTheme
                  ? "dark-theme-row-service-first"
                  : "row-service-first"
              }
            >
              <td>1</td>
              <td>Диагностика, заключение и рекомендации</td>
              <td>
                1 специалист (60-90 минут) - 120 рублей <br />2 специалиста
                (60-90 минут) - 160 рублей
              </td>
            </tr>
            <tr
              className={
                isDarkTheme
                  ? "dark-theme-row-service-second"
                  : "row-service-second"
              }
            >
              <td>2</td>
              <td>Нейрокоррекционное занятие</td>
              <td>
                Продолжительность 45 минут <br />
                50 рублей
              </td>
            </tr>
            <tr
              className={
                isDarkTheme
                  ? "dark-theme-row-service-third"
                  : "row-service-third"
              }
            >
              <td>3</td>
              <td>Диагностика готовности к школе</td>
              <td>
                1 специалист (40 минут) - 75 рублей <br />1 специалист (80
                минут) - 100 рублей
              </td>
            </tr>
            <tr
              className={
                isDarkTheme ? "dark-theme-row-service-four" : "row-service-four"
              }
            >
              <td>4</td>
              <td>Индивидуальная подготовка к школе</td>
              <td>
                Продолжительность 45 минут <br />
                45 рублей
              </td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
}
