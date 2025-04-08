import React from "react"

import { useLanguage } from "../context/LanguageContext.js"
import { Link } from "react-router-dom"

export const Footer = () => {
  const { t } = useLanguage()

  return React.createElement(
    "footer",
    null,
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "footer-content" },
        React.createElement(
          "div",
          { className: "footer-logo" },
          React.createElement("h2", null, "Israilof Hotel"),
          React.createElement("p", null, t("luxuryAndComfort")),
        ),

        React.createElement(
          "div",
          { className: "footer-links" },
          React.createElement("h3", null, t("navigation")),
          React.createElement(
            "ul",
            null,
            React.createElement("li", null, React.createElement(Link, { to: "/" }, t("home"))),
            React.createElement("li", null, React.createElement(Link, { to: "/rooms" }, t("rooms"))),
            React.createElement("li", null, React.createElement(Link, { to: "/about" }, t("about"))),
            React.createElement("li", null, React.createElement(Link, { to: "/gallery" }, t("gallery"))),
            React.createElement("li", null, React.createElement(Link, { to: "/contact" }, t("contact"))),
          ),
        ),

        React.createElement(
          "div",
          { className: "footer-contact" },
          React.createElement("h3", null, t("contacts")),
          React.createElement("p", null, "ул. Дзержинского 83/16"),
          React.createElement("p", null, "Телефон: +374 25 6442484"),
          React.createElement("p", null, "Email: Israiloff_700.ru"),
        ),

        React.createElement(
          "div",
          { className: "footer-social" },
          React.createElement("h3", null, t("socialNetworks")),
          React.createElement(
            "div",
            { className: "social-icons" },
            React.createElement(
              "a",
              { href: "#", className: "social-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/facebook-new.png",
                alt: "Facebook",
              }),
            ),
            React.createElement(
              "a",
              { href: "#", className: "social-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/instagram-new.png",
                alt: "Instagram",
              }),
            ),
            React.createElement(
              "a",
              { href: "#", className: "social-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/twitter.png",
                alt: "Twitter",
              }),
            ),
          ),
        ),
      ),

      React.createElement(
        "div",
        { className: "footer-bottom" },
        React.createElement("p", null, "© 2023 Israilof Hotel. ", t("allRightsReserved")),
      ),
    ),
  )
}
