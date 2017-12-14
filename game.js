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

var currentPlayer=1;

var boxes = [,,,,,,,,];

function checkForWinner(){

	for(var i=0;i<3;i++){

		if(boxes[i]===boxes[i+3] && boxes[i+3] === boxes[i+6]){

			console.log	('boxes[i]' + ' wins!');
		}
	}
}
	for(var i=0;i<boxes.length +1;i+=3){

 		if (boxes[i] === boxes[i+1] && boxes[i+1] === boxes[i+2]) {
 			console.log('player ' + boxes[i] + ' wins!')
 		}
 	}

 	for(var i=0;i<3;i+=2){

 		if(boxes[i]===boxes[i+4]&&boxes[i+4]===boxes[i+8]){
 			console.log('player ' + boxes[i] + ' wins!')
		} else if(boxes[i]===boxes[i+2]&&boxes[i+2]==boxes[i+4]){

			console.log	('player ' + boxes[i] + ' wins!')
		}
 	}
 

function flipCard(event){

	var currentBox=Number(event.target.dataset.boxNumber);

	 boxes[currentBox]=event.target.textContent;

	if(box.textContent===''){

	   if (currentPlayer===1) {;
			box.textContent='X'
			box.classList.add('p1clicked')
			checkForWinner();
			currentPlayer+=1
		} else {
			box.textContent='O'
		    box.classList.add('p2clicked')
		    checkForWinner();
		    currentPlayer -=1;
		}
  	} else {

  		return;
  	}
	console.log (box.textContent+'clicked, player' + currentPlayer)
}

function getReady() {

		all9Boxes.forEach(function(box){
		box.addEventListener('click', function() {
			flipCard(box)
		});
	});
}

getReady();


//if(player1 clicks){
//	show cross box.style.background =x}else{
//		show circle
//	}
//}

//

//for (var i=1,i<all9Boxes.length+1,i++){
//	1,3,5,7,9 player1 gets to play
//	2,4,6,8 player2 
//}