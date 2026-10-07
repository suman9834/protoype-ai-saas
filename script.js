/* ================= PAGE NAVIGATION ================= */

const navButtons =
    document.querySelectorAll("[data-page]");


navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const page =
            button.getAttribute("data-page");

        openPage(page);

    });

});


function openPage(pageName) {

    /* Hide all pages */

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    /* Show selected page */

    const selectedPage =
        document.getElementById(pageName);

    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    /* Update navigation */

    navButtons.forEach(button => {

        const page =
            button.getAttribute("data-page");

        button.classList.toggle(
            "active",
            page === pageName
        );

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* ================= CARBON CALCULATOR ================= */

function calculateCarbon() {

    const electricity =
        Number(
            document.getElementById("electricity").value
        ) || 0;


    const diesel =
        Number(
            document.getElementById("diesel").value
        ) || 0;


    const petrol =
        Number(
            document.getElementById("petrol").value
        ) || 0;


    const travel =
        Number(
            document.getElementById("travel").value
        ) || 0;


    /*
        DEMO EMISSION FACTORS

        Electricity:
        0.00070 tCO2e / kWh

        Diesel:
        0.00268 tCO2e / L

        Petrol:
        0.00231 tCO2e / L

        Travel:
        0.00017 tCO2e / km
    */


    const electricityEmission =
        electricity * 0.00070;


    const dieselEmission =
        diesel * 0.00268;


    const petrolEmission =
        petrol * 0.00231;


    const travelEmission =
        travel * 0.00017;


    const total =
        electricityEmission +
        dieselEmission +
        petrolEmission +
        travelEmission;


    document.getElementById(
        "carbonResult"
    ).innerText =
        total.toFixed(2);


    showToast(
        "Carbon footprint calculated successfully"
    );

}



/* ================= TOAST ================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.innerText =
        message;


    toast.style.display =
        "block";


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(() => {

            toast.style.display =
                "none";

        }, 2500);

}



/* ================= DEMO STARTUP LOG ================= */

console.log(
    "EcoLedger AI Prototype loaded successfully."
);