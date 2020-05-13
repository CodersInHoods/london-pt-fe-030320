Object.defineProperty(global.Element.prototype, "innerText", {
	get() {
	  return this.textContent;
	},
	set(str) {
	  this.innerHTML = this.textContent = str;
	},
  });
document.body.innerHTML = `
    <h1>Random cat facts</h1>
	<button>Get random facts</button>
	<ul class="result">
	    <li>
		    <p class="fact">Text</p>
            <p class="author">Author</p>
        </li>
	</ul>
`;
