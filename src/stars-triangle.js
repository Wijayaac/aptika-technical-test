const n = 5;

function createTriangle(count) {
  let string = "";
  for (let i = 1; i <= count; i++) {
    // printing spaces
    for (let j = 0; j < count - i; j++) {
      string += "&nbsp;";
    }
    // printing star
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "<br>";
  }
  return string;
}

const result = createTriangle(n);
console.log(result);

const starsContainer = document.querySelector(".stars");

starsContainer.innerHTML = result;
