export class Circle {
    private _color : string;
    private _radius : number

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    constructor(color: string, radius: number) {
        this._color = color;
        this._radius = radius;
    }
    getArea():number{
        return this._radius * this._radius * Math.PI;
    }
    getPerimeter():number{
        return this._radius*2 *Math.PI
    }
}