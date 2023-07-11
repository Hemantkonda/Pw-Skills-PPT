function showResult() {
    let input = document.getElementById('input');
    let result = document.getElementById('result');

    let text = input.value;

    if(text.trim() !== ''){
        output = document.createElement('p');
        output.textContent = text;
        result.appendChild(output);
        input.value =''
    }
}