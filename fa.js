
let boxes=document.querySelectorAll(".box");
let rbtn=document.querySelector("#reset");
let turnO=true;
let msg=document.querySelector("#msg");
const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () =>{
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkwinner();
  });
});

const disableAllBoxes = () => {
  boxes.forEach((box) => box.disabled = true);
};
document.querySelectorAll(".reset").forEach((btn) => {
  btn.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
    });
    msg.innerText = "";
    turnO = true;
  });
});


const checkwinner =() => {
    for(let pattern of win){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;

        if(p1 !="" && p2 !="" && p3 !=""){
          if(p1===p2 && p2===p3){
            console.log("wineer");
            msg.innerText = `winner is ${p1}`;
            disableAllBoxes();
            return;
           }
        }
      }
   
     let isDraw = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      isDraw = false;
    }
  });

  if (isDraw) {
    msg.innerText = "It's a draw!";
   
  }
};

  
