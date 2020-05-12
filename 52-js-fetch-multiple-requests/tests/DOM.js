Object.defineProperty(global.Element.prototype, "innerText", {
	get() {
	  return this.textContent;
	},
	set(str) {
	  this.innerHTML = this.textContent = str;
	},
  });
document.body.innerHTML = `
    <form action="#">
    	<input type="text" placeholder="Type member name" />
	</form>
	<ul class="result"></ul>
`;
