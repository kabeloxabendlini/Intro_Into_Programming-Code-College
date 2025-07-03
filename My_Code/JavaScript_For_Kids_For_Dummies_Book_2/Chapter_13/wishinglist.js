// Get all elements with ID 'addIt'
const addButtons = document.querySelectorAll('#addIt');

// Get all inputs by ID
const wantInputs = document.querySelectorAll('#iWant');
const sheWantInput = document.querySelector('#sheWant'); // Only one with this ID

// Get the lists
const wishList = document.querySelector('#wishList');
const myList = document.querySelector('#myList');

// Attach add event to each Add It! button
addButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const input = wantInputs[index]; // Match button to input by order
    if (input && input.value.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = input.value;
      wishList.appendChild(li);
      input.value = '';
    }

    // Special case for wife input (if exists)
    if (sheWantInput && sheWantInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = sheWantInput.value;
      myList.appendChild(li);
      sheWantInput.value = '';
    }
  });
});

// Print button — pick the first one with the right ID
const printButton = document.querySelector('#printable');

if (printButton) {
  printButton.addEventListener('click', () => {
    window.print();
  });
}