one = " bottles of beer on the wall, ";
two = " bottles of beer.";
three = "Take one down and pass it around, ";
four = " bottles of beer on the wall.";

function beerCount(beers) {
    while (beers >= 1) {
        console.log(beers + one);
        console.log(beers + two);
        console.log(three);
        beers--
        console.log(beers + four);
    }
    if (beers == 1) {
        console.log(beers + " bottle of beer on the wall,");
        console.log(beers + " bottle of beer.")
        console.log("Take one down and pass it around, ");
        beer--;
        console.log("No bottles of beer on the wall.")
    }
    if (beers == 0) {
        beers = 99;
        console.log("Go to the store and buy some more, " + beers + one);
    }
}

function bottleSong(beers) {
    beerCount(beers);
}
bottleSong(99);