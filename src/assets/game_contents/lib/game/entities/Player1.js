ig.module(
    'game.entities.Player1'
)
    .requires(
        'impact.entity'
    )
    .defines( function() {

        EntityPlayer1= ig.Entity.extend({
            size: {x: 30, y: 30},
            name:"playerCollider ",
            scl:1.2,
            type: "player",
            playerCanClick:true,
            animSheet: new ig.AnimationSheet('media/player.png', 30, 30),

            init: function( x, y, settings ) {
                this.parent( x, y, settings );
                this.addAnim( 'idle', 1, [ 0 ] );
                this.setScale(1, this.scl);
                this.currentAnim.alpha = 0;

            },

            update: function() {
                if (ig.input.pressed('click') && this.inFocus() && this.playerCanClick ) {
                    // console.log("click on player");
                    // this.playerCanClick = false;
                    // if(ig.game.currentSceneNumber === 1) {
                    //     var popUp = this.name.slice(6, this.name.length);
                    //     spawnPopUp(popUp);
                    //     console.log("player click the collider");
                    //     this.playerCanClick = true;
                    // }
                    // else{
                    //     this.sendAnswer(this.name);
                    // }
                    //
                    // console.log("click player");
                    var popUp = this.name.slice(6, this.name.length);
                    console.log(popUp);

                }
            },

            inFocus: function() {
                return (
                    (this.pos.x <= (ig.input.mouse.x + ig.game.screen.x)) &&
                    ((ig.input.mouse.x + ig.game.screen.x) <= this.pos.x + this.size.x) &&
                    (this.pos.y <= (ig.input.mouse.y + ig.game.screen.y)) &&
                    ((ig.input.mouse.y + ig.game.screen.y) <= this.pos.y + this.size.y)
                );
            },


            sendAnswer: function () {

                for(var i =1; i<=4 ;i++) {
                    var answer = document.getElementById("answer"+i).innerText;
                    var popUp = this.name.slice(6, this.name.length);
                    var n = answer.search(popUp);

                    // console.log(n);
                    // console.log(i);
                    // if(n === 1) {
                    //
                    //     return;
                    // }
                }

                document.getElementById("answer1").style.backgroundColor = "green";
                document.getElementById("answer1").style.backgroundColor = "green";
                ig.game.spawnEntity( EntityCurrectAnswerPopUp, 130, -300 );
                me = this;
                this.dely = setTimeout( function () {
                    nextQuestion();
                    document.getElementById("answer1").style.backgroundColor = "#4CAF50";
                    document.getElementById("answer1").style.height += 50;
                    me.playerCanClick = true;
                }, 1500 );

            },
            removePlayers:function(){

                this.kill();


            }

        } );

    } );