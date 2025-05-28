function verificarRespostas() {
    let pontuacao = 0;

    // Pergunta 1
    const p1 = document.querySelector('input[name="pergunta1"]:checked');
    if (p1 && p1.value === "HTML") {
        pontuacao++;
    }

    // Pergunta 2
    const p2 = document.getElementById("p2").value.trim().toLowerCase();
    if (p2 === "domínio" || p2 === "dominio") {
        pontuacao++;
    }

    // Pergunta 3
    const p3 = document.getElementById("p3").value;
    const senhaForte = /(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#\\$%\\^&\\*]).{8,}/;
    if (senhaForte.test(p3)) {
        pontuacao++;
    }

    // Pergunta 4
    const p4 = document.getElementById("p4").value;
    if (p4 === "1995") {
        pontuacao++;
    }

    document.getElementById("resultado").textContent = `Você acertou ${pontuacao} de 4 perguntas.`;
}
