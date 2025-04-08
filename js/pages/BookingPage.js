"use client"

import React from "react"

import { useLanguage } from "../context/LanguageContext.js"
import { useLocation, useNavigate } from "react-router-dom"

export const BookingPage = () => {
  const { useState, useEffect } = React
  const { t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    adults: "2",
    children: "0",
    specialRequests: "",
  })

  const [summary, setSummary] = useState({
    roomType: "",
    checkIn: "",
    checkOut: "",
    nights: 0,
    guests: "",
    price: 0,
    total: 0,
  })

  useEffect(() => {
    // If we have booking data from the modal, use it
    if (location.state && location.state.bookingData) {
      const { roomType, checkIn, checkOut, guests } = location.state.bookingData
      setFormData((prev) => ({
        ...prev,
        roomType,
        checkIn,
        checkOut,
        adults: guests,
      }))

      updateSummary({
        ...formData,
        roomType,
        checkIn,
        checkOut,
        adults: guests,
      })
    }
  }, [location.state])

  const handleChange = (e) => {
    const { id, value } = e.target
    const updatedFormData = {
      ...formData,
      [id]: value,
    }
    setFormData(updatedFormData)

    // Update summary when relevant fields change
    if (["roomType", "checkIn", "checkOut", "adults", "children"].includes(id)) {
      updateSummary(updatedFormData)
    }
  }

  const updateSummary = (data) => {
    const { roomType, checkIn, checkOut, adults, children } = data

    // Calculate nights
    let nights = 0
    let roomPrice = 0

    if (checkIn && checkOut) {
      const start = new Date(checkIn)
      const end = new Date(checkOut)
      nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    }

    // Get room price based on type
    switch (roomType) {
      case "standard":
        roomPrice = 8000
        break
      case "deluxe":
        roomPrice = 12000
        break
      case "family":
        roomPrice = 16000
        break
      case "presidential":
        roomPrice = 25000
        break
      default:
        roomPrice = 0
    }

    const totalPrice = roomPrice * nights

    setSummary({
      roomType: roomType ? t(roomType) : "",
      checkIn: checkIn ? new Date(checkIn).toLocaleDateString() : "",
      checkOut: checkOut ? new Date(checkOut).toLocaleDateString() : "",
      nights: nights,
      guests: `${adults} ${t("adults")}, ${children} ${t("children")}`,
      price: roomPrice,
      total: totalPrice,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would process the booking here
    // For now, we'll just navigate to the payment page
    navigate("/payment", { state: { bookingData: formData, summary } })
  }

  return React.createElement(
    "div",
    { className: "booking-page" },
    React.createElement(
      "header",
      { className: "page-header" },
      React.createElement("div", { className: "overlay" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h1", null, t("booking")),
        React.createElement("p", null, t("bookYourPerfectStay")),
      ),
    ),

    React.createElement(
      "section",
      { className: "booking-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "booking-container" },
          React.createElement(
            "div",
            { className: "booking-form-container" },
            React.createElement("h2", null, t("bookRoom")),
            React.createElement(
              "form",
              {
                id: "bookingPageForm",
                onSubmit: handleSubmit,
              },
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { htmlFor: "fullName" }, t("fullName")),
                React.createElement("input", {
                  type: "text",
                  id: "fullName",
                  value: formData.fullName,
                  onChange: handleChange,
                  required: true,
                }),
              ),

              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { htmlFor: "email" }, "Email"),
                React.createElement("input", {
                  type: "email",
                  id: "email",
                  value: formData.email,
                  onChange: handleChange,
                  required: true,
                }),
              ),

              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { htmlFor: "phone" }, t("phone")),
                React.createElement("input", {
                  type: "tel",
                  id: "phone",
                  value: formData.phone,
                  onChange: handleChange,
                  required: true,
                }),
              ),

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
                { className: "form-row" },
                React.createElement(
                  "div",
                  { className: "form-group half" },
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
                  { className: "form-group half" },
                  React.createElement("label", { htmlFor: "checkOut" }, t("checkOut")),
                  React.createElement("input", {
                    type: "date",
                    id: "checkOut",
                    value: formData.checkOut,
                    onChange: handleChange,
                    required: true,
                  }),
                ),
              ),

              React.createElement(
                "div",
                { className: "form-row" },
                React.createElement(
                  "div",
                  { className: "form-group half" },
                  React.createElement("label", { htmlFor: "adults" }, t("adults")),
                  React.createElement(
                    "select",
                    {
                      id: "adults",
                      value: formData.adults,
                      onChange: handleChange,
                      required: true,
                    },
                    React.createElement("option", { value: "1" }, "1"),
                    React.createElement("option", { value: "2" }, "2"),
                    React.createElement("option", { value: "3" }, "3"),
                    React.createElement("option", { value: "4" }, "4"),
                  ),
                ),
                React.createElement(
                  "div",
                  { className: "form-group half" },
                  React.createElement("label", { htmlFor: "children" }, t("children")),
                  React.createElement(
                    "select",
                    {
                      id: "children",
                      value: formData.children,
                      onChange: handleChange,
                    },
                    React.createElement("option", { value: "0" }, "0"),
                    React.createElement("option", { value: "1" }, "1"),
                    React.createElement("option", { value: "2" }, "2"),
                    React.createElement("option", { value: "3" }, "3"),
                  ),
                ),
              ),

              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { htmlFor: "specialRequests" }, t("specialRequests")),
                React.createElement("textarea", {
                  id: "specialRequests",
                  rows: "4",
                  value: formData.specialRequests,
                  onChange: handleChange,
                }),
              ),

              React.createElement(
                "button",
                {
                  type: "submit",
                  className: "btn-primary",
                },
                t("continueToPayment"),
              ),
            ),
          ),

          React.createElement(
            "div",
            { className: "booking-summary" },
            React.createElement("h2", null, t("yourBooking")),
            React.createElement(
              "div",
              {
                className: "summary-content",
                id: "bookingSummary",
              },
              summary.roomType
                ? React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                      "div",
                      { className: "summary-item" },
                      React.createElement("span", null, t("roomType") + ":"),
                      React.createElement("span", null, summary.roomType),
                    ),
                    React.createElement(
                      "div",
                      { className: "summary-item" },
                      React.createElement("span", null, t("dates") + ":"),
                      React.createElement("span", null, `${summary.checkIn} - ${summary.checkOut}`),
                    ),
                    React.createElement(
                      "div",
                      { className: "summary-item" },
                      React.createElement("span", null, t("guests") + ":"),
                      React.createElement("span", null, summary.guests),
                    ),
                    React.createElement(
                      "div",
                      { className: "summary-item" },
                      React.createElement("span", null, t("nights") + ":"),
                      React.createElement("span", null, summary.nights),
                    ),
                    React.createElement("div", { className: "summary-divider" }),
                    React.createElement(
                      "div",
                      { className: "summary-item" },
                      React.createElement("span", null, t("roomCost") + ":"),
                      React.createElement("span", null, `${summary.price.toLocaleString()}₽`),
                    ),
                    React.createElement(
                      "div",
                      { className: "summary-item total" },
                      React.createElement("span", null, t("total") + ":"),
                      React.createElement("span", null, `${summary.total.toLocaleString()}₽`),
                    ),
                  )
                : React.createElement("p", null, t("selectBookingParameters")),
            ),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { className: "booking-info" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "info-grid" },
          React.createElement(
            "div",
            { className: "info-item" },
            React.createElement(
              "div",
              { className: "info-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/clock.png",
                alt: t("checkInOut"),
              }),
            ),
            React.createElement("h3", null, t("checkInOutTimes")),
            React.createElement(
              "p",
              null,
              `${t("checkIn")}: ${t("from")} 14:00\n${t("checkOut")}: ${t("until")} 12:00`,
            ),
          ),
          React.createElement(
            "div",
            { className: "info-item" },
            React.createElement(
              "div",
              { className: "info-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/credit-card.png",
                alt: t("paymentMethods"),
              }),
            ),
            React.createElement("h3", null, t("paymentMethods")),
            React.createElement("p", null, t("acceptAllMajorCards")),
          ),
          React.createElement(
            "div",
            { className: "info-item" },
            React.createElement(
              "div",
              { className: "info-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/cancel.png",
                alt: t("cancellation"),
              }),
            ),
            React.createElement("h3", null, t("cancellationPolicy")),
            React.createElement("p", null, t("freeCancellation48h")),
          ),
          React.createElement(
            "div",
            { className: "info-item" },
            React.createElement(
              "div",
              { className: "info-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/dog.png",
                alt: t("pets"),
              }),
            ),
            React.createElement("h3", null, t("pets")),
            React.createElement("p", null, t("petsAllowedInCertainRooms")),
          ),
        ),
      ),
    ),
  )
}
