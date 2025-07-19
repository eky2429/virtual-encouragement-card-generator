

var name1 = document.getElementById("name1").innerHTML
var body_text = document.getElementById("his-name").innerHTML
var name2 = document.getElementById("name2").innerHTML

var result = document.getElementById("result")

function onSubmit() {
    result.innerHTML = "Dear, " + name1 + "\n"
    result.innerHTML += body_text + "\n"
    result.innerHTML += "From, " + name2 + "\n"
}