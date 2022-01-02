// this is the entry so we will import style(sass), assets(as imgs and fonts)
import "./styles/style.scss";
import "./styles/fonts/Montserrat-Medium.woff"
import submitHandler from "./js/submitHandler";

// adding event listener to submit button
const submitBTN = document.querySelector(".btn-submit");
submitBTN.addEventListener("click", submitHandler)