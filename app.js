//================= Global vars ===================
var giftsArray = [];
var totalClicks = 0;
var giftIndexesCurrentlyOnThePage = [0, 3];


// ================= Function Definitions =================
function gift(imageName, src){
  this.liveClicks = 0;
  this.imageName = imageName;
  this.imageSrc = src;

  giftsArray.push(this);
}

gift.prototype.rendergiftAsHtml = function() {
  var target = document.getElementById('gift-list');
  var giftHomeLi = document.createElement('li');

  var giftImg = document.createElement('img');
  giftImg.src = this.imageSrc;
  giftImg.alt = this.imageName;
  giftHomeLi.appendChild(giftImg);

  var giftTextP = document.createElement('p');
  giftTextP.textContent = this.imageName;
  giftHomeLi.appendChild(giftTextP);

  target.appendChild(giftHomeLi);
};

function handleClickOngift(event) {
  console.log(event.target);

  if (event.target.tagName === 'IMG') {
    totalClicks++;

    for (var giftIndex = 0; giftIndex < giftsArray.length; giftIndex++) {
      if (giftsArray[giftIndex].imageSrc === event.target.getAttribute('src')) {
        console.log('they match');
        giftsArray[giftIndex].liveClicks++;
      }
    }

    displaygifts();
    renderTotals();

    if(totalClicks === 25){
      var giftList = document.getElementById('gift-list');

      listOfgifts.removeEventListener('click', handleClickOngift);

      makeMyChart();

    }

  } else {
    console.log('please click an image');
  }
}


function displaygifts(){

  var index1 = Math.floor(Math.random() * giftsArray.length);

  while(index1 === giftIndexesCurrentlyOnThePage[0] || index1 === giftIndexesCurrentlyOnThePage[1]){
    index1 = Math.floor(Math.random() * giftsArray.length);
  }


  var index2 = Math.floor(Math.random() * giftsArray.length);

  while (
    index1 === index2 ||
    index2 === giftIndexesCurrentlyOnThePage[0] ||
    index2 === giftIndexesCurrentlyOnThePage[1]
  ){
    console.log('changing');
    index2 = Math.floor(Math.random() * giftsArray.length);
  }

  var newgift1 = giftsArray[index1];
  var newgift2 = giftsArray[index2];

  var giftList = document.getElementById('gift-list');
  giftList.innerHTML = '';
  newgift1.rendergiftAsHtml();
  newgift2.rendergiftAsHtml();

  giftIndexesCurrentlyOnThePage = [index1, index2];
}



function renderTotals (){
  var list = document.getElementById('gotta-get-that-gift');
  list.innerHTML = '';
  for(var i = 0; i < giftsArray.length; i++){

    var li = document.createElement('li');
    li.textContent = giftsArray[i].imageName + ': ' + giftsArray[i].liveClicks;
    list.appendChild(li);
  }
}


var listOfgifts = document.getElementById('gift-list');
listOfgifts.addEventListener('click', handleClickOngift);



new gift('Cthulhu Action Figure', 'Pictures/cthulhu.jpg');
new gift('Shark Sleeping Bag', 'Pictures/shark.jpg');
new gift('Unicorn Spam', 'Pictures/unicorn.jpg');
new gift('Baby Sweep', 'Pictures/sweep.png');
new gift('Tauntaun Costume/Sleeping Bag', 'Pictures/tauntaun.jpg');
new gift('Wine Glass', 'Pictures/wine-glass.jpg');
new gift('Canned Dragon Meat', 'Pictures/dragon.jpg');
new gift('R2-D2 Bag', 'Pictures/bag.jpg');
new gift('Watering Can', 'Pictures/water-can.jpg');
new gift('USB Tentacle Charger', 'Pictures/usb.gif');
new gift('Breakfast Maker', 'Pictures/breakfast.jpg');
new gift('Pizza Scissors', 'Pictures/scissors.jpg');
new gift('Dog Duck Muzzle', 'Pictures/dog-duck.jpg');
new gift('Pen Eating Utensils', 'Pictures/pen.jpg');
new gift('Banana Cutter', 'Pictures/banana.jpg');
new gift('Bubblegum Flavored Meatballs', 'Pictures/bubblegum.jpg');
new gift('Bathroom Tablet Holder', 'Pictures/bathroom.jpg');
new gift('Boots for Rain', 'Pictures/boots.jpg');
new gift('Chair of chair-itude', 'Pictures/chair.jpg');
new gift('Pet Sweep', 'Pictures/pet-sweep.jpg');


// ================= local storage ===================

localStorage.setItem('totalClicks', renderTotals);

var spanElement = document.getElementById('total-clicks');

spanElement.textContent = renderTotals;

document.getElementById("result").innerHTML = localStorage.getItem("gotta-get-that-git");

var renderTotals = localStorage.getItem('total-clicks');

renderTotals++;




// ================= chartjs ===================
function makeMyChart(){

  var labelArray = [];

  for(var giftIndex = 0; giftIndex < giftsArray.length; giftIndex++){
    labelArray.push(giftsArray[giftIndex].imageName);
  }


  var giftDataArray = [];

  for(var i = 0; i < giftsArray.length; i++){
    giftDataArray.push(giftsArray[i].liveClicks);
  }


  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: '# of gift Votes',
        data: giftDataArray,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 4
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}
