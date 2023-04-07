import {Circle} from "./Circle";

class Cylinder extends Circle{
    private _height : number
    constructor(color: string, radius: number, height: number) {
        super(color, radius);
       this._height = height
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }
    getVolume():number{
        return Math.PI * this.radius* this.radius * this.height
    }
}
let cylinder = new Cylinder('red',10,5);
console.table([cylinder.getPerimeter(),cylinder.getArea(),cylinder.getVolume()])