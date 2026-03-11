
const booksData = [

{title:"The Midnight Library",author:"Matt Haig",price:14.99,category:"fiction"},
{title:"Atomic Habits",author:"James Clear",price:16.99,category:"non-fiction"},
{title:"The Silent Patient",author:"Alex Michaelides",price:13.99,category:"mystery"},
{title:"Beach Read",author:"Emily Henry",price:12.99,category:"romance"}

]

let cart=[]
let currentFilter="all"


function showStore(){

document.getElementById("login-screen").classList.add("hidden")
document.getElementById("store-screen").classList.remove("hidden")

renderBooks()

}


function renderBooks(){

const grid=document.getElementById("books-grid")

grid.innerHTML=""

let filtered=booksData

if(currentFilter!=="all"){
filtered=booksData.filter(b=>b.category===currentFilter)
}

filtered.forEach(book=>{

const card=document.createElement("div")
card.className="book-card"

card.innerHTML=`

<h3>${book.title}</h3>

<p>${book.author}</p>

<p>$${book.price}</p>

<button onclick="addToCart('${book.title}',${book.price})">Add to Cart</button>

`

grid.appendChild(card)

})

}


function filterBooks(category){

currentFilter=category

renderBooks()

}


function addToCart(title,price){

cart.push({title,price})

alert("Added to cart")

updateCart()

}


function updateCart(){

const total=cart.reduce((sum,item)=>sum+item.price,0)

document.getElementById("cart-total").innerText="$"+total

}


function showCart(){

document.getElementById("cart-modal").classList.remove("hidden")

renderCart()

}


function hideCart(){

document.getElementById("cart-modal").classList.add("hidden")

}


function renderCart(){

const items=document.getElementById("cart-items")

items.innerHTML=""

cart.forEach(item=>{

const div=document.createElement("div")

div.innerHTML=`
${item.title} - $${item.price}
`

items.appendChild(div)

})

updateCart()

}


function checkout(){

alert("Order placed!")

cart=[]

renderCart()

hideCart()

}
