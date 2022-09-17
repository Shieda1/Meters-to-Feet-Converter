// https://www.omnicalculator.com/conversion/meters-to-feet

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const feetRadio = document.getElementById('feetRadio');
const metersRadio = document.getElementById('metersRadio');

let feet;
let meters = v; 

// labels of the inpust
const variable = document.getElementById('variable');

feetRadio.addEventListener('click', function() {
  variable.textContent = 'Meters';
  meters = v;
  result.textContent = '';
});

metersRadio.addEventListener('click', function() {
  variable.textContent = 'Feet';
  feet = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(feetRadio.checked)
    result.textContent = `Feet = ${computefeet().toFixed(5)}`;

  else if(metersRadio.checked)
    result.textContent = `Meters = ${computemeters().toFixed(5)}`;
})

// calculation

function computefeet() {
  return Number(meters.value) * 3.281;
}

function computemeters() {
  return Number(feet.value) / 3.281;
}