"use client"

import React from "react"

export const Slider = ({ slides }) => {
  const { useState, useEffect } = React

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return React.createElement(
    "div",
    { className: "slider-container" },
    React.createElement(
      "div",
      {
        className: "slider",
        style: {
          transform: `translateX(-${currentSlide * 100}%)`,
        },
      },
      slides.map((slide, index) =>
        React.createElement(
          "div",
          {
            className: "slide",
            key: index,
          },
          React.createElement("img", {
            src: slide.image,
            alt: slide.title,
          }),
          React.createElement(
            "div",
            { className: "slide-content" },
            React.createElement("h3", null, slide.title),
            React.createElement("p", null, slide.subtitle),
            React.createElement(
              "a",
              {
                href: slide.link,
                className: "btn-secondary",
              },
              slide.buttonText,
            ),
          ),
        ),
      ),
    ),
    React.createElement(
      "button",
      {
        className: "slider-btn prev",
        onClick: prevSlide,
      },
      "❮",
    ),
    React.createElement(
      "button",
      {
        className: "slider-btn next",
        onClick: nextSlide,
      },
      "❯",
    ),
  )
}
