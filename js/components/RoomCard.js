"use client"

import React from "react"

import { useLanguage } from "../context/LanguageContext.js"

export const RoomCard = ({ room, onClick }) => {
  const { t } = useLanguage()

  return React.createElement(
    "div",
    {
      className: "room-card",
      "data-type": room.type,
      "data-price": room.price,
      "data-capacity": room.capacity,
    },
    React.createElement(
      "div",
      { className: "room-image" },
      React.createElement("img", {
        src: room.image,
        alt: room.name,
      }),
    ),
    React.createElement(
      "div",
      { className: "room-details" },
      React.createElement("h3", null, room.name),
      React.createElement("p", { className: "room-price" }, `${room.price.toLocaleString()}₽ ${t("perNight")}`),
      React.createElement("p", { className: "room-capacity" }, `${t("capacity")}: ${room.capacity} ${t("people")}`),
      React.createElement("p", { className: "room-description" }, room.description),
      React.createElement(
        "button",
        {
          className: "btn-primary room-details-btn",
          onClick: () => onClick(room),
        },
        t("moreDetails"),
      ),
    ),
  )
}
