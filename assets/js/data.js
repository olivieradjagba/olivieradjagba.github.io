"use strict";
let profile = {
  name: "Adjagba",
  firstname: "Olivier Mahumawon",
  fullname: `${this.firstname} ${this.name}`,
  email: "olivier@aims.ac.za",
  major: "Mathematical and Modeling Engineering",
  title: { short: "Eng.", long: "Engineer" },
  degree: "Mathematics and Modeling",
  fulldegree: `${this.degree} ${this.title.long}`,
  address: {
    country: "South Africa",
    city: "Cape Town",
    district: "Muizenberg",
    street: "06 Melrose Road",
    postalcode: "7945",
  },
};

export { profile };
