/* =========================================================
   NAVIGATION.JS
   Reusable navigation system for all website pages
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       FIND THE NAVIGATION CONTAINER
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

       Change the names and filenames here if needed.
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
       SECONDARY NAVIGATION LINKS
       ===================================================== */

    const secondaryLinks = [

        {
            name: "Resume",
            url: "resume.html"
        },

        {
            name: "Skills",
            url: "skills.html"
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

        <!-- LOGO + HEADER DESCRIPTION -->

        <div class="header-top">

            <div class="logo-area">

                <a
                    href="index.html"
                    aria-label="Home"
                >

                    Lauren Bock

                </a>

            </div>


            <div class="header-info">

                <p>

                    Welcome to my personal portfolio website.
                    Explore my education, professional experience,
                    projects, skills, and career goals.

                </p>

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



        <!-- SECONDARY NAVIGATION -->

        <nav
            class="secondary-nav"
            aria-label="Secondary navigation"
        >

            <ul id="secondary-navigation">

            </ul>

        </nav>

    `;



    /* =====================================================
       ADD HEADER TO PAGE
       ===================================================== */

    navigationContainer.appendChild(header);



    /* =====================================================
       CREATE PRIMARY NAVIGATION
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
       CREATE SECONDARY NAVIGATION
       ===================================================== */

    const secondaryNav =
        document.getElementById(
            "secondary-navigation"
        );


    secondaryLinks.forEach(function (link) {


        const listItem =
            document.createElement("li");


        const anchor =
            document.createElement("a");


        anchor.href =
            link.url;


        anchor.textContent =
            link.name;


        listItem.appendChild(anchor);


        secondaryNav.appendChild(listItem);

    });



    /* =====================================================
       DETERMINE CURRENT PAGE
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
        .querySelectorAll(
            ".primary-nav a, .secondary-nav a"
        )
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
