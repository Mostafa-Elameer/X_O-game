export class StartGame {
    constructor(namesPlayers) {
        this.sectionWin = document.querySelector("#win")
        this.palyer1 = namesPlayers.name1
        this.palyer2 = namesPlayers.name2
        this.item = document.querySelectorAll(".item");
        this.turn = document.querySelector(".turn");
        this.flag = "o";
        console.log("im constractor start game");
    }

    StartGame() {
        for (let i = 0; i < this.item.length; i++) {
            this.item[i].addEventListener("click", (r) => {
                if (this.flag == "x" && this.item[i].innerHTML == "") {
                    this.item[i].innerHTML = "X";
                    this.item[i].classList.add("text-warning");
                    this.flag = "o";
                    this.turn.innerHTML = `TURN : "${this.palyer1}" player :  O`;
                    this.CompareToFindWhoTheWins()
                } else {
                    this.item[i].innerHTML = "O";
                    this.flag = "x";
                    this.turn.innerHTML = `TURN : "${this.palyer2}" player :  X`;
                    this.CompareToFindWhoTheWins()
                }
            })
        }

    }

    CompareToFindWhoTheWins() {
        for (let i = 0; i < this.item.length; i++) {

            if (
                (this.item[0].innerHTML == this.item[1].innerHTML && this.item[1].innerHTML == this.item[2].innerHTML && this.item[1].innerHTML != "")
                || (this.item[0].innerHTML == this.item[3].innerHTML && this.item[3].innerHTML == this.item[6].innerHTML && this.item[3].innerHTML != "")
                || (this.item[0].innerHTML == this.item[4].innerHTML && this.item[4].innerHTML == this.item[8].innerHTML && this.item[4].innerHTML != "")
                || (this.item[2].innerHTML == this.item[4].innerHTML && this.item[4].innerHTML == this.item[6].innerHTML && this.item[4].innerHTML != "")) {
                if (this.flag == "x") {
                    this.turn.innerHTML = `${this.palyer1} :  is winner`;
                    this.sectionWin.classList.remove("d-none")
                }
                else {
                    this.turn.innerHTML = `${this.palyer2} : is winner`; this.sectionWin.classList.remove("d-none")
                }
            }

            else if ((this.item[3].innerHTML == this.item[4].innerHTML && this.item[4].innerHTML == this.item[5].innerHTML && this.item[4].innerHTML != "")
                || (this.item[1].innerHTML == this.item[4].innerHTML && this.item[4].innerHTML == this.item[7].innerHTML && this.item[4].innerHTML != "")) {
                if (this.flag == "x") {
                    this.turn.innerHTML = `${this.palyer1} :  is winner`; this.sectionWin.classList.remove("d-none")
                }
                else {
                    this.turn.innerHTML = `${this.palyer2} : is winner`; this.sectionWin.classList.remove("d-none")
                }
            }

            else if ((this.item[6].innerHTML == this.item[7].innerHTML && this.item[7].innerHTML == this.item[8].innerHTML && this.item[7].innerHTML != "")
                || (this.item[2].innerHTML == this.item[5].innerHTML && this.item[5].innerHTML == this.item[8].innerHTML && this.item[5].innerHTML != "")) {
                if (this.flag == "x") {
                    this.turn.innerHTML = `${this.palyer1} :  is winner`; this.sectionWin.classList.remove("d-none")
                }
                else {
                    this.turn.innerHTML = `${this.palyer2} : is winner`; this.sectionWin.classList.remove("d-none")
                }
            }
        }
    }
}