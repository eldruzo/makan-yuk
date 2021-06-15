class AppLikeButton extends HTMLElement {
  set button({ button, label }) {
    this._button = button;
    this._label = label;
    this.render();
  }

  render() {
    this.innerHTML = `
            <button aria-label="${this._label}" id="likeButton" class="like">
                <i class="material-icons" aria-hidden="true">${this._button}</i>
            </button>
        `;
  }
}
if (!customElements.get('app-like-button')) {
  customElements.define('app-like-button', AppLikeButton);
}
