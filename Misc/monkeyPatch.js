//Monkey patch
//Applied for setValue 

const originalFunction = this.control!.setValue;
this.control!.setValue = function(value,options){
    console.trace(value);
    originalFunction.call(this,value,options)
}