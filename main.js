var phoneimgsrc = document.getElementById("phoneimgsrc")
var infoofphone = document.getElementById("infoofphone")
var price = document.getElementById("price")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var red = document.getElementById("red")
var cyan = document.getElementById("cyan")
var gold = document.getElementById("gold")
var white = document.getElementById("white")
var black = document.getElementById("black")
var color = document.getElementById("color")
var GB = document.getElementById("GB")
var buy = document.getElementById("buy")

one.addEventListener("click",()=>{
    price.innerHTML = "price :600$"
    GB.innerHTML = " 128GB"
})
two.addEventListener("click",()=>{
    price.innerHTML = "price :750$"
    GB.innerHTML = " 256GB"
})
three.addEventListener("click",()=>{
    price.innerHTML = "price :950$"
    GB.innerHTML = " 512GB"
})
// ====================================
red.addEventListener("click",()=>{
    color.innerHTML = "red"
    phoneimgsrc.src = "5.png"
})
cyan.addEventListener("click",()=>{
    color.innerHTML = "cyan"
    phoneimgsrc.src = "2.png"

})
gold.addEventListener("click",()=>{
    color.innerHTML = "gold"
    phoneimgsrc.src = "1.png"

})
white.addEventListener("click",()=>{
    color.innerHTML = "white"
    phoneimgsrc.src = "4.png"

})
black.addEventListener("click",()=>{
    color.innerHTML = "black"
    phoneimgsrc.src = "3.png"

})
// ====================================
buy.addEventListener("click",()=>{
    alert(`your iphone13 ${color.innerHTML}${GB.innerHTML} added to cart`)
})