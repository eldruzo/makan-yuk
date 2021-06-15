class AppHero extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title');
    this.content = this.getAttribute('content');
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero-inner">
                <div class="hero-content">
                    <h1 class="hero-title">${this.title}</h1>
                    <p class="hero-tagline">${this.content}</p><br/>
                </div>
            </div>
        `;
  }
}
customElements.define('app-hero', AppHero);
