# ROT-13

ROT-13 (or "rotate by 13") is a simple method to encrypt and decrypt text.

For each letter in the text, replace it with the letter 13 places after it in the alphabet.

* A => N
* B => O
* C => P

And so on...

Only letters in the basic Latin alphabet are adjusted, whitespace, numbers and punctuation are kept intact.

## Deliverables

1. Write a function `rot13` to translate a string using the ROT13 algorithm
2. When the user clicks on Encrypt, take whatever is in the textarea and display an encrypted version in the `result` element
3. When the user clicks on Decrypt, take whatever is in the textarea and display a decrypted version in the `result` element
