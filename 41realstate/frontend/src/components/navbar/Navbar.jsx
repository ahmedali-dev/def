import { Link, NavLink } from "react-router-dom";
import navbarcss from "./Navbar.module.css";
import { useTranslation } from "react-i18next";

import { Home, Info, Users, Mail, Building, UserCircle } from "lucide-react";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className={navbarcss.navbar}>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? navbarcss.active_nav : "")}
      >
        <Home size={24} />
        {t("navbar.home")}
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? navbarcss.active_nav : "")}
      >
        <Info size={24} />
        {t("navbar.about")}
      </NavLink>

      <NavLink
        to="/team"
        className={({ isActive }) => (isActive ? navbarcss.active_nav : "")}
      >
        <Users size={24} />
        {t("navbar.team")}
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? navbarcss.active_nav : "")}
      >
        <Mail size={24} />
        {t("navbar.contact")}
      </NavLink>

      <NavLink
        to="/property"
        className={({ isActive }) => (isActive ? navbarcss.active_nav : "")}
      >
        <Building size={24} />
        {t("navbar.property")}
      </NavLink>

      <NavLink
        to="/account"
        className={({ isActive }) => (isActive ? navbarcss.active_nav : "")}
      >
        <UserCircle size={24} />
        {t("navbar.account")}
      </NavLink>
    </nav>
  );
};

export default Navbar;
