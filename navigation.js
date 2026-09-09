document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       PAGE INFORMATION
    ========================= */

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


    const allPages = [
        ...leftPages,
        ...rightPages
    ];


    /* =========================
       CURRENT PAGE
    ========================= */

    let currentPage =
        window.location.pathname
        .split("/")
        .pop();


    if (currentPage === "") {
        currentPage = "index.html";
    }


    /* =========================
       TOP NAVIGATION
    ========================= */

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
           LEFT TOP NAVIGATION
        ========================= */

        const leftTopNav =
            document.querySelector(
                ".top-nav-left"
            );


        leftPages.forEach(function (page) {

            const link =
                document.createElement("a");


            link.href = page.link;

            link.textContent = page.name;


            if (currentPage === page.link) {

                link.classList.add("active");

            }


            leftTopNav.appendChild(link);

        });


        /* =========================
           RIGHT TOP NAVIGATION
        ========================= */

        const rightTopNav =
            document.querySelector(
                ".top-nav-right"
            );


        rightPages.forEach(function (page) {

            const link =
                document.createElement("a");


            link.href = page.link;

            link.textContent = page.name;


            if (currentPage === page.link) {

                link.classList.add("active");

            }


            rightTopNav.appendChild(link);

        });

    }


    /* =========================
       LEFT SIDE NAVIGATION
       
       NO "PRIMARY NAVIGATION"
       HEADING
    ========================= */

    const leftNavigation =
        document.getElementById(
            "left-navigation"
        );


    if (leftNavigation) {

        let leftHTML = `
            <ul>
        `;


        allPages.forEach(function (page) {

            const activeClass =
                currentPage === page.link
                ? "active"
                : "";


            leftHTML += `

                <li>

                    <a
                        href="${page.link}"
                        class="${activeClass}"
                    >
                        ${page.name}
                    </a>

                </li>

            `;

        });


        leftHTML += `
            </ul>
        `;


        leftNavigation.innerHTML =
            leftHTML;

    }


    /* =========================
       FOOTER YEAR
    ========================= */

    const year =
        document.getElementById(
            "current-year"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
