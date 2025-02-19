import Button from "./Button";
import { useState } from "react";
import { info } from "./data";
import TopButton from "./TopButton";
import { UseTheme } from "../ThemeContext";

export default function Main() {
  const { isDarkTheme } = UseTheme();

  const [contentType, setContentType] = useState(
    "Детский нейропсихолог – специалист, который может диагностировать возможные нарушения в деятельности высших психических функций ребенка и осуществлять коррекционное воздействий современными нейропсихологическими методами. Методы детской нейропсихологии применимы как к нормативно развивающимся детям, так и к детям, имеющим нарушения в развитии"
  );

  return (
    <main>
      <div
        className={isDarkTheme ? "dark-theme-main-container" : "main-container"}
      >
        <p>{contentType}</p>
        <div
          className={
            isDarkTheme ? "dark-theme-button-wrapper" : "button-wrapper"
          }
        >
          <div className={isDarkTheme ? "dark-theme-diagnostic" : "diagnostic"}>
            <Button
              className={isDarkTheme ? "dark-theme-diagnostic" : "diagnostic"}
              title={info[0].title}
              buttonClicked={() => setContentType(info[0].description)}
            />
          </div>
          <div
            className={
              isDarkTheme ? "dark-theme-neuro-psychology" : "neuro-psychology"
            }
          >
            <Button
              className={
                isDarkTheme ? "dark-theme-neuro-psychology" : "neuro-psychology"
              }
              title={info[1].title}
              buttonClicked={() => setContentType(info[1].description)}
            />
          </div>
          <div
            className={
              isDarkTheme ? "dark-theme-prepare-to-school" : "prepare-to-school"
            }
          >
            <Button
              className={
                isDarkTheme
                  ? "dark-theme-prepare-to-school"
                  : "prepare-to-school"
              }
              title={info[2].title}
              buttonClicked={() => setContentType(info[2].description)}
            />
          </div>
        </div>
        <TopButton />
      </div>
    </main>
  );
}
