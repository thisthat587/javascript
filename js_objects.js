// num = [2, 3, 4, 5, 6]
// numbers={}
// fun=()=>{}
// console.log(typeof num)
// console.log(typeof fun)
// console.log(typeof numbers)
// console.log(typeof Date)
// console.log(typeof );

function listDevanagariCharacters() {
    const start = 0x0900; // Start of Devanagari Unicode block
    const end = 0x097F;   // End of Devanagari Unicode block

    for (let i = start; i <= end; i++) {
        const character = String.fromCharCode(i);
        console.log(`Character: ${character} \t Unicode Value: U+${i.toString(16).toUpperCase().padStart(4, '0')} ${i}`);
    }
}

// Call the function to list Devanagari characters
listDevanagariCharacters();



