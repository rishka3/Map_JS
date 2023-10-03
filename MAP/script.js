//////////////////////////////////////1
let task1_input1 = document.querySelector('.task1_input1');
let task1_input2 = document.querySelector('.task1_input2');
let task1_input3 = document.querySelector('.task1_input3');
let task1_button = document.querySelector('.task1_button');

task1_button.addEventListener('click', function() {
    let string1 = task1_input1.value;
    let string2 = task1_input2.value;
    let string3 = task1_input3.value;

    let map = new Map();

    let array1 = [1, 2, 3];
    let array2 = [4.5, 6.7, 8.9];
    let array3 = ["BIG", "SHOT", "TIME"];

    map.set(array1, string1);
    map.set(array2, string2);
    map.set(array3, string3);

    let mapContainer = document.getElementById("mapContainer");

    mapContainer.innerHTML = "";

    for (let [key, value] of map) {
    let keyString = JSON.stringify(key);
    let valueString = JSON.stringify(value);
    mapContainer.innerHTML += "<p>Ключ: " + keyString +
    ", Значение: " + valueString + "</p>";
    }
});

//////////////////////////////////////2
let task2_input1 = document.querySelector('.task2_key_input1');
let task2_input2 = document.querySelector('.task2_key_input2');
let task2_input3 = document.querySelector('.task2_key_input3');
let task2_button = document.querySelector('.task2_button');

task2_button.addEventListener('click', function() {
    
    let collection_list_drop = document.getElementById("collection_list");
    collection_list_drop.innerHTML = "";
    
    let string1 = task2_input1.value;
    let string2 = task2_input2.value;
    let string3 = task2_input3.value;
    
    let map = new Map();

    let array1 = [1, 2, 3];
    let array2 = [4.5, 6.7, 8.9];
    let array3 = ["BIG", "SHOT", "TIME"];

    map.set(array1, string1);
    map.set(array2, string2);
    map.set(array3, string3);

    
    let elemArr = Array.from(map); // Получаем массив элементов коллекции

    let collection_list = document.getElementById("collection_list");

    for (let element of elemArr) {
        let li = document.createElement("li");
        li.textContent = element[0] + ": " + element[1];
        collection_list.appendChild(li);
    }
});

//////////////////////////////////////3
window.onload = function() {
    let inputs = document.getElementsByClassName("task3_input");
    let map = new Map();
  
    for (let i = 0; i < inputs.length; i++) {
      map.set(inputs[i], i + 1);
      inputs[i].addEventListener("click", function() {
        this.value = map.get(this);
      });
    }
};
  
