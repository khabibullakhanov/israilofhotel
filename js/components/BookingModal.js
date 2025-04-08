"use client"

import React from "react"

import { useLanguage } from "../context/LanguageContext.js"
import { useNavigate } from "react-router-dom"

export const BookingModal = ({ closeModal, selectedRoom }) => {
  const { useState } = React
  const { t } = useLanguage()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    roomType: selectedRoom ? selectedRoom.type : "",
    checkIn: "",
    checkOut: "",
    guests: "2",
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would process the booking here
    // For now, we'll just navigate to the booking page
    navigate("/booking", { state: { bookingData: formData } })
    closeModal()
  }

  return React.createElement(
    "div",
    { className: "modal" },
    React.createElement(
      "div",
      { className: "modal-content" },
      React.createElement(
        "span",
        {
          className: "close-modal",
          onClick: closeModal,
        },
        "×",
      ),

      React.createElement("h2", null, t("bookRoom")),

      React.createElement(
        "form",
        {
          id: "bookingForm",
          onSubmit: handleSubmit,
        },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement("label", { htmlFor: "roomType" }, t("roomType")),
          React.createElement(
            "select",
            {
              id: "roomType",
              value: formData.roomType,
              onChange: handleChange,
              required: true,
            },
            React.createElement("option", { value: "" }, t("selectRoomType")),
            React.createElement("option", { value: "standard" }, t("standard")),
            React.createElement("option", { value: "deluxe" }, t("deluxe")),
            React.createElement("option", { value: "family" }, t("family")),
            React.createElement("option", { value: "presidential" }, t("presidential")),
          ),
        ),

        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement("label", { htmlFor: "checkIn" }, t("checkIn")),
          React.createElement("input", {
            type: "date",
            id: "checkIn",
            value: formData.checkIn,
            onChange: handleChange,
            required: true,
          }),
        ),

        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement("label", { htmlFor: "checkOut" }, t("checkOut")),
          React.createElement("input", {
            type: "date",
            id: "checkOut",
            value: formData.checkOut,
            onChange: handleChange,
            required: true,
          }),
        ),

        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement("label", { htmlFor: "guests" }, t("guests")),
          React.createElement(
            "select",
            {
              id: "guests",
              value: formData.guests,
              onChange: handleChange,
              required: true,
            },
            React.createElement("option", { value: "1" }, "1"),
            React.createElement("option", { value: "2" }, "2"),
            React.createElement("option", { value: "3" }, "3"),
            React.createElement("option", { value: "4" }, "4"),
            React.createElement("option", { value: "5" }, "5"),
          ),
        ),

        React.createElement(
          "button",
          {
            type: "submit",
            className: "btn-primary",
          },
          t("book"),
        ),
      ),
    ),
  )
}
