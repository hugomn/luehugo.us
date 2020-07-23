const languages = require("./languages");

module.exports = {
  siteUrl: "https://www.luehugo.us",
  description: {
    pt:
      "Queridos amigos! Esperamos vocês no nosso dia especial: 27 de fevereiro de 2021! Reserve essa data e venha comemorar conosco! 🧡",
    en:
      "Dear friends! We look forward to having you with us in our great day! February 27th, 2021! 🧡",
  },
  author: {
    name: "Hugo Nogueira",
    bio:
      'Senior software engineer and agile manager. React, and Node.js enthusiast. <br/> Engineering Lead @ <a href="https://www.bcgdv.com">BCG Digital Ventures</a>. Berlin, Germany',
    homeCity: "Berlin",
    email: "hugomn@gmail.com",
    twitter: "hugomn",
    defaultLink: "https://github.com/hugomn",
  },
  sourceCodeLink: "https://github.com/hugomn/luehugo.us",
  disqusShortname: "hugomagalhes",
  menu: [
    { label: "menu.us", slug: "/#os-noivos" },
    { label: "menu.story", slug: "/#historia" },
    { label: "menu.groomsmen", slug: "/#padrinhos" },
    { label: "menu.bridesmaids", slug: "/#madrinhas" },
    { label: "menu.where", slug: "/#onde" },
    { label: "menu.rsvp", slug: "/#rsvp" },
    { label: "menu.gifts", slug: "/#presentes" },
  ],
  languages,
  contact: [
    {
      type: "email",
      value: "hugomn@gmail.com",
      link: "mailto:hugomn@gmail.com",
    },
    {
      type: "phone",
      value: "+49 151 74477807",
      country: "de",
      link: "tel:+49 151 74477807",
    },
  ],
  wedding: {
    date: "2021-02-27",
    fundingGoal: 25000,
    fundingPledged: 14420 + 230 + 230 /* Katie */,
  },
};
