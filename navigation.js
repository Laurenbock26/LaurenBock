document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       LEFT NAVIGATION LINKS
    ========================== */

    const leftPages = [

        {
            name: "Home",
            link: "index.html"
        },

        {
            name: "About Me",
            link: "about.html"
        },

        {
            name: "Education",
            link: "education.html"
        }

    ];


    /* =========================
       RIGHT NAVIGATION LINKS
    ========================== */

    const rightPages = [

        {
            name: "Experience",
            link: "experience.html"
        },

        {
            name: "Projects",
            link: "projects.html"
        },

        {
            name: "Contact",
            link: "contact.html"
        }

    ];


    /* =========================
       CURRENT PAGE
    ========================== */

    let currentPage =
        window.location.pathname
        .split("/")
        .pop();


    if (currentPage === "") {

        currentPage = "index.html";

    }


    /* =========================
       CREATE TOP NAVIGATION
    ========================== */

    const navigation =
        document.getElementById("navigation");


    if (navigation) {

        navigation.innerHTML = `

            <header class="header">

                <div class="top-navigation">


                    <nav class="top-nav-left">
                    </nav>


                    <div class="site-name">
                        Lauren Bock
                    </div>


                    <nav class="top-nav-right">
                    </nav>


                </div>

            </header>

        `;


        /* =========================
           LEFT LINKS
        ========================== */

        const leftTopNav =
            document.querySelector(
                ".top-nav-left"
            );


        leftPages.forEach(function (page) {

            const link =
                document.createElement("a");


            link.href =
                page.link;


            link.textContent =
                page.name;


            if (
                currentPage === page.link
            ) {

                link.classList.add(
                    "active"
                );

            }


            leftTopNav.appendChild(link);

        });


        /* =========================
           RIGHT LINKS
        ========================== */

        const rightTopNav =
            document.querySelector(
                ".top-nav-right"
            );


        rightPages.forEach(function (page) {

            const link =
                document.createElement("a");


            link.href =
                page.link;


            link.textContent =
                page.name;


            if (
                currentPage === page.link
            ) {

                link.classList.add(
                    "active"
                );

            }


            rightTopNav.appendChild(link);

        });

    }


    /* =========================
       FOOTER YEAR
    ========================== */

    const year =
        document.getElementById(
            "current-year"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
