import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Landing from "./pages/Landing";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
function App() {
  const { t } = useTranslation();
  useEffect(() => {
    console.log(i18n.language);
    document.body.className = i18n.language == "ar" ? "rtl" : "ltr";
  }, [t]);
  return (
    <>
      <Navbar />
      <div className="changeLang">
        <button onClick={() => i18n.changeLanguage("ar")}>ar</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
      </div>
      <main>
        <Landing />
        <div style={{ height: "120px" }}></div>
      </main>
    </>
  );
}

export default App;
