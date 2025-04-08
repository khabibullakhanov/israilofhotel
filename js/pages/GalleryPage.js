"use client"

import React from "react"

import { useLanguage } from "../context/LanguageContext.js"

export const GalleryPage = () => {
  const { useState } = React
  const { t } = useLanguage()

  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState(null)

  const galleryImages = [
    // Rooms
    {
      id: 1,
      category: "rooms",
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      alt: t("standardRoom"),
      title: t("standardRoom"),
    },
    {
      id: 2,
      category: "rooms",
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: t("deluxeRoom"),
      title: t("deluxeRoom"),
    },
    {
      id: 3,
      category: "rooms",
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      alt: t("familyRoom"),
      title: t("familyRoom"),
    },
    {
      id: 4,
      category: "rooms",
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: t("presidentialSuite"),
      title: t("presidentialSuite"),
    },

    // Restaurant
    {
      id: 5,
      category: "restaurant",
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: t("restaurantInterior"),
      title: t("restaurantInterior"),
    },
    {
      id: 6,
      category: "restaurant",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: t("restaurantBar"),
      title: t("restaurantBar"),
    },
    {
      id: 7,
      category: "restaurant",
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      alt: t("fineDining"),
      title: t("fineDining"),
    },

    // Spa
    {
      id: 8,
      category: "spa",
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: t("spaCenter"),
      title: t("spaCenter"),
    },
    {
      id: 9,
      category: "spa",
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: t("massageRoom"),
      title: t("massageRoom"),
    },
    {
      id: 10,
      category: "spa",
      src: "https://images.unsplash.com/photo-1531112998834-e6e4e5e2b2a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: t("indoorPool"),
      title: t("indoorPool"),
    },

    // Exterior
    {
      id: 11,
      category: "exterior",
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: t("hotelExterior"),
      title: t("hotelExterior"),
    },
    {
      id: 12,
      category: "exterior",
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: t("hotelEntrance"),
      title: t("hotelEntrance"),
    },
    {
      id: 13,
      category: "exterior",
      src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      alt: t("hotelGarden"),
      title: t("hotelGarden"),
    },
    {
      id: 14,
      category: "exterior",
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
      alt: t("hotelPool"),
      title: t("hotelPool"),
    },
  ]

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (image) => {
    setLightboxImage(image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setLightboxImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage.id)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setLightboxImage(filteredImages[prevIndex])
  }

  return React.createElement(
    "div",
    { className: "gallery-page" },
    React.createElement(
      "header",
      { className: "page-header" },
      React.createElement("div", { className: "overlay" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h1", null, t("gallery")),
        React.createElement("p", null, t("exploreOurHotel")),
      ),
    ),

    React.createElement(
      "section",
      { className: "gallery-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "gallery-filter" },
          React.createElement(
            "button",
            {
              className: activeCategory === "all" ? "active" : "",
              onClick: () => setActiveCategory("all"),
            },
            t("all"),
          ),
          React.createElement(
            "button",
            {
              className: activeCategory === "rooms" ? "active" : "",
              onClick: () => setActiveCategory("rooms"),
            },
            t("rooms"),
          ),
          React.createElement(
            "button",
            {
              className: activeCategory === "restaurant" ? "active" : "",
              onClick: () => setActiveCategory("restaurant"),
            },
            t("restaurant"),
          ),
          React.createElement(
            "button",
            {
              className: activeCategory === "spa" ? "active" : "",
              onClick: () => setActiveCategory("spa"),
            },
            t("spa"),
          ),
          React.createElement(
            "button",
            {
              className: activeCategory === "exterior" ? "active" : "",
              onClick: () => setActiveCategory("exterior"),
            },
            t("exterior"),
          ),
        ),

        React.createElement(
          "div",
          { className: "gallery-grid" },
          filteredImages.map((image) =>
            React.createElement(
              "div",
              {
                className: "gallery-item",
                key: image.id,
                onClick: () => openLightbox(image),
              },
              React.createElement("img", {
                src: image.src,
                alt: image.alt,
              }),
              React.createElement(
                "div",
                { className: "gallery-item-overlay" },
                React.createElement("h3", null, image.title),
                React.createElement("span", null, t("clickToEnlarge")),
              ),
            ),
          ),
        ),
      ),
    ),

    lightboxImage &&
      React.createElement(
        "div",
        { className: "lightbox" },
        React.createElement(
          "span",
          {
            className: "close-lightbox",
            onClick: closeLightbox,
          },
          "×",
        ),
        React.createElement(
          "div",
          { className: "lightbox-content" },
          React.createElement("img", {
            src: lightboxImage.src,
            alt: lightboxImage.alt,
          }),
          React.createElement(
            "div",
            { className: "lightbox-caption" },
            React.createElement("h3", null, lightboxImage.title),
          ),
        ),
        React.createElement(
          "button",
          {
            className: "lightbox-btn prev",
            onClick: prevImage,
          },
          "❮",
        ),
        React.createElement(
          "button",
          {
            className: "lightbox-btn next",
            onClick: nextImage,
          },
          "❯",
        ),
      ),
  )
}
