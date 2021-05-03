
function deleteAll() {
    var a = document.getElementById('delete1')
    var b = a.Value
    var ans = eval(b)
    a.value = ans
}
function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value === "") {
        alert("Email address required.");
    }
}


