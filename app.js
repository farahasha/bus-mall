'use strict';

const leftImageElement = document.getElementById('left');
const middleImageElement = document.getElementById('middle');
const rightImageElement = document.getElementById('right');
const but = document.getElementById('but');
const lis = document.getElementById('one');

const maxAttempts = 25;
let counter = 0;

function Bus(name,source){
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.see = 0;
    Bus.globArr.push(this);
  }
  
  Bus.globArr = [];


  new Bus ('left','img/bag.jpg');
  new Bus ('middle','img/banana.jpg');
  new Bus ('right','img/bathroom.jpg');
  new Bus ('boots','img/boots.jpg');
  new Bus ('breakfast','img/breakfast.jpg');
  new Bus ('bubblegum','img/bubblegum.jpg');
  new Bus ('chair','img/chair.jpg');
  new Bus ('cthulhu','img/cthulhu.jpg');
  new Bus ('dug-duck','img/dog-duck.jpg');
  new Bus ('dragon','img/dragon.jpg');
  new Bus ('pen','img/pen.jpg');
  new Bus ('pet-sweep','img/pet-sweep.jpg');
  new Bus ('scissors','img/scissors.jpg');
  new Bus ('shark','img/shark.jpg');
  new Bus ('sweep','img/sweep.png');
  new Bus ('tauntaun','img/tauntaun.jpg');
  new Bus ('unicorn','img/unicorn.jpg');
  new Bus ('water-can','img/water-can.jpg');
  new Bus ('wine-glass','img/wine-glass.jpg');
console.log(Bus.globArr);

let leftIndex;
let middleIndex;
let rightIndex;

function generateRandomIndex(){
    return Math.floor(Math.random() * Bus.globArr.length);

}


function renderThreeImages(){
leftIndex= generateRandomIndex();
 middleIndex= generateRandomIndex(); 
 rightIndex = generateRandomIndex();

  while(leftIndex === middleIndex || leftIndex === rightIndex|| middleIndex ===rightIndex ){
      leftIndex = generateRandomIndex();
      rightIndex=generateRandomIndex();
  }

  leftImageElement.src = Bus.globArr[leftIndex].source;
  middleImageElement.src = Bus.globArr[middleIndex].source;
  rightImageElement.src = Bus.globArr[rightIndex].source;

   Bus.globArr[leftIndex].see++;
   Bus.globArr[middleIndex].see++;
   Bus.globArr[rightIndex].see++;
  
}

  renderThreeImages();
  lis.addEventListener('click',handleClick);
  
  
  
  function handleClick(event){
      counter ++ ; 
      
      
      
      if(maxAttempts >= counter){
          if(event.target.id === 'left'){
              Bus.globArr[leftIndex].votes++;
            }else if(event.target.id ==='middle'){
                Bus.globArr[middleIndex].votes++;
            } else if(event.target.id ==='right'){
                Bus.globArr[rightIndex].votes++;
                
            }  
                renderThreeImages();
        }
        else {
            
            but.addEventListener('click',renderList);
        }
        
        function renderList(){
            const ul = document.getElementById('List');
            for(let i = 0 ; i < Bus.globArr.length; i++){
                let li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = `${Bus.globArr[i].name}  VOTES ${Bus.globArr[i].votes} SEE ${Bus.globArr[i].see}`   
            }
        
        }
  
    }
   
