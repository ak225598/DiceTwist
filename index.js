//storing all the six faces of a dice
let images = ["dice-six-faces-one.svg",
"dice-six-faces-two.svg",
"dice-six-faces-three.svg",
"dice-six-faces-four.svg",
"dice-six-faces-five.svg",
"dice-six-faces-six.svg"];


function roll(){
    //adding the shake class in the both dice
    document.getElementById("die-1").classList.add("shake");
    document.getElementById("die-2").classList.add("shake");

    setTimeout(function(){
        //removing the shake class from both the dice
        document.getElementById("die-1").classList.remove("shake");
        document.getElementById("die-2").classList.remove("shake");

        //calculating the value for both the dice
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);

        //changing the image according to the random no generated
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        //showing the total by adding both the values
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );
    },
    1000
    );
}
// roll();