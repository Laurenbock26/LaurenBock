document.addEventListener("DOMContentLoaded", function () {

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


    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    if (currentPage === "") {

        currentPage = "index.html";

    }


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

                link.classList.add("active");

            }


            leftTopNav.appendChild(link);

        });


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

                link.classList.add("active");

            }


            rightTopNav.appendChild(link);

        });

    }

});
