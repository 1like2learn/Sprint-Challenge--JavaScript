// 1. Copy and paste your prototype in here and refactor into class syntax.
class ClassCuboidMaker{
    constructor(obj){
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
    };
    volume(){
        return this.length * this.width * this.height;
    };
    surfaceArea(){
        return 2 *(this.length * this.width + this.length * this.height + this.width * this.height)
    };
};
class CubeMaker extends ClassCuboidMaker{
    constructor(obj){
        super(obj)
    }
    cubeVolume(){
        return Math.pow(this.length, 3)
    }
    cubeArea(){
        return 6*Math.pow(this.length, 2)
    }
}
//   CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height
//   }
  
//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 *(this.length * this.width + this.length * this.height + this.width * this.height)
//   }
const cube = new CubeMaker({
    length: 4,
    width: 4,  
    height: 4,
});
const classCuboid = new ClassCuboidMaker({
length: 4, 
width: 5,  
height: 5,
});
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(classCuboid.volume()); // 100
  console.log(classCuboid.surfaceArea()); // 130
  console.log(cube.cubeVolume()); // 64
  console.log(cube.cubeArea()); // 96

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using 
//the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.