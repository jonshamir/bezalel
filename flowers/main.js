var flowers = [];
var n = 200;
var scaleFactor = 10;
var isStarted = false;
var root = document.getElementById('root');

for (var i = 1; i < n; i++) {
    var theta = 2.39998131 * i;
    var radius = scaleFactor * Math.sqrt(theta);
    var x = Math.cos(theta) * radius;
    var y = Math.sin(theta) * radius;

    var flower = document.createElement("div");
    flower.className = 'flower';
    flower.style.top = 300 + x + 'px';
    flower.style.left = 300 + y + 'px';

    flower.dataset.x = 300 + x;
    flower.dataset.y = 300 + y;


    root.appendChild(flower);
    flowers[i-1] = flower;
}

var buttons = [];

buttons = [
  {
    flower: flowers[198],
    key: 'ArrowUp',
    color: 'blue'
  },
  {
    flower: flowers[182],
    key: 'ArrowRight',
    color: 'red'
  },
  {
    flower: flowers[179],
    key: 'ArrowDown',
    color: 'purple'
  },
  {
    flower: flowers[176],
    key: 'ArrowLeft',
    color: 'grey'
  },
  {
    flower: flowers[194],
    key: 'w',
    color: 'green'
  },
  {
    flower: flowers[178],
    key: 'd',
    color: 'orange'
  },
  {
    flower: flowers[180],
    key: 's',
    color: 'brown'
  },
  {
    flower: flowers[196],
    key: 'a',
    color: 'yellow'
  },
];

// buttons.forEach(b => {
//   b.flower.style.backgroundColor = b.color;
// })

// buttons[0].flower.style.opacity = 1;
buttons[0].flower.classList.add('glow');

var effectOrigin = {x: 0, y: 0};
var animationRunning = false;

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (!isStarted) {
    if (keyName == buttons[0].key) {
      isStarted = true;
      buttons[0].flower.classList.remove('glow');
      resetFlowers();
    }
  }
  else if (!animationRunning) {
    console.log(keyName);
    if (keyName == buttons[0].key) {
      isStarted = false;
      buttons.forEach(b => {
        b.flower.style.opacity = 0.1;
      })
      buttons[0].flower.classList.add('glow');
    }
    else if (keyName == buttons[1].key) {
      animationRunning = true;
      effectOrigin.x = buttons[1].flower.dataset.x;
      effectOrigin.y = buttons[1].flower.dataset.y;
      window.requestAnimationFrame(pulse);
    }
    else if (keyName == buttons[2].key) {
      animationRunning = true;
      effectOrigin.x = 300;
      effectOrigin.y = 300;
      window.requestAnimationFrame(fill);
    }
    else if (keyName == buttons[3].key) {
      animationRunning = true;
      turnOn();
    }
    else if (keyName == buttons[4].key) {
      animationRunning = true;
      randomAppear();
    }
    else if (keyName == buttons[5].key) {
      animationRunning = true;
      effectOrigin.x = buttons[5].flower.dataset.x;
      effectOrigin.y = buttons[5].flower.dataset.y;
      window.requestAnimationFrame(pulse);
    }
    else if (keyName == buttons[6].key) {
      animationRunning = true;
      flowers.forEach(f => {
        f.style.animationDelay = Math.random() + 's';
        f.style.animationDuration = 1+Math.random() + 's';
        f.classList.add('flicker');
      })
      setTimeout(()=> {
        flowers.forEach(f => { f.classList.remove('flicker'); })
        resetFlowers();
      }, 5000)
    }
    else if (keyName == buttons[7].key) {
      animationRunning = true;
      effectOrigin.x = buttons[7].flower.dataset.x;
      effectOrigin.y = buttons[7].flower.dataset.y;
      window.requestAnimationFrame(pulse2);
    }
  }
})

var start = null;
var duration = 3000;
var radius = 600;
function pulse(timestamp) {
  if (!start) start = timestamp;
  var progress = (timestamp - start) / duration;

  flowers.forEach(flower => {
    flower.style.transitionDuration = '500ms';
    var dist = getDistance(effectOrigin, flower);
    if (dist < radius*progress - 60) {
      flower.style.transitionDuration = '1s';
      flower.style.opacity = 0.1;
    }
    else if (dist < radius*progress)
      flower.style.opacity = 1;
  });

  if (progress < 1) window.requestAnimationFrame(pulse);
  else {
    start = null;
    setTimeout(() => {
      resetFlowers();
    }, 800);
  }
}

function pulse2(timestamp) {
  if (!start) start = timestamp;
  var progress = (timestamp - start) / duration;

  flowers.forEach(flower => {
    flower.style.opacity = 0.1;
    var dist = getDistance(effectOrigin, flower);
    if (dist < radius*progress) {
      flower.style.animationDelay = '0s';
      flower.style.animationDuration = '1.5s';
      flower.classList.add('flicker');
    }
  });

  if (progress < 1) window.requestAnimationFrame(pulse2);
  else {
    start = null;
    setTimeout(() => {
      flowers.forEach(f => { f.classList.remove('flicker'); })
      resetFlowers();
    }, 2200);
  }
}


var fillRadius = 300;
function fill(timestamp) {
  if (!start) start = timestamp;
  var progress = (timestamp - start) / duration;

  flowers.forEach(flower => {
    flower.style.transitionDuration = '500ms';
    var dist = getDistance(effectOrigin, flower);
    if (dist < fillRadius*progress - 60) {
      flower.style.transitionDuration = '1.5s';
      flower.style.opacity = 0.1;
    }
    else if (dist < fillRadius*progress)
      flower.style.opacity = 1;
  });

  if (progress < 1) window.requestAnimationFrame(fill);
  else {
    start = null;
    setTimeout(() => {
      resetFlowers();
    }, 10);
  }
}

function getDistance(origin, flower) {
  var x1 = origin.x,
      y1 = origin.y,
      x2 = flower.dataset.x,
      y2 = flower.dataset.y;
  return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
}

function resetFlowers() {
  flowers.forEach(f => {
    f.style.opacity = 0.1;
  });
  buttons.forEach(b => {
    b.flower.style.opacity = 1;
  });
  animationRunning = false;
}

var currFlower = 0;
function turnOn() {
  flowers[currFlower].style.opacity = 1;
  if (currFlower < n-2) {
    currFlower++;
    setTimeout(() => { turnOn(); }, 3);
  }
  else {
    currFlower = 0;
    resetFlowers();
  }
}

function randomAppear() {
  flowers.forEach(f => {
    setTimeout(() => {
      f.style.opacity = 1;
    }, Math.random() * 1700);
  });
  setTimeout(() => {
    resetFlowers();
  }, 2500);
}
