function onSubmit() {
    var name1 = document.getElementById("name1").value;
    var body_text = document.getElementById("body").value;
    var name2 = document.getElementById("name2").value;

    var result = document.getElementById("result");
    
    result.innerHTML = `Dear ${name1},<br><br>${body_text}<br><br>From, ${name2}`;
}