export const data = {
  header: {
    bgColorDesktop: "white",
    bgColorMobile: "lightGrey",
    navItems: [
      {
        id: "1",
        url: "#",
        label: "About us",
      },
      {
        id: "2",
        url: "#",
        label: "Brands",
      },
      {
        id: "3",
        url: "#",
        label: "Projects",
      },
      {
        id: "4",
        url: "#",
        label: "Magazine",
      },
      {
        id: "5",
        url: "#",
        label: "Press",
      },
      {
        id: "6",
        url: "#",
        label: "Contacts",
      },
    ],
    navItemsColorDesktop: "black",
    navItemsColorMobile: "black",
    navItemsMobileBg: "lightGrey",
    logoIcon: "/icon/logo.svg",
    searchIcon: "/icon/search.svg",
    hamburgerIcon: "/icon/hamburger.svg",
    closeIcon: "/icon/close.svg",
  },
  heroBanner: {
    slideList: [
      {
        id: 1,
        image: "/images/slide_1.png",
        preTitle: { label: "LONDON COLLECTION SEASON", color: "white" },
        title: { label: "The Path to Success with Watchlab", color: "white" },
        subTitle: {
          label: "An estimable experience in the modern collection house",
          color: "white",
        },
        cta: {
          label: "Discover",
          url: "#",
          textColor: "lightGrey",
          borderColor: "lightGrey",
          bg: "",
        },
      },
      {
        id: 2,
        image: "/images/slide_2.png",
        preTitle: { label: "LONDON COLLECTION SEASON", color: "white" },
        title: { label: "New Selection Of Henry London", color: "white" },
        subTitle: {
          label: "An estimable experience in the modern collection house",
          color: "white",
        },
        cta: {
          label: "Discover",
          url: "#",
          textColor: "lightGrey",
          borderColor: "lightGrey",
          bg: "",
        },
      },
    ],
  },
  doubleText: {
    left: {
      title: { label: "History and Patriarcal season", color: "black" },
      paragraph: {
        label:
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
        color: "darkGrey",
      },
    },
    right: {
      paragraph: {
        label:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No  that are extremely painful",
        color: "darkGrey",
      },
    },
  },
  textImage: [
    {
      id: 1,
      left: {
        isImage: false,
        preTitle: { label: "LONDON COLLECTION SEASON", color: "black" },
        title: { label: "Temporary Store", color: "black" },
        paragraph: {
          label:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
          color: "darkGrey",
        },
        cta: {
          label: "View",
          url: "#",
          textColor: "lightGrey",
          borderColor: "lightGrey",
          bg: "white",
          bgHover: "lightGrey",
        },
      },
      right: {
        isImage: true,
        image: "/images/article_1.png",
      },
    },
    {
      id: 2,
      left: {
        isImage: true,
        image: "/images/article_2.png",
      },
      right: {
        isImage: false,
        preTitle: { label: "LONDON COLLECTION SEASON", color: "black" },
        title: { label: "New Collection", color: "black" },
        paragraph: {
          label:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
          color: "darkGrey",
        },
        cta: {
          label: "View",
          url: "#",
          textColor: "lightGrey",
          borderColor: "lightGrey",
          bg: "white",
          bgHover: "lightGrey",
        },
      },
    },
  ],
  pressSwiper: {
    textBlock: {
      title: { label: "Press from", color: "black" },
      subTitle: { label: "Watch Lab Studio", color: "black" },
      paragraph: {
        label:
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain trouble",
        color: "darkGrey",
      },
      bgColorSlideBlock: "grey",
    },
    press: [
      {
        preTitle: { label: "PRESS", color: "black" },
        date: { label: "18 SETTEMBRE 2022", color: "lightGrey" },
        title: { label: "Most Important Days on Watchlab", color: "black" },
        image: "/images/article_3.png",
      },
      {
        preTitle: { label: "PRESS", color: "black" },
        date: { label: "23 SETTEMBRE 2022", color: "lightGrey" },
        title: { label: "Winner Of Best Manifacture", color: "black" },
        image: "/images/article_4.png",
      },
    ],
  },
  mosaic: [
    {
      id: 1,
      sizeLarge: true,
      image: "/images/mosaic_large.png",
      preTitle: { label: "INSTAGRAM", color: "white" },
      title: { label: "Discover Watch Lab", color: "white" },
    },
    {
      id: 2,
      sizeLarge: false,
      image: "/images//mosaic_small_1.png",
    },
    {
      id: 3,
      sizeLarge: false,
      image: "/images//mosaic_small_2.png",
    },
    {
      id: 4,
      sizeLarge: false,
      image: "/images//mosaic_small_3.png",
    },
    {
      id: 5,
      sizeLarge: false,
      image: "/images//mosaic_small_4.png",
    },
  ],
  contactUs: {
    image: "/images/contact-us.png",
    title: { label: "Get in Touch", color: "white" },
    subTitle: {
      label: "DISCOVER MORE ABOUT NEWS, EXCLUSIVE EVENTS AND DISCOUNT",
      color: "white",
    },
    cta: {
      label: "ok",
      url: "#",
      textColor: "white",
      borderColor: "white",
      bg: "transparent",
    },
  },
  footer: {
    bg: "lightBlackOne",
    color: "lightGrey",
    logoIcon: "/icon/logo.svg",
    companyData: [
      { id: "1", label: "Watch/Lab - Innovation brings success", url: "#" },
      { id: "2", label: "Via Borgogna 5, Milan", url: "#" },
      { id: "3", label: "Italy", url: "#" },
    ],
    about: [
      { id: "1", label: "About us", url: "#" },
      { id: "2", label: "Brand", url: "#" },
      { id: "3", label: "Projects", url: "#" },
      { id: "4", label: "Magazine", url: "#" },
    ],
    sections: [
      { id: "1", label: "Press", url: "#" },
      { id: "2", label: "Contacts", url: "#" },
      { id: "3", label: "Privacy Policy", url: "#" },
      { id: "4", label: "Search", url: "#" },
    ],
    contacts: [
      { id: "1", label: "T. +39 392 9133937", url: "#" },
      { id: "2", label: "M. info@watch-lab.it", url: "#" },
      { id: "3", label: "FACEBOOK", url: "#" },
      { id: "4", label: "INSTAGRAM", url: "#" },
    ],
    copyright: [
      { id: "1", label: "Copyright Watch/Lab all rights reserved", url: "#" },
      { id: "2", label: "website by nssfactory", url: "#" },
    ],
  },
};
