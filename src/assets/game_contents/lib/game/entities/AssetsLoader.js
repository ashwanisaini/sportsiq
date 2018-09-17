
ig.module(
    'game.entities.AssetsLoader'
)
    .requires(
    'impact.entity'
)
    .defines( function() {

        EntityAssetsLoader = ig.Entity.extend( {
            size: { x: 72, y: 74 },
            animSheet: new ig.AnimationSheet('media/player.png', 30, 30),
            init: function( x, y, settings ) {
                this.parent( x, y, settings );
                this.addAnim( 'idle', 1, [ 0 ] );

                    animSheet= new ig.AnimationSheet( 'media/confetti_rotation.png',418/8, 210/4 );
                    animSheet= new ig.AnimationSheet('media/player.png', 30, 30);
                    animSheet= new ig.AnimationSheet( 'media/3.png',788, 461 );
                    animSheet= new ig.AnimationSheet( 'media/confetti_rotation.png',418/8, 210/4 );
                    animSheet= new ig.AnimationSheet( 'media/timeUp.png',540,404 );
                    animSheet= new ig.AnimationSheet( 'media/timeUp.png',540,404 );
                    animSheet= new ig.AnimationSheet( 'media/wrongAnswer.png',540,404 );
                    animSheet= new ig.AnimationSheet( 'media/help.png',540,404 );

                        for(var i = 0; i<= globals.scenes.length-1;i++)
                            {
                                animSheet= new ig.AnimationSheet( globals.scenes[i],788, 461 );
                            }
                        for(var j=0;j<=globals.LegendsSceneImage.length-1;j++)
                            {
                                animSheet= new ig.AnimationSheet( globals.LegendsSceneImage,800, 800 );
                            }
            }
        } );

    } );
