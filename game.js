var player1=document.querySelector('#player1');
var player2=document.querySelector('#player2');
var gameBoard=document.querySelector('.gameboxes')
var box1=document.querySelector('.b1');
var box2=document.querySelector('.b2');
var box3=document.querySelector('.b3');
var box4=document.querySelector('.b4');
var box5=document.querySelector('.b5');
var box6=document.querySelector('.b6');
var box7=document.querySelector('.b7');
var box8=document.querySelector('.b8');
var box9=document.querySelector('.b9');
var all9Boxes = document.querySelectorAll('.boxes');
var winnerMsg=document.querySelector('h2');
var currentPlayer=1;

var boxes = ['a','a','a','a','a','a','a','a','a'];

function checkForWinner(event,box){

    var i=box.dataset.boxnumber;

  	boxes[i]= event.target.textContent;

	for(var i=0;i<3;i++){
		if(boxes[i]!== 'a' && boxes[i]===boxes[i+3] && boxes[i+3] === boxes[i+6]){
		winnerMsg.textContent= boxes[i] + " wins";
		winnerMsg.classList.add('show');
		
		}
	}

	for(var i=0;i<boxes.length;i+=3){
 		if (boxes[i]!== 'a'&&boxes[i] === boxes[i+1] && boxes[i+1] === boxes[i+2]) {

 		winnerMsg.textContent = boxes[i] + " wins";

 		winnerMsg.classList.add('show');
 		
 		}
 	}

 	for(i=0;i<3;i+=2){
 		if(boxes[i]!== 'a'&&boxes[i]===boxes[i+4]&&boxes[i+4]===boxes[i+8]){
 			winnerMsg.textContent= boxes[i] + " wins";
 		    winnerMsg.classList.add('show');
 		   
		  }else if(boxes[i]!== 'a' && i>0 &&boxes[i]===boxes[i+2]&&boxes[i+2]===boxes[i+4] ){
		  	winnerMsg.textContent= boxes[i] + " wins";
 		    winnerMsg.classList.add('show');
 		  
		  }
	}
	if(boxes.indexOf('a')=== -1 && winnerMsg.textContent =='' ){
		winnerMsg.textContent= " it's a tie!";
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

	console.log (box.textContent +' clicked')
}

function getReady() {

	all9Boxes.forEach(function(box){
		box.addEventListener('click', function(event) {
			flipCard(event, box)
		});
	});
}

getReady();
