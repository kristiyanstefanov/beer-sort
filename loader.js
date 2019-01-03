let data = {
    "data": [
        {
            "alcohol": 6.8,
            "description": "Affligem Blonde, the classic clear blonde abbey ale, with a gentle roundness and 6.8% alcohol. Low on bitterness, it is eminently drinkable.",
            "id": "AffligemBlond",
            "name": "Affligem Blond"
        },
        {
            "alcohol": 6.8,
            "description": "A reddish-brown abbey ale brewed with dark malts. The secondary fermentation gives a fruity aroma and a unique spicy character with a distinctive aftertaste. Secondary fermentation in the bottle.",
            "id": "AffligemDubbel",
            "name": "Affligem Dubbel"
        },
        {
            "alcohol": 8.5,
            "description": "The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle.",
            "id": "AffligemTripel",
            "name": "Affligem Tripel"
        },
        {
            "alcohol": 7.5,
            "description": "Trappistes Rochefort 6 Belgian Beer.",
            "id": "TrappistesRochefort6",
            "name": "Rochefort 6"
        },
        {
            "alcohol": 9.2,
            "description": "A dry but rich flavoured beer with complex fruity and spicy flavours.",
            "id": "TrappistesRochefort8",
            "name": "Rochefort 8"
        },
        {
            "alcohol": 11.3,
            "description": "The top product from the Rochefort Trappist brewery. Dark colour, full and very impressive taste. Strong plum, raisin, and black currant palate, with ascending notes of vinousness and other complexities.",
            "id": "TrappistesRochefort10",
            "name": "Rochefort 10"
        },
        {
            "alcohol": 6.7,
            "description": "This name became a reference. This beer is mostly pointed out with its product name: a Paterke. This Paterke is a dark, chestnut coloured beer with a high fermentation (6.7%) and a full taste",
            "id": "StBernardusPater6",
            "name": "St Bernardus Pater 6"
        },
        {
            "alcohol": 8.0,
            "description": "This beer, with high fermentation, has a pale amber colour and a flowery, fruity taste with a harmonious balance between sweet and sour. This beer has a thick and vivid froth and strikes its balanced taste with a delicate bitterness.",
            "id": "StBernardusTripel",
            "name": "St Bernardus Tripel"
        },
        {
            "alcohol": 10.5,
            "description": "The top product from the Rochefort Trappist brewery. Dark colour, full and very impressive taste. Strong plum, raisin, and black currant palate, with ascending notes of vinousness and other complexities.",
            "id": "StBernardusAbt12",
            "name": "St Bernardus Abt 12"
        },
        {
            "alcohol": 7,
            "description": "This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature ",
            "id": "ChimayRed",
            "name": "Chimay Rouge"
        },
        {
            "alcohol": 10.5,
            "description": "Chimay Triple, with its typical golden colour, its slightly hazy appearance and its fine head is especially characterised by its aroma which results from an agreeable combination of fresh hops and yeast. The beers flavour, as sensed in the mouth, comes from the smell of hops: above all it is the fruity notes of muscat and raisins that give this beer a particularly attractive aroma. The aroma complements the touch of bitterness. There is no acidity, but an after-bitterness which melts in the mouth. This top fermented Trappist beer, refermented in the bottle, is not pasteurised.",
            "id": "ChimayTriple",
            "name": "Chimay Tripel"
        }
    ]
};
document.addEventListener("DOMContentLoaded", function () {
    function addBeerLi(beer) {
        let ul = document.getElementById("container");

        let beerContainer = document.createElement("li");
        beerContainer.innerHTML = `<img src="./beers/${beer.id}.jpg" />`;

        let beerName = document.createElement("div");
        beerName.setAttribute("class", "name");
        beerName.innerHTML = "Name: " + `<span contentEditable="true">${beer.name}</span>`;

        let beerAlcohol = document.createElement("div");
        beerAlcohol.setAttribute("class", "alcohol");
        beerAlcohol.setAttribute("data", beer.alcohol);
        beerAlcohol.innerHTML = "Alcohol: " + `<span contentEditable="true">${beer.alcohol}</span>%`;
        beerAlcohol.addEventListener("input", function () {
            let changedAlcohol = this.querySelector('span').innerHTML;
            this.setAttribute("data", changedAlcohol);
        }, false);

        let beerDescription = document.createElement("div");
        beerDescription.innerHTML = "Description: " + `<span contentEditable="true">${beer.description}</span>`;

        beerContainer.appendChild(beerName);
        beerContainer.appendChild(beerAlcohol);
        beerContainer.appendChild(beerDescription);
        beerContainer.setAttribute("id", beer.id);

        ul.appendChild(beerContainer);
    }

    data.data.map(beer => addBeerLi(beer));
});