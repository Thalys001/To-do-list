const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputValue = input.value;
  if (inputValue == "") return;

  let li = `
  <li
  class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between"
  >${inputValue}
  <span></span><button class="text-red-700 delete">ⅹ</button>
  </li>
  `;
  ul.innerHTML += li;
  input.value = "";
});

ul.addEventListener("click", function (event) {
  const elementUl = event.target;
  elementUl.classList.contains("delete") ? elementUl.parentNode.remove() : null;
});
