document.getElementById('btn').addEventListener('click', showImage);

function showImage() {

  const select = document.querySelector('#movies');
  const option = select.children[select.selectedIndex];

  const img = document.querySelector("#img-result");
  img.setAttribute('src', `./assets/${select.value}.jpg`);
  img.setAttribute('alt', option.textContent);

  document.querySelector("#h2-result").textContent = option.textContent;
} 