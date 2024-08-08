import { StartGame } from "./startGame.js";
export class WelcomePage {
    constructor() {
        // ====== GET NAME PLAYERS
        this.namePlayers = document.querySelector(".namePlayers");
        this.Game = document.querySelector(".Game");
        this.firstPlayer = document.getElementById("firstPlayer");
        this.secondPlayer = document.getElementById("secondPlayer");
        this.btnStart = document.getElementById("start");
        console.log("im constractor welcome page");

    }

    startApp() {
        this.btnStart.addEventListener("click", (s) => {
            let palyers = {
                name1: this.firstPlayer.value,
                name2: this.secondPlayer.value
            }
            this.namePlayers.classList.add("d-none");
            this.Game.classList.remove("d-none");
            this.startGame = new StartGame(palyers)
            this.startGame.StartGame()

            localStorage.setItem("page", "/js/startGame.js")
        })
    }


}
