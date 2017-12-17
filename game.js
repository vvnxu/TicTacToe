var all9Boxes = document.querySelectorAll('.boxes');
var winnerMsg=document.querySelector('h2');
var currentPlayer=1;
var boxes = ['a','a','a','a','a','a','a','a','a'];
function checkForWinner(event,box){
	var i=box.dataset.boxnumber;
	boxes[i]= event.target.textContent;
	for(var i=0;i<3;i++){
		if(boxes[i]!== 'a' && boxes[i]===boxes[i+3] && boxes[i+3] === boxes[i+6]){
		winnerMsg.textContent= boxes[i] + " WINS";
		winnerMsg.classList.add('show');
		}
	}
	for(var i=0;i<boxes.length;i+=3){
 		if (boxes[i]!== 'a'&&boxes[i] === boxes[i+1] && boxes[i+1] === boxes[i+2]) {
 		winnerMsg.textContent = boxes[i] + " WINS";
 		winnerMsg.classList.add('show');
 		}
 	}
 	for(i=0;i<3;i+=2){
 		if(boxes[i]!== 'a'&&boxes[i]===boxes[i+4]&&boxes[i+4]===boxes[i+8]){
 			winnerMsg.textContent= boxes[i] + " WINS";
 		    winnerMsg.classList.add('show');
		  }else if(boxes[i]!== 'a' && i>0 &&boxes[i]===boxes[i+2]&&boxes[i+2]===boxes[i+4] ){
		  	winnerMsg.textContent= boxes[i] + " WINS";
 		    winnerMsg.classList.add('show');
		  }
	}
	if(boxes.indexOf('a')=== -1 && winnerMsg.textContent =='' ){
		winnerMsg.textContent= " IT'S A DRAW!";
		winnerMsg.classList.add('show');
	}
 }
function flipCard(event, box) {

	 if(box.textContent===''){

	   if (currentPlayer===1) {
			box.textContent='X';
			box.classList.add('p1clicked');
			currentPlayer+=1;
			}else if (currentPlayer===2){
			box.textContent='O';
		    box.classList.add('p2clicked');
		    currentPlayer -=1;
		 }else {
			return;
  	    }
  	}
		checkForWinner(event,box);
}
function getReady() {
	all9Boxes.forEach(function(box){
		box.addEventListener('click', function(event) {
			flipCard(event, box)
		});
	});
}
getReady();