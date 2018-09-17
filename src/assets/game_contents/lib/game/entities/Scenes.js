ig.module(
    'game.entities.Scenes'
)
    .requires(
        'impact.entity'
    )
    .defines( function() {
        EntityScenes= ig.Entity.extend({
            size: { x: 788, y: 461 },
            name:"Scene1",
           // animSheet: new ig.AnimationSheet( 'media/module1/7v7/3.png',788, 461 ),
            animSheet: new ig.AnimationSheet( globals.scenes[0],788, 461 ),
            init: function( x, y, settings ) {
                this.parent( x, y, settings );
                this.addAnim( 'idle', 1, [ 0 ] );
            },
            update:function(){
                this.parent();
                if(ig.game.changeScene === true)
                {
                    var obj = {animSheet2:new ig.AnimationSheet( ig.game.nextScene,788, 461 )};
                    this.animSheet = obj.animSheet2;
                    this.currentAnim = new ig.Animation(obj.animSheet2, 1, [0]);
                    ig.game.changeScene = false;
                }
            }
        });
    });