function calcular(event) {
  event.preventDefault();

  let álcoolInput = document.getElementById("álcool").value;
  let gasolinaInput = document.getElementById("gasolina").value;
  let contentResult = document.getElementById("content-result");
  let textResult = document.getElementById("text-result");

  let gasolinaSpan = document.getElementById("gasolina-result");
  let álcoolSpan = document.getElementById("álcool-result");

  let calculo = álcoolInput / gasolinaInput;

  if (calculo < 0.7) {
    textResult.innerHTML = "Compensa usar Álcool";
  } else {
    textResult.innerHTML = "Compensa usar Gasolina";
  }

  gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;
  álcoolSpan.innerHTML = "Álcool R$ " + álcoolInput;

  contentResult.classList.remove("hide");
}
