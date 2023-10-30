// Adicione um evento de clique ao botão "MOSTRAR"
document.querySelector("#generateBtn").addEventListener("click", mostrarSaldo);

function mostrarSaldo() {
  // Obtenha o valor da entrada de vitórias
  let victories = parseInt(document.querySelector("#inputVictories").value);
  // Obtenha o valor da entrada de derrotas
  let defeats = parseInt(document.querySelector("#inputDefeats").value);

  // Calcule o saldo de Rankeadas
  let rankedBalance = victories - defeats;

  // Níveis de jogador
  let levels = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

  // Lógica para mostrar output
  let heroLevel = "";

  if (victories <= 10) {
    heroLevel = levels[0];
  } else if (victories >= 11 && victories <= 20) {
    heroLevel = levels[1];
  } else if (victories >= 21 && victories <= 50) {
    heroLevel = levels[2];
  } else if (victories >= 51 && victories <= 80) {
    heroLevel = levels[3];
  } else if (victories >= 81 && victories <= 90) {
    heroLevel = levels[4];
  } else if (victories >= 91 && victories <= 100) {
    heroLevel = levels[5];
  } else if (victories >= 101) {
    heroLevel = levels[6];
  }

  // Atualizar o conteúdo do alerta com o resultado
  document.querySelector("#heroLevelResult").textContent = heroLevel;
  document.querySelector("#heroBalanceResult").textContent = rankedBalance;

  // Tornar o alerta visível
  document.querySelector("#resultAlert").style.display = "block";
}