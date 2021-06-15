class AppSearch extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div>
                <input type="text" id="pencarian" placeholder="Cari Restoran Disini" aria-label="Form Pencarian Restaurant Berdasarkan Nama">
            </div>
        `;
  }
}
customElements.define('app-search', AppSearch);
