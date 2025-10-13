import { arr_plants } from './plants.js';


console.log(arr_plants);

  const tmp__plant = document.getElementById('plant__template');
  const container_plant = document.getElementById('plants__container');


function AddPlant(data)
{
  const plant_first = tmp__plant.content.cloneNode('true');  
  plant_first.querySelector('.plant__title').innerHTML  = data.title;
  plant_first.querySelector('.plant__text').innerHTML  = data.text;
  plant_first.querySelector('.plant__image').src  = data.src;
  container_plant.appendChild(plant_first);
}



const plant0 = {
  title:'Hello', 
  text:"Example text",
  src:'./images/fig_1.png'
};

AddPlant(arr_plants[0]);
AddPlant(arr_plants[1]);

const formSend = document.querySelector('.help__form');
const inputName = document.getElementsByName('help__name')[0];
const inputEmail = document.getElementById('help__email');

function clearForm()
{
  document.getElementById('help__button').classList.remove('help__button_checked');
  inputName.value = '';
  inputEmail.value = '';
}

formSend.addEventListener('submit', function(e){
  e.preventDefault();
  const name = inputName.value;
  const mail = inputEmail.value;
  console.log(`Hello, ${name}! Your email is ${mail}`);

  document.getElementById('help__button').classList.add('help__button_checked');
  

  setTimeout(clearForm, 2000);

  console.log('End of function');
});

console.log(inputEmail);
