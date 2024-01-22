

let allBtn = document.querySelectorAll("button")

let calcul = []

let resultat = document.querySelector("#result")

console.log(resultat);


for (let index = 0; index < allBtn.length; index++) {
    allBtn[index].addEventListener("click", (e) => {
        if (e.target.className.includes("nombres") || e.target.className.includes("symboles")) {
            calcul.push(e.target.innerHTML)
            resultat.innerHTML = calcul.join("")
        } else if (e.target.className.includes("clearAll")){ 
            resultat.innerHTML = ""
            calcul = []
        } else if (e.target.className.includes("clearLast")) {
            
        } else if (e.target.className.includes("égal")) {
            eval(calcul.join(""))
            resultat.innerHTML = eval(calcul.join(""))
        }
        
    })
}
