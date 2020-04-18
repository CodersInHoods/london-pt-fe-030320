Object.defineProperty(global.Element.prototype, 'innerText', {
    get() {
      return this.textContent;
    },
    set(str) {
        this.innerHTML = this.textContent = str;
    }
  });

document.body.innerHTML = `
    <h1>Caesar cipher</h1>
		<div class="input_container">
			<textarea
				cols="50"
				rows="10"
				type=""
				placeholder="Type here..."
			></textarea>
			<div class="buttons">
				<button id="encrypt">Encrypt</button>
				<button id="decrypt">Decrypt</button>
			</div>
		</div>
	<h3>Result:</h3>
	<p class="result"></p>
`;
