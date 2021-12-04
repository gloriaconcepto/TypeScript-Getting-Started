function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to mmk multimath! starting new game';
}
document.getElementById('startGame').addEventListener('click', startGame);
