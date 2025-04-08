"use client"

import React from "react"

import { useLanguage } from "../context/LanguageContext.js"

export const ContactPage = () => {
  const { useState } = React
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send the form data to a server here
    setFormSubmitted(true)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return React.createElement(
    "div",
    { className: "contact-page" },
    React.createElement(
      "header",
      { className: "page-header" },
      React.createElement("div", { className: "overlay" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h1", null, t("contact")),
        React.createElement("p", null, t("getInTouch")),
      ),
    ),

    React.createElement(
      "section",
      { className: "contact-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "contact-container" },
          React.createElement(
            "div",
            { className: "contact-info" },
            React.createElement("h2", null, t("contactInfo")),
            React.createElement(
              "div",
              { className: "info-item" },
              React.createElement(
                "div",
                { className: "info-icon" },
                React.createElement("img", {
                  src: "https://img.icons8.com/ios/50/000000/marker.png",
                  alt: t("address"),
                }),
              ),
              React.createElement(
                "div",
                { className: "info-content" },
                React.createElement("h3", null, t("address")),
                React.createElement("p", null, "ул. Пушкина, д. 10, Москва, Россия"),
              ),
            ),
            React.createElement(
              "div",
              { className: "info-item" },
              React.createElement(
                "div",
                { className: "info-icon" },
                React.createElement("img", {
                  src: "https://img.icons8.com/ios/50/000000/phone.png",
                  alt: t("phone"),
                }),
              ),
              React.createElement(
                "div",
                { className: "info-content" },
                React.createElement("h3", null, t("phone")),
                React.createElement("p", null, "+7 (495) 123-45-67"),
                React.createElement("p", null, "+7 (495) 765-43-21"),
              ),
            ),
            React.createElement(
              "div",
              { className: "info-item" },
              React.createElement(
                "div",
                { className: "info-icon" },
                React.createElement("img", {
                  src: "https://img.icons8.com/ios/50/000000/email.png",
                  alt: "Email",
                }),
              ),
              React.createElement(
                "div",
                { className: "info-content" },
                React.createElement("h3", null, "Email"),
                React.createElement("p", null, "info@israilofhotel.ru"),
                React.createElement("p", null, "booking@israilofhotel.ru"),
              ),
            ),
            React.createElement(
              "div",
              { className: "info-item" },
              React.createElement(
                "div",
                { className: "info-icon" },
                React.createElement("img", {
                  src: "https://img.icons8.com/ios/50/000000/clock.png",
                  alt: t("workingHours"),
                }),
              ),
              React.createElement(
                "div",
                { className: "info-content" },
                React.createElement("h3", null, t("workingHours")),
                React.createElement("p", null, t("reception") + ": 24/7"),
                React.createElement("p", null, t("restaurant") + ": 7:00-23:00"),
              ),
            ),
            React.createElement(
              "div",
              { className: "social-links" },
              React.createElement("h3", null, t("followUs")),
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
            { className: "contact-form-container" },
            React.createElement("h2", null, t("sendMessage")),
            formSubmitted &&
              React.createElement(
                "div",
                { className: "form-success" },
                React.createElement("p", null, t("messageSentSuccess")),
              ),
            React.createElement(
              "form",
              {
                id: "contactForm",
                onSubmit: handleSubmit,
              },
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { htmlFor: "name" }, t("name")),
                React.createElement("input", {
                  type: "text",
                  id: "name",
                  value: formData.name,
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
                React.createElement("label", { htmlFor: "subject" }, t("subject")),
                React.createElement("input", {
                  type: "text",
                  id: "subject",
                  value: formData.subject,
                  onChange: handleChange,
                  required: true,
                }),
              ),

              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { htmlFor: "message" }, t("message")),
                React.createElement("textarea", {
                  id: "message",
                  rows: "6",
                  value: formData.message,
                  onChange: handleChange,
                  required: true,
                }),
              ),

              React.createElement(
                "button",
                {
                  type: "submit",
                  className: "btn-primary",
                },
                t("send"),
              ),
            ),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { className: "map-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", null, t("findUs")),
        React.createElement(
          "div",
          { className: "map-container" },
          React.createElement("img", {
            src: "https://maps.googleapis.com/maps/api/staticmap?center=Moscow,Russia&zoom=13&size=600x400&maptype=roadmap&markers=color:red%7CMoscow,Russia&key=YOUR_API_KEY",
            alt: t("hotelLocation"),
            className: "map-image",
          }),
        ),
      ),
    ),
  )
}
