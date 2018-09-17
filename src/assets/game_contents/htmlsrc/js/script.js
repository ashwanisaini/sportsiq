$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        autoHeight: true
    });
    $('#slide, #closeNav').click(function() {
        $('#menu').animate({
            'right': $('#menu').css('right') == '-250px' ? '0' : '-250px'
        }, 200);
    });

    // $('.modal-box-link, .close , .modal-wrap').click(function()
    // {
    //   $('.modal-wrap, .modal-box').toggle();
    // });

    $('.userLog-col h5').click(function() {
        $('.userNav').slideToggle();
    });
});

function openPopup(el,player) {
//console.log(el);

if(player<999)
    {
        setPlayerName(player);
        removePreviousRoleAndResponsbility();
        addRoleAndResponsbility(player);
    }
    $('.modal-wrap').fadeIn();
    $('#' + el).fadeIn(200);
}

function closePopup()
    {
        $(".bottom-nav-panal ul li a.focusbox").removeClass('focusbox');
        $('.popup').fadeOut(300);
        $('.modal-wrap').fadeOut();

    }

$('.modal-wrap').click(function()
    {
      //  $('.popup').fadeOut(300);
        //$(this).fadeOut(300);
    });

$(document).on('keyup', function(evt)
    {
        if (evt.keyCode === 27) {
            closePopup();
        }
    });

function removePreviousRoleAndResponsbility()
    {
        for (var i = 1;i<=2;i++)
            {
                var textToRemove = document.getElementById("rs"+ i);
                while (textToRemove.firstChild)
                    {
                        textToRemove.removeChild(textToRemove.firstChild);
                    }
                console.log("for loop ");
            }
    }

function addRoleAndResponsbility(player)
    {
        var defendingText = globals.dataFromAPI[0].scenes[ig.game.sceneCounter-1].players[player].roleNameDefending;
        var attackingText = globals.dataFromAPI[0].scenes[ig.game.sceneCounter-1].players[player].roleName;
      //  console.log(defendingText , attackingText);
        var str = globals.dataFromAPI[0].scenes[ig.game.sceneCounter-1].players[player].role;
        var res = str.split(";");
        for (var i = 0; i < res.length; i++)
             {
                 if(attackingText)
                     {
                         document.getElementById("roleNameAttacking").innerHTML = attackingText;
                     }
                 $("#rs1").append($("<li>").text(res[i]));
             }
            if(defendingText)
                {
                    var strD =globals.dataFromAPI[0].scenes[ig.game.sceneCounter-1].players[player].roleDefending;
                    var resD = strD[0 ].split(";");
                    for (var j = 0; j <= strD.length; j++)
                        {
                            document.getElementById("roleNameDefending").innerHTML = defendingText;
                            $("#rs2").append($("<li>").text(resD[j]));
                        }
                }
            else
                {
                    document.getElementById("roleNameDefending").innerHTML = "";
                }
    }

function setPlayerName(player)
    {
        var a = parseInt(player)+1;
        var myelement = document.getElementById("t"+a);
        document.getElementById("rsPlayerName").innerHTML = myelement.innerText;
    }

function  understood(el)
    {

        $('.popup').fadeOut(0);
        $('.modal-wrap').fadeOut();
        if(globals.dataFromAPI[0].scenes[ig.game.sceneCounter-1].legends)
        {
            showLegendes();
        }
        removeTextWhenClickIUnderStood();
        ig.game.timerUpdate = true;
    }

$('.moduleBtn').click(function()
    {
        // $('.popup').fadeOut(300);
        // $('.bottom-nav-panal').fadeOut(1);
        // $("#questionAnswers").show();
    });

$(".bottom-nav-panal ul li").click(function()
    {
        $(".bottom-nav-panal ul li a").removeClass('focusbox');
        $(this).find('a').addClass('focusbox');
    });

$(function()
    {
        var canvas = $('#canvas');
        canvas[0].addEventListener('mousedown', clickCanvas);
        canvas[0].addEventListener('touchstart', clickCanvas);
    });

function clickCanvas(e) {
//    markLocation(e);
 //   drawCanvas();
//    e.preventDefault();
}

// game play pause btn
function pauseplayBtn(){

    if(ig.game.playPauseGame===true)
        {
            clearInterval( ig.game.timerInterval);
            document.getElementById("pauseplayBtn").innerHTML = "play";
            ig.game.playPauseGame=false;

        }
        else
    {
        document.getElementById("pauseplayBtn").innerHTML = "pause";
        ig.game.playPauseGame=true;
        ig.game.timerInterval = setInterval( function () {
            if ( ig.game.displaytimer <= 29  ) {
                ig.game.displaytimer++;
            }
        }, 1000 );

    }
}

function removeTextWhenClickIUnderStood ()
    {
        var textToRemove = document.getElementById("howToPlay");
        while (textToRemove.firstChild)
        {
            textToRemove.removeChild(textToRemove.firstChild);
        }
    }
    function showLegendes()
    {
            //ig.game.timerNeedToShow = false;
            document.getElementById("legendImg").src = globals.dataFromAPI[0].scenes[ig.game.sceneCounter-1].legends;
            setTimeout( function ()
                {
                    ig.game.displaytimer = 0;
                    closePopup();
                },  globals.dataFromAPI[0].scenes[ig.game.sceneCounter-1].legendsTime*1000);
            openPopup('modal5');
        }

function  LastBtnOfModule(el)
{
    $('.popup').fadeOut(0);
    $('.modal-wrap').fadeOut();
    console.log("Heeloo");
    var url = "http://"+window.location.host+"/#/frontend/player/assignments";
    console.log(url);
    //window.location.href="http://"+window.location.host;
    //parent.location.href = url;
    window.parent.location.reload();
}

