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

    result.classList.add('flip'); // Apply flip animation
    setTimeout(() => {
        result.classList.remove('flip'); // Remove it after a second so you can reuse
    }, 1000);
}

function downloadCard() {
  const element = document.createElement("a");
  const cardContent = document.getElementById("result").innerHTML;
  const file = new Blob([cardContent.replace(/<br>/g, "\n")], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = "encouragement_card.txt";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function copyCard() {
  const temp = document.createElement("textarea");
  temp.value = document.getElementById("result").innerText;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
  alert("Card copied to clipboard!");
}