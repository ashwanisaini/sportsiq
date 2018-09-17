ig.module(
    'game.entities.PlayerRoles'
)
    .requires(
        'impact.entity'

    )
    .defines( function() {

        EntityPlayerRoles= ig.Entity.extend({
            size: {x: 30, y: 30},
            type: ig.Entity.TYPE.A,
            animSheet: new ig.AnimationSheet('media/player.png', 30, 30),

            init: function( x, y, settings ) {
                this.parent( x, y, settings );
                this.addAnim( 'idle', 1, [ 0 ] );
                this.currentAnim.alpha = 0;

            }

        } );

    } );