document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       NAVIGATION LINKS
       ========================= */

    const navigationLinks = [
        {
            name: "About Me",
            page: "index.html"
        },
        {
            name: "Education",
            page: "education.html"
        },
        {
            name: "Professional Experience",
            page: "experience.html"
        },
        {
            name: "Projects",
            page: "projects.html"
        },
        {
            name: "Contact",
            page: "contact.html"
        }
    ];


    /* =========================
       FIND CURRENT PAGE
       ========================= */

    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }


    /* =========================
       TOP NAVIGATION
       ========================= */

    const navigationContainer =
        document.getElementById("site-navigation");

    if (navigationContainer) {

        const header = document.createElement("header");
        header.className = "site-header";

        /* Logo section ONLY */
        const logoRow = document.createElement("div");
        logoRow.className = "logo-row";

        const logo = document.createElement("div");
        logo.className = "logo";
        logo.textContent = "Your Name";

        logoRow.appendChild(logo);


        /* Primary navigation */
        const nav = document.createElement("nav");
        nav.className = "primary-navigation";

        const navList = document.createElement("ul");

        navigationLinks.forEach(function (link) {

            const listItem = document.createElement("li");

            const anchor = document.createElement("a");

            anchor.href = link.page;
            anchor.textContent = link.name;

            if (currentPage === link.page) {
                anchor.classList.add("active");
            }

            listItem.appendChild(anchor);
            navList.appendChild(listItem);
        });

        nav.appendChild(navList);

        header.appendChild(logoRow);
        header.appendChild(nav);

        navigationContainer.appendChild(header);
    }


    /* =========================
       LEFT NAVIGATION
       ========================= */

    const leftNavigation =
        document.getElementById("left-navigation");

    if (leftNavigation) {

        const title = document.createElement("h2");
        title.textContent = "Navigation";

        const list = document.createElement("ul");

        navigationLinks.forEach(function (link) {

            const listItem = document.createElement("li");

            const anchor = document.createElement("a");

            anchor.href = link.page;
            anchor.textContent = link.name;

            if (currentPage === link.page) {
                anchor.classList.add("active");
            }

            listItem.appendChild(anchor);
            list.appendChild(listItem);
        });

        leftNavigation.appendChild(title);
        leftNavigation.appendChild(list);
    }


    /* =========================
       CURRENT YEAR
       ========================= */

    const yearElement =
        document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
