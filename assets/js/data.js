"use strict";

const currentYear = new Date().getFullYear();

const profileInfo = {
  surname: "Adjagba",
  firstname: "Olivier",
  fullname: function () {
    const { firstname, surname } = this;
    return `${firstname} ${surname}`;
  },
  email: "olivier@aims.ac.za",
  major: "Mathematical and Modeling Engineering",
  title: { short: "Eng.", long: "Engineer" },
  degree: "Mathematics and Modeling", // | AI/ML Master Student",
  fulldegree: function () {
    const { degree, title } = this;
    return `${degree} ${title.long}`;
  },
  imgSrc: "assets/images/profile-img.png",
  social: [
    { id: "linkedin", name: "LinkedIn", icon: "logo-linkedin", url: "https://www.linkedin.com/in/olivieradjagba" },
    { id: "github", name: "Github", icon: "logo-github", url: "https://github.com/olivieradjagba" },
    { id: "twitter", name: "Twitter", icon: "logo-twitter", url: "https://twitter.com/olivier_adjagba" },
  ],
  phone: {
    mobile: "+27 071 432 1807",
    whatsapp: "+229 67 345 963",
  },
  address: {
    country: "South Africa",
    city: "Cape Town",
    district: "Muizenberg",
    street: "06 Melrose Road",
    postalcode: "7945",
  },
  fulladdress: function (detailled = false) {
    const { address } = this;
    return detailled
      ? `${address.street}, ${address.district}, ${address.postalcode} ${address.city}, ${address.country}`
      : `${address.city}, ${address.country}`;
  },
  website: "olivieradjagba.github.io",
  getAbout: function () {
    const { email, phone, whatsapp, address, website } = this;
    return [
      { id: "website", name: "Website", class: "my-website", icon: "globe-outline" },
      { id: "degree", name: "Degree", text: "Master", icon: "school-outline" },
      { id: "address", name: "Address", class: "my-address", icon: "location-outline" },
      { id: "phone", name: "Phone", class: "my-phone", icon: "phone-portrait-outline" },
      { id: "email", name: "Email", class: "my-email", icon: "mail-outline" },
      { id: "whatsapp", name: "Whatsapp", class: "my-whatsapp", icon: "logo-whatsapp" },
    ];
  },
  getPhone: function () {
    const { phone } = this;
    return phone;
  },
};

const universities = [
  {
    id: "aims",
    name: "African Institute for Mathematical Sciences",
    shortname: "AIMS",
    city: "Cape Town",
    country: "South Africa",
  },
  {
    id: "unstim",
    name: "University of Science, Technology, Engineering and Mathematics",
    shortname: "UNSTIM",
    city: "Abomey",
    country: "Benin",
  },
];

const resumeInfo = {
  education: [
    {
      id: "aims",
      university: universities.find((u) => u.id === "aims"),
      degree: "Master in AI for Science",
      grade: "",
      year: { from: 2023, to: 2024 },
      ongoing: true,
      description:
        "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
    },
    {
      id: "gmm",
      university: universities.find((u) => u.id === "unstim"),
      degree: "Engineering Degree",
      grade: "15.42/20",
      year: { from: 2018, to: 2021 },
      description:
        "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
    },
    {
      id: "prepa",
      university: universities.find((u) => u.id === "unstim"),
      degree: "Preparatory Classes",
      grade: "74.85/100",
      year: { from: 2016, to: 2018 },
      description:
        "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
    },
  ],
  experience: [
    {
      id: "cosit",
      company: "COSIT Benin",
      position: "Web Front-end developer",
      year: { from: 2022, to: 2023 },
      description: "Design and maintenance of a web platform.",
      achievements: [
        "Development of a SIG platform for UNTIM university",
        "Development of woods traceability platform for ONAB",
        "Development of cars repair management platform",
        "Web platform monitoring and management",
        "Interns follow-up",
      ],
      city: "Cotonou",
      country: "Benin",
    },
    {
      id: "gti",
      company: "Green Tech Innovation",
      position: "Intern",
      year: { from: 2021, to: 2022 },
      description: "Bio-statistics analysis and web development.",
      achievements: [
        "Data analysis on the molecular genetic characterisation of plantain accessions in Benin for a PhD student",
        "Data analysis on master’s thesis topics",
        "Contribution to the company’s website design",
        "Design of a mini plant sales website with ReactJS and PHP REST API",
        "Analysis of data collected for the « Global Trial on Agroecological Approches to Fall Armyworm Management » project",
      ],
      city: "Abomey-Calavi",
      country: "Benin",
    },
    {
      id: "dp",
      company: "dP Divecosys in partnership with UNSTIM",
      position: "Intern",
      year: { from: 2021, to: 2021 },
      description: "Data collection on fall armyworm.",
      achievements: [
        "Implementation of an experimental device on the agroecological management of the fall armyworm for the « Global Trial on Agroecological Approches to Fall Armyworm Management » project",
        "Data collection on the fall armyworm (Spodoptera frugiperda) at 3, 6 and 9 months after planting as well as at harvest",
        "Sending data on the dedicated platform using KoboColect",
      ],
      city: "Dassa",
      country: "Benin",
    },
  ],
  skills: [
    { id: "python", name: "Python", level: 90 },
    { id: "r", name: "R", level: 80 },
    { id: "matlab", name: "MATLAB", level: 75 },
    { id: "c/c++", name: "C/C++", level: 70 },
    { id: "cuda", name: "CUDA", level: 60 },
    { id: "html/css", name: "HTML/CSS", level: 95 },
    { id: "js", name: "JavaScript", level: 90 },
    { id: "sql", name: "SQL", level: 80 },
    { id: "git", name: "Git", level: 80 },
    { id: "vue", name: "VueJS", level: 85 },
    { id: "react", name: "ReactJS", level: 75 },
    { id: "php", name: "PHP", level: 70 },
  ],
  projects: [
    {
      id: "app1",
      name: "App 1",
      category: "app",
      filter: "app",
      cover: "assets/img/portfolio/portfolio-1.jpg",
      description: "SIGS is a platform for university students",
    },
    {
      id: "web3",
      name: "Web 3",
      category: "web",
      filter: "web",
      cover: "assets/img/portfolio/portfolio-2.jpg",
      description: "SIGS is a platform for university students",
    },
    {
      id: "app2",
      name: "App 2",
      category: "app",
      filter: "app",
      cover: "assets/img/portfolio/portfolio-3.jpg",
      description: "SIGS is a platform for university students",
    },
    {
      id: "card2",
      name: "Card 2",
      category: "card",
      filter: "card",
      cover: "assets/img/portfolio/portfolio-4.jpg",
      description: "SIGS is a platform for university students",
    },
    {
      id: "web2",
      name: "Web 2",
      category: "web",
      filter: "web",
      cover: "assets/img/portfolio/portfolio-5.jpg",
      description: "SIGS is a platform for university students",
    },
    {
      id: "app3",
      name: "App 3",
      category: "app",
      filter: "app",
      cover: "assets/img/portfolio/portfolio-6.jpg",
      description: "SIGS is a platform for university students",
    },
    {
      id: "card1",
      name: "Card 1",
      category: "card",
      filter: "card",
      cover: "assets/img/portfolio/portfolio-7.jpg",
      description: "SIGS is a platform for university students",
    },
    {
      id: "card3",
      name: "Card 3",
      category: "card",
      filter: "card",
      cover: "assets/img/portfolio/portfolio-8.jpg",
      description: "SIGS is a platform for university students",
    },
    {
      id: "web3",
      name: "Web 3",
      category: "web",
      filter: "web",
      cover: "assets/img/portfolio/portfolio-9.jpg",
      description: "SIGS is a platform for university students",
    },
  ],
};

// // Read the Excel file
// const workbook = XLSX.readFile("assets/files/data.xlsx");

// // Get the first sheet
// const worksheet = workbook.Sheets[sheetName];

// // Convert the sheet data to JSON format
// const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// console.log(jsonData);
