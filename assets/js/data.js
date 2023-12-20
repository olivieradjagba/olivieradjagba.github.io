"use strict";
let profileInfo = {
  surname: "Adjagba",
  firstname: "Olivier",
  fullname: function () {
    const { firstname, surname } = this;
    return `${firstname} ${surname}`;
  },
  email: "olivier@aims.ac.za",
  major: "Mathematical and Modeling Engineering",
  title: { short: "Eng.", long: "Engineer" },
  degree: "Mathematics and Modeling",
  fulldegree: function () {
    const { degree, title } = this;
    return `${degree} ${title.long}`;
  },
  imgSrc: "assets/img/profile-img.HEIC",
  social: [
    { name: "LinkedIn", icon: "bx bxl-linkedin", class: "linkedin", url: "https://www.linkedin.com/in/olivieradjagba" },
    { name: "Github", icon: "bx bxl-github", class: "github", url: "https://github.com/olivieradjagba" },
    { name: "Twitter", icon: "bx bxl-twitter", class: "twitter", url: "https://twitter.com/olivier_adjagba" },
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
  website: "https://olivieradjagba.github.io",
  getAbout: function () {
    const { website } = this;
    return [
      { id: "website", name: "Website", class: "my-website" },
      { id: "degree", name: "Degree", text: "Master" },
      { id: "address", name: "Address", class: "my-address" },
      { id: "phone", name: "Phone", class: "my-phone" },
      { id: "email", name: "Email", class: "my-email" },
      { id: "whatsapp", name: "Whatsapp", class: "my-whatsapp" },
    ];
  },
};

// // Read the Excel file
// const workbook = XLSX.readFile("assets/files/data.xlsx");

// // Get the first sheet
// const worksheet = workbook.Sheets[sheetName];

// // Convert the sheet data to JSON format
// const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// console.log(jsonData);
