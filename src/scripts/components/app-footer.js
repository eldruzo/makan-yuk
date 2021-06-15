class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <footer>
                <p>Copyright &copy; <span id="year"></span> - MakanYuk App</p>
            </footer>     
        `;
  }
}
customElements.define('app-footer', AppFooter);
