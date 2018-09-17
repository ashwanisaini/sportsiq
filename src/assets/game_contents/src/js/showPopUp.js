function showPopUpPoints(WhichPlayerNumberIsClicked) {

    document.getElementById("popUp1").innerText = ig.game.roleInFirstScene[WhichPlayerNumberIsClicked][0].a;
    document.getElementById("popUp2").innerText = ig.game.roleInFirstScene[WhichPlayerNumberIsClicked][0].b;
    document.getElementById("popUp3").innerText = ig.game.roleInFirstScene[WhichPlayerNumberIsClicked][0].c;
    document.getElementById("popUp4").innerText = ig.game.roleInFirstScene[WhichPlayerNumberIsClicked][0].d;

}

function spawnPopUp(WhichPlayerNumberIsClicked) {
    document.getElementById("popUpDiv").style.visibility = "visible";
    showPopUpPoints(WhichPlayerNumberIsClicked);

    console.log(WhichPlayerNumberIsClicked);
}