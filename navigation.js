/* =========================================================
   navigation.js

   Creates the reusable navigation on every page.

   Contains ONLY:
   - Logo
   - Primary navigation

   There is NO secondary navigation.
   There is NO top-middle description.
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       FIND NAVIGATION CONTAINER
       ===================================================== */

    const navigationContainer =
        document.getElementById("site-navigation");


    if (!navigationContainer) {

        console.error(
            "ERROR: #site-navigation was not found."
        );

        return;
    }



    /* =====================================================
       PRIMARY NAVIGATION

       Change these filenames if your pages
       have different names.
       ===================================================== */

    const navigationLinks = [

        {
            name: "About Me",
            url: "index.html"
        },

        {
            name: "Education",
            url: "education.html"
        },

        {
            name: "Professional Experience",
            url: "experience.html"
        },

        {
            name: "Projects",
            url: "projects.html"
        },

        {
            name: "Contact",
            url: "contact.html"
        }

    ];



    /* =====================================================
       CREATE HEADER
       ===================================================== */

    const header =
        document.createElement("header");


    header.className =
        "site-header";


    /* =====================================================
       HEADER HTML

       NOTICE:
       There is ONLY the logo.

       NO description.
       NO words in the middle.
       NO secondary navigation.
       ===================================================== */

    header.innerHTML = `

        <div class="logo-row">

            <a
                href="index.html"
                class="logo"
            >

                Lauren Bock

            </a>

        </div>


        <nav
            class="primary-navigation"
            aria-label="Primary Navigation"
        >

            <ul id="primary-navigation-list">

            </ul>

        </nav>

    `;



    /* =====================================================
       ADD HEADER TO PAGE
       ===================================================== */

    navigationContainer.appendChild(header);



    /* =====================================================
       CREATE NAVIGATION LINKS
       ===================================================== */

    const navigationList =
        document.getElementById(
            "primary-navigation-list"
        );


    navigationLinks.forEach(function (link) {


        const listItem =
            document.createElement("li");


        const anchor =
            document.createElement("a");


        anchor.href =
            link.url;


        anchor.textContent =
            link.name;


        listItem.appendChild(anchor);


        navigationList.appendChild(listItem);

    });



    /* =====================================================
       FIND CURRENT PAGE
       ===================================================== */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    /* GitHub Pages sometimes gives an empty
       pathname for the home page. */

    if (
        currentPage === ""
        ||
        currentPage === "/"
    ) {

        currentPage =
            "index.html";

    }



    /* =====================================================
       HIGHLIGHT CURRENT PAGE
       ===================================================== */

    const allNavigationLinks =
        document.querySelectorAll(
            ".primary-navigation a"
        );


    allNavigationLinks.forEach(function (link) {


        const linkPage =
            link
                .getAttribute("href")
                .split("/")
                .pop();


        if (linkPage === currentPage) {

            link.classList.add("active");

            link.setAttribute(
                "aria-current",
                "page"
            );

        }

    });

});
