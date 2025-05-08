/**
 * Template Name: iPortfolio
 * Updated: Nov 17 2023 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", function () {
  // (function () {
  ("use strict");

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Check if the element is a collection
   * @param {HTMLElement | HTMLElement[]} el
   * @returns {boolean}
   */
  const isCollection = (el) => el instanceof NodeList || el instanceof HTMLCollection || Array.isArray(el);

  /**
   * Easy event listener function
   * @param {string} type
   * @param {string | HTMLElement | HTMLElement[]} el
   * @param {Function} handler
   * @param {boolean} all
   */
  const on = (el, event, handler, all = false) => {
    if (typeof el === "string") {
      el = select(el, all);
    } else {
      all = isCollection(el);
    }

    if (el) {
      if (all) {
        el = Array.from(el);
        el.forEach((e) => e.addEventListener(event, handler));
      } else {
        el.addEventListener(event, handler);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, handler) => {
    el.addEventListener("scroll", handler);
  };

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  //? -------- My own code to feed data on the website -------
  /**
   * Useful functions
   */
  const innerText = (els, text, props = null) => {
    if (isCollection(els)) {
      els.forEach((el) => {
        el.innerText = text;
        if (props)
          props.forEach((prop) => {
            el[prop.name] = prop.value;
          });
      });
    } else {
      els.innerText = text;
      if (props)
        props.forEach((prop) => {
          els[prop.name] = prop.value;
        });
    }
  };

  const innerHTML = (els, html) => {
    if (Array.isArray(els)) {
      els.forEach((el) => {
        el.innerHTML = html;
      });
    } else {
      els.innerHTML = html;
    }
  };

  const strCompare = (str1, str2) => !str1.localeCompare(str2, "en", { sensitivity: "base" });

  /**
   * Title
   */
  const title = `Olivier - Portfolio`;
  innerText(select("title"), title);

  /**
   * NavBar
   */
  // (function () {
  //   const navbarEl = select(".navbar-list");
  //   navbarEl.innerHTML = "";
  //   navbar.forEach((item) => {
  //     navbarEl.innerHTML += `
  //     <li class="navbar-item">
  //       <button class="navbar-link ${item.active ? "active" : ""}" data-nav-link>
  //         ${item.name}
  //       </button>
  //     </li>
  //     `;
  //   });

  //   // on("click", navbarEl.children, (el) => {
  //   //   el.preventDefault();
  //   //   el.classList.remove("active");
  //   //   this.classList.add("active");
  //   // });
  // })();

  /**
   * Profile
   */
  (function () {
    // Head
    headLinkEl = select("head > link.head-icon");
    if (headLinkEl) headLinkEl.setAttribute("href", profileInfo.imgSrc); // = profileInfo.imgSrc;
    // Hero
    innerText(select(".my-name", true), profileInfo.fullname());
    // Degree
    innerText(select(".my-degree", true), profileInfo.fulldegree());
    // Profile image
    const imgEls = select("img.my-profile", true);
    if (imgEls)
      imgEls.forEach((el) => {
        el.src = profileInfo.imgSrc;
        el.alt = profileInfo.fullname();
      });

    // Social links
    const socials = select(".sidebar-info_more .social-list");
    let dataSocialInfo = socials.getAttribute("data-social-info").split(",");
    let socialContent = "";
    dataSocialInfo.forEach((info) => {
      info = info.trim();
      let findSocial = profileInfo.social.find((item) => strCompare(item.id, info));
      if (findSocial) {
        socialContent += `
          <li class="social-item">
            <a href="${findSocial.url}" class="social-link" target="_blank" rel="noopener">
              <ion-icon ${findSocial.icon ? "name=" + findSocial.icon : "src=" + findSocial.src}></ion-icon>
            </a>
          </li>`;
      }
    });
    innerHTML(socials, socialContent);

    // About
    const aboutEl = select(".sidebar-info_more .contacts-list");
    const aboutInfo = profileInfo.getAbout();
    let dataContactInfo = aboutEl.getAttribute("data-contact-info").split(",");
    let aboutContent = "";
    dataContactInfo.forEach((info) => {
      info = info.trim();
      let findInfo = aboutInfo.find((item) => strCompare(item.id, info));
      if (findInfo) {
        aboutContent += `
          <li class="contact-item">
            <div class="icon-box">
            <ion-icon name="${findInfo.icon}"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-title">${findInfo.name}</p>
              <span class="${findInfo.class}">${findInfo.text || ""}</span>
            </div>
          </li>`;
      }
    });
    innerHTML(aboutEl, aboutContent);

    // Website
    websiteEls = select(".my-website", true);
    innerHTML(websiteEls, `<a href="https://${profileInfo.website}" class="contact-link" target="_blank">${profileInfo.website}</a>`);
    // Email
    const emailEls = select(".my-email", true);
    innerHTML(emailEls, `<a href="mailto:${profileInfo.email}" class="contact-link" target="_blank">${profileInfo.email}</a>`);
    // Phone
    const phoneEls = select(".my-phone", true);
    innerHTML(phoneEls, `<a href="tel:${profileInfo.phone.mobile}" class="contact-link" target="_blank">${profileInfo.phone.mobile}</a>`);
    const whatsappEls = select(".my-whatsapp", true);
    innerHTML(whatsappEls, `<a href="https://wa.link/4sg5dd" class="contact-link" target="_blank">${profileInfo.phone.whatsapp}</a>`);
    // Address
    const addressEls = select(".my-address", true);
    innerHTML(addressEls, `<address>${profileInfo.fulladdress()}</address>`);
    const locationEls = select(".my-location", true);
    innerHTML(locationEls, `<address>${profileInfo.fulladdress(true)}</address>`);
    // CV
  })();

  /**
   * About
   */
  (function () {
    // Interests
    const interestsEl = select(".service-list");
    const { interests } = aboutInfo;
    interestsEl.innerHTML = "";
    interests.forEach((item) => {
      interestsEl.innerHTML += `
        <li class="service-item">
          <div class="service-icon-box">
            <img src="${item.icon}" alt="${item.title}" />
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">${item.title}</h4>
            <p class="service-item-text text-justify">${item.description}</p>
          </div>
        </li>`;
    });
  })();

  /**
   * Resume
   */
  (function () {
    // Education
    const educationEl = select(".timeline-list.education");
    const { education } = resumeInfo;
    educationEl.innerHTML = "";
    education.forEach((item) => {
      educationEl.innerHTML += `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${item.degree}</h4>
          <h5 class="h4 univ-comp">${item.university.name} (${item.university.shortname}), ${item.university.city}, ${item.university.country}</h5>
          <span>${item.duration.from} - ${((item.duration.to < currentYear || !item.ongoing) && item.duration.to) || "present"}</span>
          <div class="timeline-text text-justify">${item.description}</div>
        </li>`;
    });

    // Awards
    const awardsEl = select(".timeline-list.awards");
    const { awards } = resumeInfo;
    awardsEl.innerHTML = "";
    awards.forEach((item) => {
      awardsEl.innerHTML += `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${item.title} ${
        item.letter
          ? '<span><a href="' +
            item.letter +
            '" target="_blank" title="Offer letter"><ion-icon name="link-outline" class="h4 link"></ion-icon></a></span>'
          : ""
      }</h4>
          <span>${item.duration.from} - ${((item.duration.to < currentYear || !item.ongoing) && item.duration.to) || "present"}</span>
          <div class="timeline-text text-justify">${item.description}</div>
        </li>`;
    });

    // Experience
    const experienceEl = select(".timeline-list.experience");
    const { experience } = resumeInfo;
    experienceEl.innerHTML = "";
    experience.forEach((item) => {
      experienceEl.innerHTML += `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${item.position}</h4>
          <h5 class="h4 univ-comp">${item.company}</h5>
          <span>${item.duration.from} ${
        !item.ongoing && item.duration.from == item.duration.to
          ? ""
          : "- " + (((item.duration.to < currentYear || !item.ongoing) && item.duration.to) || "present")
      }</span>
          <p class="timeline-text text-justify">${item.description}</p>
        </li>`;
    });

    // Skills
    const skillsEl = select(".skills-list");
    const { skills } = resumeInfo;
    let dataSkills = skillsEl.getAttribute("data-skills").split(",");
    let skillContent = "";
    dataSkills.forEach((skill) => {
      skill = skill.trim();
      let findSkill = skills.find((item) => item.id == skill);
      if (findSkill) {
        skillContent += `
            <li class="skills-item">
              <div class="title-wrapper">
                <h5 class="h5">${findSkill.name}</h5>
                <data value="${findSkill.level}">${findSkill.level}%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: ${findSkill.level}%"></div>
              </div>
            </li>`;
      }
    });
    skillsEl.innerHTML = skillContent;
  })();

  /**
   * Projects
   */
  (function () {
    const projectsEl = select(".project-list");
    const { projects } = resumeInfo;
    projectsEl.innerHTML = "";
    projects.forEach((item) => {
      // <p class="project-category">${item.category}</p>
      projectsEl.innerHTML += `
        <li class="project-item active" data-filter-item data-category="${item.category}">
          <div class="project-content-box">
            <h4 class="h4 project-item-title">${item.title}</h4>
            <p class="project-item-text text-justify">${item.description}</p>
          </div>
          <div class="project-item-extra">
            <div class="project-item-tags">
              <a href="${item.source}" target="_blank">
                <img src="https://img.shields.io/badge/GitHub-Repo-FFBC5E?logo=github" alt="GitHub Repo">
              </a>
              <div class="languages">${item.languages
                .map(
                  (language) =>
                    `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language}/${language}-original.svg" alt="${language}" width="20">`
                )
                .join("")}
              </div>
            </div>
          </div>
        </li>`;
    });
  })();

  //? ---------------------------- END -------------------------
});
// });
