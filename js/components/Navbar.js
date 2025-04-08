"use client"

import React from "react"

import { useLanguage } from "../context/LanguageContext.js"
import { Link } from "react-router-dom"

export const Navbar = () => {
  const { useState, useEffect } = React
  const { language, changeLanguage, t } = useLanguage()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen)
  }

  const handleLanguageChange = (lang) => {
    changeLanguage(lang)
    setIsLangDropdownOpen(false)
  }

  return React.createElement(
    "nav",
    {
      id: "navbar",
      className: `navbar ${isScrolled ? "scrolled" : ""}`,
    },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        Link,
        {
          to: "/",
          className: "nav-logo",
        },
        "Israilof Hotel",
      ),

      React.createElement(
        "div",
        {
          className: `nav-toggle ${isMobileMenuOpen ? "active" : ""}`,
          onClick: toggleMobileMenu,
        },
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null),
      ),

      React.createElement(
        "ul",
        {
          className: `nav-links ${isMobileMenuOpen ? "active" : ""}`,
        },
        React.createElement("li", null, React.createElement(Link, { to: "/" }, t("home"))),
        React.createElement("li", null, React.createElement(Link, { to: "/rooms" }, t("rooms"))),
        React.createElement("li", null, React.createElement(Link, { to: "/booking" }, t("booking"))),
        React.createElement("li", null, React.createElement(Link, { to: "/about" }, t("about"))),
        React.createElement("li", null, React.createElement(Link, { to: "/gallery" }, t("gallery"))),
        React.createElement("li", null, React.createElement(Link, { to: "/contact" }, t("contact"))),
        React.createElement(
          "li",
          { className: "lang-selector" },
          React.createElement(
            "span",
            {
              className: "current-lang",
              onClick: toggleLangDropdown,
            },
            language.toUpperCase(),
          ),
          React.createElement(
            "ul",
            {
              className: `lang-dropdown ${isLangDropdownOpen ? "active" : ""}`,
            },
            React.createElement(
              "li",
              {
                className: language === "ru" ? "active" : "",
                onClick: () => handleLanguageChange("ru"),
              },
              "RU",
            ),
            React.createElement(
              "li",
              {
                className: language === "uz" ? "active" : "",
                onClick: () => handleLanguageChange("uz"),
              },
              "UZ",
            ),
            React.createElement(
              "li",
              {
                className: language === "en" ? "active" : "",
                onClick: () => handleLanguageChange("en"),
              },
              "EN",
            ),
          ),
        ),
      ),
    ),
  )
}
