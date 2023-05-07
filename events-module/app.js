
const EventEmitter = require("events");

const myEvent = new EventEmitter();


myEvent.on("aloo",(age,sexe)=>{
    console.log("event is aloo");
    console.log(`My age is ${age} and My type is ${sexe}`);
})

myEvent.emit("aloo",20,"M");
