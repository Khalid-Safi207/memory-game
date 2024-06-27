document.querySelector(".controls button").onclick = function(){
    let name = prompt("Whats Your Name: ");
    if(name == null || name == ''){
        document.querySelector(".name").innerHTML = 'Unknown';
    }
    else{
        document.querySelector(".name").innerHTML = name;
    }
    document.querySelector(".controls").remove()
}

let duration = 1000;
let blocksCon = document.querySelector('.blocks-container');

let blocks = Array.from(blocksCon.children)

console.log(blocks);
randomPos()


function randomPos(){
    for(let i = 0; i < blocks.length; i++){
        let orderNum = Math.floor(Math.random()*17);
        blocks[i].style.order = orderNum;
    }
}
let clickedBlock = []
let clickedBlockCount = 0;
let wrongNum = 0;
blocks.forEach((el)=>{
    el.onclick = function(){
        el.classList.add("is-flipped")
          clickedBlock.push(el)
          clickedBlockCount++
          if(clickedBlockCount == 2){
            clickedBlockCount  = 0;
            if(clickedBlock[0].getAttribute("data-tech") == clickedBlock[1].getAttribute("data-tech")){
                clickedBlock.splice(0,2);
                checkFromAllBlocks()
              }
              else{
                setTimeout(()=>{
                    clickedBlock[0].classList.remove('is-flipped');
                clickedBlock[1].classList.remove('is-flipped');
                clickedBlock.splice(0,2);
                },duration);
                wrongNum++;
                document.querySelector(".wrong").innerHTML = wrongNum;
                checkFromAllBlocks()
            }
          }
    }
    
})

function checkFromAllBlocks(){
    let trueBlocksCount = 0;
for(let i = 0; i < blocks.length; i++){
    if(blocks[i].className.includes("is-flipped")){
        trueBlocksCount++;
    }
}

if(trueBlocksCount == blocks.length){
    document.body.className = 'winner'
    setTimeout(()=>{
        
        location.reload()

    },3000)
}
}