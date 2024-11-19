var total = document.querySelector("#total")
var quantity = document.querySelectorAll("#quantity")
var plus = document.querySelectorAll(".fa-plus")
var minus = document.querySelectorAll(".fa-minus")
var price = document.querySelectorAll("#price")
var trash = document.querySelectorAll(".fa-trash")
var heart = document.querySelectorAll(".fa-heart")
var cards = document.querySelectorAll(".col")
console.log(quantity)
console.log(price)
function totalprice() {
    var result = 0
    for (var i = 0; i < price.length; i++) {
        result += price[i].innerHTML * quantity[i].innerHTML
    }
    return total.innerHTML = result
}
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function increment() {
        quantity[i].innerHTML++
        totalprice()
    })
}
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function decrement() {
        if (quantity[i].innerHTML > 0) {
            quantity[i].innerHTML--
            totalprice()
        }

    })
}
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function favoris() {
        if (heart[i].style.color == "red") {
            heart[i].style.color = "black"

        }
        else {
            heart[i].style.color = "red"
        }


    })
}
for (let i=0;i< trash.length;i++){
    trash[i].addEventListener("click", function remove(){
    quantity[i].innerHTML=0
    totalprice()
    })

}