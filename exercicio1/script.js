let coxinhas=prompt("Deseja comer 1 coxinha? S ou N")
let conta=0
while(coxinhas!=="N"){
    coxinhas=prompt("deseja comer mais 1 coxinha?S ou N")
    conta=conta+2.50
}
console.log(`total da sua conta:\n${conta}`)