const baseConfig = {
  weddingDay: "Saturday",
  weddingTime: "19.00 - 21.00",
  weddingDate: "Nov 29, 2026",
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2026-11-29T19:00:00+08:00",
    timeEndISO: "2026-11-29T21:00:00+08:00"
  },
  coupleInfo: {
    brideName: "Bouchra",
    groomName: "Yaakoub",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "Bayazid Hotel",
    addressLine1: "City 99 appartments",
    addressLine2: "El Gasria",
    city: "Sétif",
    country: "Algeria",
    mapUrl: "https://maps.app.goo.gl/UqMB7CNNjwnZY5Um7"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4"
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "wedding.wzulfikar.com",
    publishedTime: "2026-11-29"
  }
};

const lang = {
  id: {
    weddingDay: "Saturday",
    weddingDate: "29 November 2026",
    venue: {
      ...baseConfig.venue,
      name: "Hotel Bayazid",
      addressLine2: "Sétif, El Gasria, Algeria,",
    }
  }
};

export default {
  ...baseConfig,
  lang
};
