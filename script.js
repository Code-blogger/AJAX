function fun() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'text.txt', true);
    // xhr.open('POST', 'text.json', true);
    // xhr.getResponseHeader('Content-type', 'application/json');
    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('demo').innerHTML = xhr.responseText
        }
        console.log(this.responseText);
    }
    xhr.onreadystatechange = function() {
        console.log(this.readyState);
    }
    xhr.send();
    console.log("Completed");
}