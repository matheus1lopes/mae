const messages = [
    "Você é a melhor mãe do mundo!",
    "Obrigado por ser uma mãe tão incrível.",
    "Estou muito grato por ter você em minha vida.",
    "você é a cola que mantém nossa família unida.",
    "Eu te amo mais do que palavras podem expressar."
];

const messageElement = document.getElementById("message");
const generateButton = document.getElementById("generate-message");

generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
});