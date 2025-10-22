const product = [
    {
       name: "Big Mars Rock",
       price: 10000000,
       inStock: false,
       image: "pics/marsrock.jpg",
       alt: "mars rock",
       expense: "expensive"
    },
    {
        name: "Dunite",
        price: 100000,
        inStock: true,
        image: "pics/dunite.jpg",
        alt: "dunite rock",
        expense: "expensive"
    },
        {
        name: "Tephriphonolite",
        price: 1000000,
        inStock: true,
        image: "pics/tp.jpg",
        alt: "Tephriphonolite Rock",
        expense: "expensive"
    },
    {
        name: "Jadeite",
        price: 500000,
        inStock: true,
        image: "pics/jadeite.jpg",
        alt: "jadeite rock",
        expense: "expensive"
    },
    {
        name: "Lapis Lazuli",
        price: 50000,
        inStock: true,
        image: "pics/lapis lazuli.webp",
        alt: "lapis lazuli",
        expense: "expensve"
    },
    {
        name: "Paraiba Tourmaline",
        price: 20000,
        inStock: true,
        image: "pics/paraiba tourmaline.jpg",
        alt: "paraiba tourmaline",
        expense: "expensive"
    },
    {
        name: "Blue Garnet",
        price: 1500000,
        inStock: true,
        image: "pics/blue-garnet.jpg",
        alt: "blue garnet",
        expense: "expensive"
    },
    {
        name: "Grandidierite",
        price: 50000,
        inStock: false,
        image: "pics/grandidierite.jpg",
        alt: "grandidierite rock",
        expense: "expensive"  
    },
        {
        name: "Malachite",
        price: 3000,
        inStock: false,
        image: "pics/malachite.jpg",
        alt: "malachite rockuc",
        expense: "middle-priced"
    },
    {
        name: "Calcite",
        price: 1000,
        inStock: true,
        image: "pics/calcite.jpg",
        alt: "calcite rock",
        expense: "middle-priced"
    },
    {
        name: "Essexite",
        price: 500,
        inStock: true,
        image: "pics/essex.jpg",
        alt: "essexite rock",
        expense: "cheap"
    },
        {
        name: "Tuff",
        price: 50,
        inStock: true,
        image: "pics/tuff.jpg",
        alt: "a tuff rock",
        expense: "cheap"
    },
    {
        name: "Blueschist",
        price: 300,
        inStock: true,
        image: "pics/blueschist.jpg",
        alt: "blueschist rock",
        expense: "cheap"
    },
    {
        name: "Obsidian",
        price: 150,
        inStock: false,
        image: "pics/obsidian.webp",
        alt: "minecraft obsidian",
        expense: "cheap"
    },
    {
        name: "Limestone",
        price: 100,
        inStock:true,
        image: "pics/limestone.webp",
        alt: "limestone rock",
        expense: "cheap"
    },
    {
        name: "Shale",
        price: 25,
        inStock: false,
        image: "pics/shale.jpg",
        alt: "shale rock",
        expense: "cheap"
    },
    {
        name: "Quartzolite",
        price: 200,
        inStock: true,
        image: "pics/quartzolite.jpg",
        alt: "quartzolite rock",
        expense: "cheap"
    },
    {
        name: "Tiger's Eye",
        price: 30,
        inStock: true,
        image: "pics/tigers eye.jpg",
        alt: "tiger's eye",
        expense: "cheap"
    },
    {
        name: "Chert",
        price: 50,
        inStock: false,
        image: "pics/chert.jpg",
        alt: "chert image",
        expense: "cheap"
    },
    {
        name: "River Rocks",
        price: 15,
        inStock: true,
        image: "pics/river rocks.webp",
        alt: "river rocks",
        expense: "cheap"
    }
]


cart = []
function inject(item){
//query the html where we inject the card
    const container = document.querySelector(".container")
    container.insertAdjacentHTML(
        "afterbegin", 
        `<div class="card" data-id="${item.name}" data-price="${item.price}">
            <h2 class="card-header">${item.name}</h2>
            <img class="card-img" src="${item.image}" alt="${item.alt}" />
            <h3 class="card-price">$${item.price}</h3>
            <h4 class="button">Buy Now</h4>
        </div>`
    );
}
product.forEach((element) => {
    inject(element);
});
function getCards(){
    const buttons = document.querySelectorAll(".button");
    //not needed unless we want filter etc
    buttons.forEach((btn) =>
        btn.addEventListener("click", function (event) {
            console.log(event.target.closest(".card").getAttribute("data-id"));

        })
    );
}


//make array
//find item in array, .find("name")
//push item to cart
//show cart
//total cart


//created array
//find the container using query selector
//create function to add 1 card to sceen


//make array
//put cards on screen with JS
//make a cart (HTML, JS)
//add to cart to button
