class AppImage extends HTMLElement {
  connectedCallback() {
    this._image = this.getAttribute('image');
    this._caption = this.getAttribute('caption');

    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="handler">
                <div class="image-handler">
                    <img src="./images/handler/${this._image}" alt="${this._caption}">
                </div>
                <div class="caption-handler">
                    <h2>${this._caption}</h2>
                </div>
            </div>
        `;
  }
}
customElements.define('app-image', AppImage);
