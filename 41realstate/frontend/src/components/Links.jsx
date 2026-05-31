import React from "react";
import linkcss from "./Links.module.css";
import { Link } from "react-router-dom";
const Links = ({ children, t = "primary", cls = [], ...props }) => {
  const extraClasses = Array.isArray(cls) ? cls : [cls];

  return (
    <Link
      className={[linkcss.link, linkcss[t], ...extraClasses].join(" ")}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Links;
