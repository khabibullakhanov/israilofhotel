"use client"

import React from "react"

import { useLanguage } from "../context/LanguageContext.js"

export const Header = ({ title, subtitle, showBookButton = false, onBookClick }) => {
  const { t } = useLanguage()

  return React.createElement(
    "header",
    { className: "hero" },
    React.createElement("div", { className: "overlay" }),
    React.createElement(
      "div",
      { className: "hero-content" },
      React.createElement("h1", { className: "logo" }, title || "Israilof Hotel"),
      React.createElement("p", { className: "tagline" }, subtitle || t("luxuryAndComfort")),
      showBookButton &&
        React.createElement(
          "button",
          {
            className: "btn-primary",
            onClick: onBookClick,
          },
          t("bookNow"),
        ),
    ),
  )
}
