const EventEmitter = require('events')

class Gym extends EventEmitter{
    constructor(){
        super();
        setInterval(()=>{
            this.emit('boom');
        },1000);
    }

    get name(){
        return "abc";
    }
}

const gym = new Gym();
gym.on('boom', ()=>{
    console.log(`${gym.name} Athlete is working out`);
});