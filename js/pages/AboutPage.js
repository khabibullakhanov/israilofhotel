"use client"

import React from "react"

import { useLanguage } from "../context/LanguageContext.js"

export const AboutPage = () => {
  const { t } = useLanguage()

  return React.createElement(
    "div",
    { className: "about-page" },
    React.createElement(
      "header",
      { className: "page-header" },
      React.createElement("div", { className: "overlay" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h1", null, t("about")),
        React.createElement("p", null, t("learnAboutHistory")),
      ),
    ),

    React.createElement(
      "section",
      { className: "about-intro" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "about-content" },
          React.createElement(
            "div",
            { className: "about-text" },
            React.createElement("h2", null, t("ourHistory")),
            React.createElement(
              "p",
              null,
              "Israilof Hotel был основан в 1995 году с целью создать уникальное место, где роскошь и комфорт сочетаются с традиционным гостеприимством. За более чем 25 лет работы, мы стали одним из самых престижных отелей в регионе, принимая гостей со всего мира.",
            ),
            React.createElement(
              "p",
              null,
              "Наш отель назван в честь основателя, Асомиддина Исраилова, который мечтал создать место, где каждый гость будет чувствовать себя как дома, наслаждаясь при этом высочайшим уровнем сервиса и комфорта.",
            ),
          ),
          React.createElement(
            "div",
            { className: "about-image" },
            React.createElement("img", {
              src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              alt: t("hotelExterior"),
            }),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { className: "about-mission" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "mission-content" },
          React.createElement("h2", null, t("ourMission")),
          React.createElement(
            "p",
            null,
            "Наша миссия — создавать незабываемые впечатления для каждого гостя, предоставляя исключительный сервис, комфортное размещение и уникальные возможности для отдыха и работы.",
          ),
          React.createElement(
            "div",
            { className: "mission-values" },
            React.createElement(
              "div",
              { className: "value-item" },
              React.createElement("h3", null, t("excellence")),
              React.createElement(
                "p",
                null,
                "Мы стремимся к совершенству во всем, что делаем, от обслуживания номеров до изысканной кухни в нашем ресторане.",
              ),
            ),
            React.createElement(
              "div",
              { className: "value-item" },
              React.createElement("h3", null, t("hospitality")),
              React.createElement(
                "p",
                null,
                "Мы верим в традиционное гостеприимство, где каждый гость чувствует себя особенным и желанным.",
              ),
            ),
            React.createElement(
              "div",
              { className: "value-item" },
              React.createElement("h3", null, t("innovation")),
              React.createElement(
                "p",
                null,
                "Мы постоянно ищем новые способы улучшить опыт наших гостей, внедряя современные технологии и инновационные решения.",
              ),
            ),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { className: "about-team" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", null, t("ourTeam")),
        React.createElement(
          "p",
          { className: "team-intro" },
          "За успехом Israilof Hotel стоит команда преданных профессионалов, которые ежедневно работают над тем, чтобы сделать ваше пребывание незабываемым.",
        ),
        React.createElement(
          "div",
          { className: "team-grid" },
          React.createElement(
            "div",
            { className: "team-member" },
            React.createElement(
              "div",
              { className: "member-image" },
              React.createElement("img", {
                src: "https://randomuser.me/api/portraits/men/32.jpg",
                alt: "Асомиддин Исраилов",
              }),
            ),
            React.createElement("h3", null, "Асомиддин Исраилов"),
            React.createElement("p", { className: "member-position" }, t("founder")),
            React.createElement(
              "p",
              null,
              "Основатель и вдохновитель Israilof Hotel, с более чем 30-летним опытом в гостиничном бизнесе.",
            ),
          ),
          React.createElement(
            "div",
            { className: "team-member" },
            React.createElement(
              "div",
              { className: "member-image" },
              React.createElement("img", {
                src: "https://randomuser.me/api/portraits/women/44.jpg",
                alt: "Елена Петрова",
              }),
            ),
            React.createElement("h3", null, "Елена Петрова"),
            React.createElement("p", { className: "member-position" }, t("generalManager")),
            React.createElement("p", null, "Опытный руководитель с международным опытом работы в лучших отелях мира."),
          ),
          React.createElement(
            "div",
            { className: "team-member" },
            React.createElement(
              "div",
              { className: "member-image" },
              React.createElement("img", {
                src: "https://randomuser.me/api/portraits/men/22.jpg",
                alt: "Михаил Иванов",
              }),
            ),
            React.createElement("h3", null, "Михаил Иванов"),
            React.createElement("p", { className: "member-position" }, t("executiveChef")),
            React.createElement(
              "p",
              null,
              "Шеф-повар с мировым именем, создающий кулинарные шедевры в нашем ресторане.",
            ),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { className: "about-achievements" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", null, t("ourAchievements")),
        React.createElement(
          "div",
          { className: "achievements-grid" },
          React.createElement(
            "div",
            { className: "achievement-item" },
            React.createElement(
              "div",
              { className: "achievement-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/trophy.png",
                alt: t("award"),
              }),
            ),
            React.createElement("h3", null, "2022"),
            React.createElement("p", null, "Лучший отель года по версии Travel Awards"),
          ),
          React.createElement(
            "div",
            { className: "achievement-item" },
            React.createElement(
              "div",
              { className: "achievement-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/medal.png",
                alt: t("medal"),
              }),
            ),
            React.createElement("h3", null, "2020"),
            React.createElement("p", null, "Премия за выдающийся сервис от Hospitality Excellence"),
          ),
          React.createElement(
            "div",
            { className: "achievement-item" },
            React.createElement(
              "div",
              { className: "achievement-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/star.png",
                alt: t("star"),
              }),
            ),
            React.createElement("h3", null, "2018"),
            React.createElement("p", null, "Пять звезд от международной рейтинговой системы отелей"),
          ),
          React.createElement(
            "div",
            { className: "achievement-item" },
            React.createElement(
              "div",
              { className: "achievement-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/certificate.png",
                alt: t("certificate"),
              }),
            ),
            React.createElement("h3", null, "2015"),
            React.createElement("p", null, "Сертификат экологической ответственности Green Hotel"),
          ),
        ),
      ),
    ),
  )
}
