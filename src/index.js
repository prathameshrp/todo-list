import "../assets/fonts/stylesheet.css"
import "./style.css"
import { Project } from "./scripts/projectHandler.js";

const projectMenuBtn = document.querySelector('#project-menu-btn');
const projectMenu  = document.querySelector('#side-column');
const mainArea = document.querySelector("#main-area");
projectMenuBtn.addEventListener("click", (e)=>
{
    e.stopPropagation();

    // projectMenu.style.width   = '0px';
    // projectMenu.style.position = "absolute";
    // projectMenu.style.gridColumn = '1/-1';
    // mainArea.style.gridColumn = '1/5';
    // projectMenu.style.left = "-100%";
})