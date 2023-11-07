// Adicione um evento de clique ao botão "MOSTRAR"
document.querySelector("#generateBtn").addEventListener("click", mostrarAtaque);

function mostrarAtaque() {
  // Obtenha o valor da entrada do tipo
  let heroType = document.querySelector("#inputType").value;

  // Tipos e ataques
  const tipos = ["Mago", "Guerreiro", "Monge", "Ninja"];
  const ataques = ["magia", "espada", "artes marciais", "shuriken"];

  // Lógica para mostrar o resultado
  let heroAttack = "";

  if (heroType.toLowerCase() === tipos[0].toLowerCase()) {
    heroAttack = ataques[0];
  } else if (heroType.toLowerCase() === tipos[1].toLowerCase()) {
    heroAttack = ataques[1];
  } else if (heroType.toLowerCase() === tipos[2].toLowerCase()) {
    heroAttack = ataques[2];
  } else if (heroType.toLowerCase() === tipos[3].toLowerCase()) {
    heroAttack = ataques[3];
  } else {
    // Tipo inválido, exibir mensagem de erro
    heroType = "undefined";
    heroAttack = "undefined";
  }



  // Atualizar o conteúdo do alerta com o resultado
  document.querySelector("#heroTypeResult").textContent = heroType;
  document.querySelector("#heroAttackResult").textContent = heroAttack;


  // Tornar o alerta visível
  document.querySelector("#resultAlert").style.display = "block";
}