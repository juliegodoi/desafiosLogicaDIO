// Adicione um evento de clique ao botão "MOSTRAR NÍVEL"
document.querySelector("#generateBtn").addEventListener("click", mostrarNivel);

function mostrarNivel() {
  // Obtenha o valor da entrada de HERO
  let heroName = document.querySelector("#inputTextName").value;
  // Obtenha o valor da entrada de XP
  let heroXP = parseFloat(document.querySelector("#inputTextXP").value);
  // Níveis de herói em um vetor
  let levels = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
  // Lógica para calcular o nível do herói
let heroLevel = "";

  if (heroXP >= 10001) {
    heroLevel = levels[7];
  } else if (heroXP >= 9001 && heroXP <= 10000) {
    heroLevel = levels[6];
  } else if (heroXP >= 8001 && heroXP <= 9000) {
    heroLevel = levels[5];
  } else if (heroXP >= 7001 && heroXP <= 8000) {
    heroLevel = levels[4];
  } else if (heroXP >= 6001 && heroXP <= 7000) {
    heroLevel = levels[3];
  } else if (heroXP >= 2001 && heroXP <= 5000) {
    heroLevel = levels[2];
  } else if (heroXP >= 1001 && heroXP <= 2000) {
    heroLevel = levels[1];
  } else if (heroXP <= 1000) {
    heroLevel = levels[0];
  }

// Atualizar o conteúdo do alerta com o resultado
document.querySelector("#heroNameResult").textContent = heroName;
document.querySelector("#heroLevelResult").textContent = heroLevel;

// Tornar o alerta visível
document.querySelector("#resultAlert").style.display = "block";
}