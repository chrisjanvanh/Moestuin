const myButton = document.getElementById('Tomatenplant')

function onClickButton(event) {
  alert('acting like a button')
}

Tomatenplant.addEventListener('click', onClickButton)
Tomatenplant.addEventListener('keydown', event => {
  if (event.keyCode === 13 || event.keyCode === 32) {
    onClickButton(event)
  }
})

const toevoegenBtn = document.getElementById('Toevoegen');
const modal       = document.getElementById('myModal');
const closeBtn    = document.getElementById('closeModal');

// Toon het venster bij klik op Toevoegen
toevoegenBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Sluit het venster bij klik op het kruisje
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Sluit het venster bij klik buiten de box
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
