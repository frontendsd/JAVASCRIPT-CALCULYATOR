let input = document.querySelector('.input')
let i = 0

document.querySelectorAll('td').forEach(function (td) {
    td.addEventListener('click', function (e) {
        let belgi = e.target.innerText;
        if (belgi === "C") {
            input.value = " "
        } else if (belgi === "=") {
            input.value = eval(input.value)
        }
        else if (belgi === "<") {
            let string = input.value.toString();
            input.value = string.substring(0, string.length - 1);
        }
        else {
            input.value += belgi
        }
    })
})