const languages = require("./languages");

module.exports = {
  siteUrl: "https://www.luehugo.us",
  description:
    "Queridos amigos! Esperamos vocês no nosso dia especial: 2 de maio de 2020! Reserve essa data e venha comemorar conosco! ❤️",
  author: {
    name: "Hugo Nogueira",
    bio:
      "Senior software engineer and agile manager. React, and Node.js enthusiast. <br/> Engineering Lead @ <a href=\"https://www.bcgdv.com\">BCG Digital Ventures</a>. Berlin, Germany",
    homeCity: "Berlin",
    email: "hugomn@gmail.com",
    twitter: "hugomn",
    defaultLink: "https://github.com/hugomn"
  },
  sourceCodeLink: "https://github.com/hugomn/luehugo.us",
  disqusShortname: "hugomagalhes",
  menu: [
    { label: "menu.us", link: "/#os-noivos" },
    { label: "menu.story", link: "/#historia" },
    { label: "menu.groomsmen", link: "/#padrinhos" },
    { label: "menu.bridesmaids", link: "/#madrinhas" },
    { label: "menu.where", link: "/#onde" },
    { label: "menu.rsvp", link: "/#rsvp" },
    { label: "menu.gifts", slug: "/#presentes" },
  ],
  languages,
  contact: [
    {
      type: "email",
      value: "hugomn@gmail.com",
      link: "mailto:hugomn@gmail.com"
    },
    {
      type: "phone",
      value: "+49 151 74477807",
      country: "de",
      link: "tel:+49 151 74477807"
    }
  ],
  wedding: {
    date: "2020-05-02",
    fundingGoal: 25000,
    fundingPledged: 12200
  }
};
