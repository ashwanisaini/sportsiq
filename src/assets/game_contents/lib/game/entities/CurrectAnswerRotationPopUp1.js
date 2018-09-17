
ig.module(
    'game.entities.CurrectAnswerRotationPopUp1'
)
    .requires(
        'impact.entity',
        'plugins.box2d.entity'
    )
    .defines( function() {
        EntityCurrectAnswerRotationPopUp1 = ig.Box2DEntity.extend({
            size: { x: 418/6, y: 210/5 },
            name:"correctanswer",
            alphaValue:1,
            animSheet: new ig.AnimationSheet( 'media/confetti_rotation.png',418/8, 210/4 ),
            animSheet2: new ig.AnimationSheet( 'media/confetti_rotation2.png',418/8, 210/4 ),
            animSheet3: new ig.AnimationSheet( 'media/confetti_rotation3.png',418/8, 210/4 ),

            init: function( x, y, settings ) {
                this.parent( x, y, settings );
                var scaleSize = Math.random();

                scaleSize = scaleSize/2;
                this.setScale(scaleSize, scaleSize);
                 var animValue = Math.floor(Math.random() * (4 - 1)) + 1;
                 var random = Math.floor(Math.random() * (4 - 1)) + 1;

                this.anims.idel11 = new ig.Animation( this.animSheet, 0.01, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29] );
                this.anims.idel12 = new ig.Animation( this.animSheet, 0.02, [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,1,2,3,4,5,6] );
                this.anims.idel13 = new ig.Animation( this.animSheet, 0.015, [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,1,2,3,4,5,6] );

                this.anims.idel21 = new ig.Animation( this.animSheet2, 0.01, [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,1,2,3,4,5,6] );
                this.anims.idel22 = new ig.Animation( this.animSheet2, 0.02, [19,20,21,22,23,24,25,26,27,28,29,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18] );
                this.anims.idel23 = new ig.Animation( this.animSheet2, 0.03, [27,28,29,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26] );

                this.anims.idel31 = new ig.Animation( this.animSheet3, 0.01, [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,1,2,3] );
                this.anims.idel32 = new ig.Animation( this.animSheet3, 0.03, [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,1,2,3,4,5,6,7,8,9,10,11,12] );
                this.anims.idel33 = new ig.Animation( this.animSheet3, 0.02, [23,24,25,26,27,28,29,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22] );

                if(animValue===1)
                     {
                         if(random ===1)
                         {
                             this.currentAnim = this.anims.idel11;
                         }
                         else if(random ===2)
                         {
                             this.currentAnim = this.anims.idel12;
                         }

                         else
                         {
                             this.currentAnim = this.anims.idel13;
                         }

                     }
                else if(animValue===2)
                     {
                         if(random ===1)
                         {
                             this.currentAnim = this.anims.idel21;
                         }
                         else if(random ===2)
                         {
                             this.currentAnim = this.anims.idel22;
                         }

                         else
                         {
                             this.currentAnim = this.anims.idel23;
                         }
                     }
                else
                     {
                         if(random ===1)
                         {
                             this.currentAnim = this.anims.idel31;
                         }
                         else if(random ===2)
                         {
                             this.currentAnim = this.anims.idel32;
                         }

                         else
                         {
                             this.currentAnim = this.anims.idel33;
                         }
                     }
            },

            update: function(){
                this.parent();
                if(this.pos.y>600)
                {
                    this.kill();
                }
            },


            createBody: function(){

                var bodyDef = new Box2D.Dynamics.b2BodyDef();
                bodyDef.position = new Box2D.Common.Math.b2Vec2(
                    (this.pos.x + this.size.x / 2) * Box2D.SCALE,
                    (this.pos.y + this.size.y / 2) * Box2D.SCALE
                );

                bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
                this.body = ig.world.CreateBody(bodyDef);
                var speed = Math.random();
                this.body.SetLinearDamping(speed);
                var fixture = new Box2D.Dynamics.b2FixtureDef;
                fixture.shape = new Box2D.Collision.Shapes.b2CircleShape();
                fixture.shape.SetRadius(0.5);
                this.body.CreateFixture(fixture);

            }

        } );
    } );