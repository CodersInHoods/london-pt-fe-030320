let action = "";
const buttons = document.querySelector(".buttons");
const encrypt = document.querySelector("#encrypt");
const decrypt = document.querySelector("#decrypt");
const text = document.querySelector(".input_container > textarea")
const resultOnpage = document.querySelector(".result")

encrypt.addEventListener("click", () => {
    result = rot13(text.value);
    resultOnpage.innerHTML = result;
})
decrypt.addEventListener("click", () => {
    result = rot13(text.value);
    resultOnpage.innerHTML = result;
})


const rot13 = (string) => {
    const alphabet = [ // only usable for 2020 english.
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ];
    const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const stringArray = [];
    console.log("decrypt initiated")
    console.log(string);
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (element.match(/[a-z]/)) {
            console.log(element, 'matches lowercase')
            const letterIndex = alphabetLower.indexOf(element);
            let newLetter = ((letterIndex + 13) % 26);
            const letter = alphabetLower[newLetter];
            stringArray.push(letter);
        } else if (element.match(/[A-Z]/)) {
            console.log(element, 'matches UpperCase')
            const letterIndex = alphabet.indexOf(element);
            let newLetter = ((letterIndex + 13) % 26);
            const letter = alphabet[newLetter];
            stringArray.push(letter);
        } else {
            stringArray.push(element);
        }
    }
    console.log(stringArray);
    result = stringArray.join("");
    console.log(result);
    return result;

}