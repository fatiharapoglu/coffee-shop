import { callHome } from "./home";
import { callMenu } from "./menu";
import { callContact } from "./contact";

const htmlDOM = document.querySelector("#content");
htmlDOM.innerHTML = callHome(); // initial landing page loading

const changeTabs = () => {
    let navTabs = htmlDOM.querySelector(".nav").querySelectorAll("a");
    navTabs.forEach ( tab => {
        tab.addEventListener("click", (event) => {
            if (event.target.classList.contains("active")) return;
            if (event.target.textContent == "Home") {
                htmlDOM.innerHTML = callHome();
                changeTabs();
            }
            else if (event.target.textContent == "Menu") {
                htmlDOM.innerHTML = callMenu();
                changeTabs();
            }
            else if (event.target.textContent == "Contact") {
                htmlDOM.innerHTML = callContact();
                disableSubmit();
                changeTabs();
            }
        })
    })
};

changeTabs();

const disableSubmit = () => {
    let submitDOM = htmlDOM.querySelector("#submit");
    submitDOM.addEventListener("click", event => {
        event.preventDefault();
    })
};