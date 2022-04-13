const languages = require("./languages");

module.exports = {
  siteUrl: "https://www.luehugo.us",
  description:
    "Queridos amigos! Esperamos vocês no nosso dia especial: 15 de Abril de 2022! Reserve essa data e venha comemorar conosco! 🧡",
  // description: {
  //   pt:
  //     "Queridos amigos! Esperamos vocês no nosso dia especial: 15 de Abril de 2022 de 2022! Reserve essa data e venha comemorar conosco! 🧡",
  //   en:
  //     "Dear friends! We look forward to having you with us in our great day! April 15th, 2022! 🧡",
  // },
  author: {
    name: "Hugo Nogueira",
    bio:
      "Senior software engineer and agile manager. React, and Node.js enthusiast. <br/> Engineering Lead @ <a href=`https://www.bcgdv.com`>BCG Digital Ventures</a>. Berlin, Germany",
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
    date: "2022-04-15",
    fundingGoal: 20000,
    fundingPledged: 11420,
  },
};
