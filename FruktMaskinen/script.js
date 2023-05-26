// JavaScript-kod
const frukter = ["Apelsin", "Banan", "Melon", "Kiwi", "Citron"];
let looping = true;

function printfruit(userinput) {
  const fnr = parseInt(userinput);
  console.log("\n" + frukter[fnr - 1] + " Kommer Här!\n");
}

console.log("\n-:FruktMaskin:\n");

while (looping) {
  let i = 1;
  for (let frukt of frukter) {
    console.log(i + ": " + frukt);
    i++;
  }

  const fruktnr = prompt("\nMata in nummer på frukt du vill ha: ");
  printfruit(fruktnr);
  const go = prompt("\nVill du ha en frukt till? (y/n) ");

  if (go.toLowerCase() === "n") {
    break;
  }
}

console.log("---------------------------------------------------------------");

console.log("\nFöresten, du får en frukt för du är snäll\n");
const slumpfrukt = Math.floor(Math.random() * frukter.length);
printfruit(slumpfrukt + 1);
