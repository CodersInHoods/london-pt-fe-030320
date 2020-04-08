Object.defineProperty(global.Element.prototype, 'innerText', {
    get() {
      return this.textContent;
    },
    set(str) {
        this.innerHTML = this.textContent = str;
    }
  });

document.body.innerHTML = `
    <nav>
    Emergency Ration Budget Tool
    </nav>
    <main>
        <div id="cart">
            <div id="products">
                <h3>Choose your products</h3>
            </div>
            <div id="remaining">Remaining budget: <span>£50.00</span></div>
        </div>
    </main>
`;
