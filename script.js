document.addEventListener("DOMContentLoaded", () => {
    const getStartedButton = document.querySelector(".get-started");
    const cloudsOverlay = document.getElementById("clouds-overlay");

    getStartedButton.addEventListener("click", () => {
        cloudsOverlay.style.opacity = "1"; // Inicia a animação de opacidade
        setTimeout(() => {
            window.location.href = "index2.html"; // Redireciona após a animação
        }, 3000); // 3 segundos para completar a transição
    });
});

// Função para abrir e fechar o menu lateral
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}
