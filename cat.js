var myObject = {
    name: "Lovelace",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();
// What will the code below output to the console and why?
// The code will out put :
// outer func:this.name=lovelace
// outer func:this.name=lovelace
// inner func:this.name=lovelace
// inner func:this.name=lovelace
// This is because the inner function is only visible  in its block and scope which<br>
//  means that it will be invisible outside the scope.  it that it is invisible outside that block and also outside the enclosing function. , constants, types, classes, etc. that are in the same scope, This means that the function can only be declared inside its own scope 



