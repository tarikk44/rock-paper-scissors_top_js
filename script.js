function random() {
    let x = "Bosna i Hercegovina";
    let xLength = x.length;
    let randomLetter = Math.floor(Math.random()* xLength);
    let randomX = x[randomLetter];
    return randomX;
}
console.log(random());
