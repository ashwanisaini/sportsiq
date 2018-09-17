
ig.module(
    'game.entities.textForTimeUp'
)
    .requires(
        'impact.entity'
    )
    .defines( function() {
        EntitytextForTimeUp = ig.Entity.extend({

            size: { x: 540, y: 402 },
            scl:0.05,
            alphaValue:0.05,
            name:"textForTimeUp",
            animSheet: new ig.AnimationSheet( 'media/timeUp.png',540, 402 ),
            init: function( x, y, settings ) {
                this.parent( x, y, settings );
                this.addAnim( 'idle', 1, [ 0 ] );
                me = this;
                this.tween( {scl:.57},0.3,{ onComplete:function(){
                    me.tween( {scl:.45},0.09,{ onComplete:function(){
                        me.tween( {scl:.55},0.09,{ onComplete:function(){
                            me.tween( {scl:.5},0.09,{ onComplete:function(){
                                setTimeout( function () {
                                    me.tween( {scl:.55},0.1,{ onComplete:function(){
                                        me.tween( {scl:.00},0.1,{ onComplete:function(){
                                            me.kill();
                                        }.bind(this)}).start();
                                    }.bind(this)}).start();
                                }, 800);
                            }.bind(this)}).start();
                        }.bind(this)}).start();
                    }.bind(this)}).start();
                }.bind(this)}).start();
                this.tween( {alphaValue:0.9},0.3).start();

            },
            //tween1.chain( tween2 );

            update: function(){
                this.parent();
                this.setScale(this.scl, this.scl);
                this.currentAnim.alpha = this.alphaValue;

            }

        } );

    } );