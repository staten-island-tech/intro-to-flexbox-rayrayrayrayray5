const expensive = [
    {
       name: "Big Mars Rock",
       price: 10000000,
       inStock: false,
       image: "pics/marsrock.jpg",
       alt: "mars rock"
    },
    {
        name: "Dunite",
        price: 100000,
        inStock: true,
        image: "pics/dunite.jpg",
        alt: "dunite rock"
    },
        {
        name: "Tephriphonolite",
        price: 1000000,
        inStock: true,
        image: "pics/tp.jpg",
        alt: "Tephriphonolite Rock"
    },
    {
        name: "Jadeite",
        price: 500000,
        inStock: true,
        image: "pics/jadeite.jpg",
        alt: "jadeite rock"
    },
    {
        name: "Lapis Lazuli",
        price: 50000,
        inStock: true,
        image: "pics/lapiz lazuli.webp",
        alt: "lapis lazuli"
    }
]
const cheap=[
    {
        name: "Tuff",
        price: 50,
        inStock: true,
        image: "pics/tuff.jpg",
        alt: "a tuff rock"
    },
    {
        name: "Blueschist",
        price: 300,
        inStock: true,
        image: "pics/blueschist.jpg",
        alt: "blueschist rock"
    },
    {
        name: "Obsidian",
        price: 150,
        inStock: false,
        image: "pics/obsidian.webp",
        alt: "minecraft obsidian"
    },
    {
        name: "Limestone",
        price: 100,
        inStock:true,
        image: "pics/limestone.webp",
        alt: "limestone rock"
    },
    {
        name: "Shale",
        price: 25,
        inStock: false,
        image: "pics/shale.jpg",
        alt: "shale rock"
    }
]
const middlePrice = [
    {
        name: "Malachite",
        price: 3000,
        inStock: false,
        image: "pics/malachite.jpg",
        alt: "malachite rockuc"
    },
    {
        name: "Calcite",
        price: 1000,
        inStock: true,
        image: "pics/calcite.jpg",
        alt: "calcite rock"
    }
]

function inject(item){
//query the html where we inject the card

    const container = document.querySelector(".container")
    container.insertAdjacentHTML("afterbegin", `<h1>${item.name}</h1><h2>${item.price}</h2>`);

}
expensive.forEach((rocks) => inject(rocks));
cheap.forEach((rocks) => inject(rocks));
middlePrice.forEach((rocks) => inject(rocks));

//created array
//find the container using query selector
//create function to add 1 card to sceen

