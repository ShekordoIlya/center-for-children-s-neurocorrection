import Header from "./components/Header";
import "./css/App.css";
import Main from "./components/main/Main";
import SectionSpecialists from "./components/SectionSpecialists";
import Service from "./components/service/Service";
import Price from "./components/Price";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
        <SectionSpecialists photo="#" id="specialists" />
        <Service />
        <Price />
        <Footer />
      </ThemeProvider>
    </>
  );
}
