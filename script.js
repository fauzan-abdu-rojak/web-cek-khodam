const randomWords = ["Buaya Darat Cirebon", "Ucing Garut", "Belut Cingked", "Siluman Oncom", "Hiled Noroktok", "Siluman kadal", "Lauk Encok", "Oray Sukuan", "Hiu Jawa", "Entog Amerika", "Cucurut bereum", "Hileud Ciamis", "Maung hideung", "Beurit Afrika", "Hayam Camani", "Sultan Arab", "Londok DS"]

  const form = 
document.getElementById("randomWordForm");
  const nameInput =
document.getElementById("nameInput");
  const resultDiv = 
document.getElementById("result")

form.addEventListener("submit", 
function (event) {
  event.preventDefault();
  
  const name = nameInput.value;
  
  const randomWord = 
  randomWords[Math.floor(Math.random()
  * randomWords.length)];
  
  resultDiv.textContent = `${name}, Khodam nu aya di anjeun nyaéta ${randomWord}`;
});