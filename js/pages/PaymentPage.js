"use client"

import React from "react"

import { useLanguage } from "../context/LanguageContext.js"
import { useLocation, useNavigate } from "react-router-dom"

export const PaymentPage = () => {
  const { useState } = React
  const { t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()

  const [activePaymentMethod, setActivePaymentMethod] = useState("card")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    zipCode: "",
    country: "",
    saveCard: false,
    termsAgree: false,
  })

  // Get booking data from location state
  const bookingData = location.state?.bookingData || {}
  const summary = location.state?.summary || {
    roomType: t("deluxe"),
    checkIn: "15.07.2023",
    checkOut: "20.07.2023",
    nights: 5,
    guests: `2 ${t("adults")}, 1 ${t("child")}`,
    price: 70000,
    total: 77000,
  }

  const handlePaymentMethodChange = (method) => {
    setActivePaymentMethod(method)
  }

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would process the payment here
    setShowSuccessModal(true)
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false)
    navigate("/")
  }

  const applyPromoCode = () => {
    // In a real app, you would validate the promo code here
    alert(t("promoCodeApplied"))
  }

  return React.createElement(
    "div",
    { className: "payment-page" },
    React.createElement(
      "header",
      { className: "page-header" },
      React.createElement("div", { className: "overlay" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h1", null, t("payment")),
        React.createElement("p", null, t("completeYourBooking")),
      ),
    ),

    React.createElement(
      "section",
      { className: "payment-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "payment-container" },
          React.createElement(
            "div",
            { className: "payment-form-container" },
            React.createElement("h2", null, t("paymentDetails")),
            React.createElement(
              "div",
              { className: "payment-methods" },
              React.createElement(
                "div",
                {
                  className: `payment-method ${activePaymentMethod === "card" ? "active" : ""}`,
                  "data-method": "card",
                  onClick: () => handlePaymentMethodChange("card"),
                },
                React.createElement("img", {
                  src: "https://img.icons8.com/ios/50/000000/bank-card-back-side.png",
                  alt: t("creditCard"),
                }),
                React.createElement("span", null, t("creditCard")),
              ),
              React.createElement(
                "div",
                {
                  className: `payment-method ${activePaymentMethod === "paypal" ? "active" : ""}`,
                  "data-method": "paypal",
                  onClick: () => handlePaymentMethodChange("paypal"),
                },
                React.createElement("img", {
                  src: "https://img.icons8.com/ios/50/000000/paypal.png",
                  alt: "PayPal",
                }),
                React.createElement("span", null, "PayPal"),
              ),
              React.createElement(
                "div",
                {
                  className: `payment-method ${activePaymentMethod === "bank" ? "active" : ""}`,
                  "data-method": "bank",
                  onClick: () => handlePaymentMethodChange("bank"),
                },
                React.createElement("img", {
                  src: "https://img.icons8.com/ios/50/000000/bank-building.png",
                  alt: t("bankTransfer"),
                }),
                React.createElement("span", null, t("bankTransfer")),
              ),
            ),

            React.createElement(
              "form",
              {
                id: "paymentForm",
                onSubmit: handleSubmit,
              },
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { htmlFor: "cardName" }, t("nameOnCard")),
                React.createElement("input", {
                  type: "text",
                  id: "cardName",
                  value: formData.cardName,
                  onChange: handleChange,
                  required: true,
                }),
              ),

              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { htmlFor: "cardNumber" }, t("cardNumber")),
                React.createElement("input", {
                  type: "text",
                  id: "cardNumber",
                  placeholder: "XXXX XXXX XXXX XXXX",
                  value: formData.cardNumber,
                  onChange: handleChange,
                  required: true,
                }),
              ),

              React.createElement(
                "div",
                { className: "form-row" },
                React.createElement(
                  "div",
                  { className: "form-group half" },
                  React.createElement("label", { htmlFor: "expiryDate" }, t("expiryDate")),
                  React.createElement("input", {
                    type: "text",
                    id: "expiryDate",
                    placeholder: "MM/YY",
                    value: formData.expiryDate,
                    onChange: handleChange,
                    required: true,
                  }),
                ),
                React.createElement(
                  "div",
                  { className: "form-group half" },
                  React.createElement("label", { htmlFor: "cvv" }, "CVV"),
                  React.createElement("input", {
                    type: "text",
                    id: "cvv",
                    placeholder: "XXX",
                    value: formData.cvv,
                    onChange: handleChange,
                    required: true,
                  }),
                ),
              ),

              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { htmlFor: "billingAddress" }, t("billingAddress")),
                React.createElement("input", {
                  type: "text",
                  id: "billingAddress",
                  value: formData.billingAddress,
                  onChange: handleChange,
                  required: true,
                }),
              ),

              React.createElement(
                "div",
                { className: "form-row" },
                React.createElement(
                  "div",
                  { className: "form-group half" },
                  React.createElement("label", { htmlFor: "city" }, t("city")),
                  React.createElement("input", {
                    type: "text",
                    id: "city",
                    value: formData.city,
                    onChange: handleChange,
                    required: true,
                  }),
                ),
                React.createElement(
                  "div",
                  { className: "form-group half" },
                  React.createElement("label", { htmlFor: "zipCode" }, t("zipCode")),
                  React.createElement("input", {
                    type: "text",
                    id: "zipCode",
                    value: formData.zipCode,
                    onChange: handleChange,
                    required: true,
                  }),
                ),
              ),

              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { htmlFor: "country" }, t("country")),
                React.createElement(
                  "select",
                  {
                    id: "country",
                    value: formData.country,
                    onChange: handleChange,
                    required: true,
                  },
                  React.createElement("option", { value: "" }, t("selectCountry")),
                  React.createElement("option", { value: "RU" }, "Россия"),
                  React.createElement("option", { value: "UZ" }, "Узбекистан"),
                  React.createElement("option", { value: "KZ" }, "Казахстан"),
                  React.createElement("option", { value: "BY" }, "Беларусь"),
                  React.createElement("option", { value: "UA" }, "Украина"),
                ),
              ),

              React.createElement(
                "div",
                { className: "form-group checkbox" },
                React.createElement("input", {
                  type: "checkbox",
                  id: "saveCard",
                  checked: formData.saveCard,
                  onChange: handleChange,
                }),
                React.createElement("label", { htmlFor: "saveCard" }, t("saveCardForFutureBookings")),
              ),

              React.createElement(
                "div",
                { className: "form-group checkbox" },
                React.createElement("input", {
                  type: "checkbox",
                  id: "termsAgree",
                  checked: formData.termsAgree,
                  onChange: handleChange,
                  required: true,
                }),
                React.createElement(
                  "label",
                  { htmlFor: "termsAgree" },
                  t("iAgreeToThe"),
                  " ",
                  React.createElement("a", { href: "#" }, t("termsAndConditions")),
                ),
              ),

              React.createElement(
                "button",
                {
                  type: "submit",
                  className: "btn-primary",
                },
                t("payNow"),
              ),
            ),
          ),

          React.createElement(
            "div",
            { className: "payment-summary" },
            React.createElement("h2", null, t("orderSummary")),
            React.createElement(
              "div",
              { className: "summary-content" },
              React.createElement(
                "div",
                { className: "summary-item" },
                React.createElement("span", null, t("roomType") + ":"),
                React.createElement("span", { id: "summaryRoomType" }, summary.roomType),
              ),
              React.createElement(
                "div",
                { className: "summary-item" },
                React.createElement("span", null, t("dates") + ":"),
                React.createElement("span", { id: "summaryDates" }, `${summary.checkIn} - ${summary.checkOut}`),
              ),
              React.createElement(
                "div",
                { className: "summary-item" },
                React.createElement("span", null, t("guests") + ":"),
                React.createElement("span", { id: "summaryGuests" }, summary.guests),
              ),
              React.createElement(
                "div",
                { className: "summary-item" },
                React.createElement("span", null, t("nights") + ":"),
                React.createElement("span", { id: "summaryNights" }, summary.nights),
              ),
              React.createElement("div", { className: "summary-divider" }),
              React.createElement(
                "div",
                { className: "summary-item" },
                React.createElement("span", null, t("roomCost") + ":"),
                React.createElement("span", { id: "summaryRoomCost" }, `${summary.price.toLocaleString()}₽`),
              ),
              React.createElement(
                "div",
                { className: "summary-item" },
                React.createElement("span", null, t("taxesAndFees") + ":"),
                React.createElement("span", { id: "summaryTaxes" }, "7,000₽"),
              ),
              React.createElement(
                "div",
                { className: "summary-item total" },
                React.createElement("span", null, t("total") + ":"),
                React.createElement("span", { id: "summaryTotal" }, `${summary.total.toLocaleString()}₽`),
              ),
            ),

            React.createElement(
              "div",
              { className: "promo-code" },
              React.createElement("input", {
                type: "text",
                id: "promoCode",
                placeholder: t("promoCode"),
              }),
              React.createElement(
                "button",
                {
                  id: "applyPromo",
                  className: "btn-secondary",
                  onClick: applyPromoCode,
                },
                t("apply"),
              ),
            ),

            React.createElement(
              "div",
              { className: "secure-payment" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/lock.png",
                alt: t("securePayment"),
              }),
              React.createElement("p", null, t("securePaymentWithEncryption")),
            ),
          ),
        ),
      ),
    ),

    showSuccessModal &&
      React.createElement(
        "div",
        { className: "modal" },
        React.createElement(
          "div",
          { className: "modal-content" },
          React.createElement(
            "span",
            {
              className: "close-modal",
              onClick: closeSuccessModal,
            },
            "×",
          ),
          React.createElement(
            "div",
            { className: "success-message" },
            React.createElement("img", {
              src: "https://img.icons8.com/ios/100/000000/checkmark.png",
              alt: t("success"),
            }),
            React.createElement("h2", null, t("paymentSuccessful")),
            React.createElement("p", null, t("bookingConfirmed")),
            React.createElement(
              "p",
              null,
              t("bookingNumber") + ": ",
              React.createElement("strong", null, "BK12345678"),
            ),
            React.createElement(
              "a",
              {
                href: "/",
                className: "btn-primary",
              },
              t("returnToHome"),
            ),
          ),
        ),
      ),
  )
}
