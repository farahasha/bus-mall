'use strict';

const leftImageElement = document.getElementById('left');
const middleImageElement = document.getElementById('middle');
const rightImageElement = document.getElementById('right');
const lis = document.getElementById('one');
let Row=[];

const maxAttempts = 25;
let counter = 0;

let arrOfName=[];
 let arrOfVotes=[];
let arrOfSee=[];

function Bus(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.see = 0;
    Bus.globArr.push(this);
    arrOfName.push(this.name);
}

Bus.globArr = [];


new Bus('left', 'img/bag.jpg');
new Bus('middle', 'img/banana.jpg');
new Bus('right', 'img/bathroom.jpg');
new Bus('boots', 'img/boots.jpg');
new Bus('breakfast', 'img/breakfast.jpg');
new Bus('bubblegum', 'img/bubblegum.jpg');
new Bus('chair', 'img/chair.jpg');
new Bus('cthulhu', 'img/cthulhu.jpg');
new Bus('dug-duck', 'img/dog-duck.jpg');
new Bus('dragon', 'img/dragon.jpg');
new Bus('pen', 'img/pen.jpg');
new Bus('pet-sweep', 'img/pet-sweep.jpg');
new Bus('scissors', 'img/scissors.jpg');
new Bus('shark', 'img/shark.jpg');
new Bus('sweep', 'img/sweep.png');
new Bus('tauntaun', 'img/tauntaun.jpg');
new Bus('unicorn', 'img/unicorn.jpg');
new Bus('water-can', 'img/water-can.jpg');
new Bus('wine-glass', 'img/wine-glass.jpg');
console.log(Bus.globArr);

let leftIndex;
let middleIndex;
let rightIndex;

function generateRandomIndex() {
    return Math.floor(Math.random() * Bus.globArr.length);
    
}


function renderThreeImages() {
    leftIndex = generateRandomIndex();
    middleIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();
    
    
    while (leftIndex === middleIndex || leftIndex === rightIndex || middleIndex === rightIndex || Row.includes("leftIndex") || Row.includes("middleIndex") || Row.includes("rightIndex") ) {
        leftIndex = generateRandomIndex();
        middleIndex = generateRandomIndex();
        rightIndex = generateRandomIndex();
    }
    Row=[];
    Row.push(leftIndex ,middleIndex ,rightIndex);
    console.log(Row);
    
    
    leftImageElement.src = Bus.globArr[leftIndex].source;
    middleImageElement.src = Bus.globArr[middleIndex].source;
    rightImageElement.src = Bus.globArr[rightIndex].source;
    
    Bus.globArr[leftIndex].see++;
    Bus.globArr[middleIndex].see++;
    Bus.globArr[rightIndex].see++;
    
}

renderThreeImages();
lis.addEventListener('click', handleClick);


let but;
function handleClick(event) {
    counter++;
    
    
    // ********
    if (maxAttempts >= counter) {
        if (event.target.id === 'left') {
            Bus.globArr[leftIndex].votes++;
        } else if (event.target.id === 'middle') {
            Bus.globArr[middleIndex].votes++;
        } else if (event.target.id === 'right') {
            Bus.globArr[rightIndex].votes++;
            
        }
        renderThreeImages();
    }
    else {
    }
    
    but = document.getElementById('but');
    but.addEventListener('click', handleSee);
}

    
function handleSee(){
    renderList();
        gittingChart();
        but.removeEventListener('click',handleSee)
    }
    

    
    function renderList() {
        const ul = document.getElementById('List');
        for (let i = 0; i < Bus.globArr.length; i++) 
        {
            arrOfVotes.push(Bus.globArr[i].votes);
            arrOfSee.push(Bus.globArr[i].see);
            let li = document.createElement('li');
            li.textContent = `${Bus.globArr[i].name}  VOTES ${Bus.globArr[i].votes} SEE ${Bus.globArr[i].see}`
            ul.appendChild(li);

    }

    saveTols();


   
}
                        getStorage();                    

                        

function gittingChart(){
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: arrOfName,
        datasets: [{
            label: ' Votes',
            data: arrOfVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            label: 'see',
            data: arrOfSee,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],

            borderWidth: 1
        }]
    },
    
});
}


function saveTols(){
    const convertedArr=JSON.stringify(Bus.globArr);

    console.log('lenght'+convertedArr.length);
    localStorage.setItem('img',convertedArr);

}

function getStorage(){
    const dat=localStorage.getItem('img');
    //  console.log(dat);
    const convertedArr2=JSON.parse(dat);
    if(convertedArr2){
        new Bus(convertedArr2.name,convertedArr2.source,convertedArr2.votes,convertedArr2.see)
        console.log('........');
        console.log(Bus.globArr);
        Bus.globArr = convertedArr2;

    console.log('length:'+convertedArr2.length)
    localStorage.setItem('left',convertedArr2);

}

}
function getLocalStorage(){
    const dat=localStorage.getItem('left');
    const convertedArr2 = JSON.parse(dat);
    if (convertedArr2){
        new Bus(convertedArr2.name,convertedArr2.source,convertedArr2.votes,convertedArr2.see)
    console.log('');
    console.log(Bus.globArr);
    Bus.globArr=convertedArr2;

        // console.log(dat);
    const add=JSON.parse(dat);
    console.log(add);
    if(add){
        Bus.globArr = add;

        renderThreeImages();
    }

}
}