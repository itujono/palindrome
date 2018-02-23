import bulma from "bulma"
import "./style.scss"
import checkPalindrome from "./script"
import { debounce } from "lodash"



const input = document.querySelector("#input")
const result = document.querySelector("#result")

const button = document.querySelector(".stack-info a")
const modalInfo = document.querySelector(".modal-info")

input.addEventListener("keyup", debounce(e => {
    if (e.target.value) {

        if (checkPalindrome(e.target.value)) {
            result.innerHTML = "That's a palindrome! Cool! &#9749;"
            result.style.color = "#29ea65"
        } else {
            result.innerHTML = "Well, this one is obviously not. &#9977;"
            result.style.color = "red"
        }

    } else {
        result.innerText = "Waiting..."
        result.style.color = "#ddd"
    }
}, 500))


button.addEventListener("click", e => {
    modalInfo.style.display = modalInfo.style.display == "none" ? "block" : "none"
})