"use strict";

const currentYear = new Date().getFullYear();

const shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * To get a given social media link
 * @param {string} username
 * @param {string} social
 * @returns string
 */
const getSocialLink = (username, social) => {
  if (social == "github") return "https://github.com/" + username;
  if (social == "linkedin") return "https://www.linkedin.com/in/" + username;
  if (social == "twitter") return "https://twitter.com/" + username;
  // Throw an exception
  throw new Error("This social media has not been taken into account");
};

/**
 * To get a given github repository's url
 * @param {string} repoName
 * @param {string} username
 * @returns string
 */
const getRepo = (repoName, username = "olivieradjagba") => getSocialLink(username, "github") + "/" + repoName;

const navbar = [
  {
    id: "about",
    name: "About",
    active: true,
  },
  {
    id: "resume",
    name: "Resume",
    active: false,
  },
  {
    id: "portfolio",
    name: "Portfolio",
    active: false,
  },
  {
    id: "blog",
    name: "Blog",
    active: false,
  },
  {
    id: "contact",
    name: "Contact",
    active: false,
  },
];

const profileInfo = {
  surname: "Adjagba",
  firstname: "Olivier",
  fullname: function () {
    const { firstname, surname } = this;
    return `${firstname} ${surname}`;
  },
  email: "olivier@aims.ac.za",
  major: "Mathematical Modeling Engineering",
  title: { short: "Eng.", long: "Engineer" },
  // degree: "Mathematical Modeling", // | AI/ML Master Student",
  degree: "AI/ML",
  fulldegree: function () {
    const { degree, title } = this;
    return `${degree} ${title.long}`;
  },
  imgSrc: "assets/images/profile-img.png",
  social: [
    { id: "linkedin", name: "LinkedIn", icon: "logo-linkedin", url: getSocialLink("olivieradjagba", "linkedin") },
    { id: "github", name: "Github", icon: "logo-github", url: getSocialLink("olivieradjagba", "github") },
    { id: "twitter", name: "Twitter", icon: "logo-twitter", url: getSocialLink("olivier_adjagba", "twitter") },
  ],
  phone: {
    // mobile: "+27 071 432 1807",
    mobile: "+229 67 345 963",
    whatsapp: "+229 67 345 963",
  },
  address: {
    // country: "South Africa",
    // city: "Cape Town",
    // district: "Muizenberg",
    // street: "06 Melrose Road",
    // postalcode: "7945",
    country: "Benin",
    city: "Abomey-Calavi",
    // district: "Muizenberg",
    // street: "06 Melrose Road",
    // postalcode: "7945",
  },
  fulladdress: function (detailled = false) {
    const { address } = this;
    return detailled
      ? `${address.street}, ${address.district}, ${address.postalcode} ${address.city}, ${address.country}`
      : `${address.city}, ${address.country}`;
  },
  website: "olivieradjagba.github.io",
  getAbout: function () {
    // const { email, phone, whatsapp, address, website } = this;
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
      grade: "Distinction",
      // duration: { from: { month: 9, year: 2023 }, to: { month: 7, year: 2024 } },
      duration: { from: 2023, to: 2024 },
      ongoing: false,
      description:
        "<p>Founded by Google DeepMind, this prestigious program provided an advanced, cutting-edge education in artificial intelligence, focusing on applications in scientific fields. The curriculum was enriched by instruction from leading experts, including Max Welling, known for his groundbreaking work on Variational Autoencoders (VAEs) and Graph Neural Networks. This rigorous training allowed me to gain unparalleled knowledge in areas such as Computer Vision, Reinforcement Learning, Natural Language Processing (NLP), Bayesian Inference, CUDA/GPU programming, Cloud Computing, etc...</p>" +
        "<p>A highlight of my studies was the opportunity to work on a project titled <em class='topic'>Exploring the Geographical Links Between Environmental Factors and Population Density on Dengue Incidence Prediction</em>. This project was made possible thanks to CERI (Centre for Epidemic Response and Innovation) at Stellenbosch University. Under the guidance of Dr. Houriiyah Tegaly and Prof. José Lourenço, I developed a novel approach to predicting dengue cases using Convolutional LSTM. Unlike conventional methods that rely solely on information from a specific region, my approach incorporated data from surrounding areas, significantly enhancing the model's accuracy and predictive capability.</p>",
    },
    {
      id: "gmm",
      university: universities.find((u) => u.id === "unstim"),
      degree: "Engineering Degree",
      grade: "15.42/20",
      // duration: { from: { month: 11, year: 2018 }, to: { month: 12, year: 2021 } },
      duration: { from: 2018, to: 2021 },
      description:
        "<p>During this study, funded by a Beninese government scholarship, I gained extensive knowledge in applying mathematics to real-world problems. The program provided a solid foundation in areas such as mathematical modelling, computer science, numerical analysis, data science, optimization, and programming. This blend of disciplines equipped me with the tools to address complex challenges with analytical precision and computational efficiency.</p>" +
        "<p>At the end of my study, my dissertation was based on <em class='topic'>Modelling the relationship between damage of fall armyworm (Spodoptera frugiperda) and maize yield in Benin</em>. This project allowed me to delve into dynamic models like SIR, SEIR and others to describe the interactions between maize and pest populations and the effects of control measures. Through this work, I gained valuable insights into epidemiological models, which further solidified my understanding of how mathematical modelling can be applied to agriculture and beyond.</p>",
    },
    {
      id: "prepa",
      university: universities.find((u) => u.id === "unstim"),
      degree: "Preparatory Classes",
      grade: "74.85/100",
      // duration: { from: { month: 11, year: 2016 }, to: { month: 8, year: 2018 } },
      duration: { from: 2016, to: 2018 },
      description:
        "During my preparatory classes, I immersed myself in both pure and applied mathematics, delving deep into programming, numerical analysis, probabilities & statistics, and optimization, among other subjects. These classes were designed to bridge theory and application, ensuring a strong foundation across various disciplines. This rigorous preparation equipped me to confidently pursue any of the specialized engineering programs that followed, including Mathematical Modelling Engineering, Civil Engineering, and Energy and Process Engineering. Ultimately, I chose to focus on Mathematical Modelling Engineering, which aligned with my passion for applying mathematical concepts to solve real-world challenges.",
    },
  ],
  awards: [
    {
      id: "aims",
      title: "Google DeepMind Scholarship",
      letter: "https://drive.google.com/file/d/1Wq3sK7GKtF7JI_msKpvlsZDZ1URGh671/view?usp=sharing",
      description:
        "Awarded to the top 40 students across Africa who successfully passed the entrance exam, this scholarship supported my studies in the AI for Science structured master’s program at AIMS South Africa. It enabled me to gain advanced knowledge and skills in AI from leading experts in the field.",
      duration: { from: 2023, to: 2024 },
    },
    {
      id: "unstim",
      title: "Beninese Government Scholarship",
      description:
        "Granted to the top 60 students who excelled in the entrance exam for the preparatory classes, this scholarship covered five years of study, including two years of preparatory classes and three years of specialization in engineering. It provided me with a strong foundation in mathematical modeling, computer science, and engineering.",
      duration: { from: 2016, to: 2021 },
    },
  ],
  experience: [
    {
      id: "cosit",
      company: "COSIT Benin",
      position: "Web Front-end developer",
      duration: { from: 2022, to: 2023 },
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
      duration: { from: 2021, to: 2022 },
      description: "Bio-statistics analysis.", //and web development.",
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
      duration: { from: 2021, to: 2021 },
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
    { id: "r", name: "R", level: 75 },
    { id: "matlab", name: "MATLAB", level: 75 },
    { id: "c/c++/cuda", name: "C/C++/CUDA", level: 60 },
    { id: "keras", name: "Keras", level: 80 },
    { id: "pytorch", name: "Pytorch", level: 70 },
    { id: "jax", name: "JAX", level: 60 },
    { id: "sklearn", name: "Scikit-Learn", level: 75 },
    { id: "gcp", name: "Google Cloud Computing", level: 50 },
    { id: "html/css", name: "HTML/CSS", level: 95 },
    { id: "js", name: "JavaScript", level: 90 },
    { id: "sql", name: "SQL", level: 80 },
    { id: "git", name: "Git/GitHub", level: 70 },
    { id: "vue", name: "VueJS", level: 85 },
    { id: "react", name: "ReactJS", level: 75 },
    { id: "php", name: "PHP", level: 70 },
  ],

  projects: [
    {
      id: "bird-cnn",
      title: "Automated Detection of Bird presence using CNN",
      category: "Environment",
      source: getRepo("cnn-bird-presence-absence"),
      languages: ["python"],
      description:
        "This project utilizes a deep learning approach to automatically determine whether a given vocalization originates from a bird. By leveraging Convolutional Neural Networks (CNNs), this model offers a powerful tool for environmental monitoring, aiding in biodiversity studies and conservation efforts.",
    },
    {
      id: "car-reid",
      title: "Vehicule Re-identification using Siamese Network model and Triplet Loss",
      category: "Others",
      source: getRepo("vehicule-reidentification"),
      languages: ["python"],
      description:
        "This project utilizes a Siamese Network and Triplet Loss, which helps the model to distinguish between vehicles by minimizing the distance between images of the same vehicle and maximizing the distance between different ones. This method enhances vehicle tracking accuracy in security and traffic systems.",
    },
    {
      id: "movilens",
      title: "MovieLens Recommender System with Parallelized ALS Optimization",
      category: "Others",
      source: getRepo("aml-project"),
      languages: ["python"],
      description:
        "This project implements a collaborative filtering recommender system using the MovieLens dataset. It employs Parallelized Alternating Least Squares (ALS), a matrix factorization technique optimized for scalability. By running computations in parallel, this method efficiently handles large datasets, providing personalized movie recommendations based on user preferences.",
    },
  ],
};

const aboutInfo = {
  interests: [
    {
      id: "health",
      title: "Innovative Healthcare Solutions",
      icon: "./assets/icons/healthcare1.svg",
      description: "I am dedicated to developing cutting-edge AI solutions that enhance healthcare and make it more accessible for all.",
    },
    {
      id: "environment",
      title: "Environmental Sustainability",
      icon: "./assets/icons/environment1.svg",
      description: "I am passionate about creating innovative AI solutions to promote environmental sustainability and address climate challenges.",
    },
    {
      id: "agriculture",
      title: "Precision Agriculture",
      icon: "./assets/icons/agriculture2.svg",
      description: "I am committed to advancing AI-driven precision agriculture techniques to optimize farming practices and improve food security.",
    },
    {
      id: "education",
      title: "Inclusive Education",
      icon: "./assets/icons/education2.svg",
      description:
        "I am dedicated to improving education accessibility for all through AI, ensuring that everyone has the opportunity to learn and grow.",
    },
    {
      id: "community",
      title: "Empowering Communities",
      icon: "./assets/icons/community.svg",
      description: "I am passionate about leveraging AI to empower communities, helping them overcome challenges and improve their quality of life.",
    },
    {
      id: "ethics",
      title: "Ethical Considerations of AI",
      icon: "./assets/icons/ethics2.svg",
      description:
        "I am committed to using AI responsibly, ensuring that its applications are never used to cause harm but rather to uplift and benefit society.",
      // description:
      //   "I am committed to the responsible and ethical development of AI, ensuring that its benefits are accessible to everyone while minimizing potential harms.",
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
