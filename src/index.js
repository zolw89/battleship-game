import Game from "./modules/game"

Game()

const newGameBtn = document.querySelector('.new-game')
const newGameScreen = document.querySelector('.restart-screen')

newGameBtn.addEventListener('click', () => {
    newGameScreen.classList.add('hide')
    Game()
})


