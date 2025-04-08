"use client"

// Create React elements without JSX
const React = window.React
const ReactDOM = window.ReactDOM
const { BrowserRouter, Routes, Route } = window.ReactRouterDOM
const { useState, useEffect, useContext, createContext } = React

// Language Context
const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
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
      // Add more Uzbek translations as needed
    },
    en: {
      home: "Home",
      rooms: "Rooms",
      booking: "Booking",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
      bookNow: "Book Now",
      // Add more English translations as needed
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

const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Components
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const { language, changeLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen)
  }

  const handleLanguageChange = (lang) => {
    changeLanguage(lang)
    setIsLangDropdownOpen(false)
  }

  return React.createElement(
    "nav",
    {
      id: "navbar",
      className: `navbar ${isScrolled ? "scrolled" : ""}`,
    },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "a",
        {
          href: "/",
          className: "nav-logo",
        },
        "Israilof Hotel",
      ),

      React.createElement(
        "div",
        {
          className: `nav-toggle ${isMobileMenuOpen ? "active" : ""}`,
          onClick: toggleMobileMenu,
        },
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null),
      ),

      React.createElement(
        "ul",
        {
          className: `nav-links ${isMobileMenuOpen ? "active" : ""}`,
        },
        React.createElement("li", null, React.createElement("a", { href: "/" }, t("home"))),
        React.createElement("li", null, React.createElement("a", { href: "/rooms" }, t("rooms"))),
        React.createElement("li", null, React.createElement("a", { href: "/booking" }, t("booking"))),
        React.createElement("li", null, React.createElement("a", { href: "/about" }, t("about"))),
        React.createElement("li", null, React.createElement("a", { href: "/gallery" }, t("gallery"))),
        React.createElement("li", null, React.createElement("a", { href: "/contact" }, t("contact"))),
        React.createElement(
          "li",
          { className: "lang-selector" },
          React.createElement(
            "span",
            {
              className: "current-lang",
              onClick: toggleLangDropdown,
            },
            language.toUpperCase(),
          ),
          React.createElement(
            "ul",
            {
              className: `lang-dropdown ${isLangDropdownOpen ? "active" : ""}`,
            },
            React.createElement(
              "li",
              {
                className: language === "ru" ? "active" : "",
                onClick: () => handleLanguageChange("ru"),
              },
              "RU",
            ),
            React.createElement(
              "li",
              {
                className: language === "uz" ? "active" : "",
                onClick: () => handleLanguageChange("uz"),
              },
              "UZ",
            ),
            React.createElement(
              "li",
              {
                className: language === "en" ? "active" : "",
                onClick: () => handleLanguageChange("en"),
              },
              "EN",
            ),
          ),
        ),
      ),
    ),
  )
}

const Footer = () => {
  const { t } = useLanguage()

  return React.createElement(
    "footer",
    null,
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "footer-content" },
        React.createElement(
          "div",
          { className: "footer-logo" },
          React.createElement("h2", null, "Israilof Hotel"),
          React.createElement("p", null, t("luxuryAndComfort")),
        ),

        React.createElement(
          "div",
          { className: "footer-links" },
          React.createElement("h3", null, t("navigation")),
          React.createElement(
            "ul",
            null,
            React.createElement("li", null, React.createElement("a", { href: "/" }, t("home"))),
            React.createElement("li", null, React.createElement("a", { href: "/rooms" }, t("rooms"))),
            React.createElement("li", null, React.createElement("a", { href: "/about" }, t("about"))),
            React.createElement("li", null, React.createElement("a", { href: "/gallery" }, t("gallery"))),
            React.createElement("li", null, React.createElement("a", { href: "/contact" }, t("contact"))),
          ),
        ),

        React.createElement(
          "div",
          { className: "footer-contact" },
          React.createElement("h3", null, t("contacts")),
          React.createElement("p", null, "ул. Пушкина, д. 10, Москва"),
          React.createElement("p", null, "Телефон: +7 (495) 123-45-67"),
          React.createElement("p", null, "Email: info@israilofhotel.ru"),
        ),

        React.createElement(
          "div",
          { className: "footer-social" },
          React.createElement("h3", null, t("socialNetworks")),
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
        { className: "footer-bottom" },
        React.createElement("p", null, "© 2023 Israilof Hotel. ", t("allRightsReserved")),
      ),
    ),
  )
}

const Header = ({ title, subtitle, showBookButton = false, onBookClick }) => {
  const { t } = useLanguage()

  return React.createElement(
    "header",
    { className: "hero" },
    React.createElement("div", { className: "overlay" }),
    React.createElement(
      "div",
      { className: "hero-content" },
      React.createElement("h1", { className: "logo" }, title || "Israilof Hotel"),
      React.createElement("p", { className: "tagline" }, subtitle || t("luxuryAndComfort")),
      showBookButton &&
        React.createElement(
          "button",
          {
            className: "btn-primary",
            onClick: onBookClick,
          },
          t("bookNow"),
        ),
    ),
  )
}

// HomePage Component
const HomePage = ({ openBookingModal }) => {
  const { t } = useLanguage()

  const featuredRooms = [
    {
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: t("presidential"),
      subtitle: `${t("from")} 25,000₽ ${t("perNight")}`,
      buttonText: t("moreDetails"),
      link: "/rooms",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: t("family"),
      subtitle: `${t("from")} 15,000₽ ${t("perNight")}`,
      buttonText: t("moreDetails"),
      link: "/rooms",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: t("standard"),
      subtitle: `${t("from")} 8,000₽ ${t("perNight")}`,
      buttonText: t("moreDetails"),
      link: "/rooms",
    },
  ]

  return React.createElement(
    "div",
    { className: "home-page" },
    React.createElement(Header, {
      showBookButton: true,
      onBookClick: openBookingModal,
    }),

    React.createElement(
      "section",
      { className: "features" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, t("ourAdvantages")),
        React.createElement(
          "div",
          { className: "feature-grid" },
          React.createElement(
            "div",
            { className: "feature-item" },
            React.createElement(
              "div",
              { className: "feature-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/wifi.png",
                alt: "WiFi",
              }),
            ),
            React.createElement("h3", null, t("freeWifi")),
            React.createElement("p", null, t("wifiDesc")),
          ),
          React.createElement(
            "div",
            { className: "feature-item" },
            React.createElement(
              "div",
              { className: "feature-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/swimming.png",
                alt: t("pool"),
              }),
            ),
            React.createElement("h3", null, t("pool")),
            React.createElement("p", null, t("poolDesc")),
          ),
          React.createElement(
            "div",
            { className: "feature-item" },
            React.createElement(
              "div",
              { className: "feature-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/restaurant.png",
                alt: t("restaurant"),
              }),
            ),
            React.createElement("h3", null, t("restaurant")),
            React.createElement("p", null, t("restaurantDesc")),
          ),
          React.createElement(
            "div",
            { className: "feature-item" },
            React.createElement(
              "div",
              { className: "feature-icon" },
              React.createElement("img", {
                src: "https://img.icons8.com/ios/50/000000/spa.png",
                alt: t("spa"),
              }),
            ),
            React.createElement("h3", null, t("spa")),
            React.createElement("p", null, t("spaDesc")),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { className: "testimonials" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, t("guestReviews")),
        React.createElement(
          "div",
          { className: "testimonial-grid" },
          React.createElement(
            "div",
            { className: "testimonial-item" },
            React.createElement(
              "div",
              { className: "testimonial-content" },
              React.createElement("p", null, '"Потрясающий сервис и комфортные номера. Обязательно вернусь снова!"'),
            ),
            React.createElement(
              "div",
              { className: "testimonial-author" },
              React.createElement("img", {
                src: "https://randomuser.me/api/portraits/women/32.jpg",
                alt: "Анна К.",
              }),
              React.createElement(
                "div",
                null,
                React.createElement("h4", null, "Анна К."),
                React.createElement("p", null, "Москва"),
              ),
            ),
          ),
          React.createElement(
            "div",
            { className: "testimonial-item" },
            React.createElement(
              "div",
              { className: "testimonial-content" },
              React.createElement(
                "p",
                null,
                '"Лучший отель, в котором я когда-либо останавливался. Ресторан просто великолепен!"',
              ),
            ),
            React.createElement(
              "div",
              { className: "testimonial-author" },
              React.createElement("img", {
                src: "https://randomuser.me/api/portraits/men/45.jpg",
                alt: "Дмитрий В.",
              }),
              React.createElement(
                "div",
                null,
                React.createElement("h4", null, "Дмитрий В."),
                React.createElement("p", null, "Санкт-Петербург"),
              ),
            ),
          ),
          React.createElement(
            "div",
            { className: "testimonial-item" },
            React.createElement(
              "div",
              { className: "testimonial-content" },
              React.createElement(
                "p",
                null,
                '"Идеальное место для семейного отдыха. Дети были в восторге от бассейна!"',
              ),
            ),
            React.createElement(
              "div",
              { className: "testimonial-author" },
              React.createElement("img", {
                src: "https://randomuser.me/api/portraits/women/68.jpg",
                alt: "Елена М.",
              }),
              React.createElement(
                "div",
                null,
                React.createElement("h4", null, "Елена М."),
                React.createElement("p", null, "Казань"),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}

// AboutPage Component
const AboutPage = () => {
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
        React.createElement("p", null, "Узнайте историю и философию Israilof Hotel"),
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
            React.createElement("h2", null, "Наша история"),
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
              alt: "Экстерьер отеля",
            }),
          ),
        ),
      ),
    ),
  )
}

// Simple placeholder components for other pages
const RoomsPage = () => {
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
        React.createElement("h1", null, "Номера"),
        React.createElement("p", null, "Выберите идеальный номер для вашего пребывания"),
      ),
    ),
    React.createElement(
      "div",
      { className: "container", style: { padding: "50px 0" } },
      React.createElement("h2", null, "Страница номеров"),
    ),
  )
}

const BookingPage = () => {
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
        React.createElement("h1", null, "Бронирование"),
        React.createElement("p", null, "Забронируйте свой идеальный отдых"),
      ),
    ),
    React.createElement(
      "div",
      { className: "container", style: { padding: "50px 0" } },
      React.createElement("h2", null, "Страница бронирования"),
    ),
  )
}

const PaymentPage = () => {
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
        React.createElement("h1", null, "Оплата"),
        React.createElement("p", null, "Завершите бронирование"),
      ),
    ),
    React.createElement(
      "div",
      { className: "container", style: { padding: "50px 0" } },
      React.createElement("h2", null, "Страница оплаты"),
    ),
  )
}

const GalleryPage = () => {
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
        React.createElement("h1", null, "Галерея"),
        React.createElement("p", null, "Исследуйте наш отель"),
      ),
    ),
    React.createElement(
      "div",
      { className: "container", style: { padding: "50px 0" } },
      React.createElement("h2", null, "Страница галереи"),
    ),
  )
}

const ContactPage = () => {
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
        React.createElement("h1", null, "Контакты"),
        React.createElement("p", null, "Свяжитесь с нами"),
      ),
    ),
    React.createElement(
      "div",
      { className: "container", style: { padding: "50px 0" } },
      React.createElement("h2", null, "Страница контактов"),
    ),
  )
}

// BookingModal Component
const BookingModal = ({ closeModal, selectedRoom }) => {
  const [formData, setFormData] = useState({
    roomType: selectedRoom ? selectedRoom.type : "",
    checkIn: "",
    checkOut: "",
    guests: "2",
  })

  const { t } = useLanguage()

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
    alert("Бронирование успешно!")
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
            React.createElement("option", { value: "" }, "Выберите тип номера"),
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

// Main App Component
const App = () => {
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener("popstate", handleNavigation)

    // Handle initial navigation
    handleNavigation()

    return () => {
      window.removeEventListener("popstate", handleNavigation)
    }
  }, [])

  const openBookingModal = (room = null) => {
    setSelectedRoom(room)
    setShowBookingModal(true)
  }

  const closeBookingModal = () => {
    setShowBookingModal(false)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "/":
        return React.createElement(HomePage, { openBookingModal })
      case "/rooms":
        return React.createElement(RoomsPage, { openBookingModal })
      case "/booking":
        return React.createElement(BookingPage)
      case "/payment":
        return React.createElement(PaymentPage)
      case "/about":
        return React.createElement(AboutPage)
      case "/gallery":
        return React.createElement(GalleryPage)
      case "/contact":
        return React.createElement(ContactPage)
      default:
        return React.createElement(HomePage, { openBookingModal })
    }
  }

  return React.createElement(
    LanguageProvider,
    null,
    React.createElement(
      "div",
      { className: "app" },
      React.createElement(Navbar),
      renderPage(),
      React.createElement(Footer),
      showBookingModal &&
        React.createElement(BookingModal, {
          closeModal: closeBookingModal,
          selectedRoom: selectedRoom,
        }),
    ),
  )
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(React.createElement(App))
})
