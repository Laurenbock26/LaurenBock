/* =========================================================
   NAVIGATION.JS

   Reusable navigation system for all website pages.

   This creates:
   - Logo
   - Primary navigation

   Secondary navigation has been removed.
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       FIND NAVIGATION CONTAINER
       ===================================================== */

    const navigationContainer =
        document.getElementById("site-navigation");


    if (!navigationContainer) {

        console.error(
            "Navigation container #site-navigation was not found."
        );

        return;
    }



    /* =====================================================
       PRIMARY NAVIGATION LINKS

       Change the filenames if your GitHub pages
       use different names.
       ===================================================== */

    const primaryLinks = [

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


    header.innerHTML = `

        <!-- LOGO -->

        <div class="header-top">

            <div class="logo-area">

                <a
                    href="index.html"
                    aria-label="Home"
                >

                    Lauren Bock

                </a>

            </div>

        </div>


        <!-- PRIMARY NAVIGATION -->

        <nav
            class="primary-nav"
            aria-label="Primary navigation"
        >

            <ul id="primary-navigation">

            </ul>

        </nav>

    `;



    /* =====================================================
       ADD HEADER TO PAGE
       ===================================================== */

    navigationContainer.appendChild(header);



    /* =====================================================
       CREATE PRIMARY NAVIGATION LINKS
       ===================================================== */

    const primaryNav =
        document.getElementById(
            "primary-navigation"
        );


    primaryLinks.forEach(function (link) {


        const listItem =
            document.createElement("li");


        const anchor =
            document.createElement("a");


        anchor.href =
            link.url;


        anchor.textContent =
            link.name;


        listItem.appendChild(anchor);


        primaryNav.appendChild(listItem);

    });



    /* =====================================================
       FIND CURRENT PAGE
       ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
        || "index.html";



    /* =====================================================
       HIGHLIGHT CURRENT PAGE
       ===================================================== */

    document
        .querySelectorAll(".primary-nav a")
        .forEach(function (link) {


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
