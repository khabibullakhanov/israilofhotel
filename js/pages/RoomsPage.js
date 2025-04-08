"use client"

import React from "react"

import { useLanguage } from "../context/LanguageContext.js"
import { RoomCard } from "../components/RoomCard.js"

export const RoomsPage = ({ openBookingModal }) => {
  const { useState } = React
  const { t } = useLanguage()

  const [filters, setFilters] = useState({
    roomType: "all",
    price: "all",
    capacity: "all",
  })

  const [roomModalData, setRoomModalData] = useState(null)
  const [showRoomModal, setShowRoomModal] = useState(false)

  const rooms = [
    // Standard Rooms
    {
      id: 1,
      type: "standard",
      name: "Стандартный номер",
      price: 8000,
      capacity: 2,
      description: "Уютный номер с современным дизайном и всеми необходимыми удобствами.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 2,
      type: "standard",
      name: "Стандартный номер с видом",
      price: 9000,
      capacity: 2,
      description: "Стандартный номер с прекрасным видом на город и всеми необходимыми удобствами.",
      image:
        "https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      type: "standard",
      name: "Стандартный номер с дополнительной кроватью",
      price: 9500,
      capacity: 3,
      description: "Стандартный номер с дополнительной кроватью, идеально подходит для небольшой семьи.",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },

    // Deluxe Rooms
    {
      id: 4,
      type: "deluxe",
      name: "Делюкс номер",
      price: 12000,
      capacity: 2,
      description: "Просторный номер с элегантным дизайном и дополнительными удобствами для комфортного пребывания.",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 5,
      type: "deluxe",
      name: "Делюкс номер с балконом",
      price: 14000,
      capacity: 2,
      description: "Роскошный номер с просторным балконом и панорамным видом на город.",
      image:
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 6,
      type: "deluxe",
      name: "Делюкс номер с гостиной",
      price: 15000,
      capacity: 3,
      description: "Просторный номер с отдельной гостиной зоной и всеми удобствами для комфортного отдыха.",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },

    // Family Rooms
    {
      id: 7,
      type: "family",
      name: "Семейный номер",
      price: 16000,
      capacity: 4,
      description: "Просторный номер, идеально подходящий для семьи с детьми, с двумя спальнями и общей гостиной.",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 8,
      type: "family",
      name: "Большой семейный номер",
      price: 18000,
      capacity: 5,
      description: "Просторный номер для большой семьи с двумя спальнями, гостиной и двумя ванными комнатами.",
      image:
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 9,
      type: "family",
      name: "Семейный люкс",
      price: 20000,
      capacity: 6,
      description: "Роскошный семейный люкс с тремя спальнями, просторной гостиной и столовой зоной.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },

    // Presidential Suites
    {
      id: 10,
      type: "presidential",
      name: "Президентский люкс",
      price: 25000,
      capacity: 2,
      description:
        "Эксклюзивный люкс с изысканным дизайном, отдельной гостиной, столовой и персональным обслуживанием.",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 11,
      type: "presidential",
      name: "Президентский люкс с двумя спальнями",
      price: 30000,
      capacity: 4,
      description:
        "Роскошный люкс с двумя спальнями, просторной гостиной, столовой, джакузи и панорамным видом на город.",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 12,
      type: "presidential",
      name: "Королевский люкс",
      price: 35000,
      capacity: 6,
      description:
        "Самый роскошный номер в отеле с тремя спальнями, гостиной, столовой, сауной, джакузи и террасой с панорамным видом.",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ]

  const handleFilterChange = (e) => {
    const { id, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [id.replace("Filter", "")]: value,
    }))
  }

  const resetFilters = () => {
    setFilters({
      roomType: "all",
      price: "all",
      capacity: "all",
    })
  }

  const filteredRooms = rooms.filter((room) => {
    // Filter by room type
    if (filters.roomType !== "all" && room.type !== filters.roomType) {
      return false
    }

    // Filter by price
    if (filters.price !== "all") {
      if (filters.price === "low" && room.price > 10000) return false
      if (filters.price === "medium" && (room.price <= 10000 || room.price > 20000)) return false
      if (filters.price === "high" && room.price <= 20000) return false
    }

    // Filter by capacity
    if (filters.capacity !== "all") {
      if (filters.capacity === "1-2" && (room.capacity < 1 || room.capacity > 2)) return false
      if (filters.capacity === "3-4" && (room.capacity < 3 || room.capacity > 4)) return false
      if (filters.capacity === "5+" && room.capacity < 5) return false
    }

    return true
  })

  const openRoomModal = (room) => {
    setRoomModalData(room)
    setShowRoomModal(true)
  }

  const closeRoomModal = () => {
    setShowRoomModal(false)
  }

  const handleBookNow = () => {
    closeRoomModal()
    openBookingModal(roomModalData)
  }

  return React.createElement(
    "div",
    { className: "rooms-page" },
    React.createElement(
      "header",
      { className: "page-header" },
      React.createElement("div", { className: "overlay" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h1", null, t("ourRooms")),
        React.createElement("p", null, t("chooseYourRoom")),
      ),
    ),

    React.createElement(
      "section",
      { className: "room-filters" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "filter-container" },
          React.createElement(
            "div",
            { className: "filter-group" },
            React.createElement("label", { htmlFor: "roomTypeFilter" }, t("roomType")),
            React.createElement(
              "select",
              {
                id: "roomTypeFilter",
                value: filters.roomType,
                onChange: handleFilterChange,
              },
              React.createElement("option", { value: "all" }, t("allTypes")),
              React.createElement("option", { value: "standard" }, t("standard")),
              React.createElement("option", { value: "deluxe" }, t("deluxe")),
              React.createElement("option", { value: "family" }, t("family")),
              React.createElement("option", { value: "presidential" }, t("presidential")),
            ),
          ),

          React.createElement(
            "div",
            { className: "filter-group" },
            React.createElement("label", { htmlFor: "priceFilter" }, t("price")),
            React.createElement(
              "select",
              {
                id: "priceFilter",
                value: filters.price,
                onChange: handleFilterChange,
              },
              React.createElement("option", { value: "all" }, t("anyPrice")),
              React.createElement("option", { value: "low" }, t("upTo10000")),
              React.createElement("option", { value: "medium" }, "10,000₽ - 20,000₽"),
              React.createElement("option", { value: "high" }, t("over20000")),
            ),
          ),

          React.createElement(
            "div",
            { className: "filter-group" },
            React.createElement("label", { htmlFor: "capacityFilter" }, t("capacity")),
            React.createElement(
              "select",
              {
                id: "capacityFilter",
                value: filters.capacity,
                onChange: handleFilterChange,
              },
              React.createElement("option", { value: "all" }, t("any")),
              React.createElement("option", { value: "1-2" }, "1-2 " + t("people")),
              React.createElement("option", { value: "3-4" }, "3-4 " + t("people")),
              React.createElement("option", { value: "5+" }, "5+ " + t("people")),
            ),
          ),

          React.createElement(
            "button",
            {
              id: "filterReset",
              className: "btn-secondary",
              onClick: resetFilters,
            },
            t("reset"),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { className: "rooms-grid" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "rooms-container" },
          filteredRooms.length > 0
            ? filteredRooms.map((room) =>
                React.createElement(RoomCard, {
                  key: room.id,
                  room: room,
                  onClick: openRoomModal,
                }),
              )
            : React.createElement("div", { className: "no-rooms" }, React.createElement("p", null, t("noRoomsFound"))),
        ),
      ),
    ),

    showRoomModal &&
      React.createElement(
        "div",
        { className: "modal" },
        React.createElement(
          "div",
          { className: "modal-content room-modal-content" },
          React.createElement(
            "span",
            {
              className: "close-modal",
              onClick: closeRoomModal,
            },
            "×",
          ),
          React.createElement(
            "div",
            { id: "roomModalContent" },
            React.createElement(
              "div",
              { className: "room-modal-image" },
              React.createElement("img", {
                src: roomModalData.image,
                alt: roomModalData.name,
              }),
            ),
            React.createElement(
              "div",
              { className: "room-modal-details" },
              React.createElement("h2", null, roomModalData.name),
              React.createElement(
                "p",
                { className: "room-price" },
                `${roomModalData.price.toLocaleString()}₽ ${t("perNight")}`,
              ),
              React.createElement(
                "p",
                { className: "room-capacity" },
                `${t("capacity")}: ${roomModalData.capacity} ${t("people")}`,
              ),
              React.createElement("p", { className: "room-description" }, roomModalData.description),
              React.createElement(
                "div",
                { className: "room-amenities" },
                React.createElement("h3", null, t("amenities")),
                React.createElement(
                  "ul",
                  null,
                  React.createElement("li", null, t("freeWifi")),
                  React.createElement("li", null, t("airConditioning")),
                  React.createElement("li", null, t("minibar")),
                  React.createElement("li", null, t("safetyDeposit")),
                  React.createElement("li", null, t("flatscreenTV")),
                ),
              ),
            ),
          ),
          React.createElement(
            "button",
            {
              id: "bookNowBtn",
              className: "btn-primary",
              onClick: handleBookNow,
            },
            t("bookNow"),
          ),
        ),
      ),
  )
}
