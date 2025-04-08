"use client"

import React from "react"

import { Header } from "../components/Header.js"
import { Slider } from "../components/Slider.js"
import { useLanguage } from "../context/LanguageContext.js"

export const HomePage = ({ openBookingModal }) => {
  const { t } = useLanguage()

  const featuredRooms = [
    {
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: t("presidential"),
      subtitle: `${t("from")} 25,000₽ ${t("perNight")}`,
      buttonText: t("moreDetails"),
      link: "/rooms",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: t("family"),
      subtitle: `${t("from")} 15,000₽ ${t("perNight")}`,
      buttonText: t("moreDetails"),
      link: "/rooms",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: t("standard"),
      subtitle: `${t("from")} 8,000₽ ${t("perNight")}`,
      buttonText: t("moreDetails"),
      link: "/rooms",
    },
  ]

  return React.createElement(
    "div",
    { className: "home-page" },
    React.createElement(Header, {
      showBookButton: true,
      onBookClick: openBookingModal,
    }),

    React.createElement(
      "section",
      { className: "features" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, t("ourAdvantages")),
        React.createElement(
          "div",
          { className: "feature-grid" },
          React.createElement(
            "div",
            { className: "feature-item" },
            React.createElement(
              "div",
              { className: "feature-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/wifi.png",
                alt: "WiFi",
              }),
            ),
            React.createElement("h3", null, t("freeWifi")),
            React.createElement("p", null, t("wifiDesc")),
          ),
          React.createElement(
            "div",
            { className: "feature-item" },
            React.createElement(
              "div",
              { className: "feature-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/swimming.png",
                alt: t("pool"),
              }),
            ),
            React.createElement("h3", null, t("pool")),
            React.createElement("p", null, t("poolDesc")),
          ),
          React.createElement(
            "div",
            { className: "feature-item" },
            React.createElement(
              "div",
              { className: "feature-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/restaurant.png",
                alt: t("restaurant"),
              }),
            ),
            React.createElement("h3", null, t("restaurant")),
            React.createElement("p", null, t("restaurantDesc")),
          ),
          React.createElement(
            "div",
            { className: "feature-item" },
            React.createElement(
              "div",
              { className: "feature-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/spa.png",
                alt: t("spa"),
              }),
            ),
            React.createElement("h3", null, t("spa")),
            React.createElement("p", null, t("spaDesc")),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { className: "featured-rooms" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, t("popularRooms")),
        React.createElement(Slider, { slides: featuredRooms }),
      ),
    ),

    React.createElement(
      "section",
      { className: "testimonials" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, t("guestReviews")),
        React.createElement(
          "div",
          { className: "testimonial-grid" },
          React.createElement(
            "div",
            { className: "testimonial-item" },
            React.createElement(
              "div",
              { className: "testimonial-content" },
              React.createElement("p", null, '"Потрясающий сервис и комфортные номера. Обязательно вернусь снова!"'),
            ),
            React.createElement(
              "div",
              { className: "testimonial-author" },
              React.createElement("img", {
                src: "https://randomuser.me/api/portraits/women/32.jpg",
                alt: "Анна К.",
              }),
              React.createElement(
                "div",
                null,
                React.createElement("h4", null, "Анна К."),
                React.createElement("p", null, "Москва"),
              ),
            ),
          ),
          React.createElement(
            "div",
            { className: "testimonial-item" },
            React.createElement(
              "div",
              { className: "testimonial-content" },
              React.createElement(
                "p",
                null,
                '"Лучший отель, в котором я когда-либо останавливался. Ресторан просто великолепен!"',
              ),
            ),
            React.createElement(
              "div",
              { className: "testimonial-author" },
              React.createElement("img", {
                src: "https://randomuser.me/api/portraits/men/45.jpg",
                alt: "Дмитрий В.",
              }),
              React.createElement(
                "div",
                null,
                React.createElement("h4", null, "Дмитрий В."),
                React.createElement("p", null, "Санкт-Петербург"),
              ),
            ),
          ),
          React.createElement(
            "div",
            { className: "testimonial-item" },
            React.createElement(
              "div",
              { className: "testimonial-content" },
              React.createElement(
                "p",
                null,
                '"Идеальное место для семейного отдыха. Дети были в восторге от бассейна!"',
              ),
            ),
            React.createElement(
              "div",
              { className: "testimonial-author" },
              React.createElement("img", {
                src: "https://randomuser.me/api/portraits/women/68.jpg",
                alt: "Елена М.",
              }),
              React.createElement(
                "div",
                null,
                React.createElement("h4", null, "Елена М."),
                React.createElement("p", null, "Казань"),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}
