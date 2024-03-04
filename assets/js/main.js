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
          <a href="${findSocial.url}" class="social-link">
          <ion-icon name="${findSocial.icon}"></ion-icon>
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
    // Media
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
          <h5 class="h4 univ-comp">${item.university.name}, ${item.university.city}, ${item.university.country}</h5>
          <span>${item.year.from} - ${((item.year.to < currentYear || !item.ongoing) && item.year.to) || "present"}</span>
          <p class="timeline-text">${item.description}</p>
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
          <span>${item.year.from} ${
        !item.ongoing && item.year.from == item.year.to ? "" : "- " + (((item.year.to < currentYear || !item.ongoing) && item.year.to) || "present")
      }</span>
          <p class="timeline-text">${item.description}</p>
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

    // Projects
    // const projectsEl = select("#portfolio .portfolio-container");
    // const { projects } = resumeInfo;
    // projectsEl.innerHTML = "";
    // projects.forEach((item) => {
    //   projectsEl.innerHTML += `
    //     <div class="col-lg-4 col-md-6 portfolio-item filter-${item.filter}">
    //       <div class="portfolio-wrap">
    //       <img src="${item.cover}" class="img-fluid" alt="" />
    //       <div class="portfolio-links">
    //       <a href="${item.cover}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${item.name}">
    //       <i class="bx bx-plus"></i>
    //       </a>
    //       <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
    //       </div>
    //       </div>
    //     </div>`;
    // });
  })();

  //? ---------------------------- END -------------------------
});
// });
