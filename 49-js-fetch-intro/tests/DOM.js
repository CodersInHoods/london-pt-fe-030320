Object.defineProperty(global.Element.prototype, "innerText", {
  get() {
    return this.textContent;
  },
  set(str) {
    this.innerHTML = this.textContent = str;
  },
});

document.body.innerHTML = `
<h1>API URL checker</h1>
<form action="#">
	<input type="text" placeholder="Provide URL...">
	<button type="submit">Submit</button>
</form>
<h3 class="result"></h3>
`;
