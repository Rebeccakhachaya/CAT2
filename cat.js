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
//   that  is the function is   invisible outside that block and also outside the enclosing function.  This means that the function can only be declared inside its own scope .
// which in this code was done since the function is invoked outside its scope .


