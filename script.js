const verses = [
    "Philippians 4:13 – I can do all things through Christ who strengthens me.",
    "Jeremiah 29:11 – 'For I know the plans I have for you,' declares the Lord.",
    "Isaiah 40:31 – But those who hope in the Lord will renew their strength.",
    "Romans 8:28 – In all things God works for the good of those who love Him.",
    "Psalm 23:1 – The Lord is my shepherd; I shall not want."
];

var isVerseAdded = false;

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

    isVerseAdded = false;
    const warningText = document.getElementById("warning-text");
    warningText.innerHTML = "";

    const color = document.getElementById("color").value;
    result.style.color = color;
}

function downloadCard() {
    const result = document.getElementById("result");
    html2canvas(result).then(canvas => {
        const link = document.createElement("a");
        link.download = "encouragement-card.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}

function copyCard() {
    const text = document.getElementById("result").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Card text copied!");
    }).catch(err => {
        alert("Failed to copy text.");
        console.error(err);
    });
}

function generateVerse() {
    if (isVerseAdded) {
        const warningText = document.getElementById("warning-text");
        warningText.innerHTML = "A verse has already been added to the letter.";
        return;
    }
    isVerseAdded = true;
    
    const verse = verses[Math.floor(Math.random() * verses.length)];
    const result = document.getElementById("result");
    result.innerHTML += `<br><br><em>${verse}</em>`;
}