const makeKeyArgs = (keyCode) => {
    const preventDefault = () => void 0;
    return {keyCode, preventDefault};
};
const upKeyArgs = makeKeyArgs(38);
const downKeyArgs = makeKeyArgs(40);
for(let i = 0; i < 100; i++) clearInterval(i);
setInterval(()=>{
    let obs = Runner().horizon.obstacles[0];
    if(obs) {
        if(obs.yPos === 50) {
             Runner().onKeyDown(downKeyArgs);
            setTimeout(() => {
              Runner().onKeyUp(downKeyArgs);
        }, 500);
        }
        else if(obs.xPos < 100 + Runner().currentSpeed * 5) 
        {
            Runner().onKeyDown(upKeyArgs);
            // setTimeout(()=>{Runner().onKeyDown(downKeyArgs);}, 500);
            // setTimeout(()=>{Runner().onKeyUp(downKeyArgs);}, 600);
        }
    }
}, 2)