import {Shape} from "./Shape";

class Triangel extends Shape{
    protected side1: number;
    protected side2: number;
    protected side3: number;

    constructor(name:string,
                color:string,
                side1:number,
                side2:number,
                side3:number) {
        super(name,color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
   public getSide1():number{
        return this.side1;
   }
    public getSide2():number{
        return this.side2;
    }
    public getSide3():number{
        return this.side3;
    }
    public setSide1(side1:number):void{
        this.side1 = side1;
    }
    public setSide2(side2:number):void{
        this.side2 = side2;
    }
    public setSide3(side3:number):void{
        this.side3 = side3;
    }
    public getperimeter():number{
        return  this.side1 + this.side2 + this.side3;
    }
    public getArea():number{
        let p = this.getperimeter()/2
        return Math.sqrt(p*(p-this.getSide1())*(p-this.getSide2())*(p-this.getSide3()))
    }
}
let triangel = new Triangel(`tam giac`,`red`,5,8,5)
console.log(triangel.getArea())