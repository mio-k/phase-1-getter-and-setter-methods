// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return Math.PI * (this.radius + this.radius);
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    set diameter(val){
        this.radius = val/2;
    }
    set circumference(val){
        this.radius = (val/Math.PI)/2;
    }
    set area(val){
        this.radius = Math.sqrt(val/Math.PI);
    }
}