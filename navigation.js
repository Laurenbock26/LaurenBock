document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       PAGE INFORMATION
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
       TOP NAVIGATION
    ========================== */

    const navigation =
        document.getElementById("navigation");


    if (navigation) {

        navigation.innerHTML = `

            <header class="header">

                <div class="top-navigation">


                    <!-- LEFT SIDE OF NAME -->

                    <nav class="top-nav-left">
                    </nav>


                    <!-- NAME -->

                    <div class="site-name">

                        Lauren Bock

                    </div>


                    <!-- RIGHT SIDE OF NAME -->

                    <nav class="top-nav-right">
                    </nav>


                </div>

            </header>

        `;


        /* =========================
           LEFT NAVIGATION LINKS
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
           RIGHT NAVIGATION LINKS
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
