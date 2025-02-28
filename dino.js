const makeKeyArgs = (keyCode) => {
    const preventDefault = () => void 0;
    return {keyCode, preventDefault};
};
function isNextObstacleCloseTo(currentObstacle) {
    const nextObstacle = Runner().horizon.obstacles[1];
    return nextObstacle && nextObstacle.xPos - currentObstacle.xPos <= Runner().currentSpeed * 42;
}
Runner().setArcadeMode(true);
const upKeyArgs = makeKeyArgs(38);
const downKeyArgs = makeKeyArgs(40);
for(let i = 0; i < 100; i++) clearInterval(i);
setInterval(()=>{
    let obs = Runner().horizon.obstacles[0];
    if(obs) {
        if(obs.yPos === 75 || obs.yPos == 50) {
            Runner().onKeyDown(downKeyArgs);
        }
        else if(obs.xPos < 100 + Runner().currentSpeed * 5) 
        {
            if(isNextObstacleCloseTo(obs))
            {
                Runner().onKeyDown(upKeyArgs);    
                Runner().onKeyUp(upKeyArgs);
            }
            Runner().onKeyUp(downKeyArgs);
            Runner().onKeyDown(upKeyArgs);
        }
    }
    console.log(obs.yPos);
}, 2);