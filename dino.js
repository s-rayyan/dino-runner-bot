const makeKeyArgs = (keyCode) => {
    const preventDefault = () => void 0;
    return {keyCode, preventDefault};
};
for(let i = 0; i < 100; i++) clearInterval(i);
setInterval(()=>{
    let obs = Runner().horizon.obstacles[0];
    if(obs)
    {
        if(obs.yPos ===50) Runner.onKeyDown(makeKeyArgs(40))
        else if(obs.xPos < 100) Runner().onKeyDown(makeKeyArgs(38));
    }
}, 2)
