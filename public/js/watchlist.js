const el = document.createElement('div');

el.addEventListener('click', function handleClick(event) {
  console.log('element clicked 🎉🎉🎉', event);
});

el.textContent = 'Hello world';

el.style.backgroundColor = 'salmon';
el.style.width = '150px';
el.style.height = '150px';

const button = document.getElementById('button');

button.appendChild(el);