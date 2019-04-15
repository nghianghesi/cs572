class University{
    constructor(private name:String, private dept:String){

    }

    public graduation(year:Number):void{
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let num = new University("MUM", "Computer Science");
num.graduation(2019);