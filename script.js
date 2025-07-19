function onSubmit() {
    const name1 = document.getElementById("name1").value;
    const body_text = document.getElementById("body").value;
    const name2 = document.getElementById("name2").value;
    const bg = document.getElementById("bg-select").value;

    const result = document.getElementById("result");

    // Reset previous background class
    result.className = 'card'; // always start with "card" class

    if (bg !== 'none') {
        result.classList.add(bg);
    }

    result.innerHTML = `Dear ${name1},<br><br>${body_text}<br><br>From, ${name2}`;
}