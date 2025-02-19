import { dialogInfo } from "./servicesData";
import ServicesModal from "./ServicesModal";
import { UseTheme } from "../ThemeContext";

export default function Service() {
  const { isDarkTheme } = UseTheme();
  return (
    <section
      className={isDarkTheme ? "dark-theme-section-service" : "section-service"}
    >
      <div
        id="services"
        className={
          isDarkTheme ? "dark-theme-service-container" : "service-container"
        }
      >
        {/* <div className="first-service">
          <button
            className="dialog-btn"
            type="button"
            onClick={() => overlayMenuFirst.showModal()}
          >
            Service one
          </button>
          <dialog id="overlayMenuFirst">
            <form method="dialog">
              <button className="close-btn">X</button>
            </form>
            <p>{dialogInfo.serviceOne}</p>
          </dialog>
        </div> */}
        <ServicesModal
          classWrapper={
            isDarkTheme ? "dark-theme-first-service" : "first-service"
          }
          classButton={isDarkTheme ? "dark-theme-dialog-btn" : "dialog-btn"}
          typeButton="button"
          serviceName="Диагностика, заключение и рекомендации"
          dialogId={
            isDarkTheme ? "darkThemeOverlayMenuFirst" : "overlayMenuFirst"
          }
          formMethod="dialog"
          classButtonClose={isDarkTheme ? "dark-theme-close-btn" : "close-btn"}
          dialogWindow={dialogInfo.serviceOne}
          buttonClick={() => {
            if (document.getElementById("overlayMenuFirst")) {
              overlayMenuFirst.showModal();
            } else if (document.getElementById("darkThemeOverlayMenuFirst")) {
              darkThemeOverlayMenuFirst.showModal();
            }
          }}
        />
        <ServicesModal
          classWrapper={
            isDarkTheme ? "dark-theme-second-service" : "second-service"
          }
          classButton={isDarkTheme ? "dark-theme-dialog-btn" : "dialog-btn"}
          typeButton="button"
          serviceName="Нейрокоррекционное занятие"
          dialogId={
            isDarkTheme ? "darkThemeOverlayMenuSecond" : "overlayMenuSecond"
          }
          formMethod="dialog"
          classButtonClose={isDarkTheme ? "dark-theme-close-btn" : "close-btn"}
          dialogWindow={dialogInfo.serviceTwo}
          buttonClick={() => {
            if (document.getElementById("overlayMenuSecond")) {
              overlayMenuSecond.showModal();
            } else if (document.getElementById("darkThemeOverlayMenuSecond")) {
              darkThemeOverlayMenuSecond.showModal();
            }
          }}
        />
        <ServicesModal
          classWrapper={
            isDarkTheme ? "dark-theme-third-service" : "third-service"
          }
          classButton={isDarkTheme ? "dark-theme-dialog-btn" : "dialog-btn"}
          typeButton="button"
          serviceName="Диагностика готовности к школе"
          dialogId={
            isDarkTheme ? "darkThemeOverlayMenuThird" : "overlayMenuThird"
          }
          formMethod="dialog"
          classButtonClose={isDarkTheme ? "dark-theme-close-btn" : "close-btn"}
          dialogWindow={dialogInfo.serviceThree}
          buttonClick={() => {
            if (document.getElementById("overlayMenuThird")) {
              overlayMenuThird.showModal();
            } else if (document.getElementById("darkThemeOverlayMenuThird")) {
              darkThemeOverlayMenuThird.showModal();
            }
          }}
        />
        <ServicesModal
          classWrapper={
            isDarkTheme ? "dark-theme-fourth-service" : "fourth-service"
          }
          classButton={isDarkTheme ? "dark-theme-dialog-btn" : "dialog-btn"}
          typeButton="button"
          serviceName="Подготовка к школе"
          dialogId={
            isDarkTheme ? "darkThemeOverlayMenuFourth" : "overlayMenuFourth"
          }
          formMethod="dialog"
          classButtonClose={isDarkTheme ? "dark-theme-close-btn" : "close-btn"}
          dialogWindow={dialogInfo.serviceFour}
          buttonClick={() => {
            if (document.getElementById("overlayMenuFourth")) {
              overlayMenuFourth.showModal();
            } else if (document.getElementById("darkThemeOverlayMenuFourth")) {
              darkThemeOverlayMenuFourth.showModal();
            }
          }}
        />
        {/* <div className="second-service">
          <button
            className="dialog-btn"
            type="button"
            onClick={() => overlayMenuSecond.showModal()}
          >
            Service two
          </button>
          <dialog id="overlayMenuSecond">
            <form method="dialog">
              <button className="close-btn">X</button>
            </form>
            <p>{dialogInfo.serviceTwo}</p>
          </dialog>
        </div>
        <div className="third-service">
          <button
            className="dialog-btn"
            type="button"
            onClick={() => overlayMenuThird.showModal()}
          >
            Service three
          </button>
          <dialog id="overlayMenuThird">
            <form method="dialog">
              <button className="close-btn">X</button>
            </form>
            <p>{dialogInfo.serviceThree}</p>
          </dialog>
        </div>
        <div className="fourth-service">
          <button
            className="dialog-btn"
            type="button"
            onClick={() => overlayMenuFourth.showModal()}
          >
            Service four
          </button>
          <dialog id="overlayMenuFourth">
            <form method="dialog">
              <button className="close-btn">X</button>
            </form>
            <p>{dialogInfo.serviceFour}</p>
          </dialog>
        </div>
        <div className="five-service">
          <button
            className="dialog-btn"
            type="button"
            onClick={() => overlayMenuFives.showModal()}
          >
            Service five
          </button>
          <dialog id="overlayMenuFives">
            <form method="dialog">
              <button className="close-btn">X</button>
            </form>
            <p>{dialogInfo.serviceFive}</p>
          </dialog>
        </div>
        <div className="six-service">
          <button
            className="dialog-btn"
            type="button"
            onClick={() => overlayMenuSix.showModal()}
          >
            Service six
          </button>
          <dialog id="overlayMenuSix">
            <form method="dialog">
              <button className="close-btn">X</button>
            </form>
            <p>{dialogInfo.serviceSix}</p>
          </dialog>
        </div> */}
      </div>
    </section>
  );
}
