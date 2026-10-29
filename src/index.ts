const element = document.getElementById('app');

if (element) {
    element.innerText = "Hello TypeScript!";
} else {
    console.error("Элемент с id 'app' не найден");
}

