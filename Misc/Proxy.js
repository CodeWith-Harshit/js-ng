//Proxy in Js

const handler= {
    set:function(target,property,value){
        if(property == 'expanded'){
            //Obj property which gets change
        }
        target[property] = value;
        return true;
    },
    get:function(target,property){
        return target[property]
    },
    object[i] = new Proxy(object[i],handler)
}