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
    },
    {
        name: "Paraiba Tourmaline",
        price: 20000,
        inStock: true,
        image: "pics/paraiba tourmaline.jpg",
        alt: "paraiba tourmaline"
    },
    {
        name: "Blue Garnet",
        price: 1500000,
        inStock: true,
        image: "pics/blue-garnet.jpg",
        alt: "blue garnet"
    },
    {
        name: "Grandidierite",
        price: 50000,
        inStock: false,
        image: "pics/grandidierite.jpg",
        alt: "grandidierite rock"  
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
    },
    {
        name: "Quartzolite",
        price: 200,
        inStock: true,
        image: "pics/quartzolite.jpg",
        alt: "quartzolite rock"
    },
    {
        name: "Tiger's Eye",
        price: 30,
        inStock: true,
        image: "pics/tigers eye.jpg",
        alt: "tiger's eye"
    },
    {
        name: "Chert",
        price: 50,
        inStock: false,
        image: "pics/chert.jpg",
        alt: "chert image"
    },
    {
        name: "River Rocks",
        price: 15,
        inStock: true,
        image: "pics/river rocks.webp",
        alt: "river rocks"
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
    },
    {
        name: "Essexite",
        price: 500,
        inStock: true,
        image: "pics/essexite.jpg",
        alt: "essexite rock"
    }
]


function inject(item){
//query the html where we inject the card
    const container = document.querySelector(".container")
    container.insertAdjacentHTML(
        "afterbegin", 
        `image`
        `<h1>${item.name}</h1><h2>${item.price}</h2>`
        `<button>buy now</button>`
    );

}
stuff.forEach((element) => {
    inject(element);
});






function getCards(){
    const buttons = document.querySelectorAll("button");
    //not needed unless we want filter etc
    const btnArr = Array.from(buttons);
    btnArr.forEach((btn) =>
        btn.addEventListener("click", function (event) {
            //console.log(event.target)
            console.log(
                event.target.closest(".display-card"), getAttribute("data-id"),
                event.target.textContent
            )
        })
    );
}
//created array
//find the container using query selector
//create function to add 1 card to sceen

//make array
//put cards on screen with JS
//make a cart (HTML, JS)
//add to cart to button
