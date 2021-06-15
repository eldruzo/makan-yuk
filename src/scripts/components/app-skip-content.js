class AppSkipContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <button id="skip-content">Skip To Content</button>
        `;
  }
}
customElements.define('app-skip-content', AppSkipContent);
