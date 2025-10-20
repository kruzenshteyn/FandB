import { arr_plants } from './plants.js';


const tmp__plant = document.getElementById('plant__template');
const container_plant = document.getElementById('plants__container');

const popup = document.querySelector('.popup');

popup.querySelector('.popup__close').addEventListener("click", () => {
  popup.close();
});

function ChangePopupData(e)
{  
  console.log(e);

  const title = e.querySelector('.plant__title').innerHTML;
  const text = e.querySelector('.plant__text').innerHTML;
  const src = e.querySelector('.plant__image')?.src;
  
  const data = {title:title, text:text, src:src};

  popup.querySelector('.popup__title').innerHTML  = data.title;
  popup.querySelector('.popup__text').innerHTML  = data.text;
  popup.querySelector('.popup__image').src  = data.src;

}

function AddPlant(data)
{
  const plant_first = tmp__plant.content.cloneNode('true');   
  
  plant_first.querySelector('.plant__title').innerHTML  = data.title;
  plant_first.querySelector('.plant__text').innerHTML  = data.text;
  plant_first.querySelector('.plant__image').src  = data.src;

  plant_first.querySelector('.plant__button').addEventListener("click", (e) => {
    ChangePopupData(e.target.closest('.plant'));
    popup.showModal();
  });

  container_plant.appendChild(plant_first);
}


AddPlant(arr_plants[0]);
AddPlant(arr_plants[1]);
AddPlant(arr_plants[2]);
AddPlant(arr_plants[3]);

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


