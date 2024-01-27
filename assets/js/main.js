/**
 * Template Name: iPortfolio
 * Updated: Nov 17 2023 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
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
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
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
    if (els) {
      if (Array.isArray(els)) {
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
    }
  };

  const innerHTML = (els, html) => {
    if (els) {
      if (Array.isArray(els)) {
        els.forEach((el) => {
          el.innerHTML = html;
        });
      } else {
        els.innerHTML = html;
      }
    }
  };

  const strCompare = (str1, str2) => !str1.localeCompare(str2, "en", { sensitivity: "base" });

  /**
   * Title
   */
  const title = `Olivier - Portfolio`;
  innerText(select("title"), title);

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
    if (socials) {
      let dataSocialInfo = socials.getAttribute("data-social-info").split(",");
      let html = "";
      dataSocialInfo.forEach((info) => {
        info = info.trim();
        let findSocial = profileInfo.social.find((item) => strCompare(item.id, info));
        if (findSocial) {
          html += `
            <li class="social-item">
              <a href="${findSocial.url}" class="social-link">
                <ion-icon name="${findSocial.icon}"></ion-icon>
              </a>
            </li>`;
        }
      });
      innerHTML(socials, html);
    }
    // About
    const aboutEl = select(".sidebar-info_more .contacts-list");
    if (aboutEl) {
      const aboutInfo = profileInfo.getAbout();
      let dataContactInfo = aboutEl.getAttribute("data-contact-info").split(",");
      let html = "";
      dataContactInfo.forEach((info) => {
        info = info.trim();
        let findInfo = aboutInfo.find((item) => strCompare(item.id, info));
        if (findInfo) {
          html += `
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
      innerHTML(aboutEl, html);
    }
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
    // Media
  })();

  /**
   * Resume
   */
  (function () {
    // Education
    const educationEl = select("#resume .education");
    if (educationEl) {
      const { education } = resumeInfo;
      educationEl.innerHTML = "";
      education.forEach((item) => {
        educationEl.innerHTML += `
        <div class="resume-item">
          <h4>${item.degree}</h4>
          <h5>${item.year.from} - ${((item.year.to < currentYear || !item.ongoing) && item.year.to) || "present"}</h5>
          <p><em>${item.university.name}, ${item.university.city}, ${item.university.country}</em></p>
          <p>${item.description}</p>
        </div>`;
      });
    }
    // Experience
    const experienceEl = select("#resume .experience");
    if (experienceEl) {
      const { experience } = resumeInfo;
      experienceEl.innerHTML = "";
      experience.forEach((item) => {
        experienceEl.innerHTML += `
        <div class="resume-item">
          <h4>${item.position}</h4>
          <h5>${item.year.from} ${
          !item.ongoing && item.year.from == item.year.to ? "" : "- " + (((item.year.to < currentYear || !item.ongoing) && item.year.to) || "present")
        }</h5>
          <p><em>${item.company}</em></p>
          <p>${item.description}</p>
          <ul>${(item.achievements.map((ach) => "<li>" + ach + "</li>") || []).join("")}</ul>
          </ul>
        </div>`;
      });
    }
    // Skills
    const skillsEls = select(".skills-content .my-skills", true);
    if (skillsEls) {
      const { skills } = resumeInfo;
      skillsEls.forEach((el) => {
        let dataSkills = el.getAttribute("data-skills").split(",");
        let html = "";
        dataSkills.forEach((skill) => {
          skill = skill.trim();
          let findSkill = skills.find((item) => item.id == skill);
          if (findSkill) {
            html += `
            <div class="progress">
              <span class="skill">${findSkill.name}<i class="val">${findSkill.level}%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="${findSkill.level}" aria-valuemin="0" aria-valuemax="${findSkill.level}"></div>
              </div>
            </div>`;
          }
        });
        el.innerHTML = html;
      });
    }
    // Projects
    /*<div class="col-lg-4 col-md-6 portfolio-item filter-app">
      <div class="portfolio-wrap">
        <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
        <div class="portfolio-links">
          <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1">
            <i class="bx bx-plus"></i>
          </a>
          <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>*/
    const projectsEl = select("#portfolio .portfolio-container");
    if (projectsEl) {
      const { projects } = resumeInfo;
      projectsEl.innerHTML = "";
      projects.forEach((item) => {
        projectsEl.innerHTML += `
        <div class="col-lg-4 col-md-6 portfolio-item filter-${item.filter}">
          <div class="portfolio-wrap">
            <img src="${item.cover}" class="img-fluid" alt="" />
            <div class="portfolio-links">
              <a href="${item.cover}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${item.name}">
                <i class="bx bx-plus"></i>
              </a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>`;
      });
    }
  })();

  //? ---------------------------- END -------------------------
})();
