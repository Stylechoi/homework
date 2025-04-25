// main.js
const typingText = "안녕하세요, 14기 최도형 입니다.";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
  if (index < typingText.length) {
    typingElement.textContent += typingText.charAt(index);
    index++;
    setTimeout(type, 80);
  }
}

window.addEventListener("DOMContentLoaded", type);
