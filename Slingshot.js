class Slingshot{
    constructor(bodyA,bodyB){
    var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:2,
length:10
    }
    this.sling=Constraint.create(options)
    World.add(world,this.sling)

}

    
     display(){

    }

}