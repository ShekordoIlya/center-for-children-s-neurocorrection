import { useEffect, useState } from "react";
import { UseTheme } from "./ThemeContext";

export default function SectionSpecialists(props) {
  const { isDarkTheme } = UseTheme();
  const [specialists, setSpecialists] = useState([]);

  const path =
    "https://66f59c9b436827ced97492c3.mockapi.io/wb-store/child-center";

  // useEffect(() => {
  //   fetch(path)
  //     .then((response) => response.json())
  //     .then((data) => setSpecialists(data));
  // }, []);

  // useEffect(async () => {
  //   const response = await fetch(path);
  //   const data = await response.json();
  //   setSpecialists(data);
  // }, []);

  const getData = async () => {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  };

  useEffect(async () => {
    const dataFrom = await getData();
    setSpecialists(dataFrom);
  }, []);

  return (
    <section
      id={props.id}
      className={
        isDarkTheme ? "dark-theme-section-specialists" : "section-specialists"
      }
    >
      <div
        className={
          isDarkTheme
            ? "dark-theme-specialists-container"
            : "specialists-container"
        }
      >
        {specialists.map((spec) => {
          return (
            <div
              className={isDarkTheme ? "dark-theme-specialist" : "specialist"}
            >
              <img src={props.photo} alt="Фото специалиста" />
              <p>{spec.userName}</p>
              <p>{spec.about}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
