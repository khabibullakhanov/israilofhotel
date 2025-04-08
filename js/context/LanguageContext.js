"use client"

import React from "react"

const LanguageContext = React.createContext()

export const LanguageProvider = ({ children }) => {
  const { useState } = React

  const [language, setLanguage] = useState("ru")

  const translations = {
    ru: {
      home: "Главная",
      rooms: "Номера",
      booking: "Бронирование",
      about: "О нас",
      gallery: "Галерея",
      contact: "Контакты",
      bookNow: "Забронировать сейчас",
      ourAdvantages: "Наши преимущества",
      freeWifi: "Бесплатный Wi-Fi",
      wifiDesc: "Высокоскоростной интернет во всех номерах и общественных зонах",
      pool: "Бассейн",
      poolDesc: "Крытый и открытый бассейны с подогревом",
      restaurant: "Ресторан",
      restaurantDesc: "Изысканная кухня от шеф-повара мирового класса",
      spa: "СПА-центр",
      spaDesc: "Полный спектр СПА-услуг для вашего отдыха",
      popularRooms: "Популярные номера",
      moreDetails: "Подробнее",
      guestReviews: "Отзывы гостей",
      luxuryAndComfort: "Роскошь и комфорт в сердце города",
      navigation: "Навигация",
      contacts: "Контакты",
      socialNetworks: "Социальные сети",
      allRightsReserved: "Все права защищены",
      // Room types
      standard: "Стандартный",
      deluxe: "Делюкс",
      family: "Семейный",
      presidential: "Президентский люкс",
      // Booking form
      roomType: "Тип номера",
      checkIn: "Дата заезда",
      checkOut: "Дата выезда",
      guests: "Количество гостей",
      book: "Забронировать",
      // More translations can be added as needed
    },
    uz: {
      home: "Bosh sahifa",
      rooms: "Xonalar",
      booking: "Bron qilish",
      about: "Biz haqimizda",
      gallery: "Galereya",
      contact: "Aloqa",
      bookNow: "Hozir bron qilish",
      ourAdvantages: "Bizning afzalliklarimiz",
      freeWifi: "Bepul Wi-Fi",
      wifiDesc: "Barcha xonalarda va jamoat joylarida yuqori tezlikdagi internet",
      pool: "Basseyn",
      poolDesc: "Yopiq va ochiq isitilgan basseynlar",
      restaurant: "Restoran",
      restaurantDesc: "Jahon darajasidagi oshpazdan nozik taomlar",
      spa: "SPA-markaz",
      spaDesc: "Dam olishingiz uchun to'liq SPA xizmatlari",
      popularRooms: "Mashhur xonalar",
      moreDetails: "Batafsil",
      guestReviews: "Mehmonlar sharhlari",
      luxuryAndComfort: "Shahar markazida hashamat va qulaylik",
      navigation: "Navigatsiya",
      contacts: "Kontaktlar",
      socialNetworks: "Ijtimoiy tarmoqlar",
      allRightsReserved: "Barcha huquqlar himoyalangan",
      // Room types
      standard: "Standart",
      deluxe: "Deluxe",
      family: "Oilaviy",
      presidential: "Prezident lyuks",
      // Booking form
      roomType: "Xona turi",
      checkIn: "Kirish sanasi",
      checkOut: "Chiqish sanasi",
      guests: "Mehmonlar soni",
      book: "Bron qilish",
    },
    en: {
      home: "Home",
      rooms: "Rooms",
      booking: "Booking",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
      bookNow: "Book Now",
      ourAdvantages: "Our Advantages",
      freeWifi: "Free Wi-Fi",
      wifiDesc: "High-speed internet in all rooms and public areas",
      pool: "Swimming Pool",
      poolDesc: "Indoor and outdoor heated pools",
      restaurant: "Restaurant",
      restaurantDesc: "Exquisite cuisine from a world-class chef",
      spa: "SPA Center",
      spaDesc: "Full range of SPA services for your relaxation",
      popularRooms: "Popular Rooms",
      moreDetails: "More Details",
      guestReviews: "Guest Reviews",
      luxuryAndComfort: "Luxury and comfort in the heart of the city",
      navigation: "Navigation",
      contacts: "Contacts",
      socialNetworks: "Social Networks",
      allRightsReserved: "All rights reserved",
      // Room types
      standard: "Standard",
      deluxe: "Deluxe",
      family: "Family",
      presidential: "Presidential Suite",
      // Booking form
      roomType: "Room Type",
      checkIn: "Check-in Date",
      checkOut: "Check-out Date",
      guests: "Number of Guests",
      book: "Book",
    },
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return React.createElement(LanguageContext.Provider, { value: { language, changeLanguage, t } }, children)
}

export const useLanguage = () => {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
