const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];
function criarCard(cards){

  /*   <li class="product">
  <img
    src="./img/products/no-img.svg"
    alt=""
    title=""
    class="product-img"
  />
  <main class="product-main">
    <h1 class="product-title">Uva Crimson</h1>
    <h5 class="product-category">Frutas</h5>
    <strong class="product-price">R$ 8.99</strong>
  </main>
</li> */

let li = document.createElement("li")
let img = document.createElement("img")
let main = document.createElement("main")
let h1 = document.createElement("h1")
let h5 = document.createElement("h5")
let strong = document.createElement("strong")

li.classList.add("product")
img.classList.add("product-img")
main.classList.add("product-main")
h1.classList.add("product-title")
h5.classList.add("product-category")
strong.classList.add("product-price")

if(cards.image === undefined ){
  img.src = "img/products/no-img.svg"
}
else{
  img.src = cards.image
}
img.alt = cards.imageDescription
h1.innerText= cards.title
h5.innerText =cards.category
strong.innerText = `R$${cards.price}`

main.appendChild(h1)
main.appendChild(h5)
main.appendChild(strong)
li.appendChild(img)
li.appendChild(main)
return li
}

for(let i = 0; i< products.length; i++){
   let x = criarCard(products[i])
   let ul = ""
   if(products[i].category == "Frutas"){
      ul = document.querySelector(".Frutas")
   }
   
   
   if(products[i].category == "Bebidas"){
      ul = document.querySelector(".bebidas")
   }
   
   
   if(products[i].category == "Higiene"){
      ul = document.querySelector(".Higiene")
   }
   ul.appendChild(x)
}
