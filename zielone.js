var stop =0
function clickField(number){
	document.getElementById('gardenTile'+number).click();
}

function getWatering(){
    document.getElementById("giessen").click();
}

async function getCarrot(){
    document.getElementById("regal_6").click();
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function iterate(){
      let counter =0;
    for(let i =1;i<=204;i++){
        console.log("Tile :"+i)
        if(stop)
        {
            console.log("STOP");
            break;
        }
        counter ++;
        await clickField(i)
        console.log("clicked :"+i)
        if(counter>=5){
            counter = 0;
            await sleep(1700);
            console.log("sleept")
        }
        
    }
    

}

async function sleep_time(){
    for(let i =0;i<8;i++){
        await sleep(60*1000)
        console.log(i)
    }
    await sleep(1000*30);
    console.log("endLongSleep")
}

async function harvest(){
    gardenjs.harvestAll()
    await sleep(1000)
    document.getElementById('ernte_log').hide()
    
}

async function core(){
    await getCarrot()
    console.log("Carrot Selected")
    
    await iterate()
    await getWatering()
    await iterate()
    await sleep_time()
    
    await sleep(500)
    await harvest()
    await sleep(1000)
    
}

  async function main() {
    
    let i =3
    while(i>0){
        if(stop)
            {
                break;
            }
        await clickField(1)
        await core()
    }
    

}
await main()